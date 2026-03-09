import ListingGallery from "@/components/listings/ListingGallery";
import ListingHeader from "@/components/listings/ListingHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Image from "next/image";
import { BiSolidDrink } from "react-icons/bi";
import { BsStar, BsStars } from "react-icons/bs";
import { FaCoffee, FaSpa, FaSwimmingPool, FaWifi } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineRestaurant, MdRoomService } from "react-icons/md";

export default function StayDetails() {
  return (
    <div className="min-h-screen">
      <Container className="pt-7 pb-30">
        <Breadcrumb
          items={[
            { label: "Turkey" },
            { label: "Istanbul" },
            { label: "CVK Park Bosphorus Hotel Istanbul" },
          ]}
        />
        <ListingHeader
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

          <div>
            <div className="mb-8">
              <h3 className="font-tradegothic text-[20px] font-bold mb-4">
                Overview
              </h3>
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
            </div>
            <div className="flex gap-4">
              <div className="rounded-xl bg-[#8DD3BB] w-41.5 h-36.25 py-4 pl-4 pr-16 flex flex-col justify-between">
                <h2 className="font-tradegothic text-[32px] font-bold mb-4">
                  4.2
                </h2>
                <div>
                  <h4 className="text-[16px] font-bold">Very good</h4>
                  <p className="text-[14px] font-medium">371 reviews</p>
                </div>
              </div>
              <div className="rounded-xl border border-[#8DD3BB] w-41.5 h-36.25 py-4 pl-4 pr-16 flex flex-col justify-between">
                <BsStars size={32} />
                <p className="text-[14px] font-medium">Near park</p>
              </div>
              <div className="rounded-xl border border-[#8DD3BB] w-41.5 h-36.25 py-4 pl-4 pr-16 flex flex-col justify-between">
                <BsStars size={32} />
                <p className="text-[14px] font-medium">Near park</p>
              </div>
              <div className="rounded-xl border border-[#8DD3BB] w-41.5 h-36.25 py-4 pl-4 pr-16 flex flex-col justify-between">
                <BsStars size={32} />
                <p className="text-[14px] font-medium">Near park</p>
              </div>
              <div className="rounded-xl border border-[#8DD3BB] w-41.5 h-36.25 py-4 pl-4 pr-16 flex flex-col justify-between">
                <BsStars size={32} />
                <p className="text-[14px] font-medium">Near park</p>
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <h3 className="font-tradegothic text-[20px] font-bold mb-4">
              Available Rooms
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[16px] font-medium">
                    Superior room - 1 double bed or 2 twin beds
                  </p>
                </div>

                <div className="flex items-center gap-16">
                  <p className="text-[24px] font-semibold">
                    $240<span className="text-[14px]">/night</span>
                  </p>
                  <Button className="w-37.5">Book now</Button>
                </div>
              </div>
              <Divider />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[16px] font-medium">
                    Superior room - 1 double bed or 2 twin beds
                  </p>
                </div>

                <div className="flex items-center gap-16">
                  <p className="text-[24px] font-semibold">
                    $240<span className="text-[14px]">/night</span>
                  </p>
                  <Button className="w-37.5">Book now</Button>
                </div>
              </div>
              <Divider />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[16px] font-medium">
                    Superior room - 1 double bed or 2 twin beds
                  </p>
                </div>

                <div className="flex items-center gap-16">
                  <p className="text-[24px] font-semibold">
                    $240<span className="text-[14px]">/night</span>
                  </p>
                  <Button className="w-37.5">Book now</Button>
                </div>
              </div>
              <Divider />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[16px] font-medium">
                    Superior room - 1 double bed or 2 twin beds
                  </p>
                </div>

                <div className="flex items-center gap-16">
                  <p className="text-[24px] font-semibold">
                    $240<span className="text-[14px]">/night</span>
                  </p>
                  <Button className="w-37.5">Book now</Button>
                </div>
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-tradegothic text-[20px] font-bold">
                Location/Map
              </h3>
              <Button>View on google maps</Button>
            </div>
            <div className="w-full h-119 rounded-2xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.25862418069!2d120.5793!3d15.1300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c77bffffffff%3A0xffffffff!2sYour%20Location!5e0!3m2!1sen!2sph!4v0000000000000"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <Divider />

          <div>
            <h3 className="font-tradegothic text-[20px] font-bold mb-4">
              Amenities
            </h3>
            <div className="w-full grid grid-cols-2 gap-x-75 gap-y-6">
              <div className="flex items-center gap-2">
                <FaSwimmingPool size={24} />
                <p className="text-[16px] font-medium text-[#112211]">
                  Outdoor pool
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoIosFitness size={24} />
                <p className="text-[16px] font-medium text-[#112211]">
                  Fitness center
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaSwimmingPool size={24} />
                <p className="text-[16px] font-medium text-[#112211]">
                  Indoor pool
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BiSolidDrink size={24} />
                <p className="text-[16px] font-medium text-[#112211]">
                  Bar/Lounge
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaSpa size={24} />
                <p className="text-[16px] font-medium text-[#112211]">
                  Spa and wellness center
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaWifi size={24} />
                <p className="text-[16px] font-medium text-[#112211]">
                  Free Wi-Fi
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineRestaurant size={24} />
                <p className="text-[16px] font-medium text-[#112211]">
                  Restaurant
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaCoffee size={24} />
                <p className="text-[16px] font-medium text-[#112211]">
                  Tea/coffee machine
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MdRoomService size={24} />
                <p className="text-[16px] font-medium text-[#112211]">
                  Room service
                </p>
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-tradegothic text-[20px] font-bold ">
                Reviews
              </h3>
              <Button>Give your review</Button>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-[50px] leading-none font-bold font-tradegothic">
                4.2
              </h1>
              <div>
                <h4 className="text-[20px] font-semibold mb-2">Very good</h4>
                <p className="text-[14px] ">371 verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
