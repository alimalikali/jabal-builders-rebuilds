"use client"

import { motion } from "framer-motion";

interface CursorTextProps {
  text: string;
}

export const CursorText = ({ text }: CursorTextProps) => {
  return (
    <motion.span 
      className="cursor-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.span>
  );
};
