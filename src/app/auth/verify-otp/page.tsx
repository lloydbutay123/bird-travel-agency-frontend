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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { API_URL } from "@/lib/api";
import AuthRedirect from "@/components/auth/AuthRedirect";

const images = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
];

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isAuth = pathname.includes("/auth");
  const email = searchParams.get("email") || "";

  const handleVerify = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_URL}/api/v1/users/verify-reset-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "OTP verification failed");
        return;
      }

      router.push(
        `/auth/reset-password?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`,
      );
    } catch (error) {
      setError("Something wen wrong. Please try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setResending(true);
      setError("");

      const res = await fetch(`${API_URL}/api/v1/users/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to resend OTP");
        return;
      }
    } catch (error) {
      setError("Something went wrong. Please try again");
      console.log(error);
    } finally {
      setResending(false);
    }
  };

  return (
    <AuthRedirect>
      <div className="flex min-h-screen w-full items-center justify-center gap-26 p-6 md:p-25.5">
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
                type="text"
                value={otp}
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
              />
              <p className=" text-[14px] font-medium">
                Didn’t receive a code?{" "}
                <span className="text-[#FF8682]" onClick={handleResend}>
                  Resend
                </span>
              </p>
            </div>
            <p className="text-sm text-red-500">{error}</p>
            <Button className="w-full" onClick={handleVerify}>
              Verify
            </Button>
          </div>
        </div>
        <div
          className={`w-full h-full max-w-154.5 min-h-204 overflow-hidden rounded-[30px] ${isAuth && "hidden lg:block"}`}
        >
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
    </AuthRedirect>
  );
}
