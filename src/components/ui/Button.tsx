import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className,
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary: "bg-[#8dd3bb] text-[#112211] hover:bg-white",
    secondary: "bg-white text-[#112211] hover:bg-black hover:text-white",
    outline: "border border-[#8DD3BB] text-[#112211]",
    ghost: "text-[#112211] hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };
  return (
    <button
      className={`flex items-center text-[14px] gap-1 font-medium rounded-sm py-2 px-4 ${variants[variant]} ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
