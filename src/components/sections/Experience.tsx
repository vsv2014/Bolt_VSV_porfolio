import { FC } from 'react';
import { Building2, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  type: 'professional' | 'academic' | 'research' | 'freelance';
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Kore.ai',
    period: 'July 2022 - Present',
    type: 'professional',
    description: 'Leading development of AI-powered virtual assistant platforms and contact center solutions.',
    achievements: [
      'Designed and executed campaign creation with messaging options, template selection, and configuration',
      'Implemented rule-based targeting and goal tracking for precise campaign management',
      'Ensured user-friendly interface and seamless workflow for enhanced efficiency',
      'Collaborated with cross-functional teams for requirements and specifications',
      'Conducted user training sessions and provided ongoing support',
      'Designed and developed virtual assistant UI components using Angular',
      'Enhanced virtual assistant applications with improved functionality',
      'Implemented Angular best practices for optimal performance',
      'Integrated components through cross-team collaboration',
      'Contributed to architecture discussions and code reviews'
    ],
    technologies: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'WebSocket', 'AI/ML']
  },
  {
    title: 'Research Assistant',
    company: 'Lab for Spatial Informatics, IIIT-H',
    period: 'January 2021 - January 2024',
    type: 'research',
    description: 'Conducted research on environmental monitoring and water quality analysis.',
    achievements: [
      'Published research on dissolved oxygen saturation in Krishna River Basin',
      'Developed regression models for water temperature prediction',
      'Created QGIS-based watershed delineation tools',
      'Implemented data analysis pipelines for environmental monitoring',
      'Analyzed performance of 339 MLD Sewage Treatment Plant using ML algorithms',
      'Conducted comprehensive research on water quality parameters',
      'Developed predictive models for treatment plant optimization'
    ],
    technologies: ['Python', 'MATLAB', 'GIS', 'Data Analysis', 'Machine Learning', 'R', 'Statistical Analysis']
  },
  {
    title: 'Developer',
    company: 'IIIT Hyderabad',
    period: 'December 2017',
    type: 'professional',
    description: 'Built a virtual lab for teaching MergeSort algorithm through interactive visualization.',
    achievements: [
      'Developed an interactive visualization platform for MergeSort algorithm',
      'Implemented step-by-step execution with visual feedback',
      'Used data analysis to track and improve student performance',
      'Successfully deployed the platform for student use'
    ],
    technologies: ['JavaScript', 'Python', 'Flask', 'Data Analysis', 'Machine Learning']
  },
  {
    title: 'Web Developer',
    company: 'Sri Satya Sai Vidyalayam',
    period: 'July 2020 - September 2020',
    type: 'professional',
    description: 'Developed a website for conducting online classes during the Covid-19 pandemic.',
    achievements: [
      'Built a complete online learning platform from scratch',
      'Implemented secure user authentication for students and teachers',
      'Created an intuitive interface for conducting virtual classes',
      'Successfully deployed and maintained the platform during peak usage'
    ],
    technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL']
  }
];

const Experience: FC = () => {
  const professionalExp = experiences.filter(exp => exp.type === 'professional');
  const researchExp = experiences.filter(exp => exp.type === 'research');

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Professional Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-purple-400 border-b border-purple-400/20 pb-2">Industry Experience</h3>
            <div className="space-y-8">
              {professionalExp.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors mt-1">
                      <Building2 className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">{exp.title}</h4>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-purple-300 text-base group-hover:text-purple-200 transition-colors">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">{exp.description}</p>

                  <div className="space-y-4 mb-6">
                    <h5 className="text-lg font-semibold text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                      <span className="w-8 h-[2px] bg-purple-400/50"></span>
                      Key Achievements
                    </h5>
                    <ul className="space-y-3 pl-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors">
                          <ChevronRight className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0 group-hover:text-purple-300" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                      <span className="w-8 h-[2px] bg-purple-400/50"></span>
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium group-hover:bg-purple-500/30 group-hover:text-purple-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-purple-400 border-b border-purple-400/20 pb-2">Research Experience</h3>
            <div className="space-y-8">
              {researchExp.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors mt-1">
                      <Building2 className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">{exp.title}</h4>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-purple-300 text-base group-hover:text-purple-200 transition-colors">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">{exp.description}</p>

                  <div className="space-y-4 mb-6">
                    <h5 className="text-lg font-semibold text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                      <span className="w-8 h-[2px] bg-purple-400/50"></span>
                      Key Achievements
                    </h5>
                    <ul className="space-y-3 pl-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors">
                          <ChevronRight className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0 group-hover:text-purple-300" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                      <span className="w-8 h-[2px] bg-purple-400/50"></span>
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium group-hover:bg-purple-500/30 group-hover:text-purple-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
