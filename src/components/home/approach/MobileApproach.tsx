"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { approachSteps } from "@/config/approach";

const MobileApproach = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Animate the vertical line based on scroll
  const scaleY = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  
  return (
    <div ref={containerRef} className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200 rounded-full">
        <motion.div 
          className="w-full bg-primary rounded-full origin-top"
          style={{ 
            scaleY,
            height: "100%" 
          }}
        />
      </div>
      
      <div className="space-y-16">
        {approachSteps.map((step, index) => (
          <div key={step.id} className="relative ml-16">
            {/* Timeline dot */}
            <div 
              className={cn(
                "absolute -left-16 top-6 w-8 h-8 rounded-full",
                "flex items-center justify-center text-white",
                "border-4 border-white shadow-md z-10",
                step.color
              )}
            >
              <span>{step.id}</span>
            </div>
            
            <AnimatedSection
              animation="slide-right"
              delay={index * 0.1}
              className={cn(
                "bg-white rounded-lg p-6",
                "shadow-lg hover:shadow-xl transition-shadow",
                "border border-gray-100"
              )}
            >
              <div className={cn("text-3xl mb-3")}>{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-poppins">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileApproach;
