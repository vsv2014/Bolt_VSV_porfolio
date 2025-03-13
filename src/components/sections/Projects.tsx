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
    demoUrl: '#'
  },
  {
    title: 'Unified-XO-Platform',
    description: 'Advanced bot builder platform with modular UI components',
    problem: 'Complex virtual assistant development requiring specialized interface',
    solution: 'Developed comprehensive UI components with Angular best practices',
    impact: 'Streamlined virtual assistant development process',
    techStack: ['Angular', 'TypeScript', 'Node.js', 'WebSocket'],
    category: 'professional',
    demoUrl: '#'
  },
  {
    title: 'SmartAssist AI',
    description: 'AI-native contact center solution for automated customer service',
    problem: 'Traditional contact centers lacked AI-powered automation',
    solution: 'Developed AI solution with conversation routing and agent assistance',
    techStack: ['Angular', 'AI/ML', 'Node.js', 'WebSocket'],
    impact: 'Improved query resolution time and agent efficiency',
    category: 'professional',
    demoUrl: '#'
  },
  {
    title: 'Outbound Campaign Dialer',
    description: 'Automated dialing system for efficient customer outreach',
    problem: 'Manual dialing was time-consuming and inefficient for large-scale campaigns',
    solution: 'Developed an intelligent dialing system with predictive analytics',
    techStack: ['Angular', 'Node.js', 'MongoDB', 'WebSocket'],
    impact: 'Increased agent productivity by 40% and improved connection rates',
    category: 'professional',
    demoUrl: '#'
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
    githubUrl: 'https://github.com/vsv2014'
  },
  {
    title: 'River Water Temperature Estimation',
    description: 'ML-based water temperature prediction system',
    problem: 'Need for accurate river water temperature estimation in Krishna Basin',
    solution: 'Developed regression models using air temperature and discharge data',
    techStack: ['MATLAB', 'Python', 'Data Analysis', 'Machine Learning'],
    impact: 'Provided accurate temperature predictions for environmental monitoring',
    category: 'research',
    githubUrl: 'https://github.com/vsv2014'
  },
  {
    title: 'Watershed Delineation Model',
    description: 'GIS-based watershed analysis tool',
    problem: 'Complex watershed analysis requiring specialized tools',
    solution: 'Developed QGIS-based model for watershed delineation',
    techStack: ['QGIS', 'Python', 'Spatial Analysis'],
    impact: 'Streamlined watershed analysis process',
    category: 'research',
    githubUrl: 'https://github.com/vsv2014'
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
    githubUrl: 'https://github.com/vsv2014'
  },
  {
    title: 'Ultimate Tic-Tac-Toe AI Bot',
    description: 'AI-powered bot for playing Ultimate Tic-Tac-Toe',
    problem: 'Creating an intelligent opponent for a complex game variant',
    solution: 'Implemented minimax algorithm with alpha-beta pruning',
    techStack: ['Python', 'TensorFlow', 'Flask'],
    impact: 'Achieved 85% win rate against human players',
    category: 'academic',
    githubUrl: 'https://github.com/vsv2014'
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#e2c4ff] transition-colors mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gradient-to-br from-[#7928ca]/20 via-[#ff0080]/20 to-[#00d4ff]/20 text-[#e2c4ff] border border-white/10 group-hover:from-[#7928ca]/30 group-hover:via-[#ff0080]/30 group-hover:to-[#00d4ff]/30 group-hover:text-[#ffb3d9] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {selectedProject === project.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3"
                      >
                        <div>
                          <h4 className="text-[#e2c4ff] font-medium mb-1">Problem</h4>
                          <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-[#b3e6ff] font-medium mb-1">Solution</h4>
                          <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-[#ffb3d9] font-medium mb-1">Impact</h4>
                          <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{project.impact}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Links */}
                <div className="mt-auto p-4 pt-0 flex gap-3">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#e2c4ff] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#b3e6ff] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
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