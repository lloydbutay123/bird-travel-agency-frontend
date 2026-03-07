import { FaClock, FaPlane, FaWifi } from "react-icons/fa";
import Divider from "../ui/Divider";
import { IoFastFood } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import Image from "next/image";

type FlightSegmentCardProps = {
  date: string;
  duration: string;
  airlineLogo: string;
  airline: string;
  aircraft: string;
  features: string[];
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
};

const featureIcons: Record<string, React.ReactNode> = {
  plane: <FaPlane size={24} />,
  wifi: <FaWifi size={24} />,
  time: <FaClock size={24} />,
  food: <IoFastFood size={24} />,
  seat: <MdAirlineSeatReclineNormal size={24} />,
};

export default function FlightSegmentCard({
  date,
  duration,
  airlineLogo,
  airline,
  aircraft,
  features,
  departureTime,
  departureAirport,
  arrivalTime,
  arrivalAirport,
}: FlightSegmentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_16px_rgba(17,34,17,0.05)] px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-tradegothic text-[20px] font-bold text-[#112211]">
          {date}
        </h4>
        <p className="text-[20px] font-medium text-[#112211]/75">{duration}</p>
      </div>
      <div className="flex  items-center justify-between mb-10">
        <div className="flex gap-6 items-center px-8 py-4 border border-[#8DD3BB] rounded-lg">
          <div className="w-16 h-11.25 relative">
            <Image src={airlineLogo} alt="" fill className="object-contain" />
          </div>
          <div>
            <h3 className="mb-2 text-[24px] font-semibold text-[#112211]">
              {airline}
            </h3>
            <p className="text-[14px] text-[#112211]/60">{aircraft}</p>
          </div>
        </div>
        <div className="px-6 py-4 flex items-center gap-6">
          {features.map((feature, index) => (
            <div key={feature} className="flex h-12 items-center gap-6">
              {featureIcons[feature]}
              {index !== features.length - 1 && (
                <Divider orientation="vertical" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-20">
        <div className="flex items-center gap-4">
          <h4 className="text-[24px] text-[#112211] font-semibold">
            {departureTime}
          </h4>
          <p className="text-[16px] text-[#112211]/60 font-medium">
            {departureAirport}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative w-9 border border-[#000000]">
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black" />
          </div>
          <FaPlane size={48} />
          <div className="relative w-9 border border-[#000000]">
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <h4 className="text-[24px] text-[#112211] font-semibold">
            {arrivalTime}
          </h4>
          <p className="text-[16px] text-[#112211]/60 font-medium">
            {arrivalAirport}
          </p>
        </div>
      </div>
    </div>
  );
}
