import {
  clearUserInfoFromStorage,
  storeUserInfoToStorage,
  storeUserTokens,
} from "@/utils/users";
import { api } from "..";
import axios from "axios";
import {
  ChangePasswordPayload,
  ForgotPasswordPayload,
  LoginPayload,
  RegisterPayload,
  ResetPasswordPayload,
  VerifyOtpPayload,
} from "@/types/auth.type";

function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message || "Something went wrong. Please try again"
    );
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof error.data === "object" &&
    error.data !== null &&
    "message" in error.data &&
    typeof error.data.message === "string"
  ) {
    return error.data.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong. Please try again";
}

export async function loginUser(payload: LoginPayload) {
  try {
    const { data } = await api.post("/auth/login", payload);

    if (data.user) {
      storeUserInfoToStorage(data.user);
    }
    if (data.accessToken && data.refreshToken) {
      storeUserTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
    }
    return data;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function logoutUser() {
  try {
    await api.post("/auth/logout");
  } finally {
    clearUserInfoFromStorage();
  }
}

export async function forgotPassword(payload: ForgotPasswordPayload) {
  try {
    const { data } = await api.post("/auth/forgot-password", payload);
    return data;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function verifyOtp(payload: VerifyOtpPayload) {
  try {
    const { data } = await api.post("/auth/verify-reset-otp", payload);
    return data;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function resetPassword(payload: ResetPasswordPayload) {
  try {
    const { data } = await api.post("/auth/reset-password", payload);
    return data;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function changePassword(payload: ChangePasswordPayload) {
  try {
    const { data } = await api.put("/auth/change-password", payload);
    return data;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function registerUser(payload: RegisterPayload) {
  try {
    const { data } = await api.post("/auth/register", payload);
    if (data.user) {
      storeUserInfoToStorage(data.user);
    }

    if (data.accessToken && data.refreshToken) {
      storeUserTokens({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
    }
    return data;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}
