"use client";

import FlightSegmentCard from "@/components/flights/FlightSegmentCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import Image from "next/image";
import FareFeatures from "../FareFeatures";
import AirlinePolicies from "../AirlinePolicies";
import { flightSegments } from "@/data/flightSegment";
import { fareClasses } from "@/data/fareClasses";
import { policies } from "@/data/policies";
import ListingHeader from "@/components/listings/ListingHeader";

type FlightBookingDetailsStepProps = {
  onNext: () => void;
  onBack: () => void;
};

export default function FlightBookingDetailsStep({
  onNext,
  onBack,
}: FlightBookingDetailsStepProps) {
  return (
    <Container className="mt-12 pb-30">
      <Breadcrumb
        items={[
          { label: "Turkey" },
          { label: "Istanbul" },
          { label: "CVK Park Bosphorus Hotel Istanbul" },
        ]}
      />
      <ListingHeader
        title="Emirates A380 Airbus"
        location="Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
        rating={2.4}
        reviews={54}
        price={400}
        bookingHref={onNext}
      />

      <div className="relative w-full h-98.75 rounded-xl overflow-hidden mb-10">
        <Image
          src="https://images.unsplash.com/photo-1551882026-d2525cfc9656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-10">
        <FareFeatures fareClasses={fareClasses} selectedFare="Basic Economy" />

        <AirlinePolicies policies={policies} />

        {flightSegments.map((segment) => (
          <FlightSegmentCard
            key={segment.id}
            date={segment.date}
            duration={segment.duration}
            airlineLogo={segment.airlineLogo}
            airline={segment.airline}
            aircraft={segment.aircraft}
            features={segment.features}
            departureTime={segment.departureTime}
            departureAirport={segment.departureAirport}
            arrivalTime={segment.arrivalTime}
            arrivalAirport={segment.arrivalAirport}
          />
        ))}
      </div>
    </Container>
  );
}
