import Image from 'next/image';

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-jabal/70 z-10"></div>
        <Image
          width={1770}
          height={1080}
          src="/assets/images/banners/banner-1.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">CONTACT US</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gold-gradient">
            Get In <span className="">Touch</span>
          </h1>
          <p className="text-lg text-jabal-muted max-w-2xl">
            Have a project in mind or questions about our services? We're here to help bring your vision to reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;