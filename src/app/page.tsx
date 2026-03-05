"use client";
import Image from "next/image";
import { FaGoogle, FaPlane } from "react-icons/fa";
import { IoIosAdd, IoIosArrowDown, IoIosSend, IoMdStar } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import { LuArrowRightLeft } from "react-icons/lu";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { trips } from "@/data/trips";
import { reviews } from "@/data/reviews";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full justify-center pt-7.5">
      <div className="relative mx-auto w-full max-w-345 h-149.75 rounded-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="absolute left-1/2 flex-col gap-4 w-full -translate-x-1/2 text-center top-45">
        <div className="flex flex-col gap-1">
          <p className="font-tradegothic text-[45px] font-bold text-white">
            Helping Others
          </p>
          <p className="font-tradegothic font-bold text-[80px] text-white leading-none">
            LIVE & TRAVEL
          </p>
        </div>
        <p className="text-[20px] font-semibold text-white">
          Special offers to suit your plan
        </p>
      </div>

      <div className="absolute left-1/2 drop-shadow-xs w-full max-w-308 -translate-x-1/2 rounded-2xl px-8 pt-4 pb-8 bg-white top-133">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-8">
              <div className="flex ">
                <FaPlane size={24} color="black" className="mr-2" />
                <p className="text-black font-semibold text-[16px]">Flights</p>
              </div>
              <div className="w-px bg-[#D7E2EE] h-12" />
              <div className="flex ">
                <IoBed size={24} color="black" className="mr-2" />
                <p className="text-black font-semibold text-[16px]">Stays</p>
              </div>
            </div>
            <div className="flex gap-6">
              <fieldset className="flex-1 border border-gray-400 rounded-md pl-4 py-1">
                <legend className="px-2 text-sm text-gray-500">
                  From - To
                </legend>
                <div className="flex items-center justify-between">
                  <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
                    Lahore - Karachi
                  </span>
                  <div className="px-3">
                    <LuArrowRightLeft size={24} />
                  </div>
                </div>
              </fieldset>
              <fieldset className="w-35 border border-gray-400 rounded-md pl-4 py-1">
                <legend className="px-2 text-sm text-gray-500">Trip</legend>
                <div className="flex items-center justify-between">
                  <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
                    Return
                  </span>
                  <div className="px-3">
                    <IoIosArrowDown size={24} />
                  </div>
                </div>
              </fieldset>
              <fieldset className="flex-1 border border-gray-400 rounded-md pl-4 py-1">
                <legend className="px-2 text-sm text-gray-500">
                  Depart- Return
                </legend>
                <div className="flex items-center justify-between">
                  <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
                    07 Nov 22 - 13 Nov 22
                  </span>
                </div>
              </fieldset>
              <fieldset className="flex-1 border border-gray-400 rounded-md pl-4 py-1">
                <legend className="px-2 text-sm text-gray-500">
                  Passenger - Class
                </legend>
                <div className="flex items-center justify-between">
                  <span className="text-[16px] h-10 flex items-center font-medium text-gray-800">
                    1 Passenger, Economy
                  </span>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="flex justify-end gap-6">
            <Button onClick={() => {}} variant="ghost">
              + Add Promo Code
            </Button>
            <Button onClick={() => {}} variant="primary">
              <IoIosSend size={16} /> Show Flights
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-60 mb-20">
        <div className="flex  mx-auto items-center justify-between mb-10 w-full max-w-308">
          <div>
            <p className="mb-4 text-[32px] font-semibold">
              Plan your perfect trip
            </p>
            <p className="text-[16px] text-[#112211]">
              Search Flights & Places Hire to our most popular destinations
            </p>
          </div>
          <Button onClick={() => {}} variant="outline">
            See more places
          </Button>
        </div>
        <div className="grid mx-auto grid-cols-3 gap-8 w-full max-w-308">
          {trips.map((t, i) => {
            return (
              <div
                key={i}
                className="p-4 flex items-center shadow-lg gap-4 rounded-2xl bg-white"
              >
                <div className="relative w-22.5 h-22.5 rounded-lg overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[16px] font-semibold text-[#112211]">
                    {t.name}
                  </p>
                  <p className="font-medium text-[14px] text-[#112211]">
                    {t.type}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid mx-auto grid-cols-2 gap-6 w-full max-w-308 mb-17.5">
        <div className="relative rounded-[20px] w-full h-139.75">
          <Image
            src="/assets/images/Rectangle40.png"
            alt="/assets/images/Rectangle40.png"
            fill
            className="absolute"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-97.25 text-center">
              <div className="mb-4">
                <p className="font-tradegothic text-white text-[40px] font-bold">
                  Flights
                </p>
                <p className="text-white text-[16px]">
                  Search Flights & Places Hire to our most popular destinations
                </p>
              </div>
              <Button onClick={() => {}} variant="primary" className="mx-auto">
                <IoIosSend size={16} /> Show Flights
              </Button>
            </div>
          </div>
        </div>
        <div className="relative rounded-[20px] w-full h-139.75">
          <Image
            src="/assets/images/Rectangle40.png"
            alt="/assets/images/Rectangle40.png"
            fill
            className="absolute"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-97.25 text-center">
              <div className="mb-4">
                <p className="font-tradegothic text-white text-[40px] font-bold">
                  Flights
                </p>
                <p className="text-white text-[16px]">
                  Search Flights & Places Hire to our most popular destinations
                </p>
              </div>
              <Button onClick={() => {}} variant="primary" className="mx-auto">
                <IoIosSend size={16} /> Show Flights
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mb-22.5">
        <div className="flex mx-auto items-center justify-between w-full max-w-308 mb-10">
          <div>
            <p className="mb-4 text-[32px] font-semibold">Reviews</p>
            <p className="text-[16px] text-[#112211]">
              What people says about Golobe facilities
            </p>
          </div>
          <Button variant="outline" onClick={() => {}}>
            See All
          </Button>
        </div>
        <div className="w-full max-w-310 mx-auto">
          <Swiper
            modules={[Pagination]}
            loop
            pagination={{ clickable: true }}
            watchSlidesProgress={false}
            observer={true}
            observeParents={true}
            spaceBetween={40}
            slidesPerView={1}
            speed={450}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className=""
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id} className="pb-10 h-auto">
                <div className="relative h-full">
                  {/* offset background */}
                  <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[20px] bg-[#8DD3BB]/40" />

                  {/* card */}
                  <div className="relative h-full rounded-[20px] bg-white shadow-lg p-5 lg:p-6">
                    <div className="mb-6">
                      <p className="font-tradegothic line-clamp-2 min-h-20 text-[18px] lg:text-[20px] font-bold leading-snug">
                        &apos;{r.title}&apos;
                      </p>

                      <p className="mt-3 text-[14px] lg:text-[15px] text-[#112211]/60 line-clamp-2">
                        {r.review}
                      </p>

                      <button className="font-tradegothic mt-3 ml-auto block font-bold text-[14px] lg:text-[15px]">
                        View more
                      </button>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <IoMdStar size={20} color="#FFC107" />
                        <IoMdStar size={20} color="#FFC107" />
                        <IoMdStar size={20} color="#FFC107" />
                        <IoMdStar size={20} color="#FFC107" />
                        <IoMdStar size={20} color="#FFC107" />
                      </div>

                      <p className="font-tradegothic font-bold">{r.author}</p>
                      <p className="text-[12px] text-[#112211]/50">
                        {r.company}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <FaGoogle size={18} />
                        <p className="font-tradegothic text-[12px] font-bold text-[#112211]/40">
                          {r.source}
                        </p>
                      </div>
                    </div>

                    {/* image */}
                    <div className="relative w-full h-45 lg:h-50 rounded-lg overflow-hidden">
                      <Image
                        src={r.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
