import Checkbox from "../ui/Checkbox";
import Image from "next/image";

type FareClass = {
  name: string;
  features: {
    gallery?: string[];
  };
};
type FareFeaturesProps = {
  fareClasses: FareClass[];
  selectedFare: string;
};

export default function FareFeatures({
  fareClasses,
  selectedFare,
}: FareFeaturesProps) {
  const selected = fareClasses.find((fare) => fare.name === selectedFare);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-tradegothic font-bold text-[24px] text-[#112211]">
          {selectedFare} Features
        </h3>
        <div className="flex items-center gap-6">
          {fareClasses.map((fare) => (
            <Checkbox key={fare.name} label={fare.name} />
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        {selected?.features.gallery?.map((img, i) => (
          <div
            key={i}
            className="relative w-30 h-30 overflow-hidden rounded-xl"
          >
            <Image src={img} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
