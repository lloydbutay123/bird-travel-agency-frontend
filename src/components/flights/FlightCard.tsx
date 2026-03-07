import Image from "next/image";
import Divider from "../ui/Divider";
import Button from "../ui/Button";
import { FaRegHeart } from "react-icons/fa";
import FlightRoute from "./FlightRoute";
import RatingBadge from "../ui/RatingBadge";

type FlighCardProps = {
  airlineLogo: string;
  rating: number;
  reviews: number;
  price: number;
  departureTime: string;
  arrivalTime: string;
  stops: string;
  duration: string;
  airline: string;
  route: string;
  onViewDetails: () => void;
};

export default function FlightCard({
  airlineLogo,
  rating,
  reviews,
  price,
  departureTime,
  arrivalTime,
  stops,
  duration,
  airline,
  route,
  onViewDetails,
}: FlighCardProps) {
  return (
    <div className="flex bg-white shadow-[0_4px_16px_rgba(17,34,17,0.05)] px-4 py-6 rounded-xl">
      <div className="w-40">
        <Image
          src={airlineLogo}
          alt="Emirates"
          width={160}
          height={80}
          className="object-contain h-auto"
        />
      </div>
      <div className="flex flex-col flex-1 w-full gap-4 px-6">
        <div className="flex w-full items-start justify-between">
          <div className="flex items-center gap-2">
            <RatingBadge rating={3.5} />
            <p className="text-[12px] font-bold">
              Very Good
              <span className="font-medium"> {reviews} reviews</span>
            </p>
          </div>
          <div className="text-end">
            <p className="text-[12px] font-medium text-[#112211]/75 leading-3">
              starting from
            </p>
            <h2 className="text-[#FF8682] font-bold text-[24px] leading-6">
              ${price}
            </h2>
          </div>
        </div>
        <div>
          <FlightRoute
            departureTime={departureTime}
            arrivalTime={arrivalTime}
            stops={stops}
            duration={duration}
            airline={airline}
            route={route}
          />
        </div>

        <Divider />

        <div className="flex gap-4">
          <Button className="w-12" variant="outline">
            <FaRegHeart size={20} />
          </Button>
          <Button className="w-full" onClick={onViewDetails}>
            View Deals
          </Button>
        </div>
      </div>
    </div>
  );
}
