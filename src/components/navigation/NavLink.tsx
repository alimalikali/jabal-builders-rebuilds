
import { ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  scrolled: boolean;
  isActive: boolean;
}

const NavLink = ({ href, children, scrolled, isActive }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`${
        scrolled ? 'text-primary' : 'text-white'
      } font-medium hover:text-secondary transition-colors px-3 py-2 rounded relative ${
        isActive ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary' : ''
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
