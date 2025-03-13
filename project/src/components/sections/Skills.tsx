import React from 'react';
import { Code2, Database, Brain, Server, Globe, ChartBar } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../../utils/animations';

interface SkillCategory {
  name: string;
  icon: React.ReactElement;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icon: <Code2 className="w-6 h-6" />,
    description: 'Proficient in multiple programming paradigms',
    skills: ['C', 'C++', 'Python', 'Matlab', 'PHP', 'Ruby', 'Java', 'Assembly (MIPS)', 'Shell scripting']
  },
  {
    name: 'Web Development',
    icon: <Globe className="w-6 h-6" />,
    description: 'Full-stack web development expertise',
    skills: ['React', 'Angular', 'Django', 'Flask', 'Laravel', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    name: 'Database & Backend',
    icon: <Database className="w-6 h-6" />,
    description: 'Database design and management',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'RESTful APIs', 'GraphQL']
  },
  {
    name: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    description: 'Experience in AI/ML applications',
    skills: ['TensorFlow', 'scikit-learn', 'Natural Language Processing', 'Computer Vision', 'Neural Networks']
  },
  {
    name: 'DevOps & Cloud',
    icon: <Server className="w-6 h-6" />,
    description: 'Cloud infrastructure and deployment',
    skills: ['Docker', 'Git', 'CI/CD', 'AWS', 'Linux Administration', 'Nginx']
  },
  {
    name: 'Data Analysis',
    icon: <ChartBar className="w-6 h-6" />,
    description: 'Data processing and visualization',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter', 'Data Visualization', 'Statistical Analysis']
  }
];

const Skills: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#16213e] relative overflow-hidden"
      id="skills"
    >
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7928ca]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={staggerChildren}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Skills & Expertise</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive technical expertise across various domains of software development and data science
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#7928ca]/20 via-[#ff0080]/20 to-[#00d4ff]/20 rounded-xl text-[#e2c4ff] group-hover:from-[#7928ca]/30 group-hover:via-[#ff0080]/30 group-hover:to-[#00d4ff]/30 transition-colors backdrop-blur-sm border border-white/10">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#e2c4ff] transition-colors">{category.name}</h3>
                  <p className="text-gray-300 text-sm mt-1 group-hover:text-gray-200 transition-colors">{category.description}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm text-[#e2c4ff] rounded-full text-sm font-medium border border-white/10 group-hover:bg-white/20 group-hover:text-[#ffb3d9] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;