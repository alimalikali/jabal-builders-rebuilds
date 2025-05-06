"use client"

import { Button } from '@/components/ui/button';
import React from 'react';

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    serviceInterest: string;
    message: string;
  };
  formStatus: {
    submitted: boolean;
    error: boolean;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  formStatus,
  handleChange,
  handleSubmit
}) => {
  return (
    <div className="slide-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 gold-gradient">Send Us a Message</h2>
      
      {formStatus.submitted && (
        <div className="bg-green-900/30 border border-green-700/50 text-green-300 p-4 mb-6 rounded">
          {formStatus.message}
        </div>
      )}
      
      {formStatus.error && (
        <div className="bg-red-900/30 border border-red-700/50 text-red-300 p-4 mb-6 rounded">
          {formStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-jabal-muted mb-2">
            Full Name <span className="text-jabal-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-jabal-light text-white border border-jabal-light focus:border-jabal-gold/50 rounded-sm px-4 py-3 outline-none transition-colors"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-jabal-muted mb-2">
            Email Address <span className="text-jabal-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-jabal-light text-white border border-jabal-light focus:border-jabal-gold/50 rounded-sm px-4 py-3 outline-none transition-colors"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-jabal-muted mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-jabal-light text-white border border-jabal-light focus:border-jabal-gold/50 rounded-sm px-4 py-3 outline-none transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="serviceInterest" className="block text-jabal-muted mb-2">
            Service of Interest
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className="w-full bg-jabal-light text-white border border-jabal-light focus:border-jabal-gold/50 rounded-sm px-4 py-3 outline-none transition-colors"
          >
            <option value="">Select a service</option>
            <option value="Architecture">Architecture</option>
            <option value="Construction">Construction</option>
            <option value="Interior Design">Interior Design</option>
            <option value="Renovation">Renovation</option>
            <option value="Project Management">Project Management</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-jabal-muted mb-2">
            Your Message <span className="text-jabal-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full bg-jabal-light text-white border border-jabal-light focus:border-jabal-gold/50 rounded-sm px-4 py-3 outline-none transition-colors resize-none"
            required
          ></textarea>
        </div>
        
        <div>
          <Button type="submit">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;