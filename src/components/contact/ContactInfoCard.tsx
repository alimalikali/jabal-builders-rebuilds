import React from 'react';
import { ContactInfoItem } from '@/types/contact';
import AnimatedSection from '../animations/AnimatedSection';


const ContactInfoCard = ({ items }: { items: ContactInfoItem[] }) => {
  return (
    <AnimatedSection animation='slide-up' className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex">
          <div className="mr-4">
            <div className="bg-primary/10 p-3 rounded-full">
              {item.icon}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
            <div className="text-gray-600">{item.content}</div>
          </div>
        </div>
      ))}
    </AnimatedSection>
  );
};

export default ContactInfoCard;