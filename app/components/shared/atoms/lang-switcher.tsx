import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { LinkHTMLAttributes } from "react";
import { TbWorld } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

interface MyProps extends LinkHTMLAttributes<HTMLDivElement> {}

export default function LangSwitcher({ className }: MyProps) {
  const locale = useLocale();
  const nextLocale = locale === "ar" ? "en" : "ar";
  return (
    <Link
      href="/"
      locale={nextLocale}
      className={twMerge("flex items-center gap-x-2 text-neutral", className)}
    >
      <TbWorld className="text-[20px] mobile:text-2xl" />
      <span className="uppercase font-b-18">{nextLocale}</span>
    </Link>
  );
}
