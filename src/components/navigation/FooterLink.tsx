
import { ReactNode } from "react";
import Link from "next/link";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-secondary transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default FooterLink;
