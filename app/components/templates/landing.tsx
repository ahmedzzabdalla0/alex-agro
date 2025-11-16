import NavSection from "@/components/organisms/landing/nav-section";
import HeroSection from "@/components/organisms/landing/hero-section";
import ServicesSection from "@/components/organisms/landing/services-section";
import AboutUsSection from "@/components/organisms/landing/about-us-section";
import ProductsSection from "@/components/organisms/landing/products-section";
import FAQsSection from "@/components/organisms/landing/faqs-section";
import CTASection from "@/components/organisms/landing/cta-section";
import Footer from "@/components/organisms/landing/footer";

export default function LandingTemplate() {
  return (
    <>
      <div className="flex h-screen flex-col">
        <NavSection />
        <HeroSection />
      </div>
      <ServicesSection />
      <AboutUsSection />
      <ProductsSection />
      <FAQsSection />
      <CTASection />
      <Footer />
    </>
  );
}
