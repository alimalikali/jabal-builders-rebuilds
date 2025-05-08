import AnimatedSection from "@/components/animations/AnimatedSection";

export default function ServicesIntroduction() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-poppins mb-6">
            Excellence in Construction Services
          </h2>
          <p className="text-gray-600 mb-8">
            At Jabal Builders, we offer a wide range of construction services designed to meet your specific needs. 
            Whether you're looking to build a new commercial facility, create your dream home, or renovate an existing space, 
            our team of experts is ready to bring your vision to life with precision, innovation, and excellence.
          </p>
          <p className="text-gray-600">
            Each of our services is delivered with the highest standards of quality and craftsmanship, 
            ensuring that your project is not only completed on time and within budget, but also exceeds your expectations.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}