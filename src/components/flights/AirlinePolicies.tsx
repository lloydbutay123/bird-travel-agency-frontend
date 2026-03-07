import { FaClock } from "react-icons/fa";

type AirlinePoliciesProps = {
  policies: string[];
};

export default function AirlinePolicies({ policies }: AirlinePoliciesProps) {
  return (
    <div className="p-4 rounded-lg bg-[#8DD3BB]/60">
      <h3 className="font-tradegothic mb-4 text-[24px] font-bold text-[#112211]">
        Emirates Airlines Policies
      </h3>
      <div className="flex items-center gap-4">
        {policies.map((policy, index) => (
          <div key={index} className="flex flex-1 items-center gap-4">
            <FaClock size={24} />
            <p className="text-[#112211]/75 font-[16px]">{policy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
