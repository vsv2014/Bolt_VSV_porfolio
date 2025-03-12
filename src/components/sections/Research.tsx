import { FC } from 'react';
import { GraduationCap, Clock, Building2, ChevronRight, ExternalLink } from 'lucide-react';

interface Research {
  title: string;
  period: string;
  institution: string;
  description: string;
  highlights: string[];
  technologies: string[];
  publications?: {
    title: string;
    url: string;
  }[];
}

const researchProjects: Research[] = [
  {
    title: 'River Water Temperature Estimation using Regression',
    period: 'January 2021 - January 2024',
    institution: 'Lab for Spatial Informatics, IIIT-H',
    description: 'Conducted comprehensive analysis of River Water Temperature estimation in Krishna Basin using advanced regression techniques.',
    highlights: [
      'Developed regression models correlating air temperature and discharge data',
      'Implemented data preprocessing and feature engineering pipelines',
      'Created visualization tools for temperature pattern analysis',
      'Published findings contributing to environmental monitoring systems'
    ],
    technologies: ['MATLAB', 'Python', 'Statistical Analysis', 'Data Visualization', 'Regression Models'],
    publications: [
      {
        title: 'Temperature Estimation in Krishna Basin: A Regression Analysis',
        url: '#'
      }
    ]
  },
  {
    title: 'Sewage Treatment Plant Performance Analysis',
    period: 'May 2020 - January 2024',
    institution: 'Lab for Spatial Informatics, IIIT-H',
    description: 'Analyzed performance of 339 MLD Sewage Treatment Plant at Amberpet using Machine Learning Algorithms.',
    highlights: [
      'Implemented ML algorithms for performance prediction',
      'Developed data collection and processing pipelines',
      'Created performance monitoring dashboards',
      'Identified optimization opportunities through data analysis'
    ],
    technologies: ['Machine Learning', 'Python', 'Data Analysis', 'Performance Optimization'],
    publications: [
      {
        title: 'Machine Learning Approaches in Sewage Treatment Plant Analysis',
        url: '#'
      }
    ]
  },
  {
    title: 'Watershed Delineation Model Development',
    period: 'December 2018 - January 2024',
    institution: 'Lab for Spatial Informatics, IIIT-H',
    description: 'Collaborated with Dr. Rehana Shaik to develop an advanced model for Watershed Delineation.',
    highlights: [
      'Created QGIS-based watershed analysis tools',
      'Implemented automated delineation algorithms',
      'Developed spatial analysis methodologies',
      'Integrated multiple data sources for comprehensive analysis'
    ],
    technologies: ['QGIS', 'Python', 'Spatial Analysis', 'GIS', 'Hydrological Modeling'],
    publications: [
      {
        title: 'Advanced Watershed Delineation: A Comprehensive Approach',
        url: '#'
      }
    ]
  }
];

const Research: FC = () => {
  return (
    <section id="research" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring innovative solutions in environmental monitoring, data analysis,
            and spatial informatics through academic research.
          </p>
        </div>

        <div className="space-y-12">
          {researchProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Building2 className="w-4 h-4 text-blue-600" />
                      </div>
                      {project.institution}
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Clock className="w-4 h-4 text-blue-600" />
                      </div>
                      {project.period}
                    </div>
                  </div>

                  {project.publications && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Publications</h4>
                      {project.publications.map((pub, idx) => (
                        <a
                          key={idx}
                          href={pub.url}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">{pub.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="lg:w-2/3">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
