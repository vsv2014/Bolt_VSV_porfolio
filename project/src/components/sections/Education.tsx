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
  // Sort education by date (most recent first)
  const sortedEducation = [...educationData].sort((a, b) => {
    const dateA = new Date(a.period.split(' - ')[1] || a.period);
    const dateB = new Date(b.period.split(' - ')[1] || b.period);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#16213e] relative overflow-hidden">
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7928ca]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Education</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                A strong foundation in engineering and environmental science, complemented by continuous learning
              </p>
            </motion.div>
          </div>

          {/* Education Timeline */}
          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute left-0 sm:left-1/2 top-0 h-full w-px bg-gradient-to-b from-[#7928ca]/50 via-[#ff0080]/50 to-[#00d4ff]/50 transform -translate-x-1/2" />

            {sortedEducation.map((education, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? 'sm:pr-1/2' : 'sm:pl-1/2 sm:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-[#7928ca] via-[#ff0080] to-[#00d4ff] border-4 border-[#1a0b2e]/50 shadow-lg transform -translate-x-1/2" />

                {/* Education Card */}
                <div className="sm:w-[calc(100%-2rem)] bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-white/20 border border-white/20">
                  <div className="p-4 sm:p-6 md:p-8">
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4 sm:mb-6">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl text-[#e2c4ff] w-fit group-hover:bg-white/20 transition-colors border border-white/10">
                        <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#e2c4ff] transition-colors">{education.degree}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 sm:mt-2">
                          <span className="text-[#e2c4ff] font-medium group-hover:text-[#ffb3d9] transition-colors">{education.institution}</span>
                          <span className="hidden sm:block text-gray-400">•</span>
                          <div className="flex items-center gap-1 text-sm text-gray-300">
                            <Calendar className="w-4 h-4" />
                            <span>{education.period}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4 text-gray-300" />
                          <span className="text-sm text-gray-300">{education.location}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Award className="w-4 h-4 text-purple-300" />
                          <span className="text-sm font-medium text-purple-300">{education.score}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm font-semibold text-[#e2c4ff] mb-2 group-hover:text-[#e2c4ff] transition-colors">Key Achievements</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {education.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#7928ca] via-[#ff0080] to-[#00d4ff] mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Courses */}
                    <div>
                      <h4 className="text-sm font-semibold text-[#e2c4ff] mb-2 group-hover:text-[#e2c4ff] transition-colors">Key Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {education.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white/10 backdrop-blur-sm text-[#e2c4ff] rounded text-xs font-medium border border-white/10 group-hover:bg-white/20 group-hover:text-[#ffb3d9] transition-colors"
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
