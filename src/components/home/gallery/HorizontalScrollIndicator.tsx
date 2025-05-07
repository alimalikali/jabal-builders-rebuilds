
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HorizontalScrollIndicator = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed bottom-8 right-8 z-50 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm font-medium"
      >
        Scroll to explore projects
      </motion.div>
      <motion.div 
        className="fixed right-20 bottom-8 z-50"
        animate={{ x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowRight className="h-5 w-5" />
      </motion.div>
    </>
  );
};

export default HorizontalScrollIndicator;
