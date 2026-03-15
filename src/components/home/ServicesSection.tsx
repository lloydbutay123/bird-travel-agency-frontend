import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid gap-6 px-6 xl:px-0">
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
