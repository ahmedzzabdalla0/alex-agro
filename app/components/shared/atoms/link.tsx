import { Link as NavLink } from "@/i18n/navigation";
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
    <NavLink
      href={href}
      className={twMerge(
        "text-neutral-700 transition-colors font-b-15 hover:text-primary",
        isActive && "text-primary",
        className,
      )}
    >
      {children}
    </NavLink>
  );
}
