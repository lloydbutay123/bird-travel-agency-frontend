import { useAppSelector } from "@/redux/hooks";
import { selectIsAuthenticated } from "@/redux/selectors";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(`/auth/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }
  }, [isAuthenticated, router, pathname]);

  if (!isAuthenticated) return null;
  return <>{children}</>;
}
