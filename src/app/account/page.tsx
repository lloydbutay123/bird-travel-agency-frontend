"use client";

import AccountDetailsSection from "@/components/account/AccountDetailsSection";
import AccountTabs from "@/components/account/AccountTabs";
import Container from "@/components/ui/Container";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/selectors";
import Image from "next/image";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

type TabKey = "account" | "history" | "payment";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("account");

  const user = useAppSelector(selectUser);

  const fullname = user ? `${user?.firstName} ${user?.lastName}` : "User";
  const email = `${user?.email}`;

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return <AccountDetailsSection />;
      case "history":
        return <div>Coming soon</div>;
      case "payment":
        return <div>Coming soon</div>;
    }
  };
  return (
    <Container className="px-4 sm:px-6 xl:px-0 pt-34.5 pb-30 min-h-screen">
      <div className="relative h-85 md:h-97.5 lg:h-130.25 w-full mb-8">
        <div className="relative h-45 md:h-60 lg:h-87.5 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute flex flex-col items-center gap-6 bottom-7 md:bottom-0 left-1/2 -translate-x-1/2">
          <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
            <div className="relative w-full h-full rounded-full border-4 border-[#FF8682] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>

            <button className="absolute bottom-0 right-0 rounded-full bg-[#FF8682] p-1 lg:p-2 shadow-md ring-2 ring-white">
              <MdEdit className="text-white size-4 lg:size-4.5" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-[24px] font-semibold text-center">
              {fullname}
            </h4>
            <p className="text-[16px] text-[#112211]/75">{email}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <AccountTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </div>
    </Container>
  );
}
