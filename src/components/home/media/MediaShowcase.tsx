"use client"
import { ZoomIn } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import AnimatedSection from "@/components/animations/AnimatedSection";  
import { showcaseImages } from "@/config/showcase";
import Image from "next/image";


const MediaShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="centered-section-heading">Media Showcase</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Experience our craftsmanship through immersive video tours and stunning project photography.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Side */}
          <AnimatedSection animation="slide-left">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={16/16}>
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  
                  <source src="/assets/videos/project-preview.mp4" type="video/mp4" />

                </video>
              </AspectRatio>
              {/* <div className="p-4 bg-primary text-white ">
                <h3 className="font-bold font-poppins">Project Walkthrough</h3>
                <p className="text-sm opacity-90">Modern Office Building Complex</p>
              </div> */}
            </div>
          </AnimatedSection>
          
          {/* Image Grid Side */}
          <AnimatedSection animation="slide-right">
            <div className="grid grid-cols-2 gap-4">
              {showcaseImages.map((image, index) => (
                <MediaGalleryItem key={index} image={image} index={index} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

interface MediaGalleryItemProps {
  image: {
    url: string;
    title: string;
  };
  index: number;
}

const MediaGalleryItem = ({ image, index }: MediaGalleryItemProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className="group relative aspect-square cursor-pointer rounded-lg overflow-hidden"
          style={{ animationDelay: `${0.1 * (index + 1)}s` }}
        >
          <Image 
            src={image.url} 
            alt={image.title} 
            width={1000}
            height={1000}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <ZoomIn className="text-white h-8 w-8" />
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <Image
          width={1000}
          height={1000}
          src={image.url} 
          alt={image.title} 
          className="w-full h-48 object-cover rounded-md mb-2"
        />
        <h4 className="font-bold">{image.title}</h4>
        <p className="text-sm text-gray-500">Jabal Builders Project</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default MediaShowcase;
