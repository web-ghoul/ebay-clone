import { ReactNode } from "react";

const Button = ({
  children,
  type,
  variant,
  className,
}: {
  children: ReactNode;
  type?: "button" | "submit";
  variant?: "social";
  className?: string;
}) => {
  return (
    <button
      className={`outline-none border-[1px] border-solid px-6 py-2 rounded-full button transition-all hover:bg-white  flex justify-center items-center gap-2 ${
        variant === "social"
          ? "border-gray-400 bg-white text-black hover:bg-gray-100 font-[700]"
          : "border-blue-600 bg-blue-600 text-white hover:text-blue-600"
      } ${className}`}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
