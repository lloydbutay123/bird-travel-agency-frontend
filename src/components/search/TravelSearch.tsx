"use client";
import { FaPlane } from "react-icons/fa";
import { IoIosArrowDown, IoIosSend } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import { LuArrowRightLeft } from "react-icons/lu";
import Button from "../ui/Button";

type TravelProps = {
  showTabs?: boolean;
  top?: string | number;
};

export default function TravelSearch({
  showTabs = false,
  top = 133,
}: TravelProps) {
  return (
    <div
      className={`absolute left-1/2 drop-shadow-xs w-full max-w-308 -translate-x-1/2 rounded-2xl px-8 pt-4 pb-8 bg-white top-${top}`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-12">
          {showTabs === true ? (
            <div className="flex items-center gap-8">
              <div className="flex ">
                <FaPlane size={24} color="black" className="mr-2" />
                <p className="text-black font-semibold text-[16px]">Flights</p>
              </div>
              <div className="w-px bg-[#D7E2EE] h-12" />
              <div className="flex ">
                <IoBed size={24} color="black" className="mr-2" />
                <p className="text-black font-semibold text-[16px]">Stays</p>
              </div>
            </div>
          ) : (
            <div className="pt-4.5 font-semibold text-[20px] ">
              <p>Where are you flying? </p>
            </div>
          )}
          <div className="flex gap-6">
            <fieldset className="flex-1 border border-gray-400 rounded-md pl-4 py-1">
              <legend className="px-2 text-sm text-gray-500">From - To</legend>
              <div className="flex items-center justify-between">
                <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
                  Lahore - Karachi
                </span>
                <div className="px-3">
                  <LuArrowRightLeft size={24} />
                </div>
              </div>
            </fieldset>
            <fieldset className="w-35 border border-gray-400 rounded-md pl-4 py-1">
              <legend className="px-2 text-sm text-gray-500">Trip</legend>
              <div className="flex items-center justify-between">
                <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
                  Return
                </span>
                <div className="px-3">
                  <IoIosArrowDown size={24} />
                </div>
              </div>
            </fieldset>
            <fieldset className="flex-1 border border-gray-400 rounded-md pl-4 py-1">
              <legend className="px-2 text-sm text-gray-500">
                Depart- Return
              </legend>
              <div className="flex items-center justify-between">
                <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
                  07 Nov 22 - 13 Nov 22
                </span>
              </div>
            </fieldset>
            <fieldset className="flex-1 border border-gray-400 rounded-md pl-4 py-1">
              <legend className="px-2 text-sm text-gray-500">
                Passenger - Class
              </legend>
              <div className="flex items-center justify-between">
                <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
                  1 Passenger, Economy
                </span>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <Button onClick={() => {}} variant="ghost">
            + Add Promo Code
          </Button>
          <Button onClick={() => {}} variant="primary">
            <IoIosSend size={16} /> Show Flights
          </Button>
        </div>
      </div>
    </div>
  );
}
