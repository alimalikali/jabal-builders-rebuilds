
import { ReactNode } from "react";

interface FooterGroupProps {
  title: string;
  children: ReactNode;
}

const FooterGroup = ({ title, children }: FooterGroupProps) => {
  return (
    <div>
      <h4 className="text-xl font-bold font-poppins mb-4 text-secondary/70">{title}</h4>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  );
};

export default FooterGroup;
