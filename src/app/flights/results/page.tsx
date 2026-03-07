"use client";
import FlightCard from "@/components/flights/FlightCard";
import FlightFilterSidebar from "@/components/flights/FlightFiltersSidebar";
import FlightSortBar from "@/components/flights/FlightsSortBar";
import TravelSearch from "@/components/search/TravelSearch";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import { flights } from "@/data/flights";
import { useRouter } from "next/navigation";

const sortOptions = [
  { label: "Cheapest", value: "cheapest", price: 99, duration: "2h 18m" },
  { label: "Best", value: "best", price: 99, duration: "2h 18m" },
  { label: "Quickest", value: "quickest", price: 99, duration: "2h 18m" },
];

export default function FlightResults() {
  const router = useRouter();

  const handleViewDetails = (id: number) => {
    router.push(`/flights/${id}`);
  };
  return (
    <div className="flex flex-col gap-8 min-h-screen py-12">
      <TravelSearch position="relative" searchIcon={true} showActions={false} />
      <div className="w-full max-w-308 mx-auto flex gap-6">
        <FlightFilterSidebar />
        <div className="flex-1">
          <div className="h-340 flex gap-[15.5px]">
            <Divider orientation="vertical" />
            <div className="flex w-full flex-col gap-6">
              <FlightSortBar
                options={sortOptions}
                selectedSort="Recommended"
                onSortChange={(value) => console.log(value)}
                resultsShown={4}
                totalResults={257}
              />
              <div className="flex flex-col gap-8 ">
                {flights.map((flight) => (
                  <FlightCard
                    key={flight.id}
                    airlineLogo={flight.airlineLogo}
                    rating={flight.rating}
                    reviews={flight.reviews}
                    price={flight.price}
                    departureTime={flight.departureTime}
                    arrivalTime={flight.arrivalTime}
                    stops={flight.stops}
                    duration={flight.duration}
                    airline={flight.airline}
                    route={flight.route}
                    onViewDetails={() => handleViewDetails(flight.id)}
                  />
                ))}
              </div>
              <Button className="h-12 bg-[#112211]! text-white flex justify-center">
                Show more results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
