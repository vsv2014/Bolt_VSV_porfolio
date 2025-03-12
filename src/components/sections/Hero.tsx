import { FC } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Veerannapet Santhosh Vishal
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              A passionate Software Engineer with expertise in Full Stack Development, 
              Machine Learning, and Environmental Data Analysis. Currently focused on 
              building innovative solutions at Kore.ai.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/vsv2014"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/santhosh-vishal-veerannapet-14a54313a/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="mailto:contact@youremail.com"
                className="btn btn-secondary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float">
                <img
                  src="/profile.jpg"
                  alt="Veerannapet Santhosh Vishal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;