import CtaSection from "@/components/services/CtaSection";
import DetailedServices from "@/components/services/DetailedServices";
import ProcessOverview from "@/components/services/ProcessOverview";
import ServicesIntroduction from "@/components/services/ServicesIntroduction";
import Testimonials from "@/components/services/Testimonials";
import HeroSection from "@/components/ui/hero/HeroSection";

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive construction solutions tailored to your specific needs"
    backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
      
        height="h-[60vh]"
      />
      
      <ServicesIntroduction />
      <DetailedServices />
      <ProcessOverview />
      <Testimonials />
      <CtaSection />
    </>
  );
}