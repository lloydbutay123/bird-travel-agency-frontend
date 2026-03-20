import { FaEdit } from "react-icons/fa";
import Button from "../ui/Button";

type AccountInfoItemProps = {
  label: string;
  value: string;
  onEdit: () => void;
};

export default function AccountInfoItem({
  label,
  value,
  onEdit,
}: AccountInfoItemProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        <p className="text-[12px] lg:text-[16px] text-[#112211]/75">{label}</p>
        <h4 className="text-[16px] lg:text-[20px] font-semibold">{value}</h4>
      </div>
      <Button
        variant="outline"
        className="w-full sm:w-auto justify-center text-[14px] md:w-35"
        onClick={onEdit}
      >
        <FaEdit size={16} /> Change
      </Button>
    </div>
  );
}
