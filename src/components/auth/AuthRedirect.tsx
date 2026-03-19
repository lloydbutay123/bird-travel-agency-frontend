import { RootState } from "@/redux/store";
import { useRouter, useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const isAuthPage = pathname.startsWith("/auth");
  const redirect = searchParams.get("redirect");

  useEffect(() => {
    if (!isAuthenticated || !isAuthPage) return;

    if (redirect) {
      router.replace(redirect);
      return;
    }

    router.replace("/");
  }, [isAuthenticated, isAuthPage, redirect, router]);

  if (isAuthenticated && isAuthPage) return null;

  return <>{children}</>;
}
