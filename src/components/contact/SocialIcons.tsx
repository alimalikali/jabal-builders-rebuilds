import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: <Facebook className="w-5 h-5 text-primary fill-current" />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: <Instagram className="w-5 h-5 text-primary fill-current" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <Twitter className="w-5 h-5 text-primary fill-current" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <Linkedin className="w-5 h-5 text-primary fill-current" />
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url} 
          className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;