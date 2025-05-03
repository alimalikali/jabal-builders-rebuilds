// src/components/services/FAQSection.js
import { faqs } from '../../data/services-data';

const FAQSection = () => {
  return (
    <section className="section bg-jabal">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="slide-in">
            <span className="inline-block text-jabal-gold mb-4 tracking-wider text-sm">FAQs</span>
            <h2 className="section-title mb-6">
              Frequently Asked <span className="gold-gradient">Questions</span>
            </h2>
            <p className="text-jabal-muted mb-8">
              Find answers to common questions about our services, process, and what sets us apart.
            </p>
          </div>

          <div className="space-y-6 slide-in">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-jabal-light p-6 rounded-sm">
                <h3 className="text-lg font-medium mb-3 gold-gradient">{faq.question}</h3>
                <p className="text-jabal-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;