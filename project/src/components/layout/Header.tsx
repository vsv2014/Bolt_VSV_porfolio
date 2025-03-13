import { FC, useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/80 backdrop-blur-md shadow-sm pt-safe">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            VSV
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="nav-link text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#research" className="nav-link text-gray-600 hover:text-blue-600 transition-colors">Research</a>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/vsv2014"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/santhoshvishal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 space-y-4`}>
          <a href="#about" className="block nav-link text-gray-600 hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="block nav-link text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#research" className="block nav-link text-gray-600 hover:text-blue-600 transition-colors">Research</a>
          <div className="flex items-center space-x-4 pt-4">
            <a
              href="https://github.com/vsv2014"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/santhoshvishal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
