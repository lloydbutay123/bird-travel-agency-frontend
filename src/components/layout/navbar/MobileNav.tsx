"use client";

import Divider from "@/components/ui/Divider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { actions, navItems } from "./data";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function MobileNav({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <div
      className={`absolute flex flex-col gap-6 -z-10 h-screen w-full top-0 left-0 px-4 sm:px-6 pt-32 ${isHome ? "bg-[#112211]" : "bg-white"}`}
    >
      <div className="flex flex-col gap-1">
        {navItems.map((nav, index) => (
          <Link
            key={index}
            href={nav.href}
            onClick={onClose}
            className={`text-[24px] ${isHome && "text-white"}`}
          >
            {nav.label}
          </Link>
        ))}
      </div>

      <Divider className={`${isHome && "bg-white/35"}`} />

      {!isAuthenticated && (
        <div className="flex flex-col gap-1">
          {actions.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              onClick={onClose}
              className={`text-[24px] ${isHome && "text-white"}`}
            >
              {nav.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
