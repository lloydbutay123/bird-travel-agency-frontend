"use client";

import Container from "@/components/ui/Container";
import React, { useEffect } from "react";
import BookingStepper from "@/components/booking/BookingStepper";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import {
  nextStep,
  prevStep,
  setProductType,
} from "@/features/booking/bookingSlice";
import { stepComponents } from "@/features/booking/step-registry";
import BookingLayout from "@/components/booking/BookingLayout";
import BookingNavigation from "@/components/booking/BookingNavigation";
import { useRouter } from "next/navigation";
import { bookingFlows } from "@/features/booking/booking-flow";

export default function StayDetailsPage() {
  const dispatch = useDispatch();
  const { productType, stepIndex } = useAppSelector((state) => state.booking);

  useEffect(() => {
    dispatch(setProductType("stay"));
  }, [dispatch]);

  const flow = bookingFlows[productType];
  const currentStep = flow[stepIndex];
  const StepComponent =
    stepComponents.stay[
      currentStep.id as "segment" | "guests" | "payment" | "confirmation"
    ];

  const router = useRouter();

  const handleNext = () => {
    if (stepIndex === flow.length - 1) {
      router.push("/");
    } else {
      dispatch(nextStep());
    }
  };

  return (
    <div className="min-h-screen">
      <Container className="px-6 xl:px-0 pt-34.5 pb-30">
        <BookingStepper steps={flow} currentStepIndex={stepIndex} />
        <BookingLayout>
          <div className="flex flex-col gap-8">
            <StepComponent
              onBack={() => dispatch(prevStep())}
              onNext={() => dispatch(nextStep())}
            />
            {stepIndex > 0 && (
              <BookingNavigation
                isFirstStep={stepIndex === 0}
                isLastStep={stepIndex === flow.length - 1}
                onBack={() => dispatch(prevStep())}
                onNext={handleNext}
              />
            )}
          </div>
        </BookingLayout>
      </Container>
    </div>
  );
}
