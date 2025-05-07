"use client"
import { galleryItems } from "@/config/gallery";
import GalleryTitle from "./GalleryTitle";
import DesktopGallery from "./DesktopGallery";
import MobileGallery from "./MobileGallery";
import { useIsMobile } from "@/app/hooks/use-mobile";

export const GallerySection = () => {
  const isMobile = useIsMobile();

  return (
    <section
      className="py-20 sm:py-24 md:py-28 bg-white overflow-hidden texture-overlay relative"  >
      <div className="fluid-container px-4 sm:px-6 md:px-8">
        <GalleryTitle />

        {isMobile ? (
          <MobileGallery galleryItems={galleryItems} />
        ) : (
          <DesktopGallery galleryItems={galleryItems} />
        )}
      </div>
    </section>
  );
};

export default GallerySection;
