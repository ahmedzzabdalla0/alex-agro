import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface MyProps extends HTMLAttributes<HTMLSpanElement> {}

export default function Eyebrow({ children, className }: MyProps) {
  return (
    <span
      className={twMerge(
        "inline-block w-fit rounded-full border border-secondary px-4 py-2 text-secondary font-b-19",
        className,
      )}
    >
      {children}
    </span>
  );
}
