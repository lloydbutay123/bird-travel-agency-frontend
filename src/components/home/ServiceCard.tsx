import Image from "next/image";
import Button from "../ui/Button";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";

type ServiceCardProps = {
  image: string;
  title: string;
  subtitle: string;
  btnLabel: string;
  btnHref: string;
};

export default function ServiceCard({
  image,
  title,
  subtitle,
  btnLabel,
  btnHref,
}: ServiceCardProps) {
  return (
    <div className="relative rounded-[20px] overflow-hidden w-full h-139.75">
      <Image src={image} alt={title} fill className="absolute" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-97.25 text-center">
          <div className="mb-4">
            <p className="font-tradegothic text-white text-[40px] font-bold">
              {title}
            </p>
            <p className="text-white text-[16px]">{subtitle}</p>
          </div>
          <Link href={btnHref}>
            <Button onClick={() => {}} variant="primary" className="mx-auto">
              <IoIosSend size={16} /> {btnLabel}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
