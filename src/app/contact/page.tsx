"use client"

import { useState } from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully.'
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceInterest: '',
          message: ''
        });

        setTimeout(() => {
          setFormStatus({ submitted: false, error: false, message: '' });
        }, 5000);
      } else {
        throw new Error(data?.error || 'Something went wrong.');
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Failed to send. Please try again later.'
      });
      console.error('Form submission error:', error);
    }
  };


  return (
    <>
      <main>
        <ContactHero />


        <section className="section bg-jabal">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm
                formData={formData}
                formStatus={formStatus}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
              <ContactInfo />
            </div>
          </div>
        </section>

        <ContactMap />
      </main>
    </>
  );
};

export default Contact;