import Link from 'next/link';
import useScrollAnimation from '../ui/useScrollAnimation';
import { Button } from '../ui/button';
const OfficeLocation = () => {
  useScrollAnimation();
  return (
    <section className="section bg-jabal-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="slide-in">
            <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">OUR LOCATION</span>
            <h2 className="section-title mb-6">Visit Our Office</h2>
            <p className="text-jabal-muted mb-8">
              Our headquarters features a showcase of our architectural models and design concepts. We welcome you to visit us and discuss your next project in person.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-jabal-gold mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="text-white">123 Architecture Avenue, Building District, City, Country</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-jabal-gold mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="text-white">+123 456 7890</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-jabal-gold mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <span className="text-white">info@jabalbuilders.com</span>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="group border-jabal-gold  font-semibold transition-all duration-300 ease-in-out hover:bg-jabal-muted text-jabal hover:text-jabal hover:shadow-[0_0_15px_rgba(203,141,79,0.5)] hover:-translate-y-0.5"

                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="slide-in h-[400px] lg:h-[500px]">
            {/* Placeholder for Google Maps or a static map image */}
            <div className="w-full h-full bg-jabal border border-jabal-gold/20 rounded-sm flex items-center justify-center">
              <div className="h-full w-full rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4806.598638251334!2d74.38345368462895!3d31.585121675252434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191bfd0395595b%3A0xf95d206f304552d4!2sShalimar%20Bagh%20Fountains!5e0!3m2!1sen!2s!4v1746264466625!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JABAL BUILDERS Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;