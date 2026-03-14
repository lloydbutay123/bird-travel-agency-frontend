import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <div className="flex flex-col lg:grid grid-cols-2 gap-6 px-6 xl:px-0">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          subtitle={service.subtitle}
          image={service.image}
          btnLabel={service.btnLabel}
          btnHref={service.href}
        />
      ))}
    </div>
  );
}
