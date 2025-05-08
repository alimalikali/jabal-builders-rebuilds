import React from 'react';
import Image from 'next/image';
import AnimatedSection from '../animations/AnimatedSection';

const AboutStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection animation="slide-left">
            <h2 className="section-heading">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2005, Jabal Builders began as a small residential construction company with a big vision. 
              Our founder, Ahmed Jabal, had over 15 years of experience in the construction industry and saw an 
              opportunity to create a company that would prioritize quality, innovation, and client satisfaction 
              above all else.
            </p>
            <p className="text-gray-600 mb-6">
              Over the years, we've grown from a team of 5 to over 100 dedicated professionals, including architects, 
              engineers, project managers, and skilled craftsmen. Today, we're proud to be one of the leading 
              construction companies in the region, with a portfolio of over 500 successful projects ranging from 
              luxury residential homes to large-scale commercial developments.
            </p>
            <p className="text-gray-600">
              Despite our growth, we've remained true to our core values of integrity, excellence, and innovation. 
              Every project we undertake reflects our commitment to building not just structures, but lasting 
              relationships with our clients and communities.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slide-right" className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80" 
              alt="Jabal Builders story" 
              className="rounded-lg shadow-xl w-full h-auto"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-xl w-32 h-32 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-primary font-poppins">18+</p>
              <p className="text-sm text-center">Years of Excellence</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;