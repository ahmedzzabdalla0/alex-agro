import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface MyProps extends HTMLAttributes<HTMLSpanElement> {}

export default function Tag({ children, className, style, ...props }: MyProps) {
  return (
    <span
      className={twMerge(
        "inline-block rounded-6 p-3 text-neutral-100 backdrop-blur-xl font-b-15 select-none",
        className,
      )}
      style={{
        background:
          "linear-gradient(108.46deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
