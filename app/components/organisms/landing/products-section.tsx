import patternImage from "@/assets/landing/patterns/pattern-2.png";
import Subtitle from "@/components/atoms/landing/subtitle";
import ProductCard from "@/components/molecules/landing/product-card";
import Image from "next/image";
import productOneImage from "@/assets/shared/images/products/1.png";
import productTwoImage from "@/assets/shared/images/products/2.png";
import Button from "@/components/shared/atoms/button";
import { useTranslations } from "next-intl";

export default function ProductsSection() {
  const t = useTranslations("ProductsSection");
  return (
    <section
      id="our-products"
      className="relative overflow-hidden bg-neutral-background/6 section-py"
    >
      {/* Patterns */}
      <Image
        src={patternImage}
        alt="pattern-2"
        className="object-cover select-none rtl:-scale-x-100"
        fill
      />

      {/* Container */}
      <div className="relative container">
        {/* Heading */}
        <div className="flex flex-col items-center gap-y-3 mobile:gap-y-2">
          <Subtitle>{t("label")}</Subtitle>
          <h2 className="text-neutral font-h-5">{t("title")}</h2>
        </div>

        {/* Product Cards */}
        <div className="flex snap-x snap-mandatory grid-cols-[repeat(3,auto)] gap-x-4 overflow-x-auto overflow-y-visible mobile:mt-8 mobile:grid mobile:justify-center">
          <ProductCard
            productImage={productOneImage}
            category={t("items.agroSol.title")}
            title="Agro Plus"
            description={t("items.agroSol.description")}
          />
          <ProductCard
            productImage={productTwoImage}
            category={t("items.agroSol.title")}
            title="Nema Fight"
            description={t("items.nemaFight.title")}
          />
          <ProductCard
            productImage={productOneImage}
            category={t("items.agroSol.title")}
            title="Agro Sol"
            description={t("items.agroSol.title")}
          />
        </div>

        {/* See Products Button */}
        <Button className="mx-auto">{t("ctaGeneral")}</Button>
      </div>
    </section>
  );
}
