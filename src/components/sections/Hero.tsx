import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren, bounceIn } from '../../utils/animations';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: FC = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-20"
    >
      <div className="container mx-auto px-4">
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
              src="/assets/VSV-portfolio-pp.jpeg"
              alt="Santhosh Vishal Veerannapet"
              className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Santhosh Vishal Veerannapet
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            Full Stack Developer & AI Enthusiast
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building innovative solutions at the intersection of technology and environmental science.
            Currently focused on developing AI-powered applications and environmental monitoring systems.
          </motion.p>

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