import { FC } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { fadeInUp, staggerChildren } from '../../utils/animations';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  courses: string[];
}

const educationData: Education[] = [
  {
    degree: 'Dual Degree - B.Tech in Civil Engineering & MS in Building Science',
    institution: 'International Institute of Information Technology, Hyderabad',
    location: 'Hyderabad, India',
    period: '2016 - 2021',
    description: 'Dual Degree program combining Civil Engineering fundamentals with advanced Building Science concepts, focusing on sustainable development and environmental monitoring.',
    achievements: [
      'Research on environmental monitoring systems',
      'Development of water quality analysis tools',
      'Published papers in environmental science',
      'CGPA - 7.3/10'
    ],
    courses: [
      'Environmental Engineering',
      'Building Science',
      'Structural Engineering',
      'Water Resources',
      'Environmental Monitoring',
      'Sustainable Development'
    ]
  },
  {
    degree: 'Higher Secondary School',
    institution: 'Sri Gayatri Jr College',
    location: 'Hyderabad, India',
    period: '2014 - 2016',
    description: 'Telangana State Board of Intermediate Education with focus on Mathematics, Physics, and Chemistry.',
    achievements: [
      'Secured 98.1% in board examinations',
      'Active participation in science exhibitions',
      'Merit scholarship recipient'
    ],
    courses: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'English',
      'Second Language'
    ]
  },
  {
    degree: 'Secondary School Education',
    institution: 'Chaitanya High School',
    location: 'Mahabubnagar, India',
    period: '2014',
    description: 'APSSC board with strong foundation in sciences and mathematics.',
    achievements: [
      'Achieved 9.3/10 GPA',
      'School topper in mathematics',
      'Active in extracurricular activities'
    ],
    courses: [
      'Mathematics',
      'Science',
      'Social Studies',
      'English',
      'Second Language'
    ]
  }
];

const Education: FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic journey focused on Civil Engineering and Building Science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group"
            >
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-[100px] -z-1"></div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mb-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{edu.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
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
    </section>
  );
};

export default Education;
