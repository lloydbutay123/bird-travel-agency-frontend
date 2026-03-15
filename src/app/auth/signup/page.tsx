"use client";

import AuthDivider from "@/components/auth/AuthDivider";
import AuthFooterText from "@/components/auth/AuthFooterText";
import AuthHeader from "@/components/auth/AuthHeader";
import SocialAuthButtons from "@/components/auth/SocialAuthButton";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import TextField from "@/components/ui/TextField";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { usePathname, useRouter } from "next/navigation";

const images = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
];

export default function SignupPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = () => {
    router.push("/auth/signup/payment-method");
  };

  const isAuth = pathname.includes("/auth");

  return (
    <div className="flex w-full min-h-screen items-center justify-center gap-26 p-6 md:p-22.5">
      <div
        className={`w-full h-full max-w-122 min-h-204 rounded-[30px] overflow-hidden ${isAuth && "hidden lg:block"}`}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="h-full min-h-204"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full min-h-204">
                <Image src={image} alt="img" fill className="object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full max-w-160">
        <AuthHeader
          title="Sign Up"
          subtitle="Let’s get you all st up so you can access your personal account."
          href="/auth/login"
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <TextField
                label="First Name"
                name="fname"
                type="text"
                value={firstname}
                className="flex-1"
                placeholder="Enter first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="Last Name"
                name="lname"
                type="text"
                value={lastname}
                className="flex-1"
                placeholder="Enter first name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex gap-6">
              <TextField
                label="Email"
                name="email"
                type="email"
                value={email}
                className="flex-1"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Phone Number"
                name="phone"
                type="text"
                value={phone}
                className="flex-1"
                placeholder="Enter phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={password}
              className="w-full"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              className="w-full"
              placeholder="Enter your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Checkbox label="I agree to all the Terms and Privacy Policies" />
          </div>
          <div>
            <Button
              className="w-full mb-4 font-semibold"
              onClick={handleCreateAccount}
            >
              Create account
            </Button>
            <AuthFooterText
              title="Already have an account?"
              linkText="Login"
              href="/auth/login"
            />
          </div>
          <AuthDivider text="Or Sign up with" />
          <SocialAuthButtons />
        </div>
      </div>
    </div>
  );
}
