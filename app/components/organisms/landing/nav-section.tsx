import Logo from "@/assets/shared/images/logo.png";
import NavVector from "@/assets/shared/vectors/nav";
import ToastButton from "@/components/atoms/landing/toast-button";
import ActiveLink from "@/components/shared/atoms/active-link";
import Button from "@/components/shared/atoms/button";
import Link from "@/components/shared/atoms/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function NavSection() {
  // No need for useMemo here since this code runs on the server.
  const Links = (
    <>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/about-us">About Us</ActiveLink>
      <ActiveLink href="/products">Products</ActiveLink>
      <ActiveLink href="/services">Services</ActiveLink>
      <ActiveLink href="/faqs">FAQs</ActiveLink>
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

        {/* Navigation Menu (Links + Contact Button) */}
        <div id="nav-menu" className="group contents h-full w-full">
          {/* Mobile Overlay Background */}
          <div className="pointer-events-none fixed inset-0 -z-1 bg-neutral-background opacity-0 transition-opacity max-mobile:group-[.show]:pointer-events-auto max-mobile:group-[.show]:opacity-100"></div>

          {/* Menu Container (Responsive) */}
          <div
            className={twMerge(
              // Base layout
              "flex",

              // Mobile behavior
              "inset-x-0 top-full gap-y-4 max-mobile:absolute max-mobile:-z-1 max-mobile:flex-col max-mobile:opacity-0 max-mobile:transition-opacity max-mobile:group-[.show]:opacity-100 max-mobile:group-[:not(.show)]:pointer-events-none",

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

            {/* Contact Button */}
            <div className="ms-4 justify-self-end mobile:ms-0">
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle Icon */}
        <ToastButton className="text-neutral mobile:hidden" />
      </div>
    </nav>
  );
}
