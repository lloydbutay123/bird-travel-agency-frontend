type CheckboxProps = {
  label: string;
};

export default function Checkbox({ label }: CheckboxProps) {
  return (
    <label className="flex gap-2 items-center">
      <input
        type="checkbox"
        name=""
        id=""
        className="h-4.5 w-4.5 accent-[#8DD3BB]"
      />
      <span className="text-[14px] font-medium text-[#112211]">{label}</span>
    </label>
  );
}
