import React from 'react';
import AnimatedSection from '../animations/AnimatedSection';

const ContactMap = () => {
  return (
    <AnimatedSection animation='slide-up' className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="centered-section-heading">Our Location</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Visit our office to meet with our team and discuss your project in person.
        </p>

        <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
          <div className="w-full h-full">
            <iframe
              className="w-full h-full" // ✅ Add this
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13595.312121698767!2d74.3767548!3d31.5837634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191be37671dcbf%3A0x786a0e2a0b53d6ef!2sShalimar%20Gardens!5e0!3m2!1sen!2s!4v1746640788001!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
};

export default ContactMap;