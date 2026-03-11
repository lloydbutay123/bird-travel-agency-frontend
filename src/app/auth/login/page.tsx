import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Divider from "@/components/ui/Divider";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-26 p-25.5">
      <div className="w-full max-w-lg">
        <Link href="/">
          <Image
            src="/assets/images/logo-dark.png"
            width={100}
            height={50}
            alt=""
          />
        </Link>
        <div className="mb-12">
          <h1 className="font-tradegothic text-[40px] font-bold mb-4">Login</h1>
          <p className="text-[16px]">Login to access your Golobe account</p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <fieldset className="border border-[#79747E] px-4 py-2 rounded-sm">
              <legend className="text-[14px]">Email</legend>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-[16px] w-full"
              />
            </fieldset>
            <fieldset className="border border-[#79747E] px-4 py-2 rounded-sm">
              <legend className="text-[14px]">Password</legend>
              <input
                type="password"
                placeholder="Enter your password"
                className="text-[16px] w-full"
              />
            </fieldset>
            <div className="flex items-center justify-between">
              <Checkbox label="Remember me" />
              <Button variant="ghost" className="text-[#FF8682]">
                Forgot password
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
              <FaFacebook size={24} />
            </Button>
            <Button className="w-full" variant="outline">
              <FaGoogle size={24} />
            </Button>
            <Button className="w-full" variant="outline">
              <FaApple size={24} />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full max-w-154.5 max-h-[816px] overflow-hidden rounded-[30px]">
        <Image
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
