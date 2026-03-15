import TravelSearch from "@/components/search/TravelSearch";
import StayFilterSidebar from "@/components/stays/StayFiltersSidebar";
import StaysCard from "@/components/stays/StaysCard";
import StaysSortBar from "@/components/stays/StaysSortBar";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";

import { hotels } from "@/data/hotels";

const sortOptions = [
  {
    label: "Hotels",
    value: "hotels",
    placesCount: 30,
    price: 99,
    duration: "2h 18m",
  },
  {
    label: "Motels",
    value: "motels",
    placesCount: 30,
    price: 99,
    duration: "2h 18m",
  },
  {
    label: "Resorts",
    value: "resorts",
    placesCount: 30,
    price: 99,
    duration: "2h 18m",
  },
];

export default function StaysListings() {
  return (
    <div className="flex flex-col gap-8 min-h-screen pb-12 pt-34.5">
      <TravelSearch
        mode="stays"
        position="relative"
        searchIcon={true}
        showActions={false}
      />
      <Container className="flex gap-6">
        <StayFilterSidebar />
        <div className="flex-1">
          <div className="h-full min-h-340 flex gap-[15.5px]">
            <Divider orientation="vertical" />
            <div className="flex w-full flex-col gap-6">
              <StaysSortBar
                options={sortOptions}
                selectedSort="Recommended"
                onSortChange={(value) => console.log(value)}
                resultsShown={4}
                totalResults={257}
              />
              <div className="flex flex-col gap-8">
                {hotels.map((hotel) => (
                  <StaysCard
                    key={hotel.id}
                    name={hotel.name}
                    image={hotel.image}
                    rating={hotel.rating}
                    reviews={hotel.reviews}
                    price={hotel.price}
                    location={hotel.location}
                    onViewDetails={`/stays/${hotel.id}`}
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
