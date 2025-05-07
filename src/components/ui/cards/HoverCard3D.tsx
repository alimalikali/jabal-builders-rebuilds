"use client"
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/app/hooks/use-mobile";

interface HoverCard3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // Tilt intensity (0-1)
  perspective?: number;
  glare?: boolean;
  borderRadius?: string;
}

export default function HoverCard3D({
  children,
  className,
  intensity = 0.1,
  perspective = 1000,
  glare = true,
  borderRadius = "1rem"
}: HoverCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return <div className={cn(className)}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (-1 to 1)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);
    
    // Apply tilt effect
    setRotateX(-mouseY * intensity * 30); // Convert to degrees
    setRotateY(mouseX * intensity * 30); // Convert to degrees
    
    // Update glare position
    setGlarePosition({
      x: (e.clientX - rect.left) / rect.width * 100,
      y: (e.clientY - rect.top) / rect.height * 100
    });
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        perspective: `${perspective}px`,
        borderRadius
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      {children}
      
      {/* Glare effect */}
      {glare && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 80%)`,
            borderRadius
          }}
          animate={{
            opacity: Math.abs(rotateX) + Math.abs(rotateY) > 0 ? 1 : 0
          }}
        />
      )}
    </motion.div>
  );
}
