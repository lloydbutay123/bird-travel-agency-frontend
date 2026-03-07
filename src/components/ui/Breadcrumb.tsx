import { IoIosArrowForward } from "react-icons/io";

type BreadcrumbItem = {
  label: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mb-8">
          <p
            className={`text-[14px] font-medium ${
              index === items.length - 1
                ? "text-[#112211]/75"
                : "text-[#FF8682]"
            }`}
          >
            {item.label}
          </p>
          {index !== items.length - 1 && <IoIosArrowForward size={16} />}
        </div>
      ))}
    </div>
  );
}
