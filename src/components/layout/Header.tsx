'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-jabal/90 backdrop-blur-md py-2 shadow-lg' : 'bg-jabal/20 backdrop-blur-md py-4'
      }`}
    >
      <div className="container flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link href="/" className="relative z-10" onClick={closeMenu}>
          <h1 className="text-white text-2xl font-bold">
            <span className="text-jabal-gold">J</span>
            <span className={`${isScrolled ? 'text-jabal-white' : ''}`}>B</span>.
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-medium tracking-wide relative transition-all duration-300 ${
                isActive(item.path) ? 'text-jabal-gold' : 'text-white'
              } hover:text-jabal-gold after:content-[''] after:absolute after:w-full after:h-0.5 after:-bottom-1 after:left-0 after:bg-jabal-gold after:transition-transform after:duration-300 ${
                isActive(item.path) ? 'after:scale-x-100' : 'after:scale-x-0'
              } hover:after:scale-x-100`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button
              variant="outline"
              className="px-5 py-2 border-jabal-gold text-jabal-light bg-jabal-gold hover:bg-jabal-gold/90 hover:text-jabal hover:-translate-y-0.5 rounded-sm hover:shadow-[0_0_15px_rgba(203,141,79,0.5)]"
            >
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <Button
          className="lg:hidden text-white hover:text-jabal-gold transition-colors z-[60]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 z-40 lg:hidden transition-transform duration-500 ease-in-out    ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Blur Background */}
          <div className="absolute inset-0 bg-jabal/95 backdrop-blur-md z-0 min-h-screen" />

          {/* Drawer Content */}
          <div className="relative flex flex-col min-h-screen pt-20 pb-6 px-6 z-10">
            <nav className="flex flex-col space-y-6 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={closeMenu}
                  className={`text-xl font-medium transition-all duration-300 ${
                    isActive(item.path) ? 'text-jabal-gold' : 'text-white'
                  } hover:text-jabal-gold`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  variant="ghost"
                  onClick={closeMenu}
                  className="w-full mt-4 border border-jabal-gold text-jabal-muted hover:bg-jabal-gold/10 rounded-sm"
                >
                  Get a Quote
                </Button>
              </Link>
            </nav>

            <div className="mt-auto space-y-3">
              <p className="text-jabal-muted text-sm">Contact Us</p>
              <a href="tel:+1234567890" className="text-white hover:text-jabal-gold">
                +123 456 7890
              </a>
              <a
                href="mailto:info@jabalbuilders.com"
                className="text-white hover:text-jabal-gold"
              >
                info@jabalbuilders.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
