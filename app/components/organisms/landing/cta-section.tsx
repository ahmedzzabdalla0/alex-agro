import backgroundImage from "@/assets/landing/images/thailand-tea-hills.jpg";
import Button from "@/components/shared/atoms/button";
import Image from "next/image";

export default function CTASection() {
  return (
    <section
      id="cta-section"
      className="relative overflow-hidden section-py max-mobile:py-[105px]"
    >
      {/* Patterns */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="background"
          fill
          fetchPriority="low"
          className="object-cover max-mobile:scale-250"
        />

        <div className="absolute inset-0 bg-[linear-gradient(101.56deg,rgba(0,0,0,0)_-59.02%,#000_169.12%)]" />
      </div>

      {/* Container */}
      <div className="relative container text-center *:mx-auto">
        <h1 className="max-w-[673px] text-neutral-100 font-h-1">
          Grow Smarter, Not Harder.
        </h1>
        <p className="mt-2 text-neutral-100 font-b-16 mobile:mt-4 tablet:mt-6">
          Discover innovative tools and technologies that simplify farming while
          maximizing yields.
        </p>
        <Button className="mt-6 mobile:mt-10">Contact Us</Button>
      </div>
    </section>
  );
}
