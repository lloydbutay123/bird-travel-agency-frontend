import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          subtitle={service.subtitle}
          image={service.image}
          btnLabel={service.btnLabel}
        />
      ))}
    </div>
  );
}
