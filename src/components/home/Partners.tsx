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
      <div className=" container mx-auto overflow-hidden slide-in">
        <div className="text-center mb-12">
          <span className="section-main-title">OUR PARTNERS</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Trusted Collaborators</h2>
        </div>

        <div className="relative w-full">
          {/* Left and Right Blur Overlay */}
          <div className="pointer-events-none absolute inset-y-0 -left-10 w-[100px] sm:w-[400px] bg-gradient-to-r from-jabal-light via-jabal-light/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 -right-10 w-[100px] sm:w-[400px] bg-gradient-to-l from-jabal-light via-jabal-light/90 to-transparent z-10" />

          {/* Animated Scroll Row */}
          <div className="overflow-hidden relative group">
            <div
              className="flex gap-12 animate-scroll group-hover:pause-scroll transition-all duration-300 w-full"
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="relative w-[120px] h-[120px] shrink-0 rounded-full  grayscale hover:grayscale-0 transition">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
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
        .pause-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
