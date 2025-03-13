import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import { Building2, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Kore.ai',
    period: 'July 2022 - Present',
    location: 'Hyderabad, India',
    description: 'Leading development of enterprise-grade conversational AI solutions.',
    achievements: [
      'Developed proactive web campaigns feature for enhanced user engagement',
      'Built comprehensive UI components for the bot builder platform',
      'Implemented AI-powered contact center solutions',
      'Created automated dialing system for outbound campaigns',
      'Developed SmartAssist AI, improving query resolution time by 40%',
      'Led the implementation of Unified-XO-Platform with modular UI components',
      'Implemented Outbound Campaign Dialer system with predictive analytics',
      'Optimized agent productivity through AI-driven automation'
    ],
    technologies: ['Angular', 'Node.js', 'MongoDB', 'WebSocket', 'TypeScript', 'AI/ML']
  },
  {
    title: 'Research Assistant',
    company: 'Lab for Spatial Informatics, IIIT-H',
    period: 'January 2021 - January 2024',
    location: 'Hyderabad, India',
    description: 'Conducted research on environmental monitoring and water quality analysis.',
    achievements: [
      'Published research on dissolved oxygen saturation in Krishna River Basin',
      'Developed machine learning models for water quality prediction',
      'Created GIS-based watershed analysis tools',
      'Implemented environmental data visualization systems',
      'Developed regression models for water temperature prediction',
      'Created QGIS-based watershed delineation tools',
      'Implemented data analysis pipelines for environmental monitoring'
    ],
    technologies: ['Python', 'MATLAB', 'GIS', 'Machine Learning', 'Data Analysis']
  },
  {
    title: 'Web Developer',
    company: 'Sri Satya Sai Vidyalayam',
    period: 'July 2020 - September 2020',
    location: 'Hyderabad, India',
    description: 'Developed a website for conducting online classes during the Covid-19 pandemic.',
    achievements: [
      'Built a complete online learning platform from scratch',
      'Integrated video conferencing capabilities',
      'Implemented secure authentication system',
      'Created user-friendly interface for teachers and students'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'OAuth']
  },
  {
    title: 'Developer',
    company: 'IIIT Hyderabad',
    period: 'December 2017',
    location: 'Hyderabad, India',
    description: 'Built a virtual lab for teaching MergeSort algorithm through interactive visualization.',
    achievements: [
      'Developed an interactive visualization platform for MergeSort algorithm',
      'Created step-by-step animation system',
      'Implemented user progress tracking',
      'Added comprehensive documentation'
    ],
    technologies: ['JavaScript', 'D3.js', 'HTML5', 'CSS3']
  }
];

const Experience: FC = () => {
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.period.split(' - ')[1] === 'Present' ? Date.now() : a.period.split(' - ')[1]);
    const dateB = new Date(b.period.split(' - ')[1] === 'Present' ? Date.now() : b.period.split(' - ')[1]);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Professional Experience</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Building innovative solutions at the intersection of technology and environmental science
              </p>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-1/2 top-0 h-full w-px bg-purple-400/30 transform -translate-x-1/2" />

            {sortedExperiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? 'sm:pr-1/2' : 'sm:pl-1/2 sm:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 top-0 w-4 h-4 rounded-full bg-purple-400 border-4 border-indigo-900 shadow-md transform -translate-x-1/2" />

                {/* Experience Card */}
                <div className="sm:w-[calc(100%-2rem)] bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-white/20">
                  <div className="p-4 sm:p-6 md:p-8">
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4 sm:mb-6">
                      <div className="p-3 bg-purple-500/20 rounded-xl text-purple-300 w-fit group-hover:bg-purple-500/30 transition-colors">
                        <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">{experience.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 sm:mt-2">
                          <span className="text-purple-300 font-medium group-hover:text-purple-200 transition-colors">{experience.company}</span>
                          <span className="hidden sm:block text-gray-400">•</span>
                          <div className="flex items-center gap-1 text-sm text-gray-300">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base mt-2 group-hover:text-gray-200 transition-colors">{experience.description}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">Key Achievements</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium group-hover:bg-purple-500/30 group-hover:text-purple-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
