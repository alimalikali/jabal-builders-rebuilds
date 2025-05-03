import { Mail, MapPin, Phone } from 'lucide-react';
import useScrollAnimation from '../ui/useScrollAnimation';

const ContactInfo = () => {
  useScrollAnimation();
  return (
    <div className="slide-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 gold-gradient">Contact Information</h2>
      
      <div className="space-y-8 mb-12 text-jabal-gold">
        <div className="flex items-start">
          <div className="bg-jabal-light p-3 rounded-sm mr-4">
            <Phone size={24} className="text-jabal-gold" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Phone</h3>
            <p className="text-jabal-muted">+123 456 7890</p>
            <p className="text-jabal-muted">+123 456 7891</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-jabal-light p-3 rounded-sm mr-4">
            <Mail size={24} className="text-jabal-gold" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-jabal-muted">info@jabalbuilders.com</p>
            <p className="text-jabal-muted">projects@jabalbuilders.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-jabal-light p-3 rounded-sm mr-4">
            <MapPin size={24} className="text-jabal-gold" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Address</h3>
            <p className="text-jabal-muted">123 Architecture Avenue</p>
            <p className="text-jabal-muted">Building District, City</p>
            <p className="text-jabal-muted">Country, Postal Code</p>
          </div>
        </div>
      </div>
      
      <OfficeHours />
      <SocialMedia />
    </div>
  );
};

const OfficeHours = () => (
  <div className="bg-jabal-light p-6 rounded-sm">
    <h3 className="text-lg font-medium mb-4 gold-gradient">Office Hours</h3>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-jabal-muted">Monday - Friday</span>
        <span className="text-white">9:00 AM - 6:00 PM</span>
      </div>
      <div className="flex justify-between">
        <span className="text-jabal-muted">Saturday</span>
        <span className="text-white">10:00 AM - 3:00 PM</span>
      </div>
      <div className="flex justify-between">
        <span className="text-jabal-muted">Sunday</span>
        <span className="text-white">Closed</span>
      </div>
    </div>
  </div>
);

const SocialMedia = () => (
  <div className="mt-8">
    <h3 className="text-lg font-medium mb-4 text-jabal-gold">Connect With Us</h3>
    <div className="flex space-x-4">
      <a href="#" className="bg-jabal-light p-3 rounded-sm text-jabal-muted hover:text-jabal-gold transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </a>
      <a href="#" className="bg-jabal-light p-3 rounded-sm text-jabal-muted hover:text-jabal-gold transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
      <a href="#" className="bg-jabal-light p-3 rounded-sm text-jabal-muted hover:text-jabal-gold transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
    </div>
  </div>
);

export default ContactInfo;