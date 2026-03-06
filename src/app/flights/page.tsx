import TravelSearch from "@/components/search/TravelSearch";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { destinations } from "@/data/destinations";
import Image from "next/image";

export default function FlightsPage() {
  return (
    <div className="flex flex-col gap-69 min-h-screen">
      <div className="relative h-134.25 w-full pt-20 pb-30 pr-43.5 pl-31.5">
        <Image
          src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <div className="absolute max-w-110 w-full">
          <h1 className="font-tradegothic text-white font-bold mb-2 text-[45px] leading-snug">
            Make your travel whishlist, we&apos;ll do the rest
          </h1>
          <p className="text-[20px] font-medium text-white">
            Special offers to suit your plan
          </p>
        </div>
      </div>
      <TravelSearch top="[551px]" />
      <div className="flex flex-col gap-20 pb-30">
        <div>
          <SectionHeader
            title="Let's go places together"
            subtitle="Discover the latest offers and news and start planning your next trip with us."
            btnLabel="See All"
          />
          <div className="relative h-121.5 w-full">
            <Image
              src="/assets/images/Frame2608705.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeader
            title="Fall into travel"
            subtitle="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
            btnLabel="See All"
          />
          <div className="grid grid-cols-4 gap-4 w-full max-w-308 mx-auto">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="relative rounded-xl h-105 overflow-hidden"
              >
                <Image
                  src={destination.image}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 w-full p-6">
                  <div className="flex items-end justify-between gap-0.5 mb-4">
                    <div>
                      <h1 className="text-white font-bold text-[24px] ">
                        {destination.city}
                      </h1>
                      <p className="text-white text-[14px] line-clamp-1">
                        {destination.title}
                      </p>
                    </div>
                    <p className="text-[24px] font-semibold text-white">
                      ${destination.price}
                    </p>
                  </div>
                  <Button className="w-full h-12! flex justify-center">
                    Book Flight
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader
            title="Fall into travel"
            subtitle="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
            btnLabel="See All"
          />
          <div className="w-full max-w-308 mx-auto">
            {destinations
              .filter((d) => d.isFeatured)
              .map((destination) => (
                <div key={destination.id} className="flex w-full gap-6">
                  <div className="flex flex-col justify-between h-106 p-6  bg-[#8DD3BB] rounded-[20px]">
                    <div className="w-full max-w-126">
                      <div className="flex justify-between items-start mb-6">
                        <h1 className="font-tradegothic text-[#112211] font-bold text-[40px] max-w-90 leading-tight">
                          {destination.title}
                        </h1>
                        <div className="flex flex-col gap-1 p-2 text-center bg-white rounded-lg">
                          <p className="text-[14px]">From</p>
                          <p className="text-[20px] font-semibold">
                            ${destination.price}
                          </p>
                        </div>
                      </div>
                      <p className="text-[14px]">{destination.description}</p>
                    </div>
                    <Button
                      variant="secondary"
                      className="h-[48px]! flex justify-center"
                    >
                      Book Flight
                    </Button>
                  </div>

                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-5">
                      {destination.gallery?.map((img, i) => (
                        <div
                          key={i}
                          className="h-50 relative rounded-xl overflow-hidden"
                        >
                          <Image
                            src={img}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
