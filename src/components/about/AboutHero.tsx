import Image from "next/image";
import useScrollAnimation from "../ui/useScrollAnimation";

const AboutHero = () => {
    useScrollAnimation();
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-jabal/70 z-10"></div>
          <Image
            width={1770}
            height={1080}
            src="/assets/images/banners/banner-3.jpg"
            alt="About Jabal Builders"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <span className="section-main-title">ABOUT US</span>
            <h1 className="section-title">
              Our <span className="gold-gradient">Story</span>
            </h1>
            <p className="text-lg text-jabal-muted max-w-2xl">
              Jabal Builders has been at the forefront of architectural innovation and quality construction for over two decades...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;