import PaymentOptionCard from "./PaymentOptionCard";

type PaymentOptionSectionProps = {
  selected: string;
  onSelect: (value: string) => void;
};

export default function PaymentOptionSection({
  selected,
  onSelect,
}: PaymentOptionSectionProps) {
  return (
    <div className="card p-4 flex flex-col gap-4 rounded-xl bg-white">
      <PaymentOptionCard
        title="Pay in full"
        description="Pay the total and you are all set"
        value="full"
        selected={selected == "full"}
        onSelect={onSelect}
      />

      <PaymentOptionCard
        title="Pay part now, part later"
        description="Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees."
        value="partial"
        moreInfo
        selected={selected === "partial"}
        onSelect={onSelect}
      />
    </div>
  );
}
