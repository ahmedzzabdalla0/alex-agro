import Image from "next/image";
import logo from "@/assets/shared/images/logo.png";
import Link from "@/components/shared/atoms/link";
import IconBadge from "@/components/shared/atoms/icon-badge";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { companyLinks, helpLinks } from "@/constants/landing/footer";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-neutral py-6 mobile:py-10"
    >
      {/* Container */}
      <div className="relative container flex flex-col gap-y-6 mobile:gap-y-10 tablet:gap-y-14">
        <div className="flex justify-between gap-y-10 max-mobile:flex-col mobile:gap-y-6">
          <div className="space-y-4">
            <Image src={logo} alt="logo-png" />
            <p className="max-w-[430px] text-neutral-100 font-b-16">
              The company focuses on importing, manufacturing, and supplying
              high-quality, specialized agricultural fertilizer raw materials,
              and providing scientific and practical solutions to soil salinity
              problems and land fertility improvement.
            </p>
          </div>

          <div className="flex gap-x-12 mobile:gap-x-10">
            <div>
              {/* Header */}
              <p className="mb-6 text-white font-b-13">Company</p>

              <div className="space-y-4">
                {companyLinks.map((i, index) => (
                  <Link
                    key={`company_${index}`}
                    href={i.href}
                    className="block text-neutral-300 font-b-16"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              {/* Header */}
              <p className="mb-6 text-white font-b-13">Help</p>

              <div className="space-y-4">
                {helpLinks.map((i, index) => (
                  <Link
                    key={`help_${index}`}
                    href={i.href}
                    className="block text-neutral-300 font-b-16"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-y-6 border-t border-neutral-300 pt-6 max-mobile:flex-col mobile:pt-8">
          <p className="text-neutral-100 font-b-15">
            © Copyright 2025, Alexagro All Rights Reserved
          </p>

          {/* Social Media Links */}
          <div className="space-x-2">
            <Link href="#">
              <IconBadge
                className="p-[7px]"
                iconProps={{ style: { fontSize: "1rem" } }}
                icon={BiLogoFacebook}
              />
            </Link>
            <Link href="#">
              <IconBadge
                className="p-[7px]"
                iconProps={{ style: { fontSize: "1rem" } }}
                icon={AiOutlineInstagram}
              />
            </Link>
            <Link href="#">
              <IconBadge
                className="p-[7px]"
                iconProps={{ style: { fontSize: "1rem" } }}
                icon={AiOutlineWhatsApp}
              />
            </Link>
            <Link href="#">
              <IconBadge
                className="p-[7px]"
                iconProps={{ style: { fontSize: "1rem" } }}
                icon={BiLogoLinkedin}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
