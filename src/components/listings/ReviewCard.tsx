import Image from "next/image";
import { IoMdFlag } from "react-icons/io";

type ReviewCardProps = {
  image: string;
  rating: number;
  author: string;
  label: string;
};

export default function ReviewCard({
  image,
  rating,
  author,
  label,
}: ReviewCardProps) {
  return (
    <div className="flex gap-4">
      <div className="relative w-11.25 h-11.25 rounded-full overflow-hidden">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
      <div className="flex-1">
        <p className="text-[14px] font-semibold mb-2">
          {rating} Amazing <span className="font-normal">| {author}</span>
        </p>
        <p>{label}</p>
      </div>
      <IoMdFlag size={20} />
    </div>
  );
}
