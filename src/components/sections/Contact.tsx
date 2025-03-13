import { FC } from 'react';
import { Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Contact: FC = () => {
  const contacts = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/santhoshvishal',
      label: 'LinkedIn',
      value: 'linkedin.com/in/santhoshvishal'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      href: 'tel:+917702771465',
      label: 'Phone/WhatsApp',
      value: '+91 770-277-1465'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: 'https://www.instagram.com/santhoshvishal',
      label: 'Instagram',
      value: '@santhoshvishal'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://twitter.com/santhoshvishal3',
      label: 'Twitter',
      value: '@santhoshvishal3'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:santhoshvishal.v@research.iiit.ac.in',
      label: 'Primary Email',
      value: 'santhoshvishal.v@research.iiit.ac.in'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:gombugadu@gmail.com',
      label: 'Alternative Email',
      value: 'gombugadu@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0B1120] via-[#1E1B4B] to-[#4C1D95]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Get in Touch</h2>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                {contact.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">
                  {contact.label}
                </h3>
                <p className="text-purple-300 group-hover:text-purple-200 transition-colors">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
