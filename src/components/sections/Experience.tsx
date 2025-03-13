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
    location: 'Hyderabad, India',
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
    location: 'Hyderabad, India',
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
    location: 'Hyderabad, India',
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
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Professional Experience</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Building innovative solutions at the intersection of technology and environmental science
              </p>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-1/2 top-0 h-full w-px bg-blue-200 transform -translate-x-1/2" />

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? 'sm:pr-1/2' : 'sm:pl-1/2 sm:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md transform -translate-x-1/2" />

                {/* Experience Card */}
                <div className="sm:w-[calc(100%-2rem)] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-4 sm:p-6 md:p-8">
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4 sm:mb-6">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600 w-fit">
                        <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{experience.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 sm:mt-2">
                          <span className="text-blue-600 font-medium">{experience.company}</span>
                          <span className="hidden sm:block text-gray-400">•</span>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">{experience.description}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
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
