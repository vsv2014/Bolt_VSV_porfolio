import { FC } from 'react';
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
    description: 'Achieved outstanding academic performance in IIT-JEE Enternace Examination',
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
        return <Trophy className="w-6 h-6" />;
      case 'star':
        return <Star className="w-6 h-6" />;
      case 'award':
        return <Award className="w-6 h-6" />;
    }
  };

  return (
    <section id="awards" className="py-16 sm:py-20 bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#16213e] relative overflow-hidden">
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7928ca]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <div className="w-full lg:flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Awards & Recognition</h2>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl">
              Celebrating achievements in academics, research, and environmental science.
            </p>
            
            <div className="grid gap-4 sm:gap-6">
              {recognitions.map((recognition, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-3 bg-gradient-to-br from-[#7928ca]/20 via-[#ff0080]/20 to-[#00d4ff]/20 text-[#e2c4ff] rounded-lg w-fit group-hover:from-[#7928ca]/30 group-hover:via-[#ff0080]/30 group-hover:to-[#00d4ff]/30 transition-colors backdrop-blur-sm border border-white/10">
                      {getIcon(recognition.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#e2c4ff] transition-colors">{recognition.title}</h3>
                      <p className="text-[#b3e6ff] font-medium text-sm mt-1">{recognition.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors">{recognition.description}</p>
                  
                  <ul className="space-y-2 sm:space-y-3">
                    {recognition.metrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-300 group-hover:text-gray-200 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#7928ca] via-[#ff0080] to-[#00d4ff] mt-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base leading-relaxed">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <div className="relative">
              {/* Stats Card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#7928ca] via-[#ff0080] to-[#00d4ff] rounded-3xl opacity-20 blur-lg animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20">
                <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
                  <Trophy className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-[#e2c4ff]" />
                  
                  <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full">
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e2c4ff]">98.1%</p>
                      <p className="text-gray-300 text-xs sm:text-sm">Higher Secondary Score</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b3e6ff]">9.3</p>
                      <p className="text-gray-300 text-xs sm:text-sm">Secondary School GPA</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffb3d9]">7.3</p>
                      <p className="text-gray-300 text-xs sm:text-sm">B.Tech CGPA</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e2c4ff]">3+</p>
                      <p className="text-gray-300 text-xs sm:text-sm">Research Publications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
