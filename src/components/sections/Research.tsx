import { FC } from 'react';
import { ExternalLink, BookOpen, Users, FileText } from 'lucide-react';

const Research: FC = () => {
  const researchPapers = [
    {
      title: 'Effects of Dissolved Oxygen Saturation and Water Temperature using Air2Stream over Krishna River Basin, India',
      description: 'Research on water quality parameters and their effects on the Krishna River Basin ecosystem.',
      link: 'https://www.researchgate.net/publication/370104952_Effects_of_Dissolved_Oxygen_Saturation_and_Water_Temperature_using_Air2Stream_over_Krishna_River_Basin_India',
      highlights: [
        'Analysis of dissolved oxygen saturation patterns',
        'Implementation of Air2Stream model',
        'Impact assessment on river ecosystem',
        'Temperature correlation studies'
      ],
      technologies: ['MATLAB', 'Python', 'Data Analysis', 'GIS'],
      year: '2023'
    },
    {
      title: 'Sewage Treatment Plant Performance Using Machine Learning Applications, India',
      description: 'Investigated the performance analysis of 339 MLD Sewage Treatment Plant at Amberpet using Machine LearningAlgorithms.',
      link: 'https://rndshowcase.iiit.ac.in/tto/main1.php?centername=Lab%20for%20Spatial%20Informatics&shortform=LSI&title_tech=Performance%20Analysis%20of%20339%20MLD%20wastewater%20Treatment%20Plant%20Amberpet%20using%20Machine%20Learing%20models',
      highlights: [
        'Sewage Treatment',
        'Impact assessment on river ecosystem',
        'Temperature correlation studies in wastewaer'
      ],
      technologies: ['MATLAB', 'Python', 'Data Analysis', 'GIS'],
      year: '2022'
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Research Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Exploring the intersection of environmental science and technology through data-driven research
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Profile Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-semibold">Research Profile</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Active researcher in environmental science and water resource management, focusing on river basin analysis and water quality assessment.
              </p>
              <a
                href="https://www.researchgate.net/profile/Santhosh-Veerannapet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                View ResearchGate Profile
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <FileText className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-semibold">Research Impact</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">1+</div>
                <div className="text-sm text-gray-300">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-sm text-gray-300">Years of Research</div>
              </div>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="space-y-8">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {paper.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{paper.description}</p>
                  <div className="mb-6">
                    <h4 className="text-purple-400 font-semibold mb-2">Key Highlights</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {paper.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read Publication
                  </a>
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
