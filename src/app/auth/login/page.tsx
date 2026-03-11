import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Divider from "@/components/ui/Divider";
import { FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-between gap-[104px]">
      <div className="w-full max-w-[512px]">
        <div className="mb-12">
          <h1 className="font-tradegothic text-[40px] font-bold mb-4">Login</h1>
          <p className="text-[16px]">Login to access your Golobe account</p>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-6">
            <input type="email" placeholder="Input Email" />
            <input type="text" placeholder="Input Email" />
            <div className="flex items-center justify-between">
              <Checkbox label="Remember me" />
              <Button variant="ghost" className="text-[#FF8682]">
                Fot password
              </Button>
            </div>
          </div>
          <div>
            <Button className="w-full mb-4">Login</Button>
            <p className="text-[14px] font-medium text-center">
              Don’t have an account?{" "}
              <span className="text-[#FF8682] font-medium text-center">
                Sign up
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Divider />
            <p className="text-[14px]">Or login with</p>
            <Divider />
          </div>
          <div className="flex gap-4 justify-between">
            <Button className="w-full" variant="outline">
              <FaFacebook />
            </Button>
            <Button className="w-full" variant="outline">
              <FaFacebook />
            </Button>
            <Button className="w-full" variant="outline">
              <FaFacebook />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
