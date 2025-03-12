import { FC } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  highlights?: string[];
}

const experiences: Experience[] = [
  {
    company: 'Kore.ai Software India Pvt Ltd',
    role: 'Associate Software Engineer',
    period: 'July 2022 - Present',
    location: 'India',
    description: [
      'Developed and modified 25+ components, optimizing application performance',
      'Built user interface components using Angular for enhanced functionality',
      'Implemented Jenkins CI/CD pipeline for automated testing and reporting',
      'Resolved 350+ critical and medium bugs ensuring system reliability',
      'Provided continuous client support with 800+ additions to the project'
    ],
    skills: ['Angular', 'Jenkins', 'CI/CD', 'TypeScript', 'Component Development'],
    highlights: [
      'Reduced application load time by 40%',
      'Achieved 98% test coverage',
      'Improved user satisfaction by 35%'
    ]
  },
  {
    company: 'Sri Satya Sai Vidyalayam',
    role: 'Web Developer',
    period: 'July 2020 - September 2020',
    location: 'Mahabubnagar',
    description: [
      'Developed school website for conducting online classes during Covid-19',
      'Implemented responsive design using HTML5 and CSS3',
      'Deployed and maintained the website for seamless online learning'
    ],
    skills: ['PHP', 'HTML5', 'CSS3', 'Web Development', 'Deployment'],
    highlights: [
      'Enabled online learning for 500+ students',
      'Achieved 99.9% uptime',
      'Reduced administrative workload by 60%'
    ]
  },
  {
    company: 'IIIT Hyderabad',
    role: 'Developer',
    period: 'December 2017',
    location: 'Hyderabad',
    description: [
      'Built virtual lab for MergeSort Data Structure visualization',
      'Implemented interactive learning features using JavaScript',
      'Successfully deployed the application for student use'
    ],
    skills: ['JavaScript', 'Python', 'Flask', 'Data Structures', 'Educational Technology'],
    highlights: [
      'Improved student understanding by 45%',
      'Used by 1000+ students',
      'Featured in educational tech showcase'
    ]
  }
];

const Experience: FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through my professional career, showcasing my growth and achievements
            in software development and technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white mr-4">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {exp.highlights && (
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">Key Achievements</h4>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start">
                                <ChevronRight className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-blue-800">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
