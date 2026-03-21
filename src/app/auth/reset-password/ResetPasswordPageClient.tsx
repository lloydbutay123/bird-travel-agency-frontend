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
import { useRouter, useSearchParams } from "next/navigation";
import { API_URL } from "@/lib/api";
import AuthRedirect from "@/components/auth/AuthRedirect";
import { FaSpinner } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
];

export default function ResetPasswordPageClient() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";
  const otp = searchParams.get("otp") || "";

  const handleSetPassword = async () => {
    try {
      setLoading(true);
      setError("");

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const res = await fetch(`${API_URL}/api/v1/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp, password, confirmPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Reset password failed");
        return;
      }

      router.push("/auth/login");
    } catch (error) {
      setError("Something went wrong. Please try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthRedirect>
      <div className="flex min-h-screen w-full items-center justify-center gap-26 p-6 md:p-25.5">
        <div className="w-full max-w-lg">
          <AuthHeader
            title="Set a password"
            subtitle="Your previous password has been reseted. Please set a new password for your account."
          />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <TextField
                label="Create Password"
                name="password"
                type="password"
                value={password}
                placeholder="Enter your current password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                label="Re-enter Password"
                name="retypepassword"
                type="password"
                value={confirmPassword}
                placeholder="Re-enter your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button
              className="w-full mb-4"
              onClick={handleSetPassword}
              disabled={loading || !password || !confirmPassword}
            >
              {loading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                "Set password"
              )}
            </Button>
          </div>
        </div>
        <div className="hidden w-full h-full max-w-154.5 min-h-204 overflow-hidden rounded-[30px] lg:block">
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
