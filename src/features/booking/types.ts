export type BookingProductType = "flight" | "stay";

export type FlightStepId =
  | "segment"
  | "passengers"
  | "payment"
  | "confirmation";

export type StayStepId = "segment" | "guests" | "payment" | "confirmation";

export type BookingStep<TStepId extends string> = {
  id: TStepId;
  label: string;
};
