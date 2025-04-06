import { IconProps, IconSizeVariants } from ".";

export const ChevronLeft = ({ size, strokeWidth }: IconProps) => {
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
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
};
