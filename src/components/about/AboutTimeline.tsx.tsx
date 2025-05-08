"use client"
import { milestones } from '@/config/about';
import React from 'react';
import AnimatedSection from '../animations/AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutTimeline = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Journey</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12">
          Explore the key milestones that have shaped our company's growth and success over the years.
        </p>
        
        <div className="relative">
          {/* Timeline line - only show on desktop */}
          {!isMobile && (
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
          )}
          
          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <AnimatedSection animation="slide-up" key={index}>
                <div 
                  className={`relative flex ${isMobile ? 'justify-end' : index % 2 === 0 ? 'justify-start' : 'justify-end'}`} 
                >
                  {/* Timeline dot */}
                  <div className={`absolute ${isMobile ? 'left-0' : 'left-1/2'} transform ${isMobile ? '-translate-x-1/2' : '-translate-x-1/2'} w-4 h-4 rounded-full bg-secondary border-4 border-white z-10`}></div>
                  
                  {/* Content box */}
                  <div className={`${isMobile ? 'w-full' : 'w-5/12'} p-4 md:p-6 bg-white rounded-lg shadow-md ${isMobile ? 'ml-8' : index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="text-secondary font-bold text-lg md:text-xl mb-1 md:mb-2">{milestone.year}</div>
                    <h3 className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{milestone.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;