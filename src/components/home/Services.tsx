'use client'

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const services = [
  {
    id: 1,
    title: 'Architecture',
    description: 'Innovative design solutions for residential, commercial, and institutional buildings.',
    image: '/assets/images/hero/hero-banner-1.jpg',
    link: '/services'
  },
  {
    id: 2,
    title: 'Construction',
    description: 'End-to-end construction services with uncompromising quality and precise execution.',
    image: '/assets/images/hero/hero-banner-2.jpg',
    link: '/services'
  },
  {
    id: 3,
    title: 'Interior Design',
    description: 'Creating beautiful, functional interior spaces that reflect your style and needs.',
    image: '/assets/images/hero/hero-banner-3.jpg',
    link: '/services'
  }
];

const Services = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <section className="section bg-jabal-light">
      <div className="container">
        {/* Section heading */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16 slide-in">
          <span className="section-main-title">OUR SERVICES</span>
          <h2 className="section-title text-jabal-muted">
            Comprehensive <span className="gold-gradient">Building Solutions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We offer a complete range of architecture, construction, and design services to bring your vision to reality.
          </p>
        </div>

        {/* Services cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 slide-in">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-jabal border border-jabal-light hover:border-jabal-gold/30 transition-all rounded-sm overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <Image   
                  src={service.image}
                  alt={service.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-jabal-muted font-bold mb-3 group-hover:text-jabal-gold transition-colors">{service.title}</h3>
                <p className="text-jabal-muted/70 mb-4">{service.description}</p>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-jabal-gold hover:text-jabal-copper transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all services button */}
        <div className="text-center mt-12">
          <Link href="/services">
            <Button className='bg-jabal-gold hover:bg-jabal-gold/90 text-jabal hover:shadow-[0_0_15px_rgba(203,141,79,0.5)] hover:-translate-y-0.5'>
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
