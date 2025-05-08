import AnimatedSection from "@/components/animations/AnimatedSection";
import { Button } from "@/components/ui/button";
import { services } from "@/config/servicesPage";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function DetailedServices() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade" className="mb-16">
          <h2 className="centered-section-heading">What We Offer</h2>
        </AnimatedSection>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Service Image/Icon */}
              <AnimatedSection
                animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                className="w-full lg:w-1/2 flex flex-col items-center aspect-[15/10] p-2 lg:p-4"
              >
                <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                </div>
              </AnimatedSection>


              {/* Service Details */}
              <AnimatedSection
                animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary font-poppins mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <h4 className="font-bold text-lg mb-4">What we provide:</h4>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <AnimatedSection
                      key={feature}
                      delay={i * 0.1}
                      animation="slide-up"
                      className="flex items-start"
                    >
                      <span className="text-secondary mr-2">✓</span>
                      <span>{feature}</span>
                    </AnimatedSection>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button className="bg-secondary hover:bg-secondary/90">
                    Inquire About This Service <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}