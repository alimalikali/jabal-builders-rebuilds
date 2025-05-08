import React from 'react';
import { FAQItem } from '@/types/contact';
import AnimatedSection from '../animations/AnimatedSection';

const ContactFAQ = ({ faqs }: { faqs: FAQItem[] }) => {
  return (
    <AnimatedSection animation='slide-up' className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="centered-section-heading">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Find answers to common questions about our services and processes.
        </p>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactFAQ;