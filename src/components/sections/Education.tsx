import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  achievements: string[];
  courses: string[];
}

const educationData: Education[] = [
  {
    degree: 'Dual Degree - B.Tech in Civil Engineering & MS in Building Science',
    institution: 'IIIT Hyderabad',
    period: '2016 - 2021',
    location: 'Hyderabad, India',
    score: 'CGPA: 7.3/10',
    achievements: [
      'Focus on environmental monitoring and sustainable development',
      'Research in water quality analysis and treatment optimization',
      'Published research findings in environmental science journals',
      'Developed ML models for environmental data analysis'
    ],
    courses: [
      'Environmental Engineering',
      'Machine Learning',
      'Data Analysis',
      'GIS and Remote Sensing',
      'Water Resources Management'
    ]
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Sri Gayatri Jr College',
    period: '2014 - 2016',
    location: 'Hyderabad, India',
    score: 'Score: 98.1%',
    achievements: [
      'Telangana State Board',
      'Ranked among top performers in mathematics',
      'Active participant in science exhibitions',
      'Merit scholarship recipient'
    ],
    courses: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science'
    ]
  },
  {
    degree: 'Secondary School Education',
    institution: 'Chaitanya High School',
    period: '2014',
    location: 'Hyderabad, India',
    score: 'GPA: 9.3/10',
    achievements: [
      'APSSC board',
      'School topper in mathematics',
      'Science club coordinator',
      'Perfect attendance award'
    ],
    courses: [
      'Mathematics',
      'Science',
      'English',
      'Computer Applications'
    ]
  }
];

const Education: FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Education</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                A strong foundation in engineering and environmental science, complemented by continuous learning
              </p>
            </motion.div>
          </div>

          {/* Education Timeline */}
          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-1/2 top-0 h-full w-px bg-blue-200 transform -translate-x-1/2" />

            {educationData.map((education, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? 'sm:pr-1/2' : 'sm:pl-1/2 sm:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md transform -translate-x-1/2" />

                {/* Education Card */}
                <div className="sm:w-[calc(100%-2rem)] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-4 sm:p-6 md:p-8">
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4 sm:mb-6">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600 w-fit">
                        <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{education.degree}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 sm:mt-2">
                          <span className="text-blue-600 font-medium">{education.institution}</span>
                          <span className="hidden sm:block text-gray-400">•</span>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{education.period}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{education.location}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Award className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-600">{education.score}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {education.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Courses */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {education.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Education;
