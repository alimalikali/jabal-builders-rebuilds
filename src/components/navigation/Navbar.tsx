'use client'
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { navItems } from '@/config/navigation';
import Image from 'next/image';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 sm:py-4'
      }`}
      aria-label="Main navigation"
    >
      <div className="fluid-container flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center py-2 z-20">
        <div className="w-[250px] h-[80px] ">
          <Image src="/assets/images/logo/logo-02.png" alt="Jabal Builders" width={1000} height={1000} className="w-full h-full object-contain aspect-auto" />
        </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-8">
          {navItems.map(item => (
            <NavLink
              key={item.name}
              href={item.path}
              scrolled={scrolled}
              isActive={pathname === item.path}
            >
              {item.name}
            </NavLink>
          ))}
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 min-h-[44px]">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden ${scrolled || isMenuOpen ? 'text-primary' : 'text-white'} p-2 min-h-[44px] min-w-[44px] flex items-center justify-center z-20`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } pt-16 pb-4 z-10`}
      >
        <div className="fluid-container flex flex-col space-y-1 px-4">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-primary hover:text-secondary transition-colors px-4 py-3 rounded-md ${
                pathname === item.path ? 'bg-gray-100 text-secondary font-medium' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-secondary hover:bg-secondary/90 text-white w-full min-h-[44px]">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
