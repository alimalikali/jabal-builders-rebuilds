"use client"
import { motion } from "framer-motion";

interface HeroTitleProps {
  title: string;
}

const HeroTitle = ({ title }: HeroTitleProps) => {
  return (
    <motion.h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {title}
    </motion.h1>
  );
};

export default HeroTitle;
