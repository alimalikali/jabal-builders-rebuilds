"use client"
import FAQSection from '@/components/services/FAQSection';
import ProcessSection from '@/components/services/ProcessSection';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import useScrollAnimation from '@/components/ui/useScrollAnimation';
import Head from 'next/head';

const ServicesClient = () => {
useScrollAnimation();
  return (
    <>
      <Head>
        <title>Services | Jabal Builders</title>
        <meta name="description" content="Explore our comprehensive range of construction services, from residential to commercial and industrial projects." />
      </Head>
      <main>
        <ServiceHero />
        <ServicesGrid />
        <ProcessSection />
        <FAQSection />
      </main>

    </>
  );
};

export default ServicesClient;