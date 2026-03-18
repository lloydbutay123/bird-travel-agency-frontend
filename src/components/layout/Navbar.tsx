"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaPlane } from "react-icons/fa";
import { IoBed, IoClose } from "react-icons/io5";
import Container from "../ui/Container";
import { MdMenu, MdPerson } from "react-icons/md";
import Button from "../ui/Button";
import { useState } from "react";
import Accordion from "../ui/Accordion";
import { footerSections } from "@/data/footer";
import Divider from "../ui/Divider";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import type { RootState } from "@/redux/store";
import { API_URL } from "@/lib/api";

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
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAuth = pathname.startsWith("/auth");

  const [navOpen, setNavOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);

  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );

  const closeNavbar = () => {
    setNavOpen(false);
    setActionsOpen(false);
  };

  const handleNavbar = () => {
    if (navOpen) {
      closeNavbar();
      return;
    }

    setNavOpen(true);
    setActionsOpen(false);
  };

  const handleShowActions = () => {
    setActionsOpen((prev) => !prev);
    setNavOpen(false);
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/api/v1/users/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.removeItem("user");

      dispatch(logout());
      closeNavbar();
      router.replace("/auth/login");
    }
  };

  return (
    <nav
      className={`${isHome ? "lg:mt-7.5" : " bg-white mt-0 card"} ${isAuth && "hidden"} fixed flex z-999 items-center justify-center w-full`}
    >
      <Container
        className={`${isHome ? "py-6 max-w-345 px-6 lg:px-8" : "py-5.25 px-6"} flex items-center justify-between`}
      >
        <div className="hidden lg:flex gap-8">
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
                  <div className="absolute -bottom-8.25 left-0 w-full h-1.25 bg-[#8DD3BB]" />
                )}
              </div>
            );
          })}
        </div>
        <Link href="/" onClick={closeNavbar} className="relative w-25 h-9">
          <Image
            src={`${isHome ? "/assets/images/logo.png" : "/assets/images/logo-dark.png"}`}
            alt=""
            fill
            className="object-cover"
          />
        </Link>
        <div className="flex items-center">
          {navOpen && (
            <Button variant="ghost" onClick={handleShowActions}>
              <MdPerson color={isHome ? "white" : "black"} size={24} />
            </Button>
          )}
          <Button variant="ghost" onClick={handleNavbar}>
            {navOpen ? (
              <IoClose
                size={24}
                color={isHome ? "white" : "black"}
                className={`block lg:hidden`}
              />
            ) : (
              <MdMenu
                size={24}
                color={isHome ? "white" : "black"}
                className={`block lg:hidden`}
              />
            )}
          </Button>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {!isAuthenticated ? (
            actions.map((action) => (
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
            ))
          ) : (
            <div className="flex items-center gap-4">
              {/* Profile */}
              <div className="flex items-center gap-2">
                <MdPerson size={20} color={isHome ? "white" : "#112211"} />
                <p
                  className={`text-[14px] font-semibold ${
                    isHome ? "text-white" : "text-[#112211]"
                  }`}
                >
                  {user ? `${user.firstName} ${user.lastName}` : "User"}
                </p>
              </div>

              {/* Logout */}
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
        </div>
      </Container>
      {navOpen && (
        <div
          className={`absolute flex flex-col gap-6 -z-10 h-screen w-full top-0 left-0 px-6 pt-32 ${isHome ? "bg-[#112211]" : "bg-white"}`}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                onClick={closeNavbar}
                className={`text-[24px] ${isHome ? "text-white" : "text-[#112211]"}`}
              >
                {nav.label}
              </Link>
            ))}
          </div>

          <Divider className={`${isHome && "bg-white/35"}`} />

          <div>
            {footerSections.map((section) => (
              <Accordion
                key={section.title}
                title={section.title}
                defaultOpen={false}
                className={`${isHome ? "text-white" : "text-[#112211]"}`}
              >
                <div className="flex flex-col gap-3 pb-4">
                  {section.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`text-[14px] ${isHome ? "text-white/50" : "text-[#112211]/70"}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      )}

      {actionsOpen && (
        <div
          className={`absolute flex flex-col gap-6 -z-10 h-screen w-full top-0 left-0 px-6 pt-32 ${
            isHome ? "bg-[#112211]" : "bg-white"
          }`}
        >
          {!isAuthenticated ? (
            actions.map((action, index) => (
              <Link
                onClick={closeNavbar}
                key={index}
                href={action.href}
                className={`text-[24px] ${
                  isHome ? "text-white" : "text-[#112211]"
                }`}
              >
                {action.label}
              </Link>
            ))
          ) : (
            <>
              <div
                className={`text-[24px] ${
                  isHome ? "text-white" : "text-[#112211]"
                }`}
              >
                {user ? `${user.firstName} ${user.lastName}` : "User"}
              </div>

              <Button onClick={handleLogout}>Logout</Button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
