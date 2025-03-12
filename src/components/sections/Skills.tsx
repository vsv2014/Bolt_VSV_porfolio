import { FC, useState } from 'react';
import { Code2, Database, Layout, Cpu, Server, Map, Wrench, GraduationCap } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: string[];
  description: string;
}

const Skills: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      icon: <Layout className="w-6 h-6" />,
      skills: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Material UI', 'Tailwind CSS'],
      description: 'Building responsive and intuitive user interfaces with modern frameworks and tools.'
    },
    {
      name: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Python', 'PHP', 'Flask', 'Laravel', 'Express.js', 'RESTful APIs'],
      description: 'Developing robust server-side applications and APIs with scalable architectures.'
    },
    {
      name: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['C', 'C++', 'Python', 'Java', 'Ruby', 'Assembly (MIPS)', 'Shell scripting'],
      description: 'Proficient in multiple programming paradigms and system-level development.'
    },
    {
      name: 'Database & Infrastructure',
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Jenkins', 'Docker', 'AWS', 'Linux'],
      description: 'Managing and optimizing databases, deployment pipelines, and cloud infrastructure.'
    },
    {
      name: 'AI & Data Analysis',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['Machine Learning', 'MATLAB', 'Data Analysis', 'scikit-learn', 'Statistical Analysis'],
      description: 'Implementing machine learning models and performing complex data analysis.'
    },
    {
      name: 'GIS & Spatial Analysis',
      icon: <Map className="w-6 h-6" />,
      skills: ['QGIS', 'Spatial Analysis', 'Watershed Modeling', 'Environmental Monitoring'],
      description: 'Analyzing and visualizing geographical data for environmental applications.'
    },
    {
      name: 'Development Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Git', 'VS Code', 'Sublime', 'Jenkins', 'WebSocket', 'Chrome DevTools'],
      description: 'Utilizing modern development tools and practices for efficient workflows.'
    },
    {
      name: 'Research & Analysis',
      icon: <GraduationCap className="w-6 h-6" />,
      skills: ['Research Methodology', 'Data Collection', 'Statistical Analysis', 'Technical Writing'],
      description: 'Conducting research and analyzing data to derive meaningful insights.'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise,
            developed through professional experience and continuous learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] ${
                selectedCategory === category.name ? 'ring-2 ring-blue-500' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedCategory(
                selectedCategory === category.name ? null : category.name
              )}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
              </div>
              
              {selectedCategory === category.name ? (
                <div className="opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {category.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {category.skills.length > 3 && (
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      +{category.skills.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;