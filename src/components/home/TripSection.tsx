import { trips } from "@/data/trips";
import SectionHeader from "../ui/SectionHeader";
import TripCard from "./TripCard";

export default function TripSection() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Plan your perfect trip"
        subtitle="Search Flights & Places Hire to our most popular destinations"
        btnLabel="See more places"
      />
      <div className="w-full grid grid-cols-1 lg:mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {trips.map((trip) => {
          return (
            <TripCard
              key={trip.id}
              image={trip.image}
              name={trip.name}
              type={trip.type}
            />
          );
        })}
      </div>
    </div>
  );
}
