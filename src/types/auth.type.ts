import { User } from "./user.type";

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
  loading: boolean;
  error: string | null;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type SetCredentialPayload = {
  user: User;
};

export type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export type UpdateUserPayload = {
  firstName?: string;
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

export type ChangePasswordPayload = {
  currentPassword: string;
  password: string;
  confirmPassword: string;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type VerifyOtpPayload = {
  email: string;
  otp: string;
};

export type ResetPasswordPayload = {
  email: string;
  otp: string;
  password: string;
  confirmPassword: string;
};
