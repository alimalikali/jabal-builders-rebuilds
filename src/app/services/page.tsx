"use client"
import FAQSection from '@/components/services/FAQSection';
import ProcessSection from '@/components/services/ProcessSection';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import useScrollAnimation from '@/components/ui/useScrollAnimation';

const Services = () => {
useScrollAnimation();
  return (
    <>

      <main>
        <ServiceHero />
        <ServicesGrid />
        <ProcessSection />
        <FAQSection />
      </main>

    </>
  );
};

export default Services;