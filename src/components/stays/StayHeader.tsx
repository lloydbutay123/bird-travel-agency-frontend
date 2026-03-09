"use client";

import { FaRegHeart, FaStar } from "react-icons/fa";
import Button from "../ui/Button";
import { FaLocationDot, FaShareNodes } from "react-icons/fa6";
import Link from "next/link";
import RatingBadge from "../ui/RatingBadge";
import { usePathname } from "next/navigation";

type StayHeaderProps = {
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  bookingHref: string;
  showHotelStars?: boolean;
  hotelStars?: number;
};

export default function StayHeader({
  title,
  location,
  rating,
  reviews,
  price,
  bookingHref,
  showHotelStars,
  hotelStars = 5,
}: StayHeaderProps) {
  const pathname = usePathname();
  const isStays = pathname.includes("/stays");

  return (
    <div className="flex justify-between mb-8">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-tradegothic text-[24px] text-[#112211] font-bold">
            {title}
          </h2>
          {showHotelStars && (
            <div className="flex items-center gap-1">
              {Array.from({ length: hotelStars }).map((_, i) => (
                <FaStar key={i} size={16} color="#FF8682" />
              ))}
              <p className="text-[12px] font-medium">{hotelStars} star hotel</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 mb-2">
          <FaLocationDot size={18} />
          <p className="text-[14px] text-[#112211]/75 font-medium">
            {location}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <RatingBadge rating={rating} />
          <p className="text-[12px] text-[#112211] font-bold">
            Very Good
            <span className="font-medium"> {reviews} reviews</span>
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-[#FF8682] text-end text-[32px] font-bold mb-4">
          ${price}
          {isStays && (
            <span className="text-[#FF8682] text-[14px]">/night</span>
          )}
        </h3>
        <div className="flex gap-3.75">
          <Button variant="outline" className="w-12">
            <FaRegHeart size={20} />
          </Button>
          <Button variant="outline" className="w-12">
            <FaShareNodes size={20} />
          </Button>
          <Link href={bookingHref}>
            <Button className="font-semibold text-[14px] w-37.5">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
