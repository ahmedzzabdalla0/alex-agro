import patternImage from "@/assets/landing/patterns/pattern-3.png";
import Subtitle from "@/components/atoms/landing/subtitle";
import Accordion from "@/components/shared/molecules/accordion";
import Button from "@/components/shared/atoms/button";
import { useTranslations } from "next-intl";

export default function FAQsSection() {
  const t = useTranslations("FaqSection");
  const questions = [
    "servicesProvided",
    "onSiteSupport",
    "salinityHelp",
    "cropSuitability",
  ];

  return (
    <section
      id="our-products"
      className="relative overflow-hidden bg-neutral-background/6 section-py"
    >
      {/* Patterns */}
      <div
        className="absolute inset-0 bg-secondary"
        style={{ backgroundImage: `url("${patternImage.src}")` }}
      />

      {/* Container */}
      <div className="relative container flex gap-y-6 max-mobile:flex-col mobile:gap-x-10 tablet:gap-x-14">
        {/* Heading */}
        <div>
          <Subtitle>{t("label")}</Subtitle>
          <h2 className="mt-2 max-w-[466px] text-neutral font-h-5">
            {t("title")}
          </h2>
          <Button className="mt-6 mobile:mt-10">{t("ctaGeneral")}</Button>
        </div>

        {/* Questions */}
        <div className="ms-auto max-w-[800px] space-y-4 mobile:space-y-6">
          {questions.map((q, index) => (
            <Accordion
              key={t(`questions.${q}.q`) + index}
              title={t(`questions.${q}.q`)}
              description={t(`questions.${q}.a`)}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
