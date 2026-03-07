import AirlinesFilter from "../filters/AirlinesFilter";
import DepartureTimeFilter from "../filters/DepartureTimeFilter";
import PriceFilter from "../filters/PriceFilter";
import RatingsFilter from "../filters/RatingsFilter";
import TripTypesFiler from "../filters/TripTypesFilter";
import Divider from "../ui/Divider";

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
      <AirlinesFilter />
      <Divider />
      <TripTypesFiler />
    </div>
  );
}
