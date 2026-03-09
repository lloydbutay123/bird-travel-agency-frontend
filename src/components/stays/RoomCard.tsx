import Image from "next/image";
import Button from "../ui/Button";

type RoomCardProps = {
  image: string;
  name: string;
  price: number;
};

export default function RoomCard({ image, name, price }: RoomCardProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-sm">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
        <p className="text-[16px] font-medium">{name}</p>
      </div>

      <div className="flex items-center gap-16">
        <p className="text-[24px] font-semibold">
          ${price}
          <span className="text-[14px]">/night</span>
        </p>
        <Button className="w-37.5">Book now</Button>
      </div>
    </div>
  );
}
