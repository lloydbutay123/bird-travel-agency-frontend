import AmenityItem from "@/components/listings/AmenityItem";
import ListingGallery from "@/components/listings/ListingGallery";
import StayHeader from "@/components/stays/StayHeader";
import StaySection from "@/components/stays/StaySection";
import OverviewFeatureCard from "@/components/listings/OverviewFeatureCard";
import RatingOverviewCard from "@/components/listings/RatingOverviewCard";
import ReviewCard from "@/components/listings/ReviewCard";
import ReviewSummary from "@/components/listings/ReviewSummary";
import RoomCard from "@/components/stays/RoomCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import { amenities, highlights, rooms } from "@/data/freebies";
import { stayReviews } from "@/data/reviews";
import React from "react";
import { FaCoffee } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function StayDetailsPage() {
  return (
    <div className="min-h-screen">
      <Container className="pt-12 pb-30">
        <Breadcrumb
          items={[
            { label: "Turkey" },
            { label: "Istanbul" },
            { label: "CVK Park Bosphorus Hotel Istanbul" },
          ]}
        />
        <StayHeader
          title="CVK Park Bosphorus Hotel Istanbul"
          location="Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
          rating={30}
          reviews={100}
          price={300}
          bookingHref={`/stays/${1}/booking`}
          showHotelStars
          hotelStars={5}
        />
        <ListingGallery />
        <div className="flex flex-col gap-16">
          <Divider />

          <StaySection title="Overview">
            <div className="flex flex-col gap-8">
              <p className="text-[16px] font-medium text-[#112211]/75">
                Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
                Bosphorus Hotel Istanbul has risen from the ashes of the
                historic Park Hotel, which also served as Foreign Affairs Palace
                120 years ago and is hosting its guests by assuming this
                hospitality mission. With its 452 luxurious rooms and suites,
                8500 m2 SPA and fitness area, 18 meeting rooms including 4
                dividable ones and 3 terraces with Bosphorus view, Istanbuls
                largest terrace with Bosphorus view (4500 m2) and latest
                technology infrastructure, CVK Park Bosphorus Hotel Istanbul is
                destined to be the popular attraction point of the city. Room
                and suite categories at various sizes with city and Bosphorus
                view, as well as 68 separate luxury suites, are offered to its
                special guests as a wide variety of selection.
              </p>
              <div className="flex gap-4">
                <RatingOverviewCard
                  rating={3.5}
                  label="Very good"
                  reviewCount={200}
                />
                {highlights.map((feature) => (
                  <OverviewFeatureCard key={feature} title={feature} />
                ))}
              </div>
            </div>
          </StaySection>

          <Divider />

          <StaySection title="Available Rooms">
            <div className="flex flex-col gap-4">
              {rooms.map((room, index) => (
                <React.Fragment key={room.id}>
                  <RoomCard
                    image={room.image}
                    name={room.name}
                    price={room.price}
                  />
                  {index !== rooms.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </div>
          </StaySection>

          <Divider />

          <StaySection
            title="Location/Map"
            action={<Button>View on google maps</Button>}
          >
            <div className="w-full h-119 rounded-2xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.25862418069!2d120.5793!3d15.1300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c77bffffffff%3A0xffffffff!2sYour%20Location!5e0!3m2!1sen!2sph!4v0000000000000"
                loading="lazy"
              ></iframe>
            </div>
          </StaySection>

          <Divider />

          <StaySection title="Amenities">
            <div className="w-full grid grid-cols-2 gap-x-75 gap-y-6">
              {amenities.map((amenity) => (
                <AmenityItem
                  key={amenity}
                  label={amenity}
                  icon={<FaCoffee size={24} />}
                />
              ))}
            </div>
          </StaySection>

          <Divider />

          <StaySection
            title="Reviews"
            action={<Button>Give your review</Button>}
          >
            <div className="flex flex-col gap-6">
              <ReviewSummary totalRatings={4.2} totalReviews={200} />
              <Divider />
              <div className="flex flex-col gap-6">
                {stayReviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    image={review.image}
                    rating={review.rating}
                    author={review.author}
                    label={review.label}
                  />
                ))}

                <div className="flex items-center justify-center gap-6">
                  <MdKeyboardArrowLeft size={24} />
                  <p className="text-[14px]">1 of 40</p>
                  <MdKeyboardArrowRight size={24} />
                </div>
              </div>
            </div>
          </StaySection>
        </div>
      </Container>
    </div>
  );
}
