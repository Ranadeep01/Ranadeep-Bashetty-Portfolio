
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 flex items-center justify-center">
          <span>© {currentYear} Ranadeep Bashetty. All rights reserved.</span>
          <span className="mx-2">|</span>
          <span className="flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> in Hyderabad
          </span>
        </p>
        
        <div className="mt-4">
          <a 
            href="#home"
            className="text-portfolio-purple hover:text-portfolio-blue transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
