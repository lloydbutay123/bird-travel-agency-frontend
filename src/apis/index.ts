import {
  clearUserInfoFromStorage,
  getUserAccessTokenFromStorage,
  getUserRefreshTokenFromStorage,
  updateAccessToken,
} from "@/utils/users";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const LOGIN_PATH = "/auth/login";

function redirectToLogin() {
  clearUserInfoFromStorage();

  if (typeof window !== "undefined") {
    window.location.assign(LOGIN_PATH);
  }
}

function isUnauthorized(error: unknown): boolean {
  const ax = error as AxiosError<{ code?: string; detail?: string }>;
  return ax.response?.status === 401;
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const apiRefreshToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export async function refreshAccesToken(): Promise<string> {
  const refreshToken = getUserRefreshTokenFromStorage();

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const { data } = await apiRefreshToken.post("/api/v1/auth/refresh-token", {
    refreshToken,
  });

  updateAccessToken({
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  });

  return data.accessToken;
}

let refreshInFlight: Promise<void> | null = null;

async function ensureAccessTokenFromRefresh(): Promise<void> {
  const refreshToken = getUserRefreshTokenFromStorage();

  if (!refreshToken) return;

  if (!refreshInFlight) {
    refreshInFlight = refreshAccesToken()
      .then(() => undefined)
      .finally(() => {
        refreshInFlight = null;
      });
  }

  await refreshInFlight;
}

function attachBearerFromStorage(config: InternalAxiosRequestConfig) {
  const accessToken = getUserAccessTokenFromStorage();

  if (!accessToken) return config;

  config.headers = config.headers ?? {};
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
}

async function requestInterceptor(config: InternalAxiosRequestConfig) {
  return attachBearerFromStorage(config);
}

async function responseUnauthorizedInterceptor(error: any) {
  const originalRequest = error.config;

  if (error?.response?.status === 401 && !originalRequest?._retry) {
    originalRequest._retry = true;

    try {
      await ensureAccessTokenFromRefresh();
      return api(originalRequest);
    } catch (refreshError) {
      redirectToLogin();
      return Promise.reject(refreshError);
    }
  }

  if (isUnauthorized(error)) {
    redirectToLogin();
  }

  return Promise.reject(error);
}

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(
  (response) => response,
  responseUnauthorizedInterceptor,
);
