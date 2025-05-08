"use client"
import { motion } from "framer-motion";

const HeroScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <motion.div
        className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-1 h-2 bg-white rounded-full">
          <motion.div
            className="w-full h-full bg-white rounded-full"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroScrollIndicator;
