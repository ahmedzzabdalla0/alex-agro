import Logo from "@/assets/shared/images/logo.png";
import NavVector from "@/assets/shared/vectors/nav";
import MenuToggle from "@/components/atoms/landing/menu-toggle";
import ActiveLink from "@/components/shared/atoms/active-link";
import Button from "@/components/shared/atoms/button";
import LangSwitcher from "@/components/shared/atoms/lang-switcher";
import Link from "@/components/shared/atoms/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function NavSection() {
  const t = useTranslations("Navigation");
  // No need for useMemo here since this code runs on the server.
  const Links = (
    <>
      <ActiveLink href="/">{t("home")}</ActiveLink>
      <ActiveLink href="/about-us">{t("aboutUs")}</ActiveLink>
      <ActiveLink href="/products">{t("products")}</ActiveLink>
      <ActiveLink href="/services">{t("services")}</ActiveLink>
      <ActiveLink href="/faqs">{t("faqs")}</ActiveLink>
    </>
  );

  return (
    <nav className="relative nav flex items-center py-3 mobile:py-4">
      {/* Background */}
      <NavVector className="absolute -z-1 h-full w-full" />

      {/* Main Navbar Wrapper */}
      <div className="container mx-auto flex h-fit w-full items-center justify-between">
        {/* Left: Logo */}
        <div>
          <Link href="/" className="block w-14 mobile:w-fit">
            <Image src={Logo} alt="alex-agro-logo" loading="eager" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Icon & Lang Switcher */}

        <MenuToggle className="order-3 text-neutral mobile:hidden" />
        <LangSwitcher className="order-2 mr-2 ml-auto p-2 peer-not-checked:hidden rtl:mr-auto rtl:ml-2" />

        {/* Navigation Menu (Links + Contact Button) */}
        <div className="group contents h-full w-full">
          {/* Mobile Overlay Background */}
          <div className="pointer-events-none fixed inset-0 -z-1 bg-neutral-background opacity-0 transition-opacity max-mobile:group-peer-checked:pointer-events-auto max-mobile:group-peer-checked:opacity-100"></div>

          {/* Menu Container (Responsive) */}
          <div
            className={twMerge(
              // Base layout
              "flex",

              // Mobile behavior
              "inset-x-0 top-full gap-y-4 max-mobile:absolute max-mobile:-z-1 max-mobile:flex-col max-mobile:opacity-0 max-mobile:transition-opacity max-mobile:group-peer-not-checked:pointer-events-none max-mobile:group-peer-checked:opacity-100",

              // Tablet & up
              "mobile:contents",
            )}
          >
            {/* Navigation Links */}
            <div
              className={twMerge(
                // Base
                "flex",

                // Mobile styling for each link
                "max-mobile:flex-col max-mobile:[&_a]:px-4 max-mobile:[&_a]:py-3 max-mobile:[&_a]:not-last:border-b max-mobile:[&_a]:not-last:border-b-neutral-200",

                // Tablet & up
                "gap-x-9 mobile:justify-center",
              )}
            >
              {Links}
            </div>

            {/* Contact Button & Lang Switcher */}
            <div className="ms-4 flex items-center gap-x-6 justify-self-end mobile:ms-0">
              <Button>{t("contact")}</Button>
              <LangSwitcher className="max-mobile:hidden" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
