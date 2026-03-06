import { tripTypes } from "@/data/trips";
import Accordion from "../ui/Accordion";
import Checkbox from "../ui/Checkbox";

export default function TripTypesFiler() {
  return (
    <Accordion title="Trips" defaultOpen>
      <div className="flex flex-col gap-2">
        {tripTypes.map((type, i) => (
          <Checkbox key={i} label={type} />
        ))}
      </div>
    </Accordion>
  );
}
