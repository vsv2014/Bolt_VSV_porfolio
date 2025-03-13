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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative overflow-hidden"
    >
      {/* AI/ML Text Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <div className="text-9xl font-bold text-gray-900 whitespace-nowrap transform -rotate-12">
          AI • ML • FULL STACK
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerChildren}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Profile Picture */}
          <motion.div 
            variants={bounceIn}
            className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8"
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

          <motion.div className="space-y-6 mb-8">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
            >
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Santhosh Vishal
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4"
            >
              <h2 className="text-xl sm:text-2xl text-gray-600 font-semibold">
                Full Stack Developer & AI Enthusiast
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  AI/ML Development
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Environmental Research
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Web Applications
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg"
            >
              Passionate about building innovative solutions at the intersection of technology and environmental science.
              Currently focused on developing AI-powered applications and environmental monitoring systems.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="flex justify-center items-center space-x-6"
          >
            <motion.a
              href="https://github.com/vsv2014"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/santhosh-veerannapet/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="mailto:santhoshveerannapet@gmail.com"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;