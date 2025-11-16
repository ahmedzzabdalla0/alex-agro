import patternImage from "@/assets/landing/patterns/pattern-2.png";
import Subtitle from "@/components/atoms/landing/subtitle";
import ProductCard from "@/components/molecules/landing/product-card";
import Image from "next/image";
import productOneImage from "@/assets/shared/images/products/1.png";
import productTwoImage from "@/assets/shared/images/products/2.png";
import Button from "@/components/shared/atoms/button";

export default function ProductsSection() {
  return (
    <section
      id="our-products"
      className="relative overflow-hidden bg-neutral-background/6 section-py"
    >
      {/* Patterns */}
      <Image
        src={patternImage}
        alt="pattern-2"
        className="object-cover select-none"
        fill
      />

      {/* Container */}
      <div className="relative container">
        {/* Heading */}
        <div className="flex flex-col items-center gap-y-3 mobile:gap-y-2">
          <Subtitle>Our Products</Subtitle>
          <h2 className="text-neutral font-h-5">Explore Our Core Products</h2>
        </div>

        {/* Product Cards */}
        <div className="flex snap-x snap-mandatory grid-cols-[repeat(3,auto)] gap-x-4 overflow-x-auto overflow-y-visible mobile:mt-8 mobile:grid mobile:justify-center">
          <ProductCard
            productImage={productOneImage}
            category="Growth & Yield Enhancer"
            title="Agro Plus"
            description="Boosts vegetative growth & fruit production."
          />
          <ProductCard
            productImage={productTwoImage}
            category="Soil Sterilization"
            title="Nema Fight"
            description="Eliminates nematodes & restores soil balance."
          />
          <ProductCard
            productImage={productOneImage}
            category="Salinity Reduction"
            title="Agro Sol"
            description="Improves root strength & salinity tolerance."
          />
        </div>

        {/* See Products Button */}
        <Button className="mx-auto">See Products</Button>
      </div>
    </section>
  );
}
