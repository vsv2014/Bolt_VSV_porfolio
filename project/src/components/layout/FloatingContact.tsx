import { FC } from 'react';
import { Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const FloatingContact: FC = () => {
  const contacts = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/santhoshvishal',
      label: 'LinkedIn'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: 'tel:+917702771465',
      label: 'Phone/WhatsApp'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/santhoshvishal',
      label: 'Instagram'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/santhoshvishal3',
      label: 'Twitter'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:santhoshvishal.v@research.iiit.ac.in',
      label: 'Primary Email'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:gombugadu@gmail.com',
      label: 'Alternative Email'
    }
  ];

  return (
    <div className="fixed left-8 bottom-0 z-40 hidden xl:flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 group relative"
            aria-label={contact.label}
          >
            {contact.icon}
            <span className="absolute left-14 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {contact.label}
            </span>
          </a>
        ))}
      </div>
      <div className="w-[1px] h-24 bg-gray-300 mt-4"></div>
    </div>
  );
};

export default FloatingContact;
