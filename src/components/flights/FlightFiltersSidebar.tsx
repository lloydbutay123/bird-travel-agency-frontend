import { tripTypes } from "@/data/trips";
import CheckboxFilterGroup from "../filters/CheckboxFilterGroup";
import DepartureTimeFilter from "../filters/DepartureTimeFilter";
import PriceFilter from "../filters/PriceFilter";
import RatingsFilter from "../filters/RatingsFilter";
import Divider from "../ui/Divider";
import { airlines } from "@/data/airlines";

export default function FlightFilterSidebar() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-85.75">
      <h2 className="font-semibold text-[20px] text-[#112211]">Filters</h2>
      <PriceFilter />
      <Divider />
      <DepartureTimeFilter />
      <Divider />
      <RatingsFilter />
      <Divider />
      <CheckboxFilterGroup title="Airlines" options={airlines} />
      <Divider />
      <CheckboxFilterGroup title="Trips" options={tripTypes} />
    </div>
  );
}
