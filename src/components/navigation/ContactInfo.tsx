
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h4 className="text-xl font-bold font-poppins mb-4">Contact Us</h4>
      <ul className="space-y-4">
        <li className="flex items-start">
          <MapPin size={20} className="mr-2 mt-1 text-secondary" />
          <span className="text-gray-300">
            1234 Construction Ave,<br />Building City, State 12345
          </span>
        </li>
        <li className="flex items-center">
          <Phone size={20} className="mr-2 text-secondary" />
          <a href="tel:+11234567890" className="text-gray-300 hover:text-secondary transition-colors">
            +1 (123) 456-7890
          </a>
        </li>
        <li className="flex items-center">
          <Mail size={20} className="mr-2 text-secondary" />
          <a href="mailto:info@jabalbuilders.com" className="text-gray-300 hover:text-secondary transition-colors">
            info@jabalbuilders.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
