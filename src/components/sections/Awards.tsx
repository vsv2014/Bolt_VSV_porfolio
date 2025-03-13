import { FC } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';

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
        return <Trophy className="w-6 h-6 text-[#7928ca]" />;
      case 'star':
        return <Star className="w-6 h-6 text-[#ff0080]" />;
      case 'award':
        return <Award className="w-6 h-6 text-[#00d4ff]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#16213e] relative overflow-hidden" id="awards">
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7928ca]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Awards & Recognition
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Celebrating achievements in academics, research, and professional excellence
          </p>
        </motion.div>

        <div className="grid gap-8">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={recognition.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7928ca] via-[#ff0080] to-[#00d4ff] rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-0.5">
                      <div className="w-full h-full rounded-lg bg-[#1a0b2e] flex items-center justify-center">
                        {getIcon(recognition.icon)}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#00d4ff] transition-colors">
                          {recognition.title}
                        </h3>
                        <p className="text-[#7928ca] text-sm mt-1">
                          {recognition.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-3">
                      {recognition.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {recognition.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7928ca] to-[#ff0080] mt-2" />
                          <span className="text-gray-300">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <p className="text-3xl font-bold text-[#7928ca] mb-2">99.7%</p>
            <p className="text-sm text-gray-300">JEE Percentile</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <p className="text-3xl font-bold text-[#ff0080] mb-2">98.1%</p>
            <p className="text-sm text-gray-300">Higher Secondary</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <p className="text-3xl font-bold text-[#00d4ff] mb-2">9.3</p>
            <p className="text-sm text-gray-300">School GPA</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <p className="text-3xl font-bold text-[#7928ca] mb-2">120+</p>
            <p className="text-sm text-gray-300">Tickets Resolved</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
