import Image from "next/image";
import Divider from "../ui/Divider";
import RatingBadge from "../ui/RatingBadge";

type PriceItem = {
  label: string;
  value: number;
};

type PriceSummaryCardProps = {
  category: string;
  image: string;
  title: string;
  subtitle: string;
  rating: number;
  reviews: number;
  priceItems: PriceItem[];
  total: number;
};

export default function PriceSummaryCard({
  category,
  image,
  title,
  subtitle,
  rating,
  reviews,
  priceItems,
  total,
}: PriceSummaryCardProps) {
  return (
    <div className="card flex-1 flex flex-col gap-4 bg-white rounded-xl p-6">
      <div className="flex items-center gap-6">
        <div className="h-30 w-30 rounded-xl relative overflow-hidden">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
        <div>
          <p className="text-[16px] font-medium mb-1">{category}</p>
          <h4 className="text-[20px] font-semibold text-[#112211] mb-5">
            {title} {subtitle}
          </h4>
          <div className="flex items-center gap-2">
            <RatingBadge rating={rating} />
            <p className="text-[12px] font-bold ">
              Very Good
              <span className="font-medium"> {reviews} reviews</span>
            </p>
          </div>
        </div>
      </div>
      <Divider />
      <p className="text-[#112211] text-[16px]">
        Your booking is protected by <span className="font-bold">BIRD</span>
      </p>
      <Divider />
      <div className="flex flex-col gap-4">
        <h4 className="text-[16px] font-bold">Price Details</h4>
        {priceItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <p className="text-[16px] font-medium">{item.label}</p>
            <p className="text-[16px] font-semibold">${item.value}</p>
          </div>
        ))}
      </div>
      <Divider />
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-medium">Total </p>
        <p className="text-[16px] font-semibold">${total}</p>
      </div>
    </div>
  );
}
