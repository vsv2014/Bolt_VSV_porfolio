import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import { FileText, Link2, Microscope } from 'lucide-react';

interface Research {
  title: string;
  description: string;
  methodology: string;
  findings: string[];
  paperLink?: string;
  domain: string;
  year: string;
}

const researchProjects: Research[] = [
  {
    title: 'Effects of Dissolved Oxygen Saturation and Water Temperature using Air2Stream over Krishna River Basin, India',
    description: 'Comprehensive analysis of water quality parameters and their effects on the Krishna River Basin ecosystem using advanced modeling techniques.',
    methodology: 'Implemented Air2Stream model and conducted statistical analysis on environmental data to evaluate water quality patterns.',
    findings: [
      'Successfully modeled dissolved oxygen saturation patterns',
      'Established correlation between air and water temperatures',
      'Identified seasonal impacts on water quality',
      'Created predictive models for future assessments'
    ],
    domain: 'Water Quality Analysis',
    year: '2023',
    paperLink: 'https://www.researchgate.net/publication/370104952_Effects_of_Dissolved_Oxygen_Saturation_and_Water_Temperature_using_Air2Stream_over_Krishna_River_Basin_India'
  },
  {
    title: 'Performance Analysis of 339 MLD Sewage Treatment Plant',
    description: 'Comprehensive analysis of a large-scale sewage treatment facility using machine learning techniques.',
    methodology: 'Applied statistical analysis and machine learning algorithms to evaluate treatment efficiency and identify optimization opportunities.',
    findings: [
      'Identified key performance indicators affecting treatment efficiency',
      'Developed predictive models for process optimization',
      'Recommended operational improvements for enhanced treatment',
      'Reduced operational costs while maintaining quality standards'
    ],
    domain: 'Environmental Engineering',
    year: '2022',
    paperLink: 'https://rndshowcase.iiit.ac.in/tto/main1.php?centername=Lab%20for%20Spatial%20Informatics&shortform=LSI&title_tech=Performance%20Analysis%20of%20339%20MLD%20wastewater%20Treatment%20Plant%20Amberpet%20using%20Machine%20Learing%20models'
  }
];

const Research: FC = () => {
  return (
    <section id="research" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Research Publications</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Contributing to environmental science through data-driven research and innovative methodologies
              </p>
            </motion.div>
          </div>

          {/* Research Projects */}
          <div className="space-y-6 sm:space-y-8">
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-white/20"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Project Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4 sm:mb-6">
                    <div className="p-3 bg-purple-500/20 rounded-xl text-purple-300 w-fit group-hover:bg-purple-500/30 transition-colors">
                      <Microscope className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">{project.title}</h3>
                        <div className="flex gap-3">
                          <span className="text-sm font-medium text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full w-fit">
                            {project.domain}
                          </span>
                          <span className="text-sm font-medium text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full w-fit">
                            {project.year}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base mt-2 group-hover:text-gray-200 transition-colors">{project.description}</p>
                    </div>
                  </div>

                  {/* Methodology */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">Research Methodology</h4>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{project.methodology}</p>
                  </div>

                  {/* Findings */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">Key Findings</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.findings.map((finding, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Paper Link */}
                  {project.paperLink && (
                    <div className="mt-4 sm:mt-6">
                      <a
                        href={project.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 transition-colors group-hover:text-purple-200"
                      >
                        <FileText className="w-4 h-4" />
                        <span>View Research Paper</span>
                        <Link2 className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Impact */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 sm:mt-10 md:mt-12 text-center"
          >
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              These research publications have contributed to advancing our understanding of environmental systems
              and developing practical solutions for sustainable development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
