"use client"
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useFadeInOnView } from '../ui/useFadeInOnView';

const heroImages = [
  '/assets/images/hero/hero-banner-1.jpg',
  '/assets/images/hero/hero-banner-2.jpg',
  '/assets/images/hero/hero-banner-3.jpg',
  '/assets/images/hero/hero-banner-4.jpg',
  '/assets/images/hero/hero-banner-5.jpg',
];

const Hero = () => {
  const heroRef = useFadeInOnView<HTMLDivElement>();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);




  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-jabal-gold blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-jabal-gold blur-3xl"></div>

      {/* Background Image with Overlay */}

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-70 z-10"></div>

        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div
          ref={heroRef}
          className="max-w-2xl transition-all duration-1000 transform opacity-0 translate-y-10"
        >
          <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm relative">
            <span className="relative z-10">JABAL BUILDERS</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-jabal-gold/30"></span>
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block text-jabal-muted">Crafting Excellence in</span>
            <span className="gold-gradient relative inline-block">
              Architecture & Construction

            </span>
          </h1>
          <p className="text-lg md:text-xl text-jabal-muted mb-8 max-w-lg">
            Turning architectural visions into reality with precision, innovation, and uncompromising quality.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Primary (solid gold) button */}
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-jabal-gold hover:bg-jabal-gold/90 text-jabal font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(203,141,79,0.5)] hover:-translate-y-0.5"
              >
                Get a Free Consultation
              </Button>
            </Link>

            {/* Secondary (outlined) button */}
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="group border-jabal-gold  font-semibold transition-all duration-300 ease-in-out hover:bg-jabal-muted text-jabal hover:text-jabal hover:shadow-[0_0_15px_rgba(203,141,79,0.5)] hover:-translate-y-0.5"
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 right-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-jabal-muted text-sm mb-2 text-nowrap">Scroll to explore</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-jabal-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
