"use client";

import AuthHeader from "@/components/auth/AuthHeader";
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
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const images = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
];

export default function AddPaymentMethodPage() {
  const router = useRouter();
  const pathname = usePathname();

  const isAuth = pathname.includes("/auth");

  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const [country, setCountry] = useState("");

  const handleAddPaymentMethod = () => {
    router.push("/");
  };

  return (
    <ProtectedRoute>
      <div className="flex w-full min-h-screen items-center justify-center gap-26 p-6 md:p-21.75">
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
            title="Add payment method"
            subtitle="Let’s get you all st up so you can access your personal account."
            hasBackButton
            href="/"
            btnLabel="Back"
          />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <TextField
                label="Card Number"
                name="cardnumber"
                type="text"
                value={cardNumber}
                className="flex-1"
                placeholder="Card Number"
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <div className="flex gap-6">
                <TextField
                  label="Exp. Date"
                  name="expdate"
                  type="date"
                  value={expDate}
                  className="flex-1"
                  placeholder="MM/YY"
                  onChange={(e) => setExpDate(e.target.value)}
                />
                <TextField
                  label="CVC"
                  name="cvc"
                  type="text"
                  value={cvc}
                  inputMode="numeric"
                  className="flex-1"
                  placeholder="cvc"
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
              <TextField
                label="Name on Card"
                name="nameOnCard"
                type="text"
                value={nameOnCard}
                className="w-full"
                placeholder="Name on Card"
                onChange={(e) => setNameOnCard(e.target.value)}
              />
              <TextField
                label="Country or Region"
                name="country"
                type="text"
                value={country}
                className="w-full"
                placeholder="Country or Region"
                onChange={(e) => setCountry(e.target.value)}
              />
              <Checkbox
                label="Securely save my information for 1-click checkout"
                checked
                onChange={() => {}}
              />
            </div>
            <div className="flex items-center flex-col gap-4">
              <Button
                className="w-full font-semibold"
                onClick={handleAddPaymentMethod}
              >
                Add payment method
              </Button>
              <p className="text-center w-full max-w-133 text-[12px]">
                By confirming your subscription, you allow The Outdoor Inn Crowd
                Limited to charge your card for this payment and future payments
                in accordance with their terms. You can always cancel your
                subscription.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
