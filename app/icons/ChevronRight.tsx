import { IconProps, IconSizeVariants } from ".";

export const ChevronRight = ({ size, strokeWidth }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ?? "1.5"}
      stroke="currentColor"
      className={`${IconSizeVariants[size] ?? "size-4"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
