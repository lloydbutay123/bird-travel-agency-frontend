import FlightCard from "@/components/flights/FlightCard";
import FlightFilterSidebar from "@/components/flights/FlightFiltersSidebar";
import FlightSortBar from "@/components/flights/FlightsSortBar";
import TravelSearch from "@/components/search/TravelSearch";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import { flights } from "@/data/flights";

const sortOptions = [
  { label: "Cheapest", value: "cheapest", price: 99, duration: "2h 18m" },
  { label: "Best", value: "best", price: 99, duration: "2h 18m" },
  { label: "Quickest", value: "quickest", price: 99, duration: "2h 18m" },
];

export default function FlightResults() {
  return (
    <div className="flex flex-col gap-8 min-h-screen pb-12 pt-34.5">
      <TravelSearch position="relative" searchIcon={true} showActions={false} />
      <Container className="flex gap-6">
        <FlightFilterSidebar />
        <div className="flex-1">
          <div className="h-full min-h-340 px-6 xl:px-0 flex xl:gap-[15.5px]">
            <Divider orientation="vertical" className="hidden xl:block" />
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
                    onViewDetails={`/flights/${flight.id}`}
                  />
                ))}
              </div>
              <Button className="bg-[#112211] text-white">
                Show more results
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
