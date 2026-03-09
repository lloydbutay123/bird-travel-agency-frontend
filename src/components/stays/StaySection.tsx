import StaysDetailsSectionHeader from "./StaysDetailsSectionHeader";

type ListingSectionProps = {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

export default function ListingSection({
  title,
  action,
  children,
}: ListingSectionProps) {
  return (
    <div>
      <div>
        <StaysDetailsSectionHeader title={title} action={action} />
      </div>
      {children}
    </div>
  );
}
