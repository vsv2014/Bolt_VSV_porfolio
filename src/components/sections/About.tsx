import { FC } from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';

const About: FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#1a0b2e] via-[#2b1055] to-[#16213e] relative overflow-hidden">
      {/* Glass Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#7928ca]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 sm:mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#7928ca]/20 via-[#ff0080]/20 to-[#00d4ff]/20 rounded-xl text-[#e2c4ff] group-hover:from-[#7928ca]/30 group-hover:via-[#ff0080]/30 group-hover:to-[#00d4ff]/30 transition-colors backdrop-blur-sm border border-white/10">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#e2c4ff] transition-colors">Developer</h3>
            </div>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              Full Stack Developer with expertise in Angular, React, and Node.js. 
              Passionate about creating efficient and scalable solutions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#7928ca]/20 via-[#ff0080]/20 to-[#00d4ff]/20 rounded-xl text-[#e2c4ff] group-hover:from-[#7928ca]/30 group-hover:via-[#ff0080]/30 group-hover:to-[#00d4ff]/30 transition-colors backdrop-blur-sm border border-white/10">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#e2c4ff] transition-colors">Professional</h3>
            </div>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              Software Engineer at Kore.ai, focusing on AI-powered solutions 
              and enterprise applications.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#7928ca]/20 via-[#ff0080]/20 to-[#00d4ff]/20 rounded-xl text-[#e2c4ff] group-hover:from-[#7928ca]/30 group-hover:via-[#ff0080]/30 group-hover:to-[#00d4ff]/30 transition-colors backdrop-blur-sm border border-white/10">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#e2c4ff] transition-colors">Researcher</h3>
            </div>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              Research experience in environmental data analysis and machine learning, 
              with focus on water resource management.
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20 group hover:bg-white/20 transition-all duration-300">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
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