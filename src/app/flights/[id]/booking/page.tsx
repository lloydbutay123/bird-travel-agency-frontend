"use client";

import AuthLoginCard from "@/components/booking/AuthLoginCard";
import PaymentOptionCard from "@/components/booking/PaymentOptionCard";
import PriceSummaryCard from "@/components/booking/PriceSummaryCard";
import FlightSegmentCard from "@/components/flights/FlightSegmentCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useState } from "react";

const priceItems = [
  {
    label: "Base Fare",
    value: 400,
  },
  {
    label: "Discount",
    value: 400,
  },
  {
    label: "Taxes",
    value: 400,
  },
  {
    label: "Service Fee",
    value: 400,
  },
];

export default function BookingDetails() {
  const [paymentOption, setPaymentOption] = useState("full");

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-7xl mx-auto pt-12 pb-30">
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
            <div className="p-4 flex flex-col gap-4 rounded-xl bg-white shadow-[2px_4px_16px_rgba(17,34,17,0.10)]">
              <PaymentOptionCard
                title="Pay in full"
                description="Pay the total and you are all set"
                value="full"
                selected={paymentOption === "full"}
                onSelect={setPaymentOption}
              />

              <PaymentOptionCard
                title="Pay part now, part later"
                description="Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees."
                value="partial"
                moreInfo
                selected={paymentOption === "partial"}
                onSelect={setPaymentOption}
              />
            </div>
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
      </div>
    </div>
  );
}
