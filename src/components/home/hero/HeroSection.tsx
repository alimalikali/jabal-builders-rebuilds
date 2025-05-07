"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HeroCTA from "./HeroCTA";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroSubtitle from "./HeroSubtitle";
import HeroTitle from "./HeroTitle";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
  height?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  showCta = true,
  ctaText = "Get a Quote",
  ctaLink = "/contact",
  overlay = true,
  height = "h-screen"
}: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.innerWidth < 768;
  }, []);


  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax effect
  useEffect(() => {
    if (isMobile.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={heroRef}
      className={`relative ${height} w-full flex items-center justify-center overflow-hidden`}
      data-cursor-section="hero"
      data-cursor-text="Scroll &#8595;"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          y: backgroundY,
          x: isMobile.current ? 0 : mousePosition.x * -20,
          scale: 1.1
        }}
      />

      {overlay && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/80"
          style={{ opacity }}
        />
      )}

      <motion.div
        className="container mx-auto px-4 relative z-10 text-center"
        style={{ y: textY }}
      >
        <HeroTitle title={title} />
        <HeroSubtitle subtitle={subtitle} />

        {showCta && <HeroCTA text={ctaText} link={ctaLink} />}
        <div className="relative">
          <div className="absolute -bottom-40 left-0 w-full h-full flex justify-center items-center">
          <HeroScrollIndicator />
          </div>
            
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
