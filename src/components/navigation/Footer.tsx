'use client'
import { Construction } from "lucide-react";
import ContactInfo from "./ContactInfo";
import FooterGroup from "./FooterGroup";
import FooterLink from "./FooterLink";
import SocialLinks from "./SocialLinks";
import FooterCtaSection from "./FooterCtaSection";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center" >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-primary/90 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <FooterCtaSection />
        
        <div className="pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold font-poppins mb-4 flex items-center">
                  <Construction className="mr-2" size={20} color="white"/> 
                  <span className="bg-clip-text text-secondary/70">
                    JabalBuilders
                  </span>
                </h3>
                <p className="mb-4 text-gray-200">
                  Building the future with precision, innovation, and excellence in every project.
                </p>
                <SocialLinks />
              </div>

              {/* Quick Links */}
              <FooterGroup title="Quick Links">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/projects">Projects</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </FooterGroup>

              {/* Services */}
              <FooterGroup title="Our Services">
                <FooterLink href="/services">Commercial Construction</FooterLink>
                <FooterLink href="/services">Residential Construction</FooterLink>
                <FooterLink href="/services">Renovation & Remodeling</FooterLink>
                <FooterLink href="/services">Architecture & Design</FooterLink>
                <FooterLink href="/services">Project Management</FooterLink>
              </FooterGroup>

              {/* Contact Info */}
              <ContactInfo />
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-gray-600/30 mt-12 pt-8">
              <p className="text-gray-300 text-center text-sm">
                © {new Date().getFullYear()} Jabal Builders. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;