// src/components/services/ProcessSection.js
import React from 'react';
import { processSteps } from '../../data/services-data';

const ProcessSection = () => {
  return (
    <section className="section bg-jabal-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-in">
          <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">OUR APPROACH</span>
          <h2 className="section-title">
            Our <span className="gold-gradient">Working Process</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We follow a structured methodology to ensure consistent quality and successful project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 slide-in">
          {processSteps.map((step) => (
            <div key={step.id} className="bg-jabal p-6 rounded-sm border border-jabal-gold/20 relative">
              <div className="absolute -top-5 left-6 bg-jabal-gold text-jabal w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3 gold-gradient">{step.title}</h3>
              <p className="text-jabal-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;