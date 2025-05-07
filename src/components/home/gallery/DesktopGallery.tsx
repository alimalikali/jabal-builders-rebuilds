"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryItemType } from "@/app/types/gallery";
import { useHydrated } from "@/app/hooks/useHydrated";
interface DesktopGalleryProps {
  galleryItems: GalleryItemType[];
}

export const DesktopGallery = ({ galleryItems }: DesktopGalleryProps) => {

  const isMounted = useHydrated();


  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const updateScrollIndicators = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      setShowLeftArrow(container.scrollLeft > 20);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 20
      );
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", updateScrollIndicators);
    updateScrollIndicators();

    return () => {
      container?.removeEventListener("scroll", updateScrollIndicators);
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => setIsDragging(false);

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const scrollTo = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    const target = direction === "left"
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden texture-overlay">
      <div className="fluid-container">
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scrollTo("left")}
              className={cn(
                "absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all hoverable min-h-[44px] min-w-[44px]",
                "hover:bg-primary hover:text-white hover:scale-110"
              )}
              aria-label="Scroll left"
              data-cursor-text="Scroll"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scrollTo("right")}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all hoverable min-h-[44px] min-w-[44px]",
                "hover:bg-primary hover:text-white hover:scale-110"
              )}
              aria-label="Scroll right"
              data-cursor-text="Scroll"
            >
              <ArrowRight size={20} />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className={cn(
              "flex gap-4 sm:gap-6 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-pl-6",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryItems.map((item, index) => (
              <Link
                href={`/projects/${item.id}`}
                key={item.id}
                className={`shrink-0 snap-center w-[85%] sm:w-[60%] md:w-[40%] relative rounded-xl overflow-hidden shadow-xl tilt-card hoverable ${isMounted ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                data-cursor-text="View"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                onDragStart={(e) => e.preventDefault()}
              >
                <AspectRatio ratio={3 / 4} className="w-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500",
                      activeIndex === index ? "opacity-100" : "opacity-50"
                    )}
                  />

                  <div
                    className={cn(
                      "absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transition-all duration-500 ease-out",
                      activeIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-80"
                    )}
                  >
                    <span className={cn(
                      "inline-block bg-secondary/90 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2 sm:mb-3",
                      "transform transition-all duration-500",
                      activeIndex === index ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    )}>
                      {item.category}
                    </span>
                    <h3
                      className={cn(
                        "text-white text-xl sm:text-2xl font-bold mb-2 font-poppins",
                        "transform transition-all duration-300",
                        activeIndex === index ? "translate-y-0" : "translate-y-2"
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "text-white/90 flex items-center",
                        "transform transition-all duration-500",
                        activeIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      )}
                    >
                      <span className="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      {item.location}
                    </p>
                  </div>
                </AspectRatio>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopGallery;
