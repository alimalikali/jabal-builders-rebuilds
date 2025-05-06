"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useFadeInOnView } from '../ui/useFadeInOnView';
const CompanyIntro = () => {
  const contentRef = useFadeInOnView<HTMLDivElement>();


  return (
    <section className="section bg-jabal ">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Left column with image */}
          <div className="relative">
            <Image
              width={1770}
              height={1080}
              src="/assets/images/about.jpg"
              alt="Jabal Builders Office"
              className="rounded-sm w-full h-auto max-h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-jabal-light p-4 rounded-sm max-w-xs hidden md:block">
              <p className="text-jabal-gold font-playfair text-xl font-bold">25+</p>
              <p className="text-white text-sm">Years of Excellence in Architecture & Construction</p>
            </div>
          </div>
          
          {/* Right column with content */}
          <div ref={contentRef} className="animate-fadeInUp gap-4 flex flex-col lg:justify-start justify-center ">
            <span className="section-main-title lg:text-left text-center ">ABOUT US</span>
            <h2 className="section-title text-white lg:text-left text-center">
              Building <span className="gold-gradient">Tomorrow's Landmarks</span> Today
            </h2>
            <p className="section-subtitle text-jabal-muted lg:text-left text-center">
              At Jabal Builders, we blend architectural innovation with construction expertise to deliver exceptional spaces that inspire.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-8 h-0.5 bg-jabal-gold mt-2 mr-3"></div>
                <div>
                  <h3 className="text-base font-medium mb-1 text-white">Architectural Excellence</h3>
                  <p className="text-jabal-muted text-sm">Our award-winning team of architects brings fresh perspectives and innovative designs to every project.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-0.5 bg-jabal-gold mt-2 mr-3"></div>
                <div>
                  <h3 className="text-base font-medium mb-1 text-white">Quality Craftsmanship</h3>
                  <p className="text-jabal-muted text-sm">We pride ourselves on precision, attention to detail, and using only premium materials for lasting structures.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-0.5 bg-jabal-gold mt-2 mr-3"></div>
                <div>
                  <h3 className="text-base font-medium mb-1 text-white">Client-Centered Approach</h3>
                  <p className="text-jabal-muted text-sm">Your vision guides our process, ensuring that the final result exceeds your expectations.</p>
                </div>
              </div>
            </div>
            
            <Link href="/about" className='flex justify-center lg:justify-start'>
              <Button variant="outline" className=' hover:bg-jabal-muted hover:text-jabal hover:shadow-[0_0_15px_rgba(203,141,79,0.5)] hover:-translate-y-0.5 text-sm'>
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
