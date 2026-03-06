"use client";
import AirlinesFilter from "@/components/filters/AirlinesFilter";
import DepartureTimeFilter from "@/components/filters/DepartureTimeFilter";
import PriceFilter from "@/components/filters/PriceFilter";
import RatingsFilter from "@/components/filters/RatingsFilter";
import TripTypesFiler from "@/components/filters/TripTypesFilter";
import TravelSearch from "@/components/search/TravelSearch";
import Divider from "@/components/ui/Divider";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

export default function FlightResults() {
  return (
    <div className="flex flex-col gap-8 min-h-screen py-12">
      <TravelSearch position="relative" searchIcon={true} showActions={false} />
      <div className="w-full max-w-308 mx-auto flex gap-6">
        <div className="flex flex-col gap-8 w-full max-w-85.75">
          <h2 className="font-semibold text-[20px] text-[#112211]">Filters</h2>
          <PriceFilter />
          <Divider />
          <DepartureTimeFilter />
          <Divider />
          <RatingsFilter />
          <Divider />
          <AirlinesFilter />
          <Divider />
          <TripTypesFiler />
        </div>
        <div className="flex-1">
          <div className="h-340 flex gap-[15.5px]">
            <Divider orientation="vertical" />
            <div className="flex w-full flex-col gap-6">
              <div className="bg-white shadow-[0_4px_16px_rgba(17,34,17,0.05)] flex gap-6 rounded-xl px-6 py-4">
                <div className="max-w-40 w-full">
                  <h3 className="mb-2 text-[16px] font-semibold">Cheapest</h3>
                  <div className="flex gap-1 items-center text-[14px] text-[#112211]/40">
                    <p>$99</p>
                    <span>*</span>
                    <p>2h 18m</p>
                  </div>
                </div>
                <Divider orientation="vertical" />
                <div className="max-w-40 w-full">
                  <h3 className="mb-2 text-[16px] font-semibold">Best</h3>
                  <div className="flex gap-1 items-center text-[14px] text-[#112211]/40">
                    <p>$99</p>
                    <span>*</span>
                    <p>2h 18m</p>
                  </div>
                </div>
                <Divider orientation="vertical" />
                <div className="max-w-40 w-full">
                  <h3 className="text-[16px] font-semibold">Quickest</h3>
                  <div className="flex gap-1 items-center text-[14px] text-[#112211]/40">
                    <p>$99</p>
                    <span>*</span>
                    <p>2h 18m</p>
                  </div>
                </div>
                <Divider orientation="vertical" />
                <div className="flex gap-2 items-center max-w-40 w-full">
                  <IoMenuOutline size={24} />
                  <h3 className="text-[16px] font-semibold">Other sort</h3>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[14px] text-[#112211] font-semibold">
                  Showing 4 of
                  <span className="text-[#FF8682]"> 257 places</span>
                </p>

                <div className="flex items-center gap-1">
                  <p className="text-[14px]">
                    Sort by
                    <span className="font-semibold"> Recommended</span>
                  </p>
                  <IoIosArrowDown size={18} />
                </div>
              </div>

              <div className="flex flex-col gap-8 ">
                <div className="flex bg-white shadow-[0_4px_16px_rgba(17,34,17,0.05)] px-4 py-6 rounded-xl">
                  <div className="w-40">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/330px-Emirates_logo.svg.png"
                      alt="Emirates"
                      width={160}
                      height={80}
                      className="object-contain h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
