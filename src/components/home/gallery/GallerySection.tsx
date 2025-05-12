"use client"
import AnimatedSection from "@/components/animations/AnimatedSection";
import { galleryItems } from "@/config/home";
import { useIsMobile } from "@/hooks/use-mobile";
import dynamic from 'next/dynamic';
import GalleryTitle from "./GalleryTitle";
const NoSSR = dynamic(() => import('./MobileGallery'), { ssr: false })
const NoSSRDesktop = dynamic(() => import('./DesktopGallery'), { ssr: false })




export const GallerySection = () => {
  const isMobile = useIsMobile();

  return (
    <AnimatedSection animation="fade" className="py-20 sm:py-24 md:py-28 bg-white overflow-hidden texture-overlay relative"  >
      <div className="fluid-container px-4 sm:px-6 md:px-8">
        <GalleryTitle />

        {isMobile ? (
          <NoSSR galleryItems={galleryItems} />
        ) : (
          <NoSSRDesktop galleryItems={galleryItems} />
        )}
      </div>
    </AnimatedSection>
  );
};

export default GallerySection;
