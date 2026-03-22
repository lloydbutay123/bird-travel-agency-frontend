import { IoMenuOutline } from "react-icons/io5";
import Divider from "../ui/Divider";
import { IoIosArrowDown } from "react-icons/io";

type sortOption = {
  label: string;
  placesCount: number;
  value: string;
  price: number;
  duration: string;
};

type StaysSortBarProps = {
  options: sortOption[];
  selectedSort: string;
  onSortChange: (value: string) => void;
  resultsShown: number;
  totalResults: number;
};

export default function StaysSortBar({
  options,
  selectedSort,
  onSortChange,
  resultsShown,
  totalResults,
}: StaysSortBarProps) {
  return (
    <>
      <div className="card bg-white hidden md:flex gap-6 rounded-xl px-6 py-4">
        {options.map((option, i) => (
          <div key={i} className="flex w-full justify-between">
            <div key={i} className="max-w-40 w-full">
              <h3 className="mb-2 text-[16px] font-semibold">{option.label}</h3>
              <p className="text-[14px] text-[#112211]/40">
                {option.placesCount} places
              </p>
            </div>
            {i !== options.length - 1 && <Divider orientation="vertical" />}
          </div>
        ))}
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
