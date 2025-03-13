import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren, bounceIn } from '../../utils/animations';
import { Github, Linkedin, Mail, Facebook } from 'lucide-react';
import profilePic from '../../assets/VSV-portfolio-pp.jpeg';

const Hero: FC = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6 sm:w-8 sm:h-8" />,
      href: 'https://github.com/vsv2014',
      color: 'hover:text-purple-300'
    },
    {
      icon: <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />,
      href: 'https://www.linkedin.com/in/santhosh-veerannapet/',
      color: 'hover:text-blue-300'
    },
    {
      icon: <Facebook className="w-6 h-6 sm:w-8 sm:h-8" />,
      href: 'https://www.facebook.com/santhosh.vishal.98',
      color: 'hover:text-purple-300'
    },
    {
      icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
      href: 'mailto:santhoshveerannapet@gmail.com',
      color: 'hover:text-emerald-300'
    }
  ];

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-20 px-4 relative overflow-hidden"
    >
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={staggerChildren}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Profile Picture */}
          <motion.div 
            variants={bounceIn}
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto mb-6 sm:mb-8"
          >
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src={profilePic}
              alt="Santhosh Vishal Veerannapet"
              className="w-full h-full object-cover rounded-full border-8 border-white/10 shadow-2xl backdrop-blur-sm"
            />
            <div className="absolute -inset-4 border-4 border-purple-400/20 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white px-4"
            >
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Veerannapet Santhosh Vishal
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-3 sm:gap-4"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-semibold px-4">
                Full Stack Developer & Environmental Researcher
              </h2>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm text-purple-200 rounded-full text-sm font-medium border border-purple-500/20 hover:bg-white/20 transition-colors">
                  Full Stack Development
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-white/20 transition-colors">
                  Environmental Research
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm text-emerald-200 rounded-full text-sm font-medium border border-emerald-500/20 hover:bg-white/20 transition-colors">
                  Data Science
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg px-4"
            >
              Passionate about building innovative solutions at the intersection of technology and environmental science.
              Currently focused on developing environmental monitoring systems and data-driven applications.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="flex justify-center items-center space-x-4 sm:space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white transition-all duration-300 border border-white/10 ${link.color}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;