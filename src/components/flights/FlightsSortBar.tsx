import { IoMenuOutline } from "react-icons/io5";
import Divider from "../ui/Divider";
import { IoIosArrowDown } from "react-icons/io";

type sortOption = {
  label: string;
  value: string;
  price: number;
  duration: string;
};

type FlightsSortBarProps = {
  options: sortOption[];
  selectedSort: string;
  onSortChange: (value: string) => void;
  resultsShown: number;
  totalResults: number;
};

export default function FlightSortBar({
  options,
  selectedSort,
  onSortChange,
  resultsShown,
  totalResults,
}: FlightsSortBarProps) {
  return (
    <>
      <div className="card bg-white hidden md:flex gap-6 rounded-xl px-6 py-4">
        {options.map((option, i) => (
          <div key={i} className="flex w-full justify-between">
            <div key={i} className="max-w-40 w-full">
              <h3 className="mb-2 text-[16px] font-semibold">{option.label}</h3>
              <div className="flex gap-1 items-center text-[14px] text-[#112211]/40">
                <p>${option.price}</p>
                <span>*</span>
                <p>{option.duration}</p>
              </div>
            </div>
            {i !== options.length - 1 && <Divider orientation="vertical" />}
          </div>
        ))}

        <Divider orientation="vertical" />
        <div className="flex gap-2 items-center max-w-40 w-full">
          <IoMenuOutline size={24} />
          <h3 className="text-[16px] font-semibold">Other sort</h3>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-semibold">
          Showing {resultsShown} of
          <span className="text-[#FF8682]"> {totalResults} places</span>
        </p>

        <div className="flex items-center gap-1">
          <p className="text-[14px]">
            Sort by
            <span className="font-semibold"> {selectedSort}</span>
          </p>
          <IoIosArrowDown size={18} />
        </div>
      </div>
    </>
  );
}
