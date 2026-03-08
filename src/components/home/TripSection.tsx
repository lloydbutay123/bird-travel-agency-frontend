import { trips } from "@/data/trips";
import SectionHeader from "../ui/SectionHeader";
import TripCard from "./TripCard";
import Container from "../ui/Container";

export default function TripSection() {
  return (
    <Container>
      <SectionHeader
        title="Plan your perfect trip"
        subtitle="Search Flights & Places Hire to our most popular destinations"
        btnLabel="See more places"
      />
      <div className="grid mx-auto grid-cols-3 gap-8">
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
    </Container>
  );
}
