import gradientImage from "@/assets/landing/gradients/about-us.png";
import farmerTabletImage from "@/assets/landing/images/farmer-using-tablet.jpg";
import tractorSprayerImage from "@/assets/landing/images/tractor-sprayer.jpg";
import patternImage from "@/assets/landing/patterns/pattern-1.png";
import Subtitle from "@/components/atoms/landing/subtitle";
import AboutUsItem from "@/components/molecules/landing/about-us-item";
import Button from "@/components/shared/atoms/button";
import Image from "next/image";
import { GrUserWorker } from "react-icons/gr";
import { PiTractor } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-white section-py"
    >
      {/* Gradients */}
      <Image
        src={gradientImage}
        alt="gradient-1"
        className="absolute top-0 left-0 select-none"
        fetchPriority="low"
      />
      <Image
        src={gradientImage}
        alt="gradient-1"
        className="absolute right-0 bottom-0 -rotate-180 select-none"
        fetchPriority="low"
      />

      {/* Patterns */}
      <Image
        src={patternImage}
        alt="pattern-1"
        className="absolute -top-[30px] -left-[150px] rotate-165 opacity-10 select-none mobile:-top-[60px] mobile:-left-[250px]"
        fetchPriority="low"
      />

      <Image
        src={patternImage}
        alt="pattern-1"
        className="absolute -right-20 -bottom-[60px] -rotate-15 opacity-10 select-none mobile:-right-[481px] mobile:-bottom-[273px]"
        fetchPriority="low"
      />

      {/* Container */}
      <div className="relative container flex gap-y-4 max-mobile:flex-col mobile:gap-x-10 desktop:gap-x-20">
        {/* Left Column */}
        <div className="w-full">
          {/* Heading */}
          <div className="flex flex-col gap-y-3 mobile:gap-y-2">
            <Subtitle>About Us</Subtitle>
            <h2 className="text-neutral font-h-5">
              Leading agriculture in Egypt
            </h2>
          </div>

          {/* List */}
          <div className="mt-6 flex flex-col gap-y-6 mobile:mt-10">
            <AboutUsItem
              icon={PiTractor}
              title="Scientific Fertilizer Solutions"
              description="High-quality imported and locally produced fertilizers designed to enrich soil and maximize productivity."
            />
            <AboutUsItem
              icon={GrUserWorker}
              title="Expert Agricultural Consulting"
              description="Tailored programs and on-ground support from experienced agronomists to help farmers achieve consistent, profitable growth."
            />
          </div>

          {/* Poster */}
          <div className="relative mt-4 h-[194px] overflow-hidden rounded-b-7 mobile:mt-10 tablet:h-[255px] desktop:h-[524px]">
            <Image
              src={tractorSprayerImage}
              alt="tractor-sprayer-image"
              className="-rotate-[0.7] object-cover object-[50%_15%] mobile:object-center"
              fill
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full">
          <div className="flex h-full flex-col gap-y-6 max-mobile:flex-col-reverse tablet:gap-y-10 desktop:gap-y-[46px]">
            {/* Poster */}
            <div className="relative h-[194px] overflow-hidden rounded-7 mobile:h-full">
              <Image
                src={farmerTabletImage}
                alt="tractor-sprayer-image"
                className="object-cover object-[50%_15%] tablet:object-[50%_40%] desktop:object-center"
                fill
              />
            </div>

            {/* Content */}
            <div>
              {/* Heading */}
              <div className="flex items-center gap-x-2">
                <RiVerifiedBadgeFill className="text-[20px] text-primary mobile:text-2xl" />
                <h3 className="text-neutral font-b-1">Proven Excellence</h3>
              </div>

              {/* Body */}
              <p className="mt-2 max-w-[343px] text-neutral font-b-16 target:max-w-[452px] mobile:mt-4 desktop:max-w-[580px]">
                Alex Agro is a trusted Egyptian company specializing in
                fertilizers and integrated agricultural consulting. We combine
                scientific research with field expertise to provide sustainable
                solutions that improve soil fertility, enhance crop yields, and
                reduce farming costs.
              </p>

              {/* Discover More Button */}
              <Button className="mt-6 desktop:mt-8">Discover More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
