import CheckboxFilterGroup from "../filters/CheckboxFilterGroup";
import PriceFilter from "../filters/PriceFilter";
import RatingsFilter from "../filters/RatingsFilter";
import Divider from "../ui/Divider";
import { amenities, freebies } from "@/data/freebies";

export default function StayFilterSidebar() {
  return (
    <div className="hidden xl:flex flex-col gap-8 w-full max-w-85.75">
      <h2 className="font-semibold text-[20px] text-[#112211]">Filters</h2>
      <PriceFilter />
      <Divider />
      <RatingsFilter />
      <Divider />
      <CheckboxFilterGroup title="Freebies" options={freebies} />
      <Divider />
      <CheckboxFilterGroup title="Amenities" options={amenities} />
    </div>
  );
}
