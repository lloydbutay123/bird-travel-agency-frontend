import Link from "next/link";
import Button from "../ui/Button";

type AuthFooterTextProps = {
  title: string;
  linkText: string;
  href: string;
};

export default function AuthFooterText({
  title,
  linkText,
  href,
}: AuthFooterTextProps) {
  return (
    <p className="text-[14px] font-medium text-center">
      {title} {""}
      <Link href={href}>
        <span className="text-[#FF8682] font-medium text-center">
          {linkText}
        </span>
      </Link>
    </p>
  );
}
