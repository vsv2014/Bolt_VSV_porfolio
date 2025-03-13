import { FC } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, Mail, Phone, Facebook } from 'lucide-react';

const Contact: FC = () => {
  const contacts = [
    {
      icon: <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      href: 'https://www.linkedin.com/in/santhoshvishal',
      label: 'LinkedIn',
      value: 'linkedin.com/in/santhoshvishal'
    },
    {
      icon: <Facebook className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      href: 'https://www.facebook.com/santhosh.vishal.98',
      label: 'Facebook',
      value: 'santhosh.vishal.98'
    },
    {
      icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      href: 'tel:+917702771465',
      label: 'Phone/WhatsApp',
      value: '+91 770-277-1465'
    },
    {
      icon: <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      href: 'https://www.instagram.com/santhoshvishal',
      label: 'Instagram',
      value: '@santhoshvishal'
    },
    {
      icon: <Twitter className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      href: 'https://twitter.com/santhoshvishal3',
      label: 'Twitter',
      value: '@santhoshvishal3'
    },
    {
      icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      href: 'mailto:santhoshvishal.v@research.iiit.ac.in',
      label: 'Primary Email',
      value: 'santhoshvishal.v@research.iiit.ac.in'
    },
    {
      icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      href: 'mailto:gombugadu@gmail.com',
      label: 'Alternative Email',
      value: 'gombugadu@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#16213e] relative overflow-hidden">
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7928ca]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Get in Touch</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
            I'm always excited to connect with fellow developers and researchers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3 sm:gap-4 border border-white/20"
              >
                <div className="p-3 bg-gradient-to-br from-[#7928ca]/20 via-[#ff0080]/20 to-[#00d4ff]/20 rounded-xl group-hover:from-[#7928ca]/30 group-hover:via-[#ff0080]/30 group-hover:to-[#00d4ff]/30 transition-colors backdrop-blur-sm border border-white/10">
                  {contact.icon}
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-white group-hover:text-[#e2c4ff] transition-colors mb-1">{contact.label}</h3>
                  <p className="text-sm text-[#b3e6ff] break-all group-hover:text-[#ffb3d9] transition-colors">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 sm:mt-10 text-sm sm:text-base text-[#e2c4ff]"
          >
            Based in Hyderabad, India<br />
            Open to remote opportunities worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
