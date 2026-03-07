import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import Button from "../ui/Button";
import { MdEmail } from "react-icons/md";
import Divider from "../ui/Divider";

export default function AuthLoginCard() {
  return (
    <div className="p-6 rounded-xl bg-white flex flex-col gap-6">
      <div className="flex flex-col gap-4.5">
        <h3 className="font-tradegothic font-bold text-[20px]">
          Login or Sign up to book
        </h3>
        <div className="pl-4 py-2 border border-black rounded-sm">
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full h-10"
          />
        </div>
        <p className="text-[14px] text-[#112211]">
          We’ll call or text you to confirm your number. Standard message and
          data rates apply. Privacy Policy
        </p>
        <Button>Continue</Button>
      </div>
      <div className="flex items-center gap-6 justify-between">
        <Divider />
        <p className="text-[16px] font-medium text-[#112211]">Or</p>
        <Divider />
      </div>
      <div>
        <div className="flex gap-4 justify-between mb-4">
          <Button variant="outline" className="flex-1 h-14">
            <FaFacebookF size={24} />
          </Button>
          <Button variant="outline" className="flex-1 h-14">
            <FaGoogle size={24} />
          </Button>
          <Button variant="outline" className="flex-1 h-14">
            <FaApple size={24} />
          </Button>
        </div>
        <Button variant="outline" className="w-full h-14 text-[16px]">
          <MdEmail size={24} className="mr-4" />
          Continue with email
        </Button>
      </div>
    </div>
  );
}
