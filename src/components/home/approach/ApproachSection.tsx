"use client"
import AnimatedSection from "@/components/animations/AnimatedSection";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DesktopApproach from "./DesktopApproach";
import MobileApproach from "./MobileApproach";

export default function ApproachSection() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax for background elements
  const bubbleY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <section ref={containerRef} className="py-24 bg-muted relative overflow-hidden">
      {/* Background bubbles with parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: bubbleY }}
      >
        <div className="absolute top-10 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-10 left-[10%] w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="slide-up" className="text-center mb-16">
          <h2 className="centered-section-heading">Our Approach</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery through a structured, 
            collaborative approach focused on excellence at every stage.
          </p>
        </AnimatedSection>
        
        {isMobile ? <MobileApproach /> : <DesktopApproach />}
      </div>
    </section>
  );
}
