"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPlane } from "react-icons/fa";
import { IoBed } from "react-icons/io5";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`${isHome ? "fixed mt-7.5" : "relative bg-white mt-0"} flex z-2 items-center justify-center w-full`}
    >
      <div
        className={`${isHome ? "py-6" : "py-5.25  "} flex items-center justify-between w-full max-w-345 px-8`}
      >
        <div className="flex gap-8">
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
            href=""
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
      </div>
    </nav>
  );
}
