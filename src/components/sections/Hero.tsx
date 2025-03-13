import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren, bounceIn } from '../../utils/animations';
import { Github, Linkedin, Mail, Facebook, Code2, Brain, Database } from 'lucide-react';
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

  const expertise = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies',
      color: 'from-[#7928ca] to-[#ff0080]'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI/ML Research',
      description: 'Applying machine learning to environmental challenges',
      color: 'from-[#ff0080] to-[#00d4ff]'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Science',
      description: 'Transforming environmental data into actionable insights',
      color: 'from-[#00d4ff] to-[#7928ca]'
    }
  ];

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#16213e] py-20 px-4 relative overflow-hidden"
    >
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7928ca]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Side Content */}
          <motion.div
            variants={staggerChildren}
            className="text-left space-y-6"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              Innovating at the
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#7928ca] via-[#ff0080] to-[#00d4ff]">
                Intersection of AI & Environment
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-300 text-lg sm:text-xl leading-relaxed"
            >
              Full Stack Developer specializing in AI-driven environmental solutions. Building intelligent systems that bridge technology and sustainability.
            </motion.p>

            <motion.div
              variants={staggerChildren}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} p-3 mb-3`}>
                    {item.icon}
                  </div>
                  <h3 className="text-[#e2c4ff] font-semibold mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            variants={staggerChildren}
            className="text-center"
          >
            {/* Profile Picture */}
            <motion.div 
              variants={bounceIn}
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto mb-6"
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

            <motion.div className="space-y-4 mb-6">
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold text-white"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928ca] via-[#ff0080] to-[#00d4ff]">
                  Veerannapet Santhosh Vishal
                </span>
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-2"
              >
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-[#e2c4ff] rounded-full text-sm font-medium border border-[#7928ca]/20 hover:bg-white/20 transition-colors">
                  Full Stack Development
                </span>
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-[#b3e6ff] rounded-full text-sm font-medium border border-[#00d4ff]/20 hover:bg-white/20 transition-colors">
                  Environmental Research
                </span>
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-[#ffb3d9] rounded-full text-sm font-medium border border-[#ff0080]/20 hover:bg-white/20 transition-colors">
                  Data Science
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="flex justify-center items-center space-x-4"
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
      </div>
    </motion.section>
  );
};

export default Hero;