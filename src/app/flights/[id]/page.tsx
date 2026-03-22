"use client";
import { stepComponents } from "@/features/booking/step-registry";
import BookingLayout from "@/components/booking/BookingLayout";
import BookingNavigation from "@/components/booking/BookingNavigation";
import BookingStepper from "@/components/booking/BookingStepper";
import Container from "@/components/ui/Container";
import {
  nextStep,
  prevStep,
  setProductType,
} from "@/features/booking/bookingSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { bookingFlows } from "@/features/booking/booking-flow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function FlightDetails() {
  const dispatch = useDispatch();
  const { productType, stepIndex } = useSelector(
    (state: RootState) => state.booking,
  );

  useEffect(() => {
    dispatch(setProductType("flight"));
  }, [dispatch]);

  const flow = bookingFlows[productType];
  const currentStep = flow[stepIndex];
  const StepComponent =
    stepComponents.flight[
      currentStep.id as "segment" | "passengers" | "payment" | "confirmation"
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
      <Container className="px-4 sm:px-6 xl:px-0 pt-34.5 pb-30">
        <BookingStepper steps={flow} currentStepIndex={stepIndex} />
        <BookingLayout>
          <div className="flex flex-col gap-8">
            <StepComponent
              onNext={() => dispatch(nextStep())}
              onBack={() => dispatch(prevStep())}
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
