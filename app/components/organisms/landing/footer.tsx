import logo from "@/assets/shared/images/logo.png";
import IconBadge from "@/components/shared/atoms/icon-badge";
import Link from "@/components/shared/atoms/link";
import {
  companyLinks,
  helpLinks,
  socialMediaLinks,
} from "@/constants/landing/footer";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
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
              {t("description")}
            </p>
          </div>

          <div className="flex gap-x-12 mobile:gap-x-10">
            <div>
              {/* Header */}
              <p className="mb-6 text-white font-b-13">{t("companyHeading")}</p>

              <div className="space-y-4">
                {companyLinks.map((i, index) => (
                  <Link
                    key={`company_${index}`}
                    href={i.href}
                    className="block text-neutral-300 font-b-16"
                  >
                    {t(`links.${i.label}`)}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              {/* Header */}
              <p className="mb-6 text-white font-b-13">{t("helpHeading")}</p>

              <div className="space-y-4">
                {helpLinks.map((i, index) => (
                  <Link
                    key={`help_${index}`}
                    href={i.href}
                    className="block text-neutral-300 font-b-16"
                  >
                    {t(`links.${i.label}`)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-y-6 border-t border-neutral-300 pt-6 max-mobile:flex-col mobile:pt-8">
          <p className="text-neutral-100 font-b-15">
            {t("copyright", { year: "2025" })}
          </p>

          {/* Social Media Links */}
          <div className="space-x-2">
            {socialMediaLinks.map((i, index) => (
              <Link key={`social-media-${index}`} href={i.href}>
                <IconBadge
                  aria-label={t("ariaLinkLabel", {
                    label: t(`socialLabels.${i.label}`),
                  })}
                  className="p-[7px]"
                  iconProps={{ style: { fontSize: "1rem" } }}
                  icon={i.icon}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
