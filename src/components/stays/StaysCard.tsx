import Image from "next/image";
import Divider from "../ui/Divider";
import Button from "../ui/Button";
import { FaRegHeart, FaStar } from "react-icons/fa";
import RatingBadge from "../ui/RatingBadge";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { RiCupFill } from "react-icons/ri";

type StaysCardProps = {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  location: string;
  onViewDetails: string;
};

export default function StaysCard({
  name,
  image,
  rating,
  reviews,
  price,
  location,
  onViewDetails,
}: StaysCardProps) {
  return (
    <div className="card flex bg-white rounded-xl">
      <div className="relative w-75 h-auto overflow-hidden rounded-l-xl">
        <Image src={image} alt="Emirates" fill className="object-cover" />
      </div>
      <div className="flex flex-col p-6 flex-1 w-full gap-6 px-6">
        <div className="flex w-full items-start gap-6 justify-between">
          <div>
            <h2 className="font-tradegothic text-[20px] font-bold mb-4">
              {name}
            </h2>
            <div>
              <div className="flex items-center mb-3 gap-0.5">
                <FaLocationDot size={16} />
                <p className="text-[12px] text-[#112211]/75 fonr-medium">
                  {location}
                </p>
              </div>
              <div className="flex items-center mb-3 gap-8">
                <div className="flex items-center gap-1">
                  <div className="flex items-center">
                    <FaStar size={16} color="#FF8682" />
                    <FaStar size={16} color="#FF8682" />
                    <FaStar size={16} color="#FF8682" />
                    <FaStar size={16} color="#FF8682" />
                    <FaStar size={16} color="#FF8682" />
                  </div>
                  <p className="text-[12px] font-medium">5 star hotel</p>
                </div>
                <div className="flex items-center gap-1">
                  <RiCupFill size={16} />
                  <p className="text-[12px] font-bold">
                    20+ <span className="font-medium"> Aminities</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <RatingBadge rating={rating} />
              <p className="text-[12px] font-bold">
                Very Good
                <span className="font-medium"> {reviews} reviews</span>
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-[12px] font-medium text-[#112211]/75 leading-none">
              starting from
            </p>
            <h2 className="text-[#FF8682] flex font-bold text-[24px] leading-none">
              ${price} <span className="text-[14px] leading-loose">/night</span>
            </h2>
            <p className="text-[12px] text-end font-medium text-[#112211]/75 leading-none">
              excl. tax
            </p>
          </div>
        </div>

        <Divider />

        <div className="flex gap-4">
          <Button className="w-12" variant="outline">
            <FaRegHeart size={20} />
          </Button>
          <Link href={onViewDetails} className="w-full">
            <Button className="w-full font-semibold!">View Place</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
