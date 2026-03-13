"use client";

import AuthHeader from "@/components/auth/AuthHeader";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

const images = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
];

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState("");

  const router = useRouter();

  const handleVerify = () => {
    router.push("/auth/reset-password");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-26 p-25.5">
      <div className="w-full max-w-lg">
        <AuthHeader
          title="Verify Code"
          subtitle="An authentication code has been sent to your email."
          hasBackButton
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <TextField
              label="Enter Code"
              name="otp"
              type="email"
              value={otp}
              placeholder="Enter your email"
              onChange={(e) => setOtp(e.target.value)}
            />
            <p className=" text-[14px] font-medium ">
              Didn’t receive a code?{" "}
              <span className="text-[#FF8682]">Resend</span>
            </p>
          </div>
          <Button className="w-full" onClick={handleVerify}>
            Verify
          </Button>
        </div>
      </div>
      <div className="w-full h-full max-w-154.5 min-h-204 overflow-hidden rounded-[30px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="h-full min-h-204"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full min-h-204">
                <Image
                  src={src}
                  alt={`Auth image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
