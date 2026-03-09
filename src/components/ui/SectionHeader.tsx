"use client";
import Button from "./Button";

type SearchButtonProps = {
  title?: string;
  subtitle?: string;
  onClick?: () => void;
  btnLabel?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  onClick,
  btnLabel,
}: SearchButtonProps) {
  return (
    <div className="flex mx-auto items-center justify-between mb-10">
      <div>
        <p className="mb-4 text-[32px] font-semibold">{title}</p>
        <p className="text-[16px] text-[#112211] w-full max-w-212.75">
          {subtitle}
        </p>
      </div>
      {btnLabel && (
        <Button onClick={onClick} variant="outline">
          {btnLabel}
        </Button>
      )}
    </div>
  );
}
