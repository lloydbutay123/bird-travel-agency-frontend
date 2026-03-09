type SectionHeaderProps = {
  title: string;
  action?: React.ReactNode;
};

export default function StaysDeatilsSectionHeader({
  title,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-tradegothic text-[20px] font-bold">{title}</h3>
      {action}
    </div>
  );
}
