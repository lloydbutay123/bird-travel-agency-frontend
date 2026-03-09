"use client";

import Accordion from "../ui/Accordion";
import { useState } from "react";
import SliderCoponent from "../ui/Slider";

export default function PriceFilter() {
  const [value, setValue] = useState([200, 800]);

  const min = 50;
  const max = 1200;
  return (
    <Accordion title="Price" defaultOpen>
      <div className="h-4 " />
      <SliderCoponent
        value={value}
        min={min}
        max={max}
        onValueChange={setValue}
        step={50}
        formatLabel={(value) => `$${value}`}
      />
    </Accordion>
  );
}
