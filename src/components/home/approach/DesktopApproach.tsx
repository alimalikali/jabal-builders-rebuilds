import AnimatedSection from "@/components/animations/AnimatedSection";
import { approachSteps } from "@/config/approach";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef, useState } from "react";

export default function DesktopApproach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div ref={containerRef} className="relative py-8">
      <div className="absolute left-0 top-[80px] w-full h-1 bg-gray-200 rounded-full">
        <motion.div className="h-full bg-primary rounded-full origin-left" style={{ scaleX }} />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {approachSteps.map((step, index) => (
          <div key={step.id} className="relative pt-24">
            <motion.div
              className={cn(
                "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "w-8 h-8 rounded-full flex items-center justify-center text-white",
                "border-4 border-white shadow-md z-10",
                step.color
              )}
              whileHover={{ scale: 1.2 }}
              animate={{ scale: hoveredStep === step.id ? 1.2 : 1 }}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <span>{step.id}</span>
            </motion.div>

            <AnimatedSection
              animation="fade"
              delay={index * 0.2}
              className={cn(
                "bg-white rounded-lg p-6 h-full",
                "shadow-lg hover:shadow-xl transition-shadow",
                "border border-gray-100"
              )}
            >
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-poppins">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </div>
  );
};