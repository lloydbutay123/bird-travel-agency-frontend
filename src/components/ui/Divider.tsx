type DividerProps = {
  orientation?: "horizontal" | "vertical";
};

export default function Divider({ orientation = "horizontal" }: DividerProps) {
  return orientation === "horizontal" ? (
    <div className="w-full h-[0.5px] bg-[#112211]/25" />
  ) : (
    <div className="w-[0.5px] h-full bg-[#112211]/25" />
  );
}
