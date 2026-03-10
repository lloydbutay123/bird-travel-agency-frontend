import { BookingStep, FlightStepId, StayStepId } from "./types";

export const bookingFlows: {
  flight: BookingStep<FlightStepId>[];
  stay: BookingStep<StayStepId>[];
} = {
  flight: [
    { id: "segment", label: "Booking Details" },
    { id: "passengers", label: "Guest Details" },
    { id: "payment", label: "Payment Details" },
    { id: "confirmation", label: "Confirmation" },
  ],
  stay: [
    { id: "segment", label: "Booking Details" },
    { id: "guests", label: "Guests Details" },
    { id: "payment", label: "Payment Details" },
    { id: "confirmation", label: "Confirmation" },
  ],
};
