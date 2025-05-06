
const ContactMap = () => {
  return (
    <section className="bg-jabal-light py-12">
      <div className="container">
        <div className="slide-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center gold-gradient">Our Location</h2>
          <div className="w-full h-[400px] bg-jabal border border-jabal-gold/20 rounded-sm overflow-hidden">
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
    </section>
  );
};

export default ContactMap;