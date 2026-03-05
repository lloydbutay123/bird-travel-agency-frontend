import Image from "next/image";
import Link from "next/link";
import { FaPlane } from "react-icons/fa";
import { IoBed } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="fixed flex z-2 items-center mt-7.5 justify-center w-full">
      <div className="flex items-center justify-between w-full max-w-345 py-6 px-8">
        <div className="flex gap-8">
          <Link href="" className="flex ">
            <FaPlane size={24} color="white" className="mr-1" />
            <p className="text-white font-semibold">Find Flight</p>
          </Link>
          <Link href="" className="flex ">
            <IoBed size={24} color="white" className="mr-1" />
            <p className="text-white font-semibold">Find Stays</p>
          </Link>
        </div>
        <Link href="" className="relative w-25 h-9">
          <Image
            src="/assets/images/logo.png"
            alt=""
            fill
            className="object-cover"
          />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="" className="font-semibold text-white">
            Login
          </Link>
          <Link
            href=""
            className="bg-white px-6 py-3 rounded-lg text-[#112211] font-semibold"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
