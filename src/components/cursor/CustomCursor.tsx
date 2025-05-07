"use client"
import { motion, AnimatePresence } from "framer-motion";
import { CursorText } from "@/components/cursor/CursorText";
import { CursorScrollIndicator } from "@/components/cursor/CursorScrollIndicator";
import useCursor from "@/app/hooks/useCursor";

const CustomCursor = () => {
  const { 
    isTouchDevice,
    getCursorClasses,
    getCursorStyle,
    cursorText,
    isHovering,
    hasInitialized,
    scrollDirection
  } = useCursor();
  
  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div 
        className={getCursorClasses()}
        style={getCursorStyle()}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: hasInitialized ? 1 : 0,
          scale: isHovering ? 1.5 : 1 
        }}
        transition={{ duration: 0.15 }}
      >
        {cursorText && <CursorText text={cursorText} />}
        
        {/* Direction indicator for horizontal scroll sections */}
        {scrollDirection === "horizontal" && !cursorText && (
          <CursorScrollIndicator />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomCursor;
