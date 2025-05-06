"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

const heroImages = [
  "/assets/images/hero/hero-banner-1.jpg",
  "/assets/images/hero/hero-banner-2.jpg",
  "/assets/images/hero/hero-banner-3.jpg",
  "/assets/images/hero/hero-banner-4.jpg",
  "/assets/images/hero/hero-banner-5.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative  sm:min-h-[100svh] min-h-fit flex items-center overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-jabal-gold blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-jabal-gold blur-3xl"></div>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-brightness-75 z-10"></div>
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container z-10 w-full px-4 sm:px-6 md:px-8 py-[100px] md:py-0">
        <div
          className={clsx(
            "max-w-2xl transition-all duration-1000 transform",
            "opacity-0 translate-y-10",
            "text-center sm:text-left slide-in"
          )}
        >
          {/* <div className='flex justify-center items-center mb-4'>
            <div className="flex justify-start items-center h-[80px] w-[240px]">
              <Image
                src="/assets/images/logo/logo-02.png"
                alt="Jabal Builders"
                width={1000}
                height={1000}
                className='w-full h-full aspect-[1] object-contain'
              />
            </div>
          </div> */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="block text-jabal-muted">Crafting Excellence in</span>
            <span className="gold-gradient relative inline-block">
              Architecture & Construction
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-jabal-muted mb-6 sm:mb-8 max-w-md sm:max-w-lg mx-auto sm:mx-0">
            Turning architectural visions into reality with precision, innovation, and uncompromising quality.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-jabal-gold hover:bg-jabal-gold/90 text-jabal font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(203,141,79,0.5)] hover:-translate-y-0.5"
              >
                Get a Free Consultation
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto group border-jabal-gold font-semibold transition-all duration-300 ease-in-out hover:bg-jabal-muted text-jabal hover:text-jabal hover:shadow-[0_0_15px_rgba(203,141,79,0.5)] hover:-translate-y-0.5"
              >
                View Our Projects
                <ArrowRight
                  size={18}
                  className="ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 sm:bottom-8 right-1/2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-jabal-muted text-xs sm:text-sm mb-1 text-nowrap">Scroll to explore</span>
        <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-jabal-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
