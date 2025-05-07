"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryItemType } from "@/app/types/gallery";
import { useHydrated } from "@/app/hooks/useHydrated";

interface MobileGalleryProps {
  galleryItems: GalleryItemType[];
}

const MobileGallery = ({ galleryItems }: MobileGalleryProps) => {

  const isMounted = useHydrated();



  return (
    <div className="space-y-6 sm:space-y-8">
      {galleryItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link 
            href={`/projects/${item.id}`}
            className={`w-full relative rounded-xl overflow-hidden shadow-xl hoverable ${isMounted ? 'active' : ''}`}
            data-cursor-text="View"
          >
            <AspectRatio ratio={16/9} className="w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 glass">
                <span className="inline-block bg-secondary/90 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 font-poppins">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base flex items-center">
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
        </motion.div>
      ))}
    </div>
  );
};

export default MobileGallery;
