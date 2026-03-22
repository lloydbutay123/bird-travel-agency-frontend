"use client";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TravelSearch from "@/components/search/TravelSearch";
import { useRouter } from "next/navigation";
import HeroBanner from "@/components/home/HeroBanner";
import TripSection from "@/components/home/TripSection";
import ServicesSection from "@/components/home/ServicesSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import Container from "@/components/ui/Container";

export default function Home() {
  const router = useRouter();

  const handleShowFlights = () => {
    router.push("/flights/results");
  };
  return (
    <div className="relative min-h-screen w-full justify-center lg:pt-7.5">
      <HeroBanner />
      <TravelSearch
        header="tabs"
        position="absolute"
        top={532}
        onShowFlights={handleShowFlights}
      />

      <Container className="flex flex-col gap-20 pt-7.5 mt-70.25 mb-22.5">
        <TripSection />
        <ServicesSection />
        <ReviewsSection />
      </Container>
    </div>
  );
}
