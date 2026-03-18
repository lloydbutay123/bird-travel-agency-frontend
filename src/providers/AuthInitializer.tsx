"use client";

import { API_URL } from "@/lib/api";
import { logout, setCredentials } from "@/redux/slices/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function AuthInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const restoreUser = async () => {
      try {
        const res = await fetch(`${API_URL}/api/v1/users/me`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          dispatch(logout());
          setHydrated(true);
          return;
        }

        const user = await res.json();

        dispatch(
          setCredentials({
            user,
          }),
        );
      } catch (error) {
        dispatch(logout());
      } finally {
        setHydrated(true);
      }
    };
    restoreUser();
  }, [dispatch]);

  if (!hydrated) return null;

  return <>{children}</>;
}
