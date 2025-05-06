'use client';

import { testimonials } from '@/data/home-data';
import { QuoteIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';



const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-jabal-light py-16 section">
      <div className="container max-w-4xl mx-auto px-4">
        <div ref={sectionRef} className="slide-in">
          {/* Heading */}
          <div className="text-center mb-8">
            <span className="inline-block text-jabal-gold mb-2 tracking-wider text-xs md:text-sm">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold gold-gradient">
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonials */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700 smooth-transition ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((t) => (
                <div key={t.id} className="min-w-full px-2 md:px-4">
                  <div className="bg-jabal p-6 md:p-8 rounded-sm border border-jabal-gold/20 relative">
                    <div className="absolute top-4 right-4 text-jabal-gold/20">
                      {/* Quote SVG */}
                      <QuoteIcon size={20} />
                    </div>

                    <p className="text-base md:text-lg italic text-white mb-4">"{t.content}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-jabal-gold/30 flex items-center justify-center text-white font-bold text-base">
                        {t.author.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-bold text-white text-sm md:text-base">{t.author}</h4>
                        <p className="text-jabal-muted text-xs md:text-sm">{t.position}, {t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-1">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === activeIndex ? 'bg-jabal-gold' : 'bg-jabal-muted/30 hover:bg-jabal-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
