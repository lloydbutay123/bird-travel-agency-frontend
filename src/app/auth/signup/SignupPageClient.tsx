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
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/slices/authSlice";
import { API_URL } from "@/lib/api";
import AuthRedirect from "@/components/auth/AuthRedirect";
import { FaSpinner } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
];

export default function SignupPageClient() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCreateAccount = async () => {
    try {
      setLoading(true);

      if (
        !firstName.trim() ||
        !lastName.trim() ||
        !email.trim() ||
        !phone.trim() ||
        !password.trim() ||
        !confirmPassword.trim()
      ) {
        setError("All fields are required.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      if (!agree) {
        setError("Please agree to the terms and privacy policy.");
        return;
      }

      setError("");

      const res = await fetch(`${API_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Register failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      router.replace("/onboarding/payment-method");

      setTimeout(() => {
        dispatch(
          setCredentials({
            user: data.user,
          }),
        );
      }, 0);
    } catch (error) {
      setError("Something went wrong. Please try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthRedirect>
      <div className="flex w-full min-h-screen items-center justify-center gap-26 p-6 md:p-21.75">
        <div className="hidden w-full h-full max-w-122 min-h-204 rounded-[30px] overflow-hidden lg:block">
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
                  value={firstName}
                  className="flex-1"
                  placeholder="Enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  label="Last Name"
                  name="lname"
                  type="text"
                  value={lastName}
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
              <Checkbox
                label="I agree to all the Terms and Privacy Policies"
                checked={agree}
                onChange={() => setAgree((prev) => !prev)}
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div>
              <Button
                className="w-full mb-4 font-semibold"
                onClick={handleCreateAccount}
                disabled={
                  loading ||
                  !firstName.trim() ||
                  !lastName.trim() ||
                  !email.trim() ||
                  !phone.trim() ||
                  !password.trim() ||
                  !agree
                }
              >
                {loading ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  "Create account"
                )}
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
    </AuthRedirect>
  );
}
