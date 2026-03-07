import Accordion from "../ui/Accordion";
import Checkbox from "../ui/Checkbox";

type CheckboxFilterGroupProps = {
  title: string;
  options: string[];
};

export default function CheckboxFilterGroup({
  title,
  options,
}: CheckboxFilterGroupProps) {
  return (
    <Accordion title={title} defaultOpen>
      <div className="flex flex-col gap-2">
        {options.map((option, i) => (
          <Checkbox key={i} label={option} />
        ))}
      </div>
    </Accordion>
  );
}
