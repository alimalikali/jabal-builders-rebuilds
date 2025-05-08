"use client"
import { useState, useEffect, useRef } from "react";
import { MotionValue } from "framer-motion";

// Type for direction in the main hook
type ScrollDirection = "up" | "down" | "none" | "horizontal";

// Main scroll direction hook
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("none");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHorizontalSection, setIsHorizontalSection] = useState(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      // Check if we're in a horizontal scrolling section
      const horizontalSections = document.querySelectorAll('[data-horizontal-scroll="true"]');
      let inHorizontalSection = false;

      horizontalSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // If section is in viewport and not fully scrolled past
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          inHorizontalSection = true;
        }
      });

      setIsHorizontalSection(inHorizontalSection);

      // Set direction based on vertical scroll position
      if (inHorizontalSection) {
        setScrollDirection("horizontal");
      } else {
        setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      }

      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    // Using requestAnimationFrame for better performance
    const handleScroll = () => {
      window.requestAnimationFrame(updateScrollDirection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { scrollDirection, isHorizontalSection };
}

// Gallery-specific scroll direction hook with improved smoothness
export function useGalleryScrollDirection(scrollYProgress: MotionValue<number>) {
  const [scrollingDirection, setScrollingDirection] = useState<'vertical' | 'horizontal'>('vertical');
  const previousValueRef = useRef<number>(0);
  const scrollSpeedRef = useRef<number>(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      // Calculate scroll speed for smoother transitions
      const speed = Math.abs(value - previousValueRef.current);
      const delta = value - previousValueRef.current;
      scrollSpeedRef.current = speed;
      previousValueRef.current = value;

      // Set scrolling direction based on progress through the section
      // with improved threshold detection
      if (value > 0.05 && value < 0.95 && delta > 0.001) {
        setScrollingDirection('horizontal');
      } else {
        setScrollingDirection('vertical');
      }

    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return scrollingDirection;
}

// New hook for smoother horizontal scrolling control
export function useSmoothHorizontalScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const lastScrollLeftRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize smooth scrolling with drag functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // Let native horizontal scroll handle it

      e.preventDefault();

      // Add momentum-based scrolling
      const speed = 2.5; // Adjust for faster/slower scrolling
      container.scrollLeft += e.deltaY * speed;

      // Calculate velocity for momentum
      const now = Date.now();
      const dt = Math.min(1000, now - lastTimeRef.current);
      if (dt > 0) {
        velocityRef.current = (container.scrollLeft - lastScrollLeftRef.current) / dt;
      }

      lastTimeRef.current = now;
      lastScrollLeftRef.current = container.scrollLeft;
    };

    // Mouse drag handlers for mobile-like experience on desktop
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      startXRef.current = e.pageX - container.offsetLeft;
      scrollLeftRef.current = container.scrollLeft;
      velocityRef.current = 0;

      // Stop any ongoing momentum scrolling
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const x = e.pageX - container.offsetLeft;
      const distance = (x - startXRef.current) * 2; // Multiply for faster dragging
      container.scrollLeft = scrollLeftRef.current - distance;

      e.preventDefault();
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;

      // Calculate final velocity for momentum
      const speed = Math.abs(velocityRef.current) * 200; // Adjust multiplier for momentum

      // Apply momentum scrolling
      if (Math.abs(velocityRef.current) > 0.1) {
        const startTime = Date.now();
        const startScrollLeft = container.scrollLeft;
        const dir = velocityRef.current > 0 ? 1 : -1;

        const animateMomentumScroll = () => {
          const elapsed = Date.now() - startTime;
          const easeOut = Math.max(0, 1 - (elapsed / speed));
          const distance = dir * velocityRef.current * 100 * easeOut;

          container.scrollLeft = startScrollLeft + distance;

          if (easeOut > 0) {
            animationFrameRef.current = requestAnimationFrame(animateMomentumScroll);
          } else {
            animationFrameRef.current = null;
          }
        };

        animationFrameRef.current = requestAnimationFrame(animateMomentumScroll);
      }
    };

    // Add event listeners
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return { scrollContainerRef };
}
