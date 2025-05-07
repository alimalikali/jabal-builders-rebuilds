import AboutPreview from "@/components/home/about/AboutPreview";
import ApproachSection from "@/components/home/approach/ApproachSection";
import CtaSection from "@/components/home/cta/CtaSection";
import GallerySection from "@/components/home/gallery/GallerySection";
import HeroSection from "@/components/home/hero/HeroSection";
import MediaShowcase from "@/components/home/media/MediaShowcase";
import FeaturedProjects from "@/components/home/projects/FeaturedProjects";
import ServicesSection from "@/components/home/services/ServicesSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Jabal Builders",
  description: "Welcome to Jabal Builders – Crafting beautiful homes and commercial spaces.",

};

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-center h-screen">
    <div>
      <HeroSection
        showCta={true}
        title="Building the Future with Precision"
        subtitle="Delivering excellence in construction and design for residential and commercial projects"
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
      />

      {/* About Section Preview */}
      <AboutPreview />
      
      {/* Our Approach Timeline Section */}
      <ApproachSection />

      {/* Media Showcase Section */}
      <MediaShowcase />

      {/* Gallery Section */}
      <GallerySection />

      {/* Services Preview */}
      <ServicesSection />

      {/* Featured Projects */}
      <FeaturedProjects />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CtaSection />



    </div>
  );
}
