import Image from "next/image";
import Container from "./Container";

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
    <div className="relative h-134.25 w-full pt-20 pb-30 ">
      <Image src={image} alt={title} fill className="object-cover object-top" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
      <Container>
        <div className="absolute max-w-110 w-full px-6 xl:px-0">
          <h1 className="font-tradegothic text-white font-bold mb-2 text-[32px] md:text-[45px] leading-snug">
            {title}
          </h1>
          <p className="text-[20px] font-medium text-white">{subtitle}</p>
        </div>
      </Container>
    </div>
  );
}
