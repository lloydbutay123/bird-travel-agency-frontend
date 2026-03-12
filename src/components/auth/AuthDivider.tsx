import Divider from "../ui/Divider";

type AuthDividerProps = {
  text: string;
};

export default function AuthDivider({ text }: AuthDividerProps) {
  return (
    <div className="flex items-center gap-4">
      <Divider />
      <p className="text-[14px] whitespace-nowrap">{text}</p>
      <Divider />
    </div>
  );
}
