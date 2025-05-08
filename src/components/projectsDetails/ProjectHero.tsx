'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { useHydrated } from '@/hooks/useHydrated';
import { ProjectDetails } from '@/types/projects';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface ProjectHeroProps {
  project: ProjectDetails;
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
  const [isVideo, setIsVideo] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isMobile = useIsMobile();
  const isHydrated = useHydrated();
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollY } = useScroll();
  const imageRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(scrollY, [0, 500], isTouch ? [1.02, 1.1] : [1.05, 1.2]);
  // Increased rotation range for more dramatic effect
  const springX = useSpring(x, { stiffness: 80, damping: 20 }); // Softer spring for smoother movement
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    setIsTouch(!window.matchMedia('(hover: hover)').matches);
  }, []);

  useEffect(() => {
    if (!isHydrated || isMobile || isTouch) return;
    
    const updateMousePosition = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);
      
      x.set(normalizedX * 10);
      y.set(normalizedY * -10);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [x, y, isHydrated, isTouch]);

  // Handle video state changes
  useEffect(() => {
    if (isVideo && videoRef.current) {
      // Ensure video plays when toggled
      videoRef.current.load();
      videoRef.current.play().catch(e => console.error("Video play failed:", e));
    }
  }, [isVideo]);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden pt-[0px] bg-primary">
      <Link 
        href="/projects" 
        className="absolute z-[99] top-4 sm:top-6 left-4 sm:left-6 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white flex items-center justify-center min-h-[44px] min-w-[44px] transition-colors"
        aria-label="Back to projects"
      >
        <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>

      <motion.div
        ref={imageRef}
        className="w-full h-full relative"
        style={{
          scale: isTouch ? 1 : scale,
          rotateX: isTouch ? 0 : springY,
          rotateY: isTouch ? 0 : springX,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        whileHover={{ scale: isTouch ? 1 : 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {project.videoSrc ? (
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            aria-label={`${project.title} video`}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => {
              console.error("Video failed to load");
              setIsVideo(false);
            }}
          >
            <source src={project.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        )}
        
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 lg:p-12 z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-2 sm:mb-3">
            {project.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-poppins mb-1 sm:mb-2">
            {project.title}
          </h1>
          <p className="text-white/90 flex items-center text-base sm:text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white/80 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
};