"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPlane } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import Container from "../ui/Container";

const actions = [
  { label: "Login", href: "/auth/login" },
  { label: "Sign up", href: "/auth/signup" },
];

const navItems = [
  {
    label: "Find Flights",
    href: "/flights",
    icon: FaPlane,
    match: (pathname: string) => pathname.startsWith("/flights"),
  },
  {
    label: "Find Stays",
    href: "/stays",
    icon: IoBed,
    match: (pathname: string) => pathname.startsWith("/stays"),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAuth = pathname.startsWith("/auth");

  return (
    <nav
      className={`${isHome ? "fixed mt-7.5" : "relative bg-white mt-0 card"} ${isAuth && "hidden"} flex z-2 items-center justify-center w-full`}
    >
      <Container
        className={`${isHome ? "py-6 max-w-345 px-8" : "py-5.25 px-0"} flex items-center justify-between w-full`}
      >
        <div className="flex gap-8">
          {navItems.map((nav) => {
            const isActive = nav.match(pathname);
            const Icon = nav.icon;
            return (
              <div className="relative" key={nav.label}>
                <Link href={nav.href} className="flex ">
                  <Icon
                    size={24}
                    color={`${isHome ? "white" : "#112211"}`}
                    className="mr-1"
                  />
                  <p
                    className={`${isHome ? "text-white" : "text-[#112211]"} font-semibold text-[14px]`}
                  >
                    {nav.label}
                  </p>
                </Link>
                {isActive && (
                  <div className="absolute -bottom-8.25 left-0 w-full h-[5px] bg-[#8DD3BB]" />
                )}
              </div>
            );
          })}
        </div>
        <Link href="/" className="relative w-25 h-9">
          <Image
            src={`${isHome ? "/assets/images/logo.png" : "/assets/images/logo-dark.png"}`}
            alt=""
            fill
            className="object-cover"
          />
        </Link>
        <div className="flex items-center gap-8">
          {actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={`
                font-semibold text-[14px] 
                ${isHome && action.label === "Login" ? "text-white" : "text-[#112211]"}
                ${action.label === "Sign up" && !isHome && "bg-black! text-white px-4 py-[13.5px] rounded-lg"} 
                ${action.label === "Sign up" && "bg-white px-4 py-[13.5px] rounded-lg"}`}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}
