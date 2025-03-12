import { FC, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCategory = 'all' | 'professional' | 'personal' | 'academic';

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  imageUrl: string;
  category: string;
  demoUrl?: string;
  githubUrl?: string;
}

const Projects: FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const projects: Project[] = [
    {
      title: 'Outbound Campaign Dialer',
      description: 'Automated dialing system for efficient customer outreach',
      problem: 'Manual dialing was time-consuming and inefficient for large-scale campaigns',
      solution: 'Developed an intelligent dialing system with predictive analytics',
      techStack: ['Angular', 'Node.js', 'MongoDB', 'WebSocket'],
      impact: 'Increased agent productivity by 40% and improved connection rates',
      imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000',
      category: 'professional',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Virtual Lab for MergeSort',
      description: 'Interactive visualization platform for learning sorting algorithms',
      problem: 'Students struggled to understand complex sorting algorithms',
      solution: 'Created an interactive visualization tool with step-by-step execution',
      techStack: ['React', 'TypeScript', 'D3.js'],
      impact: 'Used by 500+ students with improved learning outcomes',
      imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1000',
      category: 'academic',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Ultimate Tic-Tac-Toe AI Bot',
      description: 'AI-powered bot for playing Ultimate Tic-Tac-Toe',
      problem: 'Creating an intelligent opponent for a complex game variant',
      solution: 'Implemented minimax algorithm with alpha-beta pruning',
      techStack: ['Python', 'TensorFlow', 'Flask'],
      impact: 'Achieved 85% win rate against human players',
      imageUrl: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1000',
      category: 'personal',
      githubUrl: '#'
    },
    {
      title: 'SmartAssist AI',
      description: 'AI-native contact center solution for automated customer service',
      problem: 'Traditional contact centers lacked AI-powered automation and agent assistance',
      solution: 'Developed comprehensive AI solution with conversation routing, disposition capture, and agent assistance',
      techStack: ['Angular', 'AI/ML', 'Node.js', 'WebSocket'],
      impact: 'Improved query resolution time and agent efficiency',
      imageUrl: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1000',
      category: 'professional',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Unified-XO-Platform',
      description: 'Virtual assistant platform with advanced UI components',
      problem: 'Need for scalable and maintainable virtual assistant interface',
      solution: 'Designed modular UI components and implemented Angular best practices',
      techStack: ['Angular', 'TypeScript', 'RxJS', 'Material UI'],
      impact: 'Improved platform maintainability and user experience',
      imageUrl: 'https://images.unsplash.com/photo-1596742578443-7682ef7b7c72?auto=format&fit=crop&q=80&w=1000',
      category: 'professional',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Offer Generation Engine',
      description: 'ML-powered offer recommendation system',
      problem: 'Manual offer creation process was inefficient and less targeted',
      solution: 'Developed ML classifier for personalized offer recommendations',
      techStack: ['Python', 'scikit-learn', 'Flask', 'PostgreSQL'],
      impact: 'Project success led to investment from SWISS firm',
      imageUrl: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=1000',
      category: 'professional',
      githubUrl: '#'
    },
    {
      title: 'River Water Temperature Estimation',
      description: 'ML-based water temperature prediction system',
      problem: 'Need for accurate river water temperature estimation in Krishna Basin',
      solution: 'Developed regression models using air temperature and discharge data',
      techStack: ['MATLAB', 'Python', 'Data Analysis', 'Machine Learning'],
      impact: 'Provided accurate temperature predictions for environmental monitoring',
      imageUrl: 'https://images.unsplash.com/photo-1589535255042-88725f0d4d1f?auto=format&fit=crop&q=80&w=1000',
      category: 'academic',
      githubUrl: '#'
    },
    {
      title: 'Watershed Delineation Model',
      description: 'GIS-based watershed analysis tool',
      problem: 'Complex watershed analysis requiring specialized tools',
      solution: 'Developed QGIS-based model for watershed delineation',
      techStack: ['QGIS', 'Python', 'Spatial Analysis'],
      impact: 'Streamlined watershed analysis process',
      imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1000',
      category: 'academic',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'professional', label: 'Professional' },
    { value: 'personal', label: 'Personal' },
    { value: 'academic', label: 'Academic' }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  activeCategory === category.value
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.title} className="card group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-blue-600">Problem:</h4>
                    <p className="text-gray-600 text-sm">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600">Solution:</h4>
                    <p className="text-gray-600 text-sm">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600">Impact:</h4>
                    <p className="text-gray-600 text-sm">{project.impact}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;