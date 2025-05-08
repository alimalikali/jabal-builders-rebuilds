import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const contactInfoItems = [
    {
        icon: <MapPin className="h-6 w-6 text-primary" />,
        title: "Our Office",
        content: <>1234 Construction Ave,<br />Building City, State 12345</>
    },
    {
        icon: <Phone className="h-6 w-6 text-primary" />,
        title: "Phone",
        content: <>+123 456 7890</>
    },
    {
        icon: <Mail className="h-6 w-6 text-primary" />,
        title: "Email",
        content: <>info@jabalbuilders.com</>
    },
    {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Hours",
        content: <>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</>
    },  
    // Other contact info items...
];

export const faqs = [
    {
        question: "What areas do you service?",
        answer: "We currently operate in the greater metropolitan area and surrounding suburbs..."
    },
    {
        question: "What types of projects do you handle?",
        answer: "We specialize in residential and commercial construction, including new builds, renovations, and additions."
    },
    {
        question: "How do I get a quote?",
        answer: "To request a quote, please fill out our online form or call us directly at +123 456 7890. We'll be happy to provide you with a detailed estimate for your project."
    },
    {
        question: "What is your payment policy?",
        answer: "We require a 50% deposit upfront with the remaining balance due upon completion of the project."
    },
    {
        question: "What is your warranty policy?",
        answer: "We offer a 1-year warranty on all workmanship and materials. For more details, please refer to our warranty policy."
    },
    {
        question: "How do I schedule a consultation?",
        answer: "To schedule a consultation, please fill out our online form or call us directly at +123 456 7890. We'll be happy to schedule a consultation at a time that works for you."
    },
    {
        question: "What is your cancellation policy?",
        answer: "We require a 24-hour notice for any cancellations. Please contact us at +123 456 7890 to cancel your appointment."
    },
    
    
    // Other FAQs...
];