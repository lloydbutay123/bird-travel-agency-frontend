"use client";

import AuthLoginCard from "@/components/booking/AuthLoginCard";
import PaymentOptionSection from "@/components/booking/PaymentOptionSection";
import PriceSummaryCard from "@/components/booking/PriceSummaryCard";
import StaySegmentCard from "@/components/stays/StaySegmentCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import { priceItems } from "@/data/priceItems";
import { useState } from "react";

export default function BookingDetails() {
  const [paymentOption, setPaymentOption] = useState("full");

  return (
    <Container className="pt-12 pb-30 max-w-7xl">
      <Breadcrumb
        items={[
          { label: "Turkey" },
          { label: "Istanbul" },
          { label: "CVK Park Bosphorus Hotel Istanbul" },
        ]}
      />
      <div className="flex items-start gap-10">
        <div className="w-full max-w-197.5 flex flex-col gap-10">
          <StaySegmentCard
            roomName="Kowloon Peak View Room King"
            propertyLogo="https://logos-world.net/wp-content/uploads/2023/09/Rosewood-Hotels-Logo.png"
            propertyName="Rosewood Hotels"
            propertyAddress="9220 W Sunset Blvd, Suite 301, West Hollywood, CA 90069"
            checkInDate="Thursday, Dec 8"
            checkOutDate="Friday, Dec 9"
            pricePerNight={200}
          />
          <PaymentOptionSection
            selected={paymentOption}
            onSelect={setPaymentOption}
          />
          <AuthLoginCard />
        </div>
        <PriceSummaryCard
          category="Rosewood Hotels"
          image="https://images.unsplash.com/photo-1647871467973-e3ee32d2dc6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Kowloon Peak View Room King"
          subtitle=""
          rating={4.2}
          reviews={54}
          priceItems={priceItems}
          total={400}
        />
      </div>
    </Container>
  );
}
