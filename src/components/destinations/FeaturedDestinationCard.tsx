import Image from "next/image";
import Button from "../ui/Button";

type FeaturedDestinationCardProps = {
  title: string;
  price: number;
  description: string | undefined;
  gallery?: string[];
};

export default function FeaturedDestinationCard({
  title,
  price,
  description,
  gallery,
}: FeaturedDestinationCardProps) {
  return (
    <div className="flex w-full gap-6">
      <div className="flex flex-col justify-between h-106 p-6  bg-[#8DD3BB] rounded-[20px]">
        <div className="w-full max-w-126">
          <div className="flex justify-between items-start mb-6">
            <h1 className="font-tradegothic text-[#112211] font-bold text-[40px] max-w-90 leading-tight">
              {title}
            </h1>
            <div className="flex flex-col gap-1 p-2 text-center bg-white rounded-lg">
              <p className="text-[14px]">From</p>
              <p className="text-[20px] font-semibold">${price}</p>
            </div>
          </div>
          <p className="text-[14px]">{description}</p>
        </div>
        <Button variant="secondary">Book Flight</Button>
      </div>

      <div className="flex-1">
        <div className="grid grid-cols-2 gap-5">
          {gallery?.map((img, i) => (
            <div key={i} className="h-50 relative rounded-xl overflow-hidden">
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
