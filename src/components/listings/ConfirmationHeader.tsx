import { FaLocationDot, FaShareNodes } from "react-icons/fa6";
import Button from "../ui/Button";

export default function ConfirmationHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-tradegothic mb-4 text-[24px] font-bold">
          Emirates A380 Airbus
        </h3>
        <div className="flex items-center gap-2">
          <FaLocationDot size={18} />
          <p className="text-[14px] font-medium text-[#112211]/75">
            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-[32px] font-bold mb-4 text-end">$240</h3>
        <div className="flex gap-3.75">
          <Button variant="outline">
            <FaShareNodes size={20} />
          </Button>
          <Button className="w-37.5 font-semibold">Download</Button>
        </div>
      </div>
    </div>
  );
}
