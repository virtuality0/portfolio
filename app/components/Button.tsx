import { ReactNode } from "react";

interface ButtonComponentProps {
  text?: string;
  frontIcon?: ReactNode;
  endIcon?: ReactNode;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary";
}

const buttonSizeVariants = {
  sm: "px-2 py-1",
  md: "px-4 py-2",
  lg: "px-6 py-3",
};

const buttonVariantOptions = {
  primary: "bg-green-500 text-white font-medium",
  secondary: "text-green-500 font-medium bg-white",
};

export const Button = ({
  size,
  text,
  frontIcon,
  endIcon,
  variant,
}: ButtonComponentProps) => {
  return (
    <button
      className={`${buttonSizeVariants[size]} ${buttonVariantOptions[variant]} rounded-md cursor-pointer`}
    >
      {frontIcon ?? null}
      <span className="px-4">{text ?? null}</span>
      {endIcon ?? null}
    </button>
  );
};
