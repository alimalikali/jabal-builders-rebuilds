import { testimonials } from "@/config/servicesPage";
import AnimatedSection from "../animations/AnimatedSection";

export default function Testimonials() {
  return (
    <AnimatedSection animation="slide-up" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-poppins text-center">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm "
            >
              <div className="flex text-secondary mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 fill-current" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 italic">{testimonial.quote}</p>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-white/80 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}