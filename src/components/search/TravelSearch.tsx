"use client";
import { FaPlane, FaSearch } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import Button from "../ui/Button";
import Container from "../ui/Container";
import TravelSearchFields from "./FlightsSearchFields";
import StaySearchFields from "./StaySearchFields";

type TravelProps = {
  mode?: "flights" | "stays";
  header?: "tabs" | "title" | "none";
  top?: string | number;
  position?: "absolute" | "relative";
  onShowFlights?: () => void;
  onAddPromoCode?: () => void;
  searchIcon?: boolean;
  showActions?: boolean;
  btnIcon?: React.ReactNode;
  btnLabel?: string;
};

export default function TravelSearch({
  mode = "flights",
  header = "none",
  top = 133,
  position = "absolute",
  onShowFlights,
  onAddPromoCode,
  searchIcon,
  showActions = true,
  btnIcon = <IoIosSend size={16} />,
  btnLabel = "Show Flights",
}: TravelProps) {
  return (
    <Container
      style={
        position === "absolute"
          ? { top: typeof top === "number" ? `${top}px` : top }
          : undefined
      }
      className={`${position} ${position === "absolute" ? "left-1/2 -translate-x-1/2 " : "mx-auto"} w-81.75! lg:w-full! card rounded-2xl px-8 pt-4 pb-8 bg-white z-10`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-12">
          {header === "tabs" && (
            <div className="flex items-center gap-8">
              <div className="flex ">
                <FaPlane size={24} color="black" className="mr-2" />
                <p className="text-black font-semibold text-[14px] lg:text-[16px]">
                  Flights
                </p>
              </div>
              <div className="w-px bg-[#D7E2EE] h-12" />
              <div className="flex ">
                <IoBed size={24} color="black" className="mr-2" />
                <p className="text-black font-semibold text-[14px] lg:text-[16px]">
                  Stays
                </p>
              </div>
            </div>
          )}

          {header === "title" && (
            <div className="pt-4.5 font-semibold text-[20px] ">
              <p>
                {mode === "flights"
                  ? "Where are you flying?"
                  : "Where are you staying"}{" "}
              </p>
            </div>
          )}
          <div className="lg:flex gap-6 items-end">
            {mode === "flights" && <TravelSearchFields />}
            {mode === "stays" && <StaySearchFields />}

            {searchIcon && (
              <Button className="h-14 w-14">
                <FaSearch size={24} />
              </Button>
            )}
          </div>
        </div>
        {showActions && (
          <div className="flex justify-end gap-6">
            <Button
              onClick={onAddPromoCode}
              variant="ghost"
              className="hidden lg:block"
            >
              + Add Promo Code
            </Button>
            <Button
              onClick={onShowFlights}
              variant="primary"
              className="w-full"
            >
              {btnIcon} {btnLabel}
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}
