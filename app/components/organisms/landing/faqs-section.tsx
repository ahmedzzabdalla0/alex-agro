import patternImage from "@/assets/landing/patterns/pattern-3.png";
import Subtitle from "@/components/atoms/landing/subtitle";
import Accordion from "@/components/shared/molecules/accordion";
import Button from "@/components/shared/atoms/button";

export default function FAQsSection() {
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
          <Subtitle>Frequently Asked Questions</Subtitle>
          <h2 className="mt-2 max-w-[466px] text-neutral font-h-5">
            How can we help you today?
          </h2>
          <Button className="mt-6 mobile:mt-10">Read More</Button>
        </div>

        {/* Questions */}
        <div className="ms-auto max-w-[800px] space-y-4 mobile:space-y-6">
          <Accordion
            title="What services does Alex Agro provide?"
            description="We offer high-quality fertilizers, soil improvement solutions, and professional agricultural consulting tailored to each crop’s needs."
            defaultOpen
          />
          <Accordion
            title="Do you provide on-site agricultural support?"
            description="We offer high-quality fertilizers, soil improvement solutions, and professional agricultural consulting tailored to each crop’s needs."
          />
          <Accordion
            title="Can Alex Agro help with soil salinity problems?"
            description="We offer high-quality fertilizers, soil improvement solutions, and professional agricultural consulting tailored to each crop’s needs."
          />
          <Accordion
            title="Are your fertilizers suitable for all types of crops?"
            description="We offer high-quality fertilizers, soil improvement solutions, and professional agricultural consulting tailored to each crop’s needs."
          />
        </div>
      </div>
    </section>
  );
}
