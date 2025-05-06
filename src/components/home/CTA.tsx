'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container relative z-10">
        <div ref={ctaRef} className="text-center max-w-2xl mx-auto slide-in">
          <div className='flex justify-center items-center mb-4'>
              <div className="flex justify-center items-center h-[80px] w-[240px]">
              <Image
                src="/assets/images/logo/logo-02.png"
                alt="Jabal Builders"
                width={80}
                height={80}
                className='w-full h-full object-contain'
              />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 relative inline-block text-white">
            Ready to Start Your <span className="gold-gradient">Next Project</span>?
          </h2>
          <p className="text-base md:text-lg text-jabal-muted mb-6 max-w-xl mx-auto">
            Contact us today for a free consultation. Our team of experts is ready to bring your architectural vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" >
              <Button
                className="bg-jabal-gold hover:bg-jabal-gold/90 text-jabal font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(203,141,79,0.5)] hover:-translate-y-0.5 text-sm md:text-base"
              >
                Request a Free Quote
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline"
                className="group border-jabal-gold font-semibold transition-all duration-300 ease-in-out hover:bg-jabal-muted text-jabal hover:text-jabal hover:shadow-[0_0_15px_rgba(203,141,79,0.5)] hover:-translate-y-0.5 text-sm md:text-base"
              >
                Explore Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
