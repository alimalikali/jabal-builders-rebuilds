"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GalleryItemType } from "@/types/gallery";
import { AnimatePresence, motion, PanInfo, useAnimation, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

interface MobileGalleryProps {
  galleryItems: GalleryItemType[];
}

const MobileGallery = ({ galleryItems }: MobileGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);


  const handleNext = () => {
    if (currentIndex < galleryItems.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const velocityThreshold = 500;

    if (Math.abs(info.velocity.x) > velocityThreshold) {
      if (info.velocity.x > 0) {
        handlePrev();
      } else {
        handleNext();
      }
      return;
    }

    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    } else {
      controls.start({ x: 0 });
    }
  };

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0.5,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0.5,
      scale: 0.95,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    })
  };


  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm h-10 w-10 rounded-full flex items-center justify-center shadow-lg ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        aria-label="Previous"
      >
        <ChevronLeft width={40} height={40} />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === galleryItems.length - 1}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm h-10 w-10 rounded-full flex items-center justify-center shadow-lg ${currentIndex === galleryItems.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        aria-label="Next"
      >
        <ChevronRight width={40} height={40} />
      </button>

      {/* Carousel Container */}
      <AnimatePresence custom={direction} initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="w-full touch-none"
        >
          <Link
            href={`/projects/${galleryItems[currentIndex].id}`}
            className="w-full relative rounded-xl overflow-hidden shadow-xl"
            data-cursor-text="View"
            draggable="false"
          >
            <AspectRatio ratio={16 / 14} className="w-full select-none">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${galleryItems[currentIndex].imageUrl})` }}
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 glass">
                <span className="inline-block bg-secondary/90 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {galleryItems[currentIndex].category}
                </span>
                <h3 className="text-white text-lg font-bold mb-2 font-poppins">
                  {galleryItems[currentIndex].title}
                </h3>
                <p className="text-white/90 text-sm flex items-center">
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

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {galleryItems.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <Button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={cn(
                "rounded-full w-[10px] h-[10px] transition-all duration-300",
                isActive ? "bg-primary " : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to item ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MobileGallery;