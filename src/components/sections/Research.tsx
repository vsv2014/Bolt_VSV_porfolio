import { FC } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Users, FileText } from 'lucide-react';
import { fadeInUp, staggerChildren } from '../../utils/animations';

interface ResearchPaper {
  title: string;
  description: string;
  link: string;
  highlights: string[];
  technologies: string[];
  year: string;
}

const researchPapers: ResearchPaper[] = [
  {
    title: 'Effects of Dissolved Oxygen Saturation and Water Temperature using Air2Stream over Krishna River Basin, India',
    description: 'Research on water quality parameters and their effects on the Krishna River Basin ecosystem.',
    link: 'https://www.researchgate.net/publication/370104952_Effects_of_Dissolved_Oxygen_Saturation_and_Water_Temperature_using_Air2Stream_over_Krishna_River_Basin_India',
    highlights: [
      'Analysis of dissolved oxygen saturation patterns',
      'Implementation of Air2Stream model',
      'Impact assessment on river ecosystem',
      'Temperature correlation studies'
    ],
    technologies: ['MATLAB', 'Python', 'Data Analysis', 'GIS'],
    year: '2023'
  },
  {
    title: 'Sewage Treatment Plant Performance Using Machine Learning Applications, India',
    description: 'Investigated the performance analysis of 339 MLD Sewage Treatment Plant at Amberpet using Machine LearningAlgorithms.',
    link: 'https://rndshowcase.iiit.ac.in/tto/main1.php?centername=Lab%20for%20Spatial%20Informatics&shortform=LSI&title_tech=Performance%20Analysis%20of%20339%20MLD%20wastewater%20Treatment%20Plant%20Amberpet%20using%20Machine%20Learing%20models',
    highlights: [
      'Sewage Treatment',
      'Impact assessment on river ecosystem',
      'Temperature correlation studies in wastewaer'
    ],
    technologies: ['MATLAB', 'Python', 'Data Analysis', 'GIS'],
    year: '2022'
  }
];

const Research: FC = () => {
  return (
    <section id="research" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Research Work</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Exploring the intersection of environmental science and technology through data-driven research
              </p>
            </motion.div>
          </div>

          {/* Profile Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white mb-8 sm:mb-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-semibold">Research Profile</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Active researcher in environmental science and water resource management, focusing on river basin analysis and water quality assessment.
              </p>
              <a
                href="https://www.researchgate.net/profile/Santhosh-Veerannapet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                View ResearchGate Profile
              </a>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white mb-8 sm:mb-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <FileText className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-semibold">Research Impact</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">1+</div>
                <div className="text-sm text-gray-300">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-sm text-gray-300">Years of Research</div>
              </div>
            </div>
          </motion.div>

          {/* Publications */}
          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Project Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4 sm:mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 w-fit">
                      <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{paper.title}</h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                          {paper.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base mt-2">{paper.description}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {paper.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Paper Link */}
                  <div className="mt-4 sm:mt-6">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Read Publication</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
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

export default Research;
