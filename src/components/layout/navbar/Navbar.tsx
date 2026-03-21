"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdMenu, MdPerson } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import type { RootState } from "@/redux/store";
import { API_URL } from "@/lib/api";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import Container from "@/components/ui/Container";
import ProfileDropdown from "./ProfileDropdown";
import MobileNav from "./MobileNav";
import AccountMenu from "./AccountMenu";
import { actions, navItems } from "./data";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAuth = pathname.startsWith("/auth");
  const isOnboarding = pathname.startsWith("/onboarding");

  const [navOpen, setNavOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dispatch = useDispatch();

  const profileRef = useRef<HTMLDivElement>(null);

  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeNavbar = () => {
    setNavOpen(false);
    setActionsOpen(false);
    setProfileOpen(false);
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
      await fetch(`${API_URL}/api/v1/auth/logout`, {
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

  const handleProfileOpen = () => {
    setProfileOpen((prev) => !prev);
  };

  if (isAuth || isOnboarding) return null;

  return (
    <nav
      className={`${isHome ? "lg:mt-7.5" : " bg-white mt-0 card"} fixed flex z-999 items-center justify-center w-full`}
    >
      <Container
        className={`${isHome ? "py-6 max-w-345 px-6 lg:px-8" : "py-5.25 px-6 xl:px-0"} flex items-center justify-between`}
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
        <Link
          href="/"
          onClick={closeNavbar}
          className="relative lg:absolute w-25 h-9 lg:left-1/2 lg:-translate-x-1/2"
        >
          <Image
            src={`${isHome ? "/assets/images/logo.png" : "/assets/images/logo-dark.png"}`}
            alt=""
            fill
            className="object-cover"
          />
        </Link>
        <div className="flex items-center">
          {navOpen && isAuthenticated && (
            <Button variant="ghost" onClick={handleShowActions}>
              <MdPerson color={isHome ? "white" : "black"} size={24} />
            </Button>
          )}
          <Button
            variant="ghost"
            onClick={handleNavbar}
            className="block lg:hidden"
          >
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
            <div className="flex relative  items-center gap-4">
              {/* Profile */}
              <Link
                href=""
                className={`${isHome ? "text-white" : "text-black"} text-[14px] font-semibold`}
              >
                <p className="flex gap-1 items-center">
                  <FaHeart size={24} color={isHome ? "white" : "black"} />
                  Favorites
                </p>
              </Link>
              <div className="h-3 w-0.5">
                <Divider
                  orientation="vertical"
                  className={`${isHome ? "bg-white" : "bg-black"} w-full`}
                />
              </div>
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={handleProfileOpen}
                >
                  <div className="relative rounded-full h-11.25 w-11.25 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p
                    className={`text-[14px] font-semibold w-13.75 truncate ${
                      isHome ? "text-white" : "text-[#112211]"
                    }`}
                  >
                    {user ? `${user.firstName} ${user.lastName}` : "User"}
                  </p>
                </button>

                {profileOpen && (
                  <ProfileDropdown
                    onLogout={handleLogout}
                    onClose={() => setProfileOpen(false)}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
      {navOpen && <MobileNav onClose={closeNavbar} />}

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
            <AccountMenu onLogout={handleLogout} onClose={closeNavbar} />
          )}
        </div>
      )}
    </nav>
  );
}
