import { FC, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectCategory = 'all' | 'professional' | 'research' | 'academic';

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  category: ProjectCategory;
  githubUrl?: string;
  demoUrl?: string;
  bgGradient: string;
}

const projects: Project[] = [
  // Professional Projects
  {
    title: 'Proactive Web Campaigns',
    description: 'Advanced campaign management system with intelligent targeting',
    problem: 'Need for sophisticated campaign management with precise targeting',
    solution: 'Developed comprehensive campaign creation system with messaging options, templates, and rule-based targeting',
    impact: 'Enhanced campaign effectiveness and user engagement through precise targeting',
    techStack: ['Angular', 'Node.js', 'MongoDB', 'WebSocket', 'TypeScript'],
    category: 'professional',
    demoUrl: '#',
    bgGradient: 'from-[#7928ca] via-[#ff0080] to-[#00d4ff]'
  },
  {
    title: 'Unified-XO-Platform',
    description: 'Advanced bot builder platform with modular UI components',
    problem: 'Complex virtual assistant development requiring specialized interface',
    solution: 'Developed comprehensive UI components with Angular best practices',
    impact: 'Streamlined virtual assistant development process',
    techStack: ['Angular', 'TypeScript', 'Node.js', 'WebSocket'],
    category: 'professional',
    demoUrl: '#',
    bgGradient: 'from-[#00d4ff] via-[#7928ca] to-[#ff0080]'
  },
  {
    title: 'SmartAssist AI',
    description: 'AI-native contact center solution for automated customer service',
    problem: 'Traditional contact centers lacked AI-powered automation',
    solution: 'Developed AI solution with conversation routing and agent assistance',
    techStack: ['Angular', 'AI/ML', 'Node.js', 'WebSocket'],
    impact: 'Improved query resolution time and agent efficiency',
    category: 'professional',
    demoUrl: '#',
    bgGradient: 'from-[#ff0080] via-[#00d4ff] to-[#7928ca]'
  },
  {
    title: 'Outbound Campaign Dialer',
    description: 'Automated dialing system for efficient customer outreach',
    problem: 'Manual dialing was time-consuming and inefficient for large-scale campaigns',
    solution: 'Developed an intelligent dialing system with predictive analytics',
    techStack: ['Angular', 'Node.js', 'MongoDB', 'WebSocket'],
    impact: 'Increased agent productivity by 40% and improved connection rates',
    category: 'professional',
    demoUrl: '#',
    bgGradient: 'from-[#7928ca] to-[#00d4ff]'
  },

  // Research Projects
  {
    title: 'Sewage Treatment Analysis',
    description: 'ML-based analysis of 339 MLD Sewage Treatment Plant',
    problem: 'Need for performance analysis of large-scale sewage treatment',
    solution: 'Applied ML algorithms to analyze plant performance metrics',
    techStack: ['Python', 'Machine Learning', 'Data Analysis', 'R'],
    impact: 'Provided insights for treatment plant optimization',
    category: 'research',
    githubUrl: 'https://github.com/vsv2014',
    bgGradient: 'from-[#00d4ff] to-[#7928ca]'
  },
  {
    title: 'River Water Temperature Estimation',
    description: 'ML-based water temperature prediction system',
    problem: 'Need for accurate river water temperature estimation in Krishna Basin',
    solution: 'Developed regression models using air temperature and discharge data',
    techStack: ['MATLAB', 'Python', 'Data Analysis', 'Machine Learning'],
    impact: 'Provided accurate temperature predictions for environmental monitoring',
    category: 'research',
    githubUrl: 'https://github.com/vsv2014',
    bgGradient: 'from-[#ff0080] to-[#00d4ff]'
  },
  {
    title: 'Watershed Delineation Model',
    description: 'GIS-based watershed analysis tool',
    problem: 'Complex watershed analysis requiring specialized tools',
    solution: 'Developed QGIS-based model for watershed delineation',
    techStack: ['QGIS', 'Python', 'Spatial Analysis'],
    impact: 'Streamlined watershed analysis process',
    category: 'research',
    githubUrl: 'https://github.com/vsv2014',
    bgGradient: 'from-[#7928ca] to-[#ff0080]'
  },

  // Academic Projects
  {
    title: 'Virtual Lab for MergeSort',
    description: 'Interactive visualization platform for learning sorting algorithms',
    problem: 'Students struggled to understand complex sorting algorithms',
    solution: 'Created an interactive visualization tool with step-by-step execution',
    techStack: ['React', 'TypeScript', 'D3.js'],
    impact: 'Used by 500+ students with improved learning outcomes',
    category: 'academic',
    githubUrl: 'https://github.com/vsv2014',
    bgGradient: 'from-[#00d4ff] via-[#7928ca] to-[#ff0080]'
  },
  {
    title: 'Ultimate Tic-Tac-Toe AI Bot',
    description: 'AI-powered bot for playing Ultimate Tic-Tac-Toe',
    problem: 'Creating an intelligent opponent for a complex game variant',
    solution: 'Implemented minimax algorithm with alpha-beta pruning',
    techStack: ['Python', 'TensorFlow', 'Flask'],
    impact: 'Achieved 85% win rate against human players',
    category: 'academic',
    githubUrl: 'https://github.com/vsv2014',
    bgGradient: 'from-[#ff0080] via-[#00d4ff] to-[#7928ca]'
  }
];

const Projects: FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'professional', label: 'Professional' },
    { value: 'research', label: 'Research' },
    { value: 'academic', label: 'Academic' }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#16213e] relative overflow-hidden" id="projects">
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7928ca]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Showcasing innovative solutions at the intersection of technology and environmental science.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-lg p-1 shadow-lg overflow-x-auto max-w-full no-scrollbar border border-white/20">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => {
                  setActiveCategory(category.value);
                  setSelectedProject(null);
                }}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-lg transition-colors whitespace-nowrap text-sm ${
                  activeCategory === category.value
                    ? 'bg-gradient-to-br from-[#7928ca] via-[#ff0080] to-[#00d4ff] text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout="position"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                  layout: { duration: 0.3 }
                }}
                className={`bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-white/20 group ${
                  selectedProject === project.title ? 'ring-2 ring-[#7928ca]' : ''
                }`}
                onClick={() => setSelectedProject(selectedProject === project.title ? null : project.title)}
              >
                {/* Project Preview */}
                <div className="relative aspect-video overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        {project.category === 'professional' && (
                          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {project.category === 'research' && (
                          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        )}
                        {project.category === 'academic' && (
                          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#e2c4ff] transition-colors mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm text-[#e2c4ff] rounded text-xs font-medium border border-white/10 group-hover:bg-white/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[#b3e6ff] hover:text-[#ffb3d9] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[#b3e6ff] hover:text-[#ffb3d9] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;