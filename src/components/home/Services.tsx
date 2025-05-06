
import { Button } from '@/components/ui/button';
import { services } from '@/data/home-data';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



const Services = () => {


  return (
    <section className="section bg-jabal-light">
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto  slide-in">
          <span className="section-main-title">OUR SERVICES</span>
          <h2 className="section-title text-jabal-muted">
            Comprehensive <span className="gold-gradient">Building Solutions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We offer a complete range of architecture, construction, and design services to bring your vision to reality.
          </p>
        </div>

        {/* Services cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 slide-in">
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
