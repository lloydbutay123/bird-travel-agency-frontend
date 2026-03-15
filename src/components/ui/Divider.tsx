type DividerProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export default function Divider({
  orientation = "horizontal",
  className,
}: DividerProps) {
  return orientation === "horizontal" ? (
    <div className={`w-full h-[0.5px] bg-[#112211]/25 ${className}`} />
  ) : (
    <div className={`w-[0.5px] h-full bg-[#112211]/25 ${className}`} />
  );
}
