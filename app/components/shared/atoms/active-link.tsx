"use client";

import Link from "@/components/shared/atoms/link";
import { removeLocale } from "@/helpers/shared";
import { usePathname } from "next/navigation";
import type { LinkHTMLAttributes } from "react";

interface MyProps extends LinkHTMLAttributes<HTMLLinkElement> {
  href: string;
}

export default function ActiveLink({ href, children, ...props }: MyProps) {
  const pathname = usePathname();
  const isActive = removeLocale(pathname) === href;

  return (
    <Link href={href} isActive={isActive} {...props}>
      {children}
    </Link>
  );
}
