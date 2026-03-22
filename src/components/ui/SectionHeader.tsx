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
    <div className="lg:flex items-center justify-between">
      <div className="mb-4 lg:mb-0">
        <p
          className={`${subtitle ? "mb-4" : "mb-0"} font-tradegothic text-[32px] font-semibold`}
        >
          {title}
        </p>
        <p className="text-[16px] w-full max-w-212.75">{subtitle}</p>
      </div>
      {btnLabel && (
        <Button onClick={onClick} variant="outline" className="ml-auto">
          {btnLabel}
        </Button>
      )}
    </div>
  );
}
