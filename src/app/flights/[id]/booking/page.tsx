"use client";

import AuthLoginCard from "@/components/booking/AuthLoginCard";
import PaymentOptionSection from "@/components/booking/PaymentOptionSection";
import PriceSummaryCard from "@/components/booking/PriceSummaryCard";
import FlightSegmentCard from "@/components/flights/FlightSegmentCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import { priceItems } from "@/data/priceItems";
import { useState } from "react";

export default function BookingDetails() {
  const [paymentOption, setPaymentOption] = useState("full");

  return (
    <div className="min-h-screen">
      <Container className="pt-12 pb-30 max-w-7xl!">
        <Breadcrumb
          items={[
            { label: "Turkey" },
            { label: "Istanbul" },
            { label: "CVK Park Bosphorus Hotel Istanbul" },
          ]}
        />
        <div className="flex items-start gap-10">
          <div className="w-full max-w-197.5 flex flex-col gap-10">
            <FlightSegmentCard
              date="Return, Wed, Dec 8"
              duration="2h 28m"
              airlineLogo="https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg"
              airline="PAL"
              aircraft="Airbus A320"
              features={["plane", "wifi", "time", "food", "seat"]}
              departureTime="12:00 pm"
              departureAirport="Newark (EWR)"
              arrivalTime="12:00 pm"
              arrivalAirport="Nashville (BNA)"
            />
            <PaymentOptionSection
              selected={paymentOption}
              onSelect={setPaymentOption}
            />
            <AuthLoginCard />
          </div>
          <PriceSummaryCard
            category="Economy"
            image="https://images.unsplash.com/photo-1627501691850-db08eb81199a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Emirates"
            subtitle="A380 Airbus"
            rating={4.2}
            reviews={54}
            priceItems={priceItems}
            total={400}
          />
        </div>
      </Container>
    </div>
  );
}
