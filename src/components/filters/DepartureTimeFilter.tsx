import Accordion from "../ui/Accordion";
import { useState } from "react";
import SliderCoponent from "../ui/Slider";

export default function DepartureTimeFilter() {
  const [value, setValue] = useState([6, 18]);

  const min = 0;
  const max = 24;

  const formatTime = (hour: number) => {
    const normalizedHour = hour % 24;
    const suffix = normalizedHour >= 12 ? "PM" : "AM";
    const displayHour = normalizedHour % 12 === 0 ? 12 : normalizedHour % 12;
    return `${displayHour}:00 ${suffix}`;
  };
  return (
    <Accordion title="Departure Time" defaultOpen>
      <div className="h-4" />

      <SliderCoponent
        value={value}
        min={min}
        max={max}
        step={1}
        onValueChange={setValue}
        formatLabel={formatTime}
      />
    </Accordion>
  );
}
