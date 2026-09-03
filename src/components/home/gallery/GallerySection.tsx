"use client"
import AnimatedSection from "@/components/animations/AnimatedSection";
import { galleryItems } from "@/config/home";
import { useIsMobile } from "@/hooks/use-mobile";
import GalleryTitle from "./GalleryTitle";
import MobileGallery from "./MobileGallery";
import DesktopGallery from "./DesktopGallery";

export const GallerySection = () => {
  const isMobile = useIsMobile();

  return (
    <AnimatedSection animation="fade" className="py-20 sm:py-24 md:py-28 bg-white overflow-hidden texture-overlay relative"  >
      <div className="fluid-container px-4 sm:px-6 md:px-8">
        <GalleryTitle />

        {isMobile === undefined ? null : isMobile ? (
          <MobileGallery galleryItems={galleryItems} />
        ) : (
          <DesktopGallery galleryItems={galleryItems} />
        )}
      </div>
    </AnimatedSection>
  );
};

export default GallerySection;
