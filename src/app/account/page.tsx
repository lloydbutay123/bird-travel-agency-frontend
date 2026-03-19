import Container from "@/components/ui/Container";
import Image from "next/image";
import { MdEdit } from "react-icons/md";

export default function AccountPage() {
  return (
    <Container className="px-6 xl:px-0 pt-34.5 pb-30 min-h-screen">
      <div className="relative h-130.25 w-full">
        <div className="relative h-87.5 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute flex flex-col gap-6 bottom-0 left-1/2 -translate-x-1/2">
          <div className="relative h-40 w-40">
            <div className="relative h-40 w-40 rounded-full border-4 border-[#FF8682] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 bg-[#FF8682] rounded-full p-2.5">
              <MdEdit size={24} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-[24px] font-semibold">John Doe</h4>
            <p className="text-[16px] text-[#112211]/75">john.doe@gmail.com</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
