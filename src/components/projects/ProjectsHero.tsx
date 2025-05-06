// components/projects/ProjectsHero.tsx
import React from 'react';
import Image from 'next/image';

const ProjectsHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-jabal/70 z-10"></div>
        <Image
          src="/assets/images/banners/banner-3.jpg"
          alt="Jabal Projects"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">OUR PORTFOLIO</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gold-gradient">
            Featured <span className="">Projects</span>
          </h1>
          <p className="text-lg text-jabal-muted max-w-2xl">
            Explore our showcase of architectural excellence and construction innovation across various sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;