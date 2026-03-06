import Accordion from "../ui/Accordion";
import Button from "../ui/Button";

export default function RatingsFilter() {
  return (
    <Accordion title="Rating" defaultOpen>
      <div className="flex gap-4">
        <Button variant="outline" className="text-[12px]!">
          0+
        </Button>
        <Button variant="outline" className="text-[12px]!">
          1+
        </Button>
        <Button variant="outline" className="text-[12px]!">
          2+
        </Button>
        <Button variant="outline" className="text-[12px]!">
          3+
        </Button>
        <Button variant="outline" className="text-[12px]!">
          4+
        </Button>
      </div>
    </Accordion>
  );
}
