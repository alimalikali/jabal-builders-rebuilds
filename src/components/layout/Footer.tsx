import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-jabal-light pt-16 pb-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-jabal-gold to-transparent opacity-30"></div>
      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-jabal-gold/5 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-jabal-gold/5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo & About */}
          <div className="space-y-4">
            <h1 className='text-2xl font-bold text-white'><span className='text-jabal-gold'>JABAL</span> BUILDERS</h1>
            <p className="text-sm text-jabal-muted mt-4 max-w-xs">
              Crafting architectural excellence and transforming spaces with precision, innovation, and timeless elegance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-jabal-muted hover:text-jabal-gold transition-colors transform hover:scale-110 transition-transform duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-jabal-muted hover:text-jabal-gold transition-colors transform hover:scale-110 transition-transform duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-jabal-muted hover:text-jabal-gold transition-colors transform hover:scale-110 transition-transform duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Home</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">About Us</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Services</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Projects</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Blog</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">FAQ</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Architecture</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Construction</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Interior Design</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Renovation</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Project Management</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-jabal-muted hover:text-jabal-gold transition-colors relative overflow-hidden group">
                  <span className="relative z-10">Careers</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-jabal-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-300">
                <Phone size={18} className="text-jabal-gold mt-1 group-hover:animate-pulse" />
                <span className="text-jabal-muted group-hover:text-white transition-colors duration-300">+123 456 7890</span>
              </li>
              <li className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-300">
                <Mail size={18} className="text-jabal-gold mt-1 group-hover:animate-pulse" />
                <span className="text-jabal-muted group-hover:text-white transition-colors duration-300">info@jabalbuilders.com</span>
              </li>
              <li className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-300">
                <MapPin size={18} className="text-jabal-gold mt-1 group-hover:animate-pulse" />
                <span className="text-jabal-muted group-hover:text-white transition-colors duration-300">123 Architecture Avenue, Building District, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-jabal-muted/20 my-6" />
        
        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-jabal-muted">
            &copy; {year} Jabal Builders. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-jabal-muted hover:text-jabal-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-jabal-muted hover:text-jabal-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
