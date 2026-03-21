import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
};
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isCheckingAuth: true,
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
    setCheckingAuth: (state, action: PayloadAction<boolean>) => {
      state.isCheckingAuth = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload,
        };
      }
    },
  },
});

export const { setCredentials, updateUser, setCheckingAuth, logout } =
  authSlice.actions;
export default authSlice.reducer;
export type { User, AuthState };
