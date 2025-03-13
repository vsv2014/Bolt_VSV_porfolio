import { FC } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren, slideIn } from '../../utils/animations';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  gpa: string;
}

const educationData: Education[] = [
  {
    degree: 'Dual Degree, B.Tech in Civil Engineering and MS in Building Science',
    institution: 'International Institute of Information Technology, Hyderabad, India',
    period: '2016 - 2021',
    gpa: 'CGPA - 7.3/10'
  },
  {
    degree: 'Higher Secondary School',
    institution: 'Sri Gayatri Jr college, Hyderabad',
    period: '2014 - 2016',
    description: 'Telangana State Board of Intermediate Education',
    gpa: 'Percentage - 98.1'
  },
  {
    degree: 'Secondary School of Education',
    institution: 'Chaitanya High School, Mahabubnagar, India',
    period: '2014',
    description: 'APSSC',
    gpa: 'GPA - 9.3/10'
  }
];

const Education: FC = () => {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-gradient-to-br from-gray-50 to-white" 
      id="education"
    >
      <motion.div 
        variants={staggerChildren}
        className="container mx-auto px-4 sm:px-6"
      >
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic journey focused on Engineering and Technology
          </p>
        </motion.div>

        <motion.div 
          variants={staggerChildren}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={fadeInUp}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== educationData.length - 1 && (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"
                />
              )}

              {/* Content Card */}
              <motion.div 
                variants={slideIn('right')}
                whileHover={{ x: 10 }}
                className="flex items-start gap-6"
              >
                {/* Timeline Point */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center flex-shrink-0"
                >
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </motion.div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium mt-1">{edu.institution}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{edu.gpa}</span>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="mt-3 text-gray-600">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Education;
