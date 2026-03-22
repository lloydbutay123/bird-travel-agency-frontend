import Image from "next/image";
import Button from "../ui/Button";

type DestinationCardProps = {
  image: string;
  city: string;
  title: string;
  price: number;
  btnLabel?: string;
};

export default function DestinationCard({
  image,
  city,
  title,
  price,
  btnLabel = "Book a flight",
}: DestinationCardProps) {
  return (
    <div className="group relative h-95 sm:h-100 lg:h-105 rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute bottom-0 w-full p-4 sm:p-5 lg:p-6">
        <div className="flex items-end justify-between gap-3 mb-4">
          <div>
            <h3 className="text-white font-bold text-[24px] ">{city}</h3>
            <p className="text-white text-[14px] line-clamp-1">{title}</p>
          </div>
          <p className="text-[24px] font-semibold text-white">${price}</p>
        </div>
        <Button className="w-full">{btnLabel}</Button>
      </div>
    </div>
  );
}
