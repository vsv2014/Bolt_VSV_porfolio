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
    title: 'Academic Excellence Award',
    period: '2014 - 2016',
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
    <section id="awards" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div className="w-full lg:flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 mb-8 sm:mb-12 max-w-2xl">
              Celebrating achievements in academics, research, and environmental science.
            </p>
            
            <div className="grid gap-6 sm:gap-8">
              {recognitions.map((recognition, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit group-hover:bg-blue-100 transition-colors">
                      {getIcon(recognition.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{recognition.title}</h3>
                      <p className="text-blue-600 font-medium text-sm mt-1">{recognition.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{recognition.description}</p>
                  
                  <ul className="space-y-3">
                    {recognition.metrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0 group-hover:bg-blue-600 transition-colors" />
                        <span className="text-sm sm:text-base leading-relaxed">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 sticky top-24">
            <div className="relative">
              {/* Stats Card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-lg animate-pulse"></div>
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="flex flex-col items-center text-center space-y-8">
                  <Trophy className="w-16 sm:w-24 h-16 sm:h-24 text-blue-600" />
                  
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 w-full">
                    <div className="space-y-2">
                      <p className="text-3xl sm:text-4xl font-bold text-gray-900">98.1%</p>
                      <p className="text-gray-600 text-sm sm:text-base">Higher Secondary Score</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-3xl sm:text-4xl font-bold text-gray-900">9.3</p>
                      <p className="text-gray-600 text-sm sm:text-base">Secondary School GPA</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-3xl sm:text-4xl font-bold text-gray-900">7.3</p>
                      <p className="text-gray-600 text-sm sm:text-base">B.Tech CGPA</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-3xl sm:text-4xl font-bold text-gray-900">3+</p>
                      <p className="text-gray-600 text-sm sm:text-base">Research Publications</p>
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
