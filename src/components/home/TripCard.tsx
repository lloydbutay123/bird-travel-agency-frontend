import Image from "next/image";

type TripCardProps = {
  image: string;
  name: string;
  type: string;
};

export default function TripCard({ image, name, type }: TripCardProps) {
  return (
    <div className="card p-4 flex items-center gap-4 rounded-2xl bg-white">
      <div className="relative w-22.5 h-22.5 rounded-lg overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[16px] font-semibold">{name}</p>
        <p className="font-medium text-[14px]">{type}</p>
      </div>
    </div>
  );
}
