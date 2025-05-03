"use client"
import Image from 'next/image';
const partners = [
  { id: 1, name: "ArchiFirm", logo: "/assets/images/partner1.jpeg" },
  { id: 2, name: "BuildCorp", logo: "/assets/images/partner2.png" },
  { id: 3, name: "DesignStudio", logo: "/assets/images/partner3.png" },
  { id: 4, name: "StructurePro", logo: "/assets/images/partner4.png" },
  { id: 5, name: "InteriorEx", logo: "/assets/images/partner5.png" },
];

const Partners = () => {


  return (
    <section className="section relative py-16 bg-jabal-light overflow-hidden">
      <div className=" container mx-auto overflow-hidden">
        <div className="text-center mb-12">
          <span className="section-main-title">OUR PARTNERS</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Trusted Collaborators</h2>
        </div>

        <div className="relative">
          {/* Left and Right Blur Overlay */}
          <div className="pointer-events-none absolute inset-y-0 -left-10 w-[100px] sm:w-[200px] bg-gradient-to-r from-jabal-light via-jabal-light/50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 -right-10 w-[100px] sm:w-[200px] bg-gradient-to-l from-jabal-light via-jabal-light/50 to-transparent z-10" />

          {/* Animated Scroll Row */}
          <div
            className="whitespace-nowrap flex gap-4 sm:gap-10 md:gap-16 animate-none will-change-transform"
            style={{ animation: 'scroll 30s linear infinite' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="h-12 md:h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;
