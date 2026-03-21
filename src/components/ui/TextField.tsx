import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type TextFieldProps = {
  label: string;
  name: string;
  type: "text" | "email" | "password" | "number" | "date" | "tel";
  value: string;
  className?: string;
  placeholder: string;
  inputMode?:
    | "text"
    | "email"
    | "search"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField({
  label,
  name,
  type = "text",
  value,
  className,
  placeholder,
  inputMode,
  required = false,
  disabled = false,
  readOnly = false,
  maxLength,
  onChange,
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <fieldset
      className={`flex justify-between items-center border border-[#79747E] rounded-lg px-4 pb-1 ${className}`}
    >
      <legend className="px-1 text-xs font-semibold text-gray-500">
        {label}
      </legend>

      <input
        name={name}
        type={inputType}
        value={value}
        placeholder={placeholder}
        inputMode={inputMode}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full rounded-md px-3 py-2 focus:outline-none"
      />
      {isPassword && (
        <button
          className="cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEye size={24} /> : <FaEyeSlash size={24} />}
        </button>
      )}
    </fieldset>
  );
}
