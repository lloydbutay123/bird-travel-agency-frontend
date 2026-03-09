"use client";

import DestinationCard from "@/components/destinations/DestinationCard";
import FeaturedDestinationCard from "@/components/destinations/FeaturedDestinationCard";
import TripCard from "@/components/home/TripCard";
import TravelSearch from "@/components/search/TravelSearch";
import Container from "@/components/ui/Container";
import HeroBanner from "@/components/ui/HeroBanner";
import SectionHeader from "@/components/ui/SectionHeader";
import { destinations } from "@/data/destinations";
import { trips } from "@/data/trips";
import { useRouter } from "next/navigation";
import { FaHotel } from "react-icons/fa6";

export default function StaysPage() {
  const router = useRouter();

  const handleShowHotels = () => {
    router.push("/stays/listings");
  };
  return (
    <div className="flex flex-col gap-69 min-h-screen">
      <HeroBanner
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Make your travel whishlist, we'll do the rest"
        subtitle="Special offers to suit your plan"
      />
      <TravelSearch
        mode="stays"
        top={551}
        onShowFlights={handleShowHotels}
        header="title"
        position="absolute"
        btnLabel="Show Places"
        btnIcon={<FaHotel size={16} />}
      />
      <div className="flex flex-col gap-20 pb-30">
        <Container>
          <SectionHeader title="Your recent searches" />
          <div className="grid grid-cols-4 gap-8">
            {trips
              .filter((d) => d.recent)
              .map((recent) => (
                <TripCard
                  key={recent.id}
                  image={recent.image}
                  name={recent.name}
                  type={recent.type}
                />
              ))}
          </div>
        </Container>
        <Container>
          <SectionHeader
            title="Fall into travel"
            subtitle="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
            btnLabel="See all"
          />
          <div className="grid grid-cols-4 gap-4">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                title={destination.title}
                image={destination.image}
                city={destination.city}
                price={destination.price}
                btnLabel="Book a Hotel"
              />
            ))}
          </div>
        </Container>

        <Container>
          <SectionHeader
            title="Fall into travel"
            subtitle="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
            btnLabel="See all"
          />
          <div>
            {destinations
              .filter((d) => d.isFeatured)
              .map((destination) => (
                <FeaturedDestinationCard
                  key={destination.id}
                  title={destination.title}
                  price={destination.price}
                  description={destination.description}
                  gallery={destination.gallery}
                />
              ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
