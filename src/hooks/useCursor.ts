"use client"
import { useState, useEffect } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

// MixBlendMode type for TypeScript
export type MixBlendModeType = 
  | "normal" | "multiply" | "screen" | "overlay" 
  | "darken" | "lighten" | "color-dodge" | "color-burn" 
  | "hard-light" | "soft-light" | "difference" | "exclusion" 
  | "hue" | "saturation" | "color" | "luminosity";

export const useCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isSelecting, setIsSelecting] = useState(false);
  const [activeCursorSection, setActiveCursorSection] = useState<string | null>(null);
  const [hasInitialized, setHasInitialized] = useState(false);
  const { scrollDirection } = useScrollDirection();

  // Check if device supports hover
  useEffect(() => {
    const isTouchOnly = !window.matchMedia('(hover: hover)').matches;
    setIsTouchDevice(isTouchOnly);
    
    // Force cursor into view even before first mouse movement
    if (!isTouchOnly && !hasInitialized) {
      // Position in middle of screen initially
      setCursorPosition({ 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
      });
      setHasInitialized(true);
    }
  }, [hasInitialized]);

  // Custom cursor effect - only on non-touch devices
  useEffect(() => {
    if (isTouchDevice) return;
    
    const updateCursorPosition = (e: MouseEvent) => {
      // Direct setting of coordinates for smoother movement
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for section-specific cursor styles
      const section = target.closest('[data-cursor-section]');
      if (section) {
        const sectionType = section.getAttribute('data-cursor-section');
        setActiveCursorSection(sectionType);
      } else {
        setActiveCursorSection(null);
      }
      
      if (target.closest(".hoverable")) {
        setIsHovering(true);
        
        // Check for data attributes to customize cursor
        const hoverText = target.closest(".hoverable")?.getAttribute("data-cursor-text");
        if (hoverText) {
          setCursorText(hoverText);
        } else {
          setCursorText("");
        }
      } else {
        setIsHovering(false);
        
        // Check for data-cursor-text attribute on any element
        const cursorTextElement = target.closest('[data-cursor-text]');
        if (cursorTextElement) {
          const text = cursorTextElement.getAttribute('data-cursor-text');
          setCursorText(text || "");
          setIsHovering(true);
        } else {
          setCursorText("");
        }
      }
    };
    
    // Handle text selection state
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      setIsSelecting(!!selection && selection.toString().length > 0);
    };

    window.addEventListener("mousemove", updateCursorPosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, [isTouchDevice]);

  // Get cursor classes based on current section and state
  const getCursorClasses = () => {
    let classes = "custom-cursor ";
    
    if (isHovering) classes += 'expanded ';
    if (isSelecting) classes += 'selecting ';
    
    // Add section-specific classes
    if (activeCursorSection === 'hero') classes += 'cursor-hero ';
    if (activeCursorSection === 'projects') classes += 'cursor-projects ';
    if (activeCursorSection === 'testimonials') classes += 'cursor-testimonials ';
    
    return classes.trim();
  };

  // Get cursor style based on current state and section
  const getCursorStyle = () => {
    const baseStyle = { 
      left: `${cursorPosition.x}px`,
      top: `${cursorPosition.y}px`,
      transform: isHovering ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1)',
      backgroundColor: isSelecting ? '#F59E0B' : undefined,
      opacity: hasInitialized ? 1 : 0, // Only show cursor once initialized
    };
    
    // Add section-specific styles
    if (activeCursorSection === 'hero') {
      return {
        ...baseStyle,
        borderColor: 'white',
        mixBlendMode: 'difference' as MixBlendModeType,
      };
    }
    
    if (activeCursorSection === 'projects') {
      return {
        ...baseStyle,
        mixBlendMode: 'difference' as MixBlendModeType,
      };
    }
    
    if (activeCursorSection === 'testimonials') {
      return {
        ...baseStyle,
        mixBlendMode: 'normal' as MixBlendModeType,
      };
    }
    
    return baseStyle;
  };

  return {
    cursorPosition,
    isHovering,
    cursorText,
    isTouchDevice,
    isSelecting,
    activeCursorSection,
    getCursorClasses,
    getCursorStyle,
    hasInitialized,
    scrollDirection
  };
};

export default useCursor;
