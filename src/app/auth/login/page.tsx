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
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/slices/authSlice";
import { API_URL } from "@/lib/api";
import AuthRedirect from "@/components/auth/AuthRedirect";

const images = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const handleForgotPassword = () => {
    router.push("/auth/forgot-password");
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_URL}/api/v1/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      dispatch(
        setCredentials({
          user: data.user,
        }),
      );

      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/");
    } catch (error) {
      setError("Something went wrong. Please try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const isAuth = pathname.includes("/auth");

  return (
    <AuthRedirect>
      <div className="flex min-h-screen w-full items-center justify-center gap-26 p-6 md:p-25.5">
        <div className="w-full max-w-lg">
          <AuthHeader
            title="Login"
            subtitle="Login to access your Golobe account"
          />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <TextField
                label="Email"
                name="email"
                type="email"
                value={email}
                required
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={password}
                required
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
              <div className="flex items-center justify-between">
                <Checkbox label="Remember me" checked onChange={() => {}} />
                <Button
                  variant="ghost"
                  className="text-[#FF8682]"
                  onClick={handleForgotPassword}
                >
                  Forgot password
                </Button>
              </div>
            </div>
            <div>
              <Button
                className="w-full mb-4"
                onClick={handleLogin}
                disabled={loading || !email.trim() || !password.trim()}
              >
                Login
              </Button>
              <AuthFooterText
                title="Don’t have an account?"
                linkText="Sign up"
                href="/auth/signup"
              />
            </div>
            <AuthDivider text="Or login with" />
            <SocialAuthButtons />
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
