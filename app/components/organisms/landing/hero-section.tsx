import Image from "next/image";
import posterImage from "@/assets/landing/images/poster.png";
import Tag from "@/components/atoms/landing/tag";
import { BsMouse } from "react-icons/bs";
import Eyebrow from "@/components/shared/atoms/eyebrow";
import Button from "@/components/shared/atoms/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative -mt-3.5 h-full w-full">
      {/* Poster */}
      <div className="absolute inset-0">
        <Image
          src={posterImage}
          alt="poster"
          className="object-cover select-none"
          loading="eager"
          fetchPriority="high"
          preload
          fill
        />
      </div>

      {/* Container */}
      <div className="relative container h-full w-full">
        <div className="relative flex h-full w-full flex-col justify-center">
          {/* Tags */}
          <div className="absolute right-0 bottom-10 hidden w-[346px] flex-wrap gap-4 min-[960px]:flex">
            <Tag>AgriTech</Tag>
            <Tag>Eco-Friendly</Tag>
            <Tag>Precision Farming</Tag>
            <Tag>Sustainable Farming</Tag>
            <Tag>Soil Health</Tag>
            <Tag>Natural Fertilizers</Tag>
          </div>

          {/* Scroll Down */}
          <div className="center-x absolute bottom-10">
            <div className="flex items-center gap-x-2 text-neutral-100">
              <BsMouse className="text-2xl mobile:text-[32px] tablet:text-[40px]" />
              <span className="uppercase font-b-19">Scrol Down</span>
            </div>
          </div>

          {/* Content */}
          <div className="-mt-[15vh] flex max-w-[934px] flex-col gap-y-6 mobile:gap-y-8 desktop:mt-0">
            {/* Typograpy */}
            <div className="flex flex-col gap-y-2 mobile:gap-y-3">
              <Eyebrow>Smart solutions for sustainable growth.</Eyebrow>
              <h1 className="text-neutral-100 font-h-1">
                Cultivating Knowledge, Harvesting the Future
              </h1>
              <p className="max-w-[571px] text-neutral-100 font-b-16">
                Alex Agro is an Egyptian leader in fertilizers and agricultural
                consulting, offering quality products and smart solutions to
                improve soil and increase yields.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-x-4">
              <Button>Contact Us</Button>
              <Button variant="secondary" as={Link} href="#services">
                See All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
