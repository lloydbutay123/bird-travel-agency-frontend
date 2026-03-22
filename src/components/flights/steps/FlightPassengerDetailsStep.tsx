"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type FlightPassengerDetailsStepProps = {
  onNext: () => void;
  onBack: () => void;
};

export default function FlightPassengerDetailsStep({
  onNext,
  onBack,
}: FlightPassengerDetailsStepProps) {
  return (
    <Container className="mt-12 pb-30">
      <div className="rounded-xl bg-white p-6">
        <h2 className="mb-6 text-[24px] font-bold">Guest Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="rounded-lg border border-gray-300 px-4 py-3 outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="rounded-lg border border-gray-300 px-4 py-3 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-gray-300 px-4 py-3 outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="rounded-lg border border-gray-300 px-4 py-3 outline-none"
          />
        </div>
      </div>
    </Container>
  );
}
