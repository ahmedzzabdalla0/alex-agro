import filtirizerImage from "@/assets/landing/images/filtirizer.jpg";
import seedlingImage from "@/assets/landing/images/seedling-growing.png";
import tractorImage from "@/assets/landing/images/tractor-working.png";
import Subtitle from "@/components/atoms/landing/subtitle";
import ServiceCard from "@/components/molecules/landing/service-card";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("ServicesSection");

  const services = ["consulting", "soil", "feeding"];
  const images = [tractorImage, seedlingImage, filtirizerImage];
  return (
    <section id="services" className="relative section-py">
      {/* Container */}
      <div className="relative container">
        {/* Heading */}
        <div className="flex flex-col gap-y-3 mobile:gap-y-2">
          <Subtitle>{t("label")}</Subtitle>
          <h2 className="text-neutral font-h-5">{t("title")}</h2>
        </div>

        {/* Body */}
        <div className="mt-8 flex snap-x snap-mandatory justify-between gap-x-4 overflow-x-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service + index}
              imageSrc={images[index]}
              label={t(`${service}.title`)}
              title={t(`${service}.subtitle`)}
              description={t(`${service}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
