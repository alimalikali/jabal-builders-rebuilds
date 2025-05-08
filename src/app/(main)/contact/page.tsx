import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactMap from "@/components/contact/ContactMap";
import SocialIcons from "@/components/contact/SocialIcons";
import HeroSection from "@/components/ui/hero/HeroSection";
import { contactInfoItems, faqs } from "@/config/contact";

const ContactPage = () => {


    return (
        <div className="overflow-hidden">
            <HeroSection 
                   title="Contact Jabal Builders"
                   subtitle="Get in touch with us to discuss your project or request a quote."
                //    backgroundImage="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1920&q=80"
                   backgroundImage="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1920&q=80"
                   height="h-[60vh]"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="section-heading">Contact Information</h2>
                            <p className="text-gray-600 mb-8">
                                Feel free to reach out to us with any questions or inquiries.
                            </p>

                            <ContactInfoCard items={contactInfoItems} />

                            <div className="mt-8">
                                <h3 className="font-bold text-lg mb-3">Follow Us</h3>
                                <SocialIcons />
                            </div>
                        </div>

                        <div>
                            <h2 className="section-heading">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you soon.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <ContactMap />
            <ContactFAQ faqs={faqs} />
        </div>
    );
};

export default ContactPage;