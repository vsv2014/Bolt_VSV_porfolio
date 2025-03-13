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

  const getCategoryColor = (category: ProjectCategory) => {
    switch (category) {
      case 'professional':
        return 'from-blue-600 to-indigo-600';
      case 'research':
        return 'from-green-600 to-teal-600';
      case 'academic':
        return 'from-purple-600 to-pink-600';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Showcasing innovative solutions at the intersection of technology and environmental science.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md overflow-x-auto max-w-full">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => {
                  setActiveCategory(category.value);
                  setSelectedProject(null);
                }}
                className={`px-4 sm:px-6 py-2 rounded-lg transition-colors whitespace-nowrap text-sm sm:text-base ${
                  activeCategory === category.value
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  selectedProject === project.title ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedProject(selectedProject === project.title ? null : project.title)}
              >
                <div className="relative">
                  <div className={`aspect-w-16 aspect-h-9 bg-gradient-to-br ${getCategoryColor(project.category)} p-6 flex items-center justify-center text-white`}>
                    <div className="relative z-10 text-center">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-100 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {selectedProject === project.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">Problem</h4>
                          <p className="text-gray-600 text-sm">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Solution</h4>
                          <p className="text-gray-600 text-sm">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Impact</h4>
                          <p className="text-gray-600 text-sm">{project.impact}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.techStack.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4 pt-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
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
                              className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;