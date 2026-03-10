import FlightBookingDetailsStep from "@/components/flights/steps/FlightBookingDetailsStep";
import BookingConfirmationStep from "@/components/booking/steps/BookingConfirmationStep";
import FlightPassengerDetailsStep from "@/components/flights/steps/FlightPassengerDetailsStep";
import FlightPaymentDetails from "@/components/flights/steps/FlightPaymentDetails";
import StayBookingDetailsPage from "@/components/stays/steps/StayBookingDetails";

export const stepComponents = {
  flight: {
    segment: FlightBookingDetailsStep,
    passengers: FlightPassengerDetailsStep,
    payment: FlightPaymentDetails,
    confirmation: BookingConfirmationStep,
  },

  stay: {
    segment: StayBookingDetailsPage,
    guests: FlightPassengerDetailsStep,
    payment: FlightPaymentDetails,
    confirmation: BookingConfirmationStep,
  },
};
