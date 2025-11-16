import NextLink from "next/link";
import type { LinkHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface MyProps extends LinkHTMLAttributes<HTMLLinkElement> {
  isActive?: boolean;
}

export default function Link({
  href = "#",
  isActive = false,
  children,
  className,
}: MyProps) {
  return (
    <NextLink
      href={href}
      className={twMerge(
        "text-neutral-700 transition-colors font-b-15 hover:text-primary",
        isActive && "text-primary",
        className,
      )}
    >
      {children}
    </NextLink>
  );
}
