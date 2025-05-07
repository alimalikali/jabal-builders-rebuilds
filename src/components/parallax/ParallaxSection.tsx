"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // positive for slower, negative for faster than scroll
  direction?: "up" | "down";
  overflow?: boolean;
  threshold?: boolean; // If true, starts animating before the element is in view
}

export default function ParallaxSection({
  children,
  className,
  speed = 0.2,
  direction = "up",
  overflow = false,
  threshold = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const factor = direction === "up" ? -1 * speed : speed;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: threshold ? ["start end", "end start"] : ["start", "end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${factor * 100}%`]);

  return (
    <div ref={ref} className={cn("relative", overflow ? "" : "overflow-hidden", className)}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}
