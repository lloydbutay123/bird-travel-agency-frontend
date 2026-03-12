import Image from "next/image";
import Link from "next/link";

type AuthHeaderProps = {
  title: string;
  subtitle: string;
};

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <>
      <Link href="/" className="inline-block">
        <Image
          src="/assets/images/logo-dark.png"
          width={100}
          height={50}
          alt={title}
        />
      </Link>
      <div className="mb-12">
        <h2 className="font-tradegothic text-[40px] font-bold mb-4">{title}</h2>
        <p className="text-[16px] text-[#112211]/75">{subtitle}</p>
      </div>
    </>
  );
}
