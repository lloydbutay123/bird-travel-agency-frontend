import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingProductType } from "./types";
import { bookingFlows } from "./booking-flow";

type BookingState = {
  productType: BookingProductType;
  stepIndex: number;
  paymentOption: string;
};

const initialState: BookingState = {
  productType: "flight",
  stepIndex: 0,
  paymentOption: "full",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setProductType: (state, action: PayloadAction<BookingProductType>) => {
      state.productType = action.payload;
      state.stepIndex = 0;
    },

    setStepIndex: (state, action: PayloadAction<number>) => {
      state.stepIndex = action.payload;
    },

    nextStep: (state) => {
      const flow = bookingFlows[state.productType];
      if (state.stepIndex < flow.length - 1) {
        state.stepIndex += 1;
      }
    },

    prevStep: (state) => {
      if (state.stepIndex > 0) {
        state.stepIndex -= 1;
      }
    },

    setPaymentOption: (state, action: PayloadAction<string>) => {
      state.paymentOption = action.payload;
    },

    resetBooking: (state) => {
      state.stepIndex = 0;
      state.paymentOption = "full";
    },
  },
});

export const {
  setProductType,
  setStepIndex,
  nextStep,
  prevStep,
  setPaymentOption,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
