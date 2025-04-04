import { IconProps, IconSizeVariants } from ".";

export const Cross = ({ size, strokeWidth }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width={strokeWidth ?? "1.5"}
      stroke="currentColor"
      className={`${IconSizeVariants[size] ?? "size-4"}`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
