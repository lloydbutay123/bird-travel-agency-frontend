"use client";
import DestinationCard from "@/components/destinations/DestinationCard";
import FeaturedDestinationCard from "@/components/destinations/FeaturedDestinationCard";
import TravelSearch from "@/components/search/TravelSearch";
import Container from "@/components/ui/Container";
import HeroBanner from "@/components/ui/HeroBanner";
import SectionHeader from "@/components/ui/SectionHeader";
import { destinations } from "@/data/destinations";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FlightsPage() {
  const router = useRouter();

  const handleShowFlights = () => {
    router.push("/flights/results");
  };
  return (
    <div className="flex flex-col gap-69 min-h-screen">
      <HeroBanner
        image="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Make your travel whishlist, we'll do the rest"
        subtitle="Special offers to suit your plan"
      />
      <TravelSearch
        top={551}
        onShowFlights={handleShowFlights}
        header="title"
        position="absolute"
      />
      <div className="flex flex-col gap-20 pb-30">
        <div>
          <Container>
            <SectionHeader
              title="Let's go places together"
              subtitle="Discover the latest offers and news and start planning your next trip with us."
              btnLabel="See All"
            />
          </Container>
          <div className="relative h-121.5 w-full">
            <Image
              src="/assets/images/Frame2608705.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Container>
          <SectionHeader
            title="Fall into travel"
            subtitle="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
            btnLabel="See All"
          />
          <div className="grid grid-cols-4 gap-4">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                title={destination.title}
                image={destination.image}
                city={destination.city}
                price={destination.price}
              />
            ))}
          </div>
        </Container>

        <Container>
          <SectionHeader
            title="Fall into travel"
            subtitle="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
            btnLabel="See All"
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
