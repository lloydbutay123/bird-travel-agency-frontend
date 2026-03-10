import Button from "../ui/Button";

type BookingNavigationProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  onBack: () => void;
  onNext: () => void;
};

export default function BookingNavigation({
  isFirstStep,
  isLastStep,
  onBack,
  onNext,
}: BookingNavigationProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        type="button"
        onClick={onBack}
        disabled={isFirstStep}
        variant="outline"
        className="w-44.5 font-semibold"
      >
        Back
      </Button>

      <Button type="button" onClick={onNext} className="w-44.5 font-semibold">
        {isLastStep ? "Finish" : "Next"}
      </Button>
    </div>
  );
}
