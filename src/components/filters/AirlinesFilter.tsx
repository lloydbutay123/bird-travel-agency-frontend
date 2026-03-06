import { airlines } from "@/data/airlines";
import Accordion from "../ui/Accordion";
import Checkbox from "../ui/Checkbox";

export default function AirlinesFilter() {
  return (
    <Accordion title="Airlines" defaultOpen>
      <div className="flex flex-col gap-2">
        {airlines.map((airline, i) => (
          <Checkbox key={i} label={airline} />
        ))}
      </div>
    </Accordion>
  );
}
