'use client'
import { Construction } from "lucide-react";
import ContactInfo from "./ContactInfo";
import FooterGroup from "./FooterGroup";
import FooterLink from "./FooterLink";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4 flex items-center">
              <Construction className="mr-2" size={20} /> JabalBuilders
            </h3>
            <p className="mb-4 text-gray-300">
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
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-400 text-center text-sm">
            © {new Date().getFullYear()} Jabal Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
