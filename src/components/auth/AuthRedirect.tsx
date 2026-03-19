import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

export default function AuthRedirect({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const isAuthPage = pathname.startsWith("/auth");
  const isSignupPage = pathname === "/auth/signup";

  useEffect(() => {
    if (!isAuthenticated || !isAuthPage) return;

    if (isSignupPage) return;

    router.replace("/");
  }, [isAuthenticated, isAuthPage, isSignupPage, router]);

  if (isAuthenticated && isAuthPage && !isSignupPage) return null;

  return <>{children}</>;
}
