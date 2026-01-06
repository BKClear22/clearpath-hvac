import { HeroSection } from "@/components/home/HeroSection";
import { QuickBook } from "@/components/home/QuickBook";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickBook />
      <ServicesGrid />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FAQSection />
      <CTASection />
    </>
  );
}
