import {
  clearUserInfoFromStorage,
  storeUserInfoToStorage,
  storeUserTokens,
} from "@/utils/users";
import { api } from "..";
import axios from "axios";

type LoginPayload = {
  email: string;
  password: string;
};

type ForgotPasswordPayload = {
  email: string;
};

type VerifyOtpPayload = {
  email: string;
  otp: string;
};

type ResetPasswordPayload = {
  email: string;
  otp: string;
  password: string;
  confirmPassword: string;
};

type RegisterUserPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

type ChangePasswordPayload = {
  currentPassword: string;
  password: string;
  confirmPassword: string;
};

export async function loginUser(payload: LoginPayload) {
  const { data } = await api.post("/api/v1/auth/login", payload);

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
}

export async function logoutUser() {
  try {
    await api.post("/api/v1/auth/logout");
  } finally {
    clearUserInfoFromStorage();
  }
}

export async function forgotPassword(payload: ForgotPasswordPayload) {
  try {
    const { data } = await api.post("/api/v1/auth/forgot-password", payload);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to send reset email",
      );
    }
    throw new Error("Something went wrong. Please try again");
  }
}

export async function verifyOtp(payload: VerifyOtpPayload) {
  try {
    const { data } = await api.post("/api/v1/auth/verify-reset-otp", payload);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to verify OTP");
    }
    throw new Error("Something went wrong. Please try again");
  }
}

export async function resetPassword(payload: ResetPasswordPayload) {
  try {
    const { data } = await api.post("/api/v1/auth/reset-password", payload);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to reset password",
      );
    }
    throw new Error("Something went wrong. Please try again");
  }
}

export async function changePassword(payload: ChangePasswordPayload) {
  try {
    const { data } = await api.put("/api/v1/auth/change-password", payload);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to change password",
      );
    }
    throw new Error("Something went wrong. Please try again");
  }
}

export async function registerUser(payload: RegisterUserPayload) {
  try {
    const { data } = await api.post("/api/v1/auth/register", payload);
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
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to register user",
      );
    }
    throw new Error("Something went wrong. Please try again");
  }
}
