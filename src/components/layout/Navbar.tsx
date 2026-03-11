"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPlane } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import Container from "../ui/Container";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isFlight = pathname.startsWith("/flights");
  const isStays = pathname.startsWith("/stays");
  const isAuth = pathname.startsWith("/auth");

  return (
    <nav
      className={`${isHome ? "fixed mt-7.5" : "relative bg-white mt-0 card"} ${isAuth && "hidden"} flex z-2 items-center justify-center w-full`}
    >
      <Container
        className={`${isHome ? "py-6 max-w-345 px-8" : "py-5.25 px-0"} flex items-center justify-between w-full`}
      >
        <div className="flex gap-8">
          <div className="relative">
            <Link href="/flights" className="flex ">
              <FaPlane
                size={24}
                color={`${isHome ? "white" : "#112211"}`}
                className="mr-1"
              />
              <p
                className={`${isHome ? "text-white" : "text-[#112211]"} font-semibold text-[14px]`}
              >
                Find Flight
              </p>
            </Link>
            {isFlight && (
              <div className="absolute -bottom-8.25 left-0 w-full h-[5px] bg-[#8DD3BB]" />
            )}
          </div>
          <div className="relative">
            <Link href="/stays" className="flex ">
              <IoBed
                size={24}
                color={`${isHome ? "white" : "#112211"}`}
                className="mr-1"
              />
              <p
                className={`${isHome ? "text-white" : "text-[#112211]"} font-semibold text-[14px]`}
              >
                Find Stays
              </p>
            </Link>
            {isStays && (
              <div className="absolute -bottom-8.25 left-0 w-full h-[5px] bg-[#8DD3BB]" />
            )}
          </div>
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
          <Link
            href="/auth/login"
            className={`${isHome ? "text-white" : "text-[#112211]"} font-semibold text-[14px]`}
          >
            Login
          </Link>
          <Link
            href=""
            className={`${isHome ? "bg-white text-[#112211]" : "bg-[#112211] text-white"} px-6 py-[13.5px] rounded-lg font-semibold text-[14px]`}
          >
            Sign up
          </Link>
        </div>
      </Container>
    </nav>
  );
}
