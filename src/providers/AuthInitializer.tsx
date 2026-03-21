"use client";

import { API_URL } from "@/lib/api";
import {
  logout,
  setCheckingAuth,
  setCredentials,
} from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AuthInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const { isCheckingAuth } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const restoreUser = async () => {
      dispatch(setCheckingAuth(true));

      try {
        const res = await fetch(`${API_URL}/api/v1/users/me`, {
          credentials: "include",
        });

        if (!res.ok) {
          dispatch(logout());
          return;
        }

        const data = await res.json();

        dispatch(
          setCredentials({
            user: data.user ?? data,
          }),
        );
      } catch (error) {
        dispatch(logout());
        console.log(error);
      } finally {
        dispatch(setCheckingAuth(false));
      }
    };
    restoreUser();
  }, [dispatch]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
