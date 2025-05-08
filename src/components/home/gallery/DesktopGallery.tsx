"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryItemType } from "@/types/gallery";
import { useHydrated } from "@/hooks/useHydrated";
import { motion, AnimatePresence } from "framer-motion";

interface DesktopGalleryProps {
  galleryItems: GalleryItemType[];
}

const DesktopGallery = ({ galleryItems }: DesktopGalleryProps) => {
  const isMounted = useHydrated();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? "right" : "left");
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: string) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: (direction: string) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="fluid-container">
        <div className="relative h-[500px] md:h-[600px]">
          {/* Navigation Arrows - Positioned above content */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <button
              onClick={handlePrev}
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 z-[80] bg-white/90 backdrop-blur-sm size-[60px]  rounded-full flex items-center justify-center shadow-lg transition-all min-h-[44px] min-w-[44px] pointer-events-auto",
                "hover:bg-primary hover:text-white hover:scale-110",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              )}
              aria-label="Previous item"
              data-cursor-text="Previous"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 z-[80] bg-white/90 backdrop-blur-sm size-[60px] rounded-full flex items-center justify-center shadow-lg transition-all min-h-[44px] min-w-[44px] pointer-events-auto",
                "hover:bg-primary hover:text-white hover:scale-110",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              )}
              aria-label="Next item"
              data-cursor-text="Next"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Carousel Item */}
          <div className="relative w-full h-full">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                onAnimationComplete={() => setIsAnimating(false)}
                className="absolute inset-0 flex justify-center"
              >
                <Link
                  href={`/projects/${galleryItems[currentIndex].id}`}
                  className={`w-full max-w-screen-2xl relative rounded-xl overflow-hidden shadow-xl ${isMounted ? 'hoverable active' : ''}`}
                  data-cursor-text="View"
                  onDragStart={(e) => e.preventDefault()}
                >
                  <AspectRatio ratio={3 / 4} className="w-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
                      style={{
                        backgroundImage: `url(${galleryItems[currentIndex].imageUrl})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                      <span className="inline-block bg-secondary/90 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2 sm:mb-3">
                        {galleryItems[currentIndex].category}
                      </span>
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 font-poppins">
                        {galleryItems[currentIndex].title}
                      </h3>
                      <p className="text-white/90 flex items-center">
                        <span className="mr-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </span>
                        {galleryItems[currentIndex].location}
                      </p>
                    </div>
                  </AspectRatio>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopGallery;