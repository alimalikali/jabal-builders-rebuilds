export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }
  
  export interface ContactInfoItem {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
  }
  
  export interface FAQItem {
    question: string;
    answer: string;
  }