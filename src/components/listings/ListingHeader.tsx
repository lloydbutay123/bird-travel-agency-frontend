import { FaRegHeart, FaStar } from "react-icons/fa";
import Button from "../ui/Button";
import { FaLocationDot, FaShareNodes } from "react-icons/fa6";
import Link from "next/link";
import RatingBadge from "../ui/RatingBadge";

type ListingHeaderProps = {
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  bookingHref: string;
  showHotelStars?: boolean;
};

export default function ListingHeader({
  title,
  location,
  rating,
  reviews,
  price,
  bookingHref,
  showHotelStars,
}: ListingHeaderProps) {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-tradegothic text-[24px] text-[#112211] font-bold">
            {title}
          </h2>
          {showHotelStars && (
            <div className="flex items-center gap-1">
              <FaStar size={16} color="#FF8682" />
              <p className="text-[12px] font-medium">5 star hotel</p>
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
        <h3 className="text-[#FF8682] text-[32px] font-bold mb-4">${price}</h3>
        <div className="flex gap-3.75">
          <Button variant="outline" className="w-12">
            <FaRegHeart size={20} />
          </Button>
          <Button variant="outline" className="w-12">
            <FaShareNodes size={20} />
          </Button>
          <Link href={bookingHref}>
            <Button className="font-semibold! text-[14px] w-37.5">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
