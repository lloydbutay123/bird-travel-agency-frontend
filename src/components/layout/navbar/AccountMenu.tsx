"use client";

import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import Link from "next/link";
import { MdKeyboardArrowRight, MdSupport } from "react-icons/md";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { profileActions } from "./data";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";

export default function AccountMenu({
  onLogout,
  onClose,
}: {
  onLogout: () => void;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const user = useAppSelector(selectUser);

  return (
    <div className="relative flex-1">
      <div className="lg:card flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4
              className={`${isHome ? "text-white" : "text-black"} text-[16px] font-semibold truncate`}
            >
              {user?.firstName} {user?.lastName}
            </h4>
            <p className={`${isHome ? "text-white/45" : "text-[#112211]/75"}`}>
              Online
            </p>
          </div>
        </div>
        <Divider className="bg-white/45" />
        <div className="flex flex-col gap-4">
          {profileActions.map((action, index) => {
            const Icon = action.icon;

            return (
              <Link
                href={action.href}
                className="flex items-center justify-between"
                key={index}
                onClick={onClose}
              >
                <div className="flex items-center gap-2">
                  <Icon size={18} color={isHome ? "white" : "black"} />
                  <p
                    className={`${isHome ? "text-white" : "text-black"} text-[14px] font-medium`}
                  >
                    {action.label}
                  </p>
                </div>
                <MdKeyboardArrowRight
                  size={16}
                  color={isHome ? "white" : "black"}
                />
              </Link>
            );
          })}
        </div>
        <Divider className="bg-white/45" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Link href="" className="flex items-center gap-2">
              <MdSupport size={18} color={isHome ? "white" : "black"} />
              <p
                className={`${isHome ? "text-white" : "text-black"} text-[14px] font-medium`}
              >
                Support
              </p>
            </Link>
            <MdKeyboardArrowRight size={16} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-6">
        <Button onClick={onLogout} className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
}
