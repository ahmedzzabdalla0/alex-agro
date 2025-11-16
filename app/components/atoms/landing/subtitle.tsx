import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface MyProps extends HTMLAttributes<HTMLParagraphElement> {}

export default function Subtitle({ children, className }: MyProps) {
  return (
    <p className={twMerge("text-primary uppercase font-label", className)}>
      {children}
    </p>
  );
}
