import Breadcrumb from "@/components/ui/Breadcrumb";
import FlightSegmentCard from "../FlightSegmentCard";
import Container from "@/components/ui/Container";
import PaymentOptionSection from "@/components/booking/PaymentOptionSection";
import AuthLoginCard from "@/components/booking/AuthLoginCard";
import PriceSummaryCard from "@/components/booking/PriceSummaryCard";
import { priceItems } from "@/data/priceItems";

export default function FlightPaymentDetails() {
  return (
    <Container className="mt-12 pb-30">
      <Breadcrumb
        items={[
          { label: "Geeldmks" },
          { label: "Geeldmks" },
          { label: "Geeldmks" },
        ]}
      />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 w-full max-w-[790px]">
          <FlightSegmentCard
            date="Return, Wed, Dec 8"
            duration="2h 28m"
            airline="Emirates"
            aircraft="Airbus A320"
            airlineLogo="https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg"
            features={["plane", "wifi", "time", "food", "seat"]}
            departureTime="12:00 PM"
            departureAirport="Newark "
            arrivalTime="2:28 pm"
            arrivalAirport="Nashville (BNA)"
            showPriceHeader
          />
          <PaymentOptionSection selected="full" onSelect={() => {}} />
          <AuthLoginCard />
        </div>
        <div className="flex-1">
          <PriceSummaryCard
            category="Economy"
            image="https://images.unsplash.com/photo-1590600424262-38d39f98b898?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Emirates A380 Airbus"
            subtitle=""
            rating={4.2}
            reviews={90}
            priceItems={priceItems}
            total={400}
          />
        </div>
      </div>
    </Container>
  );
}
