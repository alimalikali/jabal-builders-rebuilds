// src/components/services/HeroSection.js
import Image from 'next/image';
import React from 'react';

const ServiceHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-jabal/70 z-10"></div>
        <Image
          width={1000}
          height={1000}
          src="/assets/images/banners/banner-2.jpg"
          alt="Jabal Services"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">OUR SERVICES</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gold-gradient">
            <span className="">Comprehensive</span> Building Solutions
          </h1>
          <p className="text-lg text-jabal-muted max-w-2xl">
            From initial concept to final construction, we provide end-to-end services to bring your architectural vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;