import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(`/auth/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }
  }, [isAuthenticated, router, pathname]);

  if (!isAuthenticated) return null;
  return <>{children}</>;
}
