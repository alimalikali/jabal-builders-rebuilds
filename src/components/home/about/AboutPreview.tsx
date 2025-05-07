
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import ParallaxSection from "@/components/parallax/ParallaxSection";
import Image from "next/image";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="slide-left">
            <h2 className="section-heading">Excellence in Construction</h2>
            <p className="text-gray-600 mb-6">
              For over 15 years, Jabal Builders has been at the forefront of the construction industry, 
              delivering exceptional quality and innovative solutions. We combine technical expertise 
              with creative vision to transform concepts into remarkable structures.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Award-winning designs and construction</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Certified professionals and craftsmen</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Sustainable building practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>On-time and on-budget delivery</span>
              </li>
            </ul>
            <Link href="/about">
              <Button className="bg-primary hover:bg-primary/90">
                Learn More About Us <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
          
          <ParallaxSection speed={0.1} className="relative overflow-visible">
            <AnimatedSection animation="slide-right">
              <Image
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80" 
                alt="Modern building design" 
                className="rounded-lg shadow-xl w-full h-[500px] aspect-auto object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-secondary text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold font-poppins">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
              <div className="absolute -top-8 -right-8 bg-primary text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold font-poppins">500+</p>
                <p className="text-sm">Projects Completed</p>
              </div>
            </AnimatedSection>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
