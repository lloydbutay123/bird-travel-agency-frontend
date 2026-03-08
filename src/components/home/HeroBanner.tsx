import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative mx-auto w-full max-w-345 h-149.75 rounded-3xl overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute left-1/2 flex-col gap-4 w-full -translate-x-1/2 text-center top-45">
        <div className="flex flex-col gap-1">
          <p className="font-tradegothic text-[45px] font-bold text-white">
            Helping Others
          </p>
          <p className="font-tradegothic font-bold text-[80px] text-white leading-none">
            LIVE & TRAVEL
          </p>
        </div>
        <p className="text-[20px] font-semibold text-white">
          Special offers to suit your plan
        </p>
      </div>
    </div>
  );
}
