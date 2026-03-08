import Image from "next/image";

type HeroBannerProps = {
  image: string;
  title: string;
  subtitle: string;
};

export default function HeroBanner({
  image,
  title,
  subtitle,
}: HeroBannerProps) {
  return (
    <div className="relative h-134.25 w-full pt-20 pb-30 pr-43.5 pl-31.5">
      <Image src={image} alt={title} fill className="object-cover object-top" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
      <div className="absolute max-w-110 w-full">
        <h1 className="font-tradegothic text-white font-bold mb-2 text-[45px] leading-snug">
          {title}
        </h1>
        <p className="text-[20px] font-medium text-white">{subtitle}</p>
      </div>
    </div>
  );
}
