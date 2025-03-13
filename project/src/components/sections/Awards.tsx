import { FC } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';
import { fadeInUp, staggerChildren } from '../../utils/animations';

interface Recognition {
  title: string;
  period: string;
  description: string;
  metrics: string[];
  icon: 'trophy' | 'star' | 'award';
}

const recognitions: Recognition[] = [
  {
    title: 'Outstanding Performance Award',
    period: 'July 2024 - September 2024',
    description: 'Recognized for exceptional performance in Web SDK development and customer support at Kore.ai',
    metrics: [
      'Led Web SDK issue resolution and code-level debugging',
      'Resolved 120+ customer tickets in 3 months',
      'Conducted adhoc working sessions with customers',
      'Provided deep technical analysis and solutions',
      'Collaborated with platform teams for comprehensive fixes'
    ],
    icon: 'trophy'
  },
  {
    title: 'Research Recognition',
    period: '2020 - 2021',
    description: 'Recognized for research contributions in environmental monitoring and building science at IIIT Hyderabad',
    metrics: [
      'Developed environmental monitoring systems',
      'Conducted water quality analysis research',
      'Published research findings in environmental science',
      'Integrated technology with civil engineering applications'
    ],
    icon: 'star'
  },
  {
    title: 'All India Academic Excellence Award',
    period: '2014 - 2016',
    description: 'Achieved outstanding academic performance in IIT-JEE Entrance Examination',
    metrics: [
      'Secured 99.7% percentile in India',
      'All India Rank 5625 among 14 lakhs+ students',
      'OBC rank 1122 in OBC quota',
      'Ranked among top performers in the India',
      'Excelled in Mathematics and Sciences',
      'Merit scholarship recipient',
      'Seats in India\'s premium Institutions like IIIT Hyderabad, NIT Warangal'
    ],
    icon: 'trophy'
  },
  {
    title: 'Academic Excellence Award',
    period: '2012 - 2014',
    description: 'Achieved outstanding academic performance in Higher Secondary Education at Sri Gayatri Jr College',
    metrics: [
      'Secured 98.1% in board examinations',
      'Ranked among top performers in the institution',
      'Excelled in Mathematics and Sciences',
      'Merit scholarship recipient'
    ],
    icon: 'trophy'
  },
  {
    title: 'Academic Achievement',
    period: '2014',
    description: 'Outstanding performance in Secondary School Education at Chaitanya High School',
    metrics: [
      'Achieved 9.3/10 GPA in APSSC board',
      'School topper in mathematics',
      'Active participation in academic competitions',
      'Recognition for extracurricular activities'
    ],
    icon: 'award'
  }
];

const Awards: FC = () => {
  const getIcon = (type: Recognition['icon']) => {
    switch (type) {
      case 'trophy':
        return <Trophy className="w-6 h-6 text-[#e2c4ff]" />;
      case 'star':
        return <Star className="w-6 h-6 text-[#ffb3d9]" />;
      case 'award':
        return <Award className="w-6 h-6 text-[#b3e6ff]" />;
    }
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="py-16 sm:py-20 bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#16213e] relative overflow-hidden"
      id="awards"
    >
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7928ca]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#00d4ff]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Awards & Recognition
          </h2>
          <p className="text-[#b3e6ff] max-w-2xl mx-auto">
            Celebrating achievements in academics, research, and professional excellence
          </p>
        </motion.div>

        <motion.div variants={staggerChildren} className="grid gap-8">
          {recognitions.map((recognition) => (
            <motion.div
              key={recognition.title}
              variants={fadeInUp}
              className="group"
            >
              <div className="glass-card p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7928ca] via-[#ff0080] to-[#00d4ff] p-0.5">
                      <div className="w-full h-full rounded-lg bg-[#1a0b2e] flex items-center justify-center">
                        {getIcon(recognition.icon)}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-[#e2c4ff] group-hover:text-[#ffb3d9] transition-colors">
                          {recognition.title}
                        </h3>
                        <p className="text-[#b3e6ff] text-sm mt-1">
                          {recognition.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#b3e6ff] mt-3">
                      {recognition.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {recognition.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7928ca] via-[#ff0080] to-[#00d4ff] mt-2" />
                          <span className="text-[#b3e6ff] group-hover:text-[#e2c4ff] transition-colors">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerChildren}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <motion.div variants={fadeInUp} className="glass-card p-6 text-center hover:transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-3xl font-bold text-[#e2c4ff] mb-2">99.7%</p>
            <p className="text-sm text-[#b3e6ff]">JEE Percentile</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="glass-card p-6 text-center hover:transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-3xl font-bold text-[#ffb3d9] mb-2">98.1%</p>
            <p className="text-sm text-[#b3e6ff]">Higher Secondary</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="glass-card p-6 text-center hover:transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-3xl font-bold text-[#b3e6ff] mb-2">9.3</p>
            <p className="text-sm text-[#b3e6ff]">School GPA</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="glass-card p-6 text-center hover:transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-3xl font-bold text-[#e2c4ff] mb-2">120+</p>
            <p className="text-sm text-[#b3e6ff]">Tickets Resolved</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Awards;
