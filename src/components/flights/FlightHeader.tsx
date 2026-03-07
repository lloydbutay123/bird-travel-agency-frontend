"use client";

import { FaLocationDot, FaShareNodes } from "react-icons/fa6";
import RatingBadge from "../ui/RatingBadge";
import Button from "../ui/Button";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

type FlightHeaderProps = {
  title: string;
  location: string;
  ratings: number;
  reviews: number;
  price: number;
  bookingHref: string;
};

export default function FlightHeader({
  title,
  location,
  ratings,
  reviews,
  price,
  bookingHref,
}: FlightHeaderProps) {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <h2 className="font-tradegothic text-[24px] text-[#112211] font-bold mb-4">
          {title}
        </h2>
        <div className="flex items-center gap-1 mb-2">
          <FaLocationDot size={18} />
          <p className="text-[14px] text-[#112211]/75 font-medium">
            {location}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <RatingBadge rating={ratings} />
          <p className="text-[12px] text-[#112211] font-bold">
            Very Good
            <span className="font-medium"> {reviews} reviews</span>
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-[#FF8682] text-[32px] font-bold mb-4">${price}</h3>
        <div className="flex gap-3.75">
          <Button variant="outline" className="w-12 h-12">
            <FaRegHeart size={20} />
          </Button>
          <Button variant="outline" className="w-12 h-12">
            <FaShareNodes size={20} />
          </Button>
          <Link href={bookingHref}>
            <Button className="font-semibold text-[14px] w-37.5 justify-center">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
