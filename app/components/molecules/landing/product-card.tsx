import Button from "@/components/shared/atoms/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface MyProps {
  productImage: string | StaticImport;
  alt?: string;
  category: string;
  title: string;
  description: string;
}

export default function ProductCard({
  productImage,
  alt = "product-image",
  category,
  title,
  description,
}: MyProps) {
  return (
    <div
      className={twMerge(
        "flex w-[calc(min(100%-100px,400px))] shrink-0 snap-start flex-col overflow-hidden rounded-7 border border-neutral-200 bg-neutral-background transition-transform hover:scale-105 mobile:w-auto mobile:shrink tablet:w-min",
        "my-(--spacing-default) mobile:mt-(--spacing-lg-top) mobile:mb-(--spacing-lg-bottom)",
      )}
      style={
        {
          "--base-spacing": "calc(5% + 4px)",
          "--spacing-default": "max(var(--base-spacing), 24px)",
          "--spacing-lg-top": "max(var(--base-spacing), 36px)",
          "--spacing-lg-bottom": "max(var(--base-spacing), 40px)",

          boxShadow: "0px 4px 4px 0px #EDEEE3",
        } as React.CSSProperties
      }
    >
      {/* Product Image */}
      <div className="flex h-full w-full items-center bg-neutral-light-green p-5 mobile:p-6 tablet:w-[280px]">
        <Image
          src={productImage}
          alt={alt}
          className="mx-auto w-full max-w-[260px]"
        />
      </div>

      {/* Category */}
      <div className="bg-primary/10 px-3 py-1.5">
        <p className="text-primary font-b-20">{category}</p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-y-4 p-3 pt-2">
        {/* Title & Description */}
        <div className="">
          <h3 className="mb-1 text-neutral font-b-13">{title}</h3>
          <p className="text-neutral-800 font-b-20">{description}</p>
        </div>

        {/* Link */}
        <div className="flex items-center justify-between">
          <Link href={"#"} className="text-primary font-b-19">
            Learn More
          </Link>
          <Button
            as={Link}
            href={"#"}
            aria-label={`Learn more about ${title} product`}
          />
        </div>
      </div>
    </div>
  );
}
