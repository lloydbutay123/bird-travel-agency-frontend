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
    primary: "bg-[#8dd3bb] text-[#112211]",
    secondary: "bg-white text-[#112211] hover:text-white",
    outline: "border border-[#8DD3BB] text-[#112211]",
    ghost: "text-[#112211]",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };
  return (
    <button
      className={`flex items-center justify-center h-12 text-[14px] gap-1 font-medium rounded-sm py-2 px-4 cursor-pointer ${variants[variant]} ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
