"use client"
import { motion } from "framer-motion";

interface HeroSubtitleProps {
  subtitle: string;
}

const HeroSubtitle = ({ subtitle }: HeroSubtitleProps) => {
  return (
    <motion.p 
      className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      {subtitle}
    </motion.p>
  );
};

export default HeroSubtitle;
