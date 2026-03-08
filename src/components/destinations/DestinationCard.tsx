import Image from "next/image";
import Button from "../ui/Button";

type DestinationCardProps = {
  image: string;
  city: string;
  title: string;
  price: number;
};

export default function DestinationCard({
  image,
  city,
  title,
  price,
}: DestinationCardProps) {
  return (
    <div className="relative rounded-xl h-105 overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute bottom-0 w-full p-6">
        <div className="flex items-end justify-between gap-0.5 mb-4">
          <div>
            <h1 className="text-white font-bold text-[24px] ">{city}</h1>
            <p className="text-white text-[14px] line-clamp-1">{title}</p>
          </div>
          <p className="text-[24px] font-semibold text-white">${price}</p>
        </div>
        <Button className="w-full">Book Flight</Button>
      </div>
    </div>
  );
}
