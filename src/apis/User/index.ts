import axios from "axios";
import { api } from "..";

type UpdateUserProfilePayload = {
  firstname?: string;
  lastName?: string;
  phone?: string;
  dateOfBirth?: string;
  address?: {
    region?: string;
    province?: string;
    city?: string;
    barangay?: string;
    zipCode?: string;
  };
};

type ChangeEmailPayload = {
  email: string;
  password: string;
};

type VerifyEmailChangePayload = {
  email: string;
  otp: string;
};

export async function updateUserProfile(payload: UpdateUserProfilePayload) {
  try {
    const { data } = await api.patch("/api/v1/users/me", payload);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to update user");
    }
    throw new Error("Something went wrong. Please try again");
  }
}

export async function changeEmail(payload: ChangeEmailPayload) {
  try {
    const { data } = await api.post("/api/v1/users/change-email", payload);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to update email",
      );
    }
    throw new Error("Something went wrong. Please try again");
  }
}

export async function verifyEmailChange(payload: VerifyEmailChangePayload) {
  try {
    const { data } = await api.post(
      "/api/v1/users/verify-email-change",
      payload,
    );
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to verify email",
      );
    }
    throw new Error("Something went wrong. Please try again");
  }
}

export async function getCurrentUser() {
  const { data } = await api.get("/api/v1/users/me");
  return data;
}
