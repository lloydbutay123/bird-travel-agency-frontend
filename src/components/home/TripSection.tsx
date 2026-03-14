import { trips } from "@/data/trips";
import SectionHeader from "../ui/SectionHeader";
import TripCard from "./TripCard";

export default function TripSection() {
  return (
    <div className="px-6 xl:px-0">
      <SectionHeader
        title="Plan your perfect trip"
        subtitle="Search Flights & Places Hire to our most popular destinations"
        btnLabel="See more places"
      />
      <div className="grid lg:mx-auto lg:grid-cols-3 gap-8">
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
