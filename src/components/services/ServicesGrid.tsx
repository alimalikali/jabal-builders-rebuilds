// src/components/services/ServicesGrid.js
import React from 'react';
import { services } from '../../data/services-data';
import Image from 'next/image';



const ServicesGrid = () => {
  return (
    <section className="section bg-jabal">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-jabal-light border border-jabal-light hover:border-jabal-gold/30 transition-all rounded-sm overflow-hidden slide-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-64 overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-jabal-gold transition-colors text-jabal-muted">{service.title}</h3>
                <p className="text-jabal-muted/80 mb-4">{service.description}</p>
                <p className="text-white mb-6">{service.details}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-jabal-gold hover:text-jabal-copper transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;