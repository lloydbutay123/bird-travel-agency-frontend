"use client";
import { footerSections } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="relative h-143.25 w-full">
      <Container className="absolute z-10 flex justify-between top-0 px-6 bg-[#CDEAE1] left-1/2 -translate-x-1/2 rounded-[20px]">
        <div className="py-6">
          <p className="font-tradegothic leading-13.5 w-92 mb-6 text-[44px] font-bold">
            Subscribe Newsletter
          </p>
          <p className="font-tradegothic text-[20px] font-bold">The Travel</p>
          <p className="text-[16px] mb-3.75 font-medium text-[#112211]/70">
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="pl-4 py-2 rounded-sm bg-white w-full max-w-118.25 h-14 text-[16px]"
            />
            <Button
              type="submit"
              onClick={() => {}}
              variant="secondary"
              className="bg-black! text-white! h-14"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <Image
          src="/assets/images/emojione-v1_open-mailbox-with-lowered-flag.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-100"
        />
      </Container>
      <div className="absolute bottom-0 w-full bg-[#8DD3BB] h-105.5">
        <Container className="absolute flex gap-35 bottom-16 left-1/2 -translate-x-1/2">
          <div>
            <div className="relative h-12.5 w-25 mb-6">
              <Image
                src="/assets/images/logo-dark.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3">
              <FaFacebook size={20} />
              <FaTwitter size={20} />
              <FaYoutube size={20} />
              <FaInstagram size={20} />
            </div>
          </div>
          <div className="flex gap-6">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h1 className="font-tradegothic text-[16px] font-bold text-[#112211]">
                  {section.title}
                </h1>
                <div className="flex flex-col gap-3">
                  {section.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="text-[#112211]/70 text-[14px] min-w-[175.2px]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
