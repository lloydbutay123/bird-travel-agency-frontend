import { BsStars } from "react-icons/bs";
import StaysSectionHeader from "./StaysSectionHeader";

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
        <StaysSectionHeader title={title} action={action} />
      </div>
      {children}
    </div>
  );
}
