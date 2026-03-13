import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";

type AuthHeaderProps = {
  title: string;
  subtitle: string;
  hasBackButton?: boolean;
  btnLabel?: string;
  href?: string;
};

export default function AuthHeader({
  title,
  subtitle,
  hasBackButton,
  btnLabel = "Back to login",
  href = "/auth/login",
}: AuthHeaderProps) {
  return (
    <>
      <Link href="/" className="inline-block mb-16">
        <Image
          src="/assets/images/logo-dark.png"
          width={100}
          height={50}
          alt={title}
        />
      </Link>
      <div className="flex flex-col gap-4">
        {hasBackButton && (
          <div className="flex items-center gap-1">
            <FaAngleLeft size={24} />
            <Link href={href}>
              <p className="text-[14px] font-medium">{btnLabel}</p>
            </Link>
          </div>
        )}
        <div className="mb-12">
          <h2 className="font-tradegothic text-[40px] font-bold mb-4">
            {title}
          </h2>
          <p className="text-[16px] text-[#112211]/75">{subtitle}</p>
        </div>
      </div>
    </>
  );
}
