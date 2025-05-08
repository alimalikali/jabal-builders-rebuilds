"use client"
import { useIsMobile } from "@/hooks/use-mobile";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/config/testimonials";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Handle mobile swipe/carousel navigation
  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <motion.section 
      ref={containerRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #f5f5f5, #ffffff)" }}
      data-cursor-section="testimonials"
    >
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade" className="text-center mb-16">
          <h2 className="centered-section-heading" data-cursor-text="Read Reviews">Client Testimonials</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Hear what our clients have to say about their experiences working with Jabal Builders.
          </p>
        </AnimatedSection>
        
        {isMobile ? (
          <div className="relative px-12">
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <TestimonialCard testimonial={testimonials[active]} index={0} />
              </motion.div>
            </AnimatePresence>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.id}
                animation="slide-up"
                delay={index * 0.2}
                className="h-full"
                triggerOnce={false}
              >
                <TestimonialCard testimonial={testimonial} index={index} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
