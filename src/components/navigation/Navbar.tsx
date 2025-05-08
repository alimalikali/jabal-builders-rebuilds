'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { navItems } from '@/config/navigation';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-30 relative">
          <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
            <Image
              src="/assets/images/logo/logo-01.png"
              alt="Jabal Builders"
              fill
              className="object-contain"
            />
          </div>
          {!isMobile && (
            <div className="w-[200px] h-10 relative hidden md:block">
              <Image
                src="/assets/images/logo/logo-04.png"
                alt="Jabal Builders"
                fill
                className="object-contain"
              />
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
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
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-5 py-2 min-h-[44px]">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center z-30 transition-colors ${
            scrolled || isMenuOpen ? 'text-primary' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-x-0 top-0 z-20 bg-white transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } pt-20 pb-8 shadow-md md:hidden`}
      >
        <div className="px-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-primary hover:text-secondary transition-colors px-4 py-3 rounded-md ${
                pathname === item.path ? 'bg-gray-100 text-secondary font-medium' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3">
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
