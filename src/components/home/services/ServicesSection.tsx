"use client"
import AnimatedSection from "@/components/animations/AnimatedSection";
import ParallaxSection from "@/components/parallax/ParallaxSection";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects
  const titleY = useTransform(scrollYProgress, [0, 0.2, 1], [100, 0, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  
  // const animations = [
  //   "slide-left",
  //   "slide-up",
  //   "slide-up",
  //   "slide-right"
  // ];
  
  return (
    <section ref={containerRef} className="py-20 sm:py-24 bg-muted overflow-hidden relative">
      {/* Background elements */}
      <ParallaxSection speed={0.15} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          style={{ 
            y: titleY,
            opacity: titleOpacity
          }}
        >
          <h2 className="centered-section-heading">Our Services</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive construction solutions tailored to your specific needs,
            ensuring quality, innovation, and excellence at every step.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            // <AnimatedSection
            //   key={service.id}
            //   animation={isMobile ? "slide-up" : animations[index % animations.length] as any}
            //   delay={isMobile ? index * 0.1 : 0.2}
            //   className="h-full w-full"
            // >
              <ServiceCard key={service.id} service={service} index={index} />
            // </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection animation="slide-up" delay={0.5} className="text-center mt-10 sm:mt-12">
          <Link href="/services">
            <Button className="bg-secondary hover:bg-secondary/90">
              View All Services <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
