import filtirizerImage from "@/assets/landing/images/filtirizer.jpg";
import seedlingImage from "@/assets/landing/images/seedling-growing.png";
import tractorImage from "@/assets/landing/images/tractor-working.png";
import Subtitle from "@/components/atoms/landing/subtitle";
import ServiceCard from "@/components/molecules/landing/service-card";

export default function ServicesSection() {
  return (
    <section id="services" className="relative section-py">
      {/* Container */}
      <div className="relative container">
        {/* Heading */}
        <div className="flex flex-col gap-y-3 mobile:gap-y-2">
          <Subtitle>Our Services</Subtitle>
          <h2 className="text-neutral font-h-5">
            Our services for your business
          </h2>
        </div>

        {/* Body */}
        <div className="mt-8 flex snap-x snap-mandatory justify-between gap-x-4 overflow-x-auto">
          <ServiceCard
            imageSrc={tractorImage}
            label="Agricultural Consulting"
            title="Agro Support"
            description="Field-based technical support from our agronomists to ensure sustainable growth."
          />
          <ServiceCard
            imageSrc={seedlingImage}
            label="Soil Enhancement"
            title="Soil Fertility Solutions"
            description="Innovative programs to restore soil health and boost crop productivity naturally."
          />
          <ServiceCard
            imageSrc={filtirizerImage}
            label="Smart Feeding"
            title="Crop Nutrition Programs"
            description="Tailored nutrition plans designed to maximize yield and reduce farming costs."
          />
        </div>
      </div>
    </section>
  );
}
