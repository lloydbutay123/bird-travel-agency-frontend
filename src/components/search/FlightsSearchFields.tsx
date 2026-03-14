import { IoIosArrowDown } from "react-icons/io";
import { LuArrowRightLeft } from "react-icons/lu";

export default function TravelSearchFields() {
  return (
    <>
      <fieldset className="flex-1 border border-gray-400 rounded-md pl-4 py-0.5">
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
      <fieldset className="hidden lg:flex w-35 border border-gray-400 rounded-md pl-4 py-0.5">
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
      <fieldset className="flex-1 border border-gray-400 rounded-md pl-4 py-0.5">
        <legend className="px-2 text-sm text-gray-500">Depart- Return</legend>
        <div className="flex items-center justify-between">
          <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
            07 Nov 22 - 13 Nov 22
          </span>
        </div>
      </fieldset>
      <fieldset className="hidden lg:flex flex-1 border border-gray-400 rounded-md pl-4 py-0.5">
        <legend className="px-2 text-sm text-gray-500">
          Passenger - Class
        </legend>
        <div className="flex items-center justify-between">
          <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
            1 Passenger, Economy
          </span>
        </div>
      </fieldset>
    </>
  );
}
