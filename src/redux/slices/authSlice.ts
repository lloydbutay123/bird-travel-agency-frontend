import {
  changePassword,
  loginUser,
  logoutUser,
  registerUser,
} from "@/apis/Auth";
import { getCurrentUser, updateUserProfile } from "@/apis/User";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: {
    region: string;
    province: string;
    city: string;
    barangay: string;
    zipCode: string;
  };
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isCheckingAuth: true,
  loading: false,
  error: null,
};

type LoginPayload = {
  email: string;
  password: string;
};

type SetCredentialPayload = {
  user: User;
};

type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

type UpdateUserPayload = {
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

type ChangePasswordPayload = {
  currentPassword: string;
  password: string;
  confirmPassword: string;
};

export const loginThunk = createAsyncThunk<
  { user: User },
  LoginPayload,
  { rejectValue: string }
>("auth/login", async (payload, thunkAPI) => {
  try {
    const data = await loginUser(payload);
    return { user: data.user };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Login failed",
      );
    }
  }
  return thunkAPI.rejectWithValue("Something went wrong. Please try again");
});

export const getMeThunk = createAsyncThunk<User, void, { rejectValue: string }>(
  "auth/getMe",
  async (_, thunkAPI) => {
    try {
      const data = await getCurrentUser();
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error?.response?.data?.message || "Failed to fetch current user",
        );
      }
    }
    return thunkAPI.rejectWithValue("Something went wrong. Please try again");
  },
);

export const logoutThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await logoutUser();
    return;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Logout failed",
      );
    }
  }
  return thunkAPI.rejectWithValue("Something went wrong. Please try again");
});

export const registerThunk = createAsyncThunk<
  { user: User },
  RegisterPayload,
  { rejectValue: string }
>("auth/register", async (payload, thunkAPI) => {
  try {
    const data = await registerUser(payload);
    return { user: data.user };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to register user",
      );
    }
  }
  return thunkAPI.rejectWithValue("Something went wrong. Please try again");
});

export const updateUserProfileThunk = createAsyncThunk<
  { user: User },
  UpdateUserPayload,
  { rejectValue: string }
>("auth/updateUser", async (payload, thunkAPI) => {
  try {
    const data = await updateUserProfile(payload);
    return { user: data.user };
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(
      error instanceof Error ? error.message : "Failed to update user",
    );
  }
});

export const changePasswordThunk = createAsyncThunk<
  void,
  ChangePasswordPayload,
  { rejectValue: string }
>("auth/changePassword", async (payload, thunkAPI) => {
  try {
    await changePassword(payload);
    return;
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(
      error instanceof Error ? error.message : "Failed to change password",
    );
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<SetCredentialPayload>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
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
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(getMeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isCheckingAuth = false;
        state.error = null;
      })
      .addCase(getMeThunk.rejected, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isCheckingAuth = false;
        state.error = action.payload || null;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      })
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload || "Register failed";
      })
      .addCase(updateUserProfileThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(updateUserProfileThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update user";
      })
      .addCase(changePasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePasswordThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(changePasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to change password";
      });
  },
});

export const { setCredentials, updateUser, setCheckingAuth, logout } =
  authSlice.actions;

export default authSlice.reducer;
export type { User, AuthState };
