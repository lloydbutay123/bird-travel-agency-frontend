type FlighRouteProps = {
  departureTime: string;
  arrivalTime: string;
  airline: string;
  duration: string;
  route: string;
  stops?: string;
};

export default function FlightRoute({
  departureTime,
  arrivalTime,
  airline,
  duration,
  route,
  stops = "non stop",
}: FlighRouteProps) {
  return (
    <div className="flex items-start gap-10 mb-6">
      <div className="flex gap-3 items-start">
        <input type="checkbox" name="" id="" className="w-4.5 h-4.5" />
        <div>
          <div className="flex gap-2 mb-1">
            <p className="font-semibold text-[16px]">{departureTime}</p>
            <p className="font-semibold text-[16px]"> - </p>
            <p className="font-semibold text-[16px]">{arrivalTime}</p>
          </div>
          <p className="text-[14px] text-[#112211]/50">{airline}</p>
        </div>
      </div>
      <p className="text-[14px] font-semibold">{stops}</p>
      <div>
        <p className="font-semibold text-[16px]">{duration}</p>

        <p className="text-[14px] text-[#112211]/50">{route}</p>
      </div>
    </div>
  );
}
