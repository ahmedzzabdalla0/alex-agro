"use client";

import Link from "@/components/shared/atoms/link";
import { usePathname } from "next/navigation";
import type { LinkHTMLAttributes } from "react";

interface MyProps extends LinkHTMLAttributes<HTMLLinkElement> {
  href: string;
}

export default function ActiveLink({ href, children, ...props }: MyProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} isActive={isActive} {...props}>
      {children}
    </Link>
  );
}
