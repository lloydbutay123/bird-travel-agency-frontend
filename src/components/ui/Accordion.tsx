"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type AccordionProps = {
  title: string;
  defaultOpen: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Accordion({
  title,
  defaultOpen = false,
  children,
  className,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        className="flex justify-between w-full items-center mb-4"
        onClick={() => setOpen(!open)}
      >
        <span className={`font-semibold text-[16px] ${className}`}>
          {title}
        </span>
        <IoIosArrowDown
          size={24}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
