import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

type SetCredentialPayload = {
  user: User;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<SetCredentialPayload>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export type { User, AuthState };
