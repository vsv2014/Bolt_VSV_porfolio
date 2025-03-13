import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren, bounceIn } from '../../utils/animations';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../../assets/VSV-portfolio-pp.jpeg';

const Hero: FC = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 relative overflow-hidden"
    >
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
              className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
            />
            <div className="absolute -inset-4 border-4 border-blue-500/20 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 px-4"
            >
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Veerannapet Santhosh Vishal
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-3 sm:gap-4"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold px-4">
                Full Stack Developer & Environmental Researcher
              </h2>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Full Stack Development
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Environmental Research
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Data Science
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg px-4"
            >
              Passionate about building innovative solutions at the intersection of technology and environmental science.
              Currently focused on developing environmental monitoring systems and data-driven applications.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="flex justify-center items-center space-x-4 sm:space-x-6"
          >
            <motion.a
              href="https://github.com/vsv2014"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
            >
              <Github className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/santhosh-veerannapet/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.a>
            <motion.a
              href="mailto:santhoshveerannapet@gmail.com"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;