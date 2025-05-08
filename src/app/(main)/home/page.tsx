import AboutPreview from "@/components/home/about/AboutPreview";
import GallerySection from "@/components/home/gallery/GallerySection";
import MediaShowcase from "@/components/home/media/MediaShowcase";
import FeaturedProjects from "@/components/home/projects/FeaturedProjects";
import ServicesSection from "@/components/home/services/ServicesSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import HeroSection from "@/components/ui/hero/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Jabal Builders",
  description: "Welcome to Jabal Builders – Crafting beautiful homes and commercial spaces.",

};

export default function Home() {
  return (
    <>
      <HeroSection
        showCta={true}
        title="Building the Future with Precision"
        subtitle="Delivering excellence in construction and design for residential and commercial projects"
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
      />
      <AboutPreview />
      {/* <ApproachSection /> */}
      <MediaShowcase />
      <GallerySection />
      <ServicesSection />
      <FeaturedProjects />
      <TestimonialsSection />
    </>
  );
}
