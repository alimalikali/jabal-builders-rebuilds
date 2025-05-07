"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import HoverCard3D from "@/components/ui/cards/HoverCard3D";
import StarRating from "./StarRating";
import { TestimonialType } from "@/app/types/testimonials";

interface TestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <HoverCard3D 
        className={cn(
          "bg-white rounded-xl overflow-hidden h-full relative isolate",
          "transition-all duration-500 border border-gray-100/80",
          "hover:shadow-2xl hover:border-gray-200/30"
        )}
        intensity={0.05}
        glare={true}
      >
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-t ${testimonial.bgColor} opacity-0`}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
          style={{ originY: 1 }}
        />
        
        <div className="flex flex-col h-full justify-between p-8 relative z-10">
          <div>
            <StarRating rating={testimonial.rating} />
            <motion.p 
              className="text-gray-600 mt-6 mb-8 italic relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.7 }}
            >
              <motion.span 
                className="absolute -top-4 -left-2 text-5xl opacity-20 font-serif"
                animate={{ opacity: isHovered ? 0.5 : 0.2, scale: isHovered ? 1.2 : 1 }}
                transition={{ duration: 0.4 }}
              >
                "
              </motion.span>
              {testimonial.content}
              <motion.span 
                className="absolute -bottom-4 -right-2 text-5xl opacity-20 font-serif"
                animate={{ opacity: isHovered ? 0.5 : 0.2, scale: isHovered ? 1.2 : 1 }}
                transition={{ duration: 0.4 }}
              >
                "
              </motion.span>
            </motion.p>
          </div>
          <div className="flex items-center">
            <motion.div 
              className={cn("relative mr-4", testimonial.accentColor)}
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-full overflow-hidden w-14 h-14 border-2 border-white shadow-md">
                <motion.img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.15 : 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <motion.div 
                className="absolute -z-10 w-14 h-14 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.5, 0.7],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
                style={{ 
                  top: 0, 
                  left: 0,
                  filter: "blur(8px)"
                }}
              />
            </motion.div>
            <div>
              <motion.h4 
                className="font-bold" 
                animate={{ 
                  color: isHovered ? "var(--primary)" : "#333"
                }}
              >
                {testimonial.name}
              </motion.h4>
              <motion.p 
                className="text-gray-500 text-sm"
                animate={{ 
                  opacity: isHovered ? 1 : 0.8
                }}
              >
                {testimonial.role}
              </motion.p>
            </div>
          </div>
        </div>
      </HoverCard3D>
    </motion.div>
  );
};

export default TestimonialCard;
