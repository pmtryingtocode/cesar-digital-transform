
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cesar-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              César<span className="text-cesar-blue">Soares</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Project Manager & Digital Transformation Specialist
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/césar-soares"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-cesar-blue transition-colors p-3 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} César Soares. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
