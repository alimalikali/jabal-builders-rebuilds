
import { socialLinks } from "@/config/social";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a 
          key={link.name} 
          href={link.url} 
          aria-label={link.name} 
          className="text-gray-300 hover:text-secondary transition-colors"
        >
          <span dangerouslySetInnerHTML={{ __html: link.icon }} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
