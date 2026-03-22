"use client";

import Divider from "@/components/ui/Divider";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { IoLogOut } from "react-icons/io5";
import { MdKeyboardArrowRight, MdSupport } from "react-icons/md";
import { profileActions } from "./data";
import { useSelector } from "react-redux";

export default function ProfileDropdown({
  onLogout,
  onClose,
}: {
  onLogout: () => void;
  onClose: () => void;
}) {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="card absolute flex flex-col gap-6 w-82.25 bg-white top-14 right-0 p-8 rounded-xl">
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
          <h4 className="text-[16px] font-semibold truncate">
            {user?.firstName} {user?.lastName}
          </h4>
          <p className="text-[#112211]/75">Online</p>
        </div>
      </div>
      <Divider />
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
                <Icon size={18} />
                <p className="text-[14px] font-medium">{action.label}</p>
              </div>
              <MdKeyboardArrowRight size={16} />
            </Link>
          );
        })}
      </div>
      <Divider />
      <div className="flex flex-col gap-4">
        <Link href="" className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MdSupport size={18} />
            <p className="text-[14px] font-medium">Support</p>
          </div>
          <MdKeyboardArrowRight size={16} />
        </Link>
        <button
          type="button"
          className="flex items-center justify-between cursor-pointer"
          onClick={onLogout}
        >
          <div className="flex items-center gap-2">
            <IoLogOut size={18} />
            <p className="text-[14px] font-medium">Logout</p>
          </div>
        </button>
      </div>
    </div>
  );
}
