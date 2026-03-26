import { RootState } from "./store";

export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectIsCheckingAuth = (state: RootState) =>
  state.auth.isCheckingAuth;

export const selectBooking = (state: RootState) => state.booking;
