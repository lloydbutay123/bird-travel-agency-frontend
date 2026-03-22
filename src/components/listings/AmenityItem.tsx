type AmenityItemProps = {
  label: string;
  icon: React.ReactNode;
};

export default function AmenityItem({ label, icon }: AmenityItemProps) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <p className="text-[16px] font-medium">{label}</p>
    </div>
  );
}
