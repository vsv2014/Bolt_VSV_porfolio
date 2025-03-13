import { FC } from 'react';
import { Code2, Database, Brain, Server, Globe, ChartBar } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../../utils/animations';

interface SkillCategory {
  name: string;
  icon: JSX.Element;
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

const Skills: FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      id="skills"
    >
      <motion.div
        variants={staggerChildren}
        className="container mx-auto px-4 sm:px-6"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
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