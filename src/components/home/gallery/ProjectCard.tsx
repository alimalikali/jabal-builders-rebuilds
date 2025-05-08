"use client"
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryItemType } from "@/types/gallery";
import Link from "next/link";

interface ProjectCardProps {
  item: GalleryItemType;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  isTouch: boolean;
  isDesktop: boolean;
}

const ProjectCard = ({ 
  item, 
  index, 
  activeIndex, 
  setActiveIndex,
  isTouch,
  isDesktop
}: ProjectCardProps) => {
  const handleMouseEnter = () => {
    if (!isTouch) {
      setActiveIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch) {
      setActiveIndex(null);
    }
  };

  return (
    <Link 
      href={`/projects/${item.id}`}
      key={item.id}
      className="shrink-0 snap-center w-[100svh] relative rounded-xl overflow-hidden shadow-xl tilt-card hoverable"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor-text="View Project"
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
      onDragStart={(e) => e.preventDefault()}
    >
      <AspectRatio ratio={4/3} className="w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
          style={{ 
            backgroundImage: `url(${item.imageUrl})`,
            transform: activeIndex === index && !isTouch ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500",
            activeIndex === index && isDesktop ? "opacity-100" : "opacity-50"
          )}
        />
        
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transition-all duration-500 ease-out",
            activeIndex === index && isDesktop ? "translate-y-0 opacity-100" : "translate-y-4 opacity-80"
          )}
        >
          <span className={cn(
            "inline-block bg-secondary/90 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2",
            "transform transition-all duration-500",
            activeIndex === index && isDesktop ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          )}>
            {item.category}
          </span>
          <h3 
            className={cn(
              "text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 font-poppins",
              "transform transition-all duration-300", 
              activeIndex === index && isDesktop ? "translate-y-0" : "translate-y-2"
            )}
          >
            {item.title}
          </h3>
          <p 
            className={cn(
              "text-white/90 flex items-center text-sm sm:text-base",
              "transform transition-all duration-500", 
              activeIndex === index && isDesktop ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
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
  );
};

export default ProjectCard;
