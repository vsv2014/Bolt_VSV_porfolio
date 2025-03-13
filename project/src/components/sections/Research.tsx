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
    <section id="research" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#16213e] relative overflow-hidden">
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7928ca]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-white/20 border border-white/20"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Project Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4 sm:mb-6">
                    <div className="p-3 bg-gradient-to-br from-[#7928ca]/20 via-[#ff0080]/20 to-[#00d4ff]/20 rounded-xl text-[#e2c4ff] w-fit group-hover:from-[#7928ca]/30 group-hover:via-[#ff0080]/30 group-hover:to-[#00d4ff]/30 transition-colors backdrop-blur-sm border border-white/10">
                      <Microscope className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#e2c4ff] transition-colors">{project.title}</h3>
                        <div className="flex gap-3">
                          <span className="text-sm font-medium text-[#b3e6ff] bg-gradient-to-br from-[#7928ca]/20 via-[#ff0080]/20 to-[#00d4ff]/20 px-3 py-1 rounded-full w-fit border border-white/10">
                            {project.domain}
                          </span>
                          <span className="text-sm font-medium text-[#ffb3d9] bg-gradient-to-br from-[#7928ca]/20 via-[#ff0080]/20 to-[#00d4ff]/20 px-3 py-1 rounded-full w-fit border border-white/10">
                            {project.year}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base mt-2 group-hover:text-gray-200 transition-colors">{project.description}</p>
                    </div>
                  </div>

                  {/* Methodology */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm font-semibold text-[#e2c4ff] mb-2 group-hover:text-[#ffb3d9] transition-colors">Research Methodology</h4>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{project.methodology}</p>
                  </div>

                  {/* Findings */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm font-semibold text-[#e2c4ff] group-hover:text-[#ffb3d9] transition-colors">Key Findings</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.findings.map((finding, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#7928ca] via-[#ff0080] to-[#00d4ff] mt-2 flex-shrink-0" />
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
                        className="inline-flex items-center gap-2 text-sm text-[#b3e6ff] hover:text-[#ffb3d9] transition-colors group-hover:text-[#ffb3d9]"
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
