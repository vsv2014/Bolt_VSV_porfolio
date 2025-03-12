import { FC } from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';

const About: FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Developer</h3>
            </div>
            <p className="text-gray-600">
              Full Stack Developer with expertise in Angular, React, and Node.js. 
              Passionate about creating efficient and scalable solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Professional</h3>
            </div>
            <p className="text-gray-600">
              Software Engineer at Kore.ai, focusing on AI-powered solutions 
              and enterprise applications.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Researcher</h3>
            </div>
            <p className="text-gray-600">
              Research experience in environmental data analysis and machine learning, 
              with focus on water resource management.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
          <p className="text-gray-700 text-lg leading-relaxed">
            I am a passionate Software Engineer with a unique blend of industry experience 
            and research background. At Kore.ai, I work on developing AI-powered solutions 
            that enhance customer experiences. My research work focuses on environmental 
            data analysis and machine learning applications in water resource management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;