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

  useEffect(() => {
    if (!isAuthenticated) return;

    if (pathname.startsWith("/auth")) {
      router.replace("/");
    }
  }, [isAuthenticated, pathname, router]);

  if (isAuthenticated && pathname.startsWith("/auth")) return null;

  return <>{children}</>;
}
