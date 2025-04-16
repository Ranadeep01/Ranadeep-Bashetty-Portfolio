
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="h-4 w-4" />, href: '#', label: 'LinkedIn' },
    { icon: <Mail className="h-4 w-4" />, href: 'mailto:ranadeepbashetty008@gmail.com', label: 'Email' },
    { icon: <Phone className="h-4 w-4" />, href: 'tel:+919121923255', label: 'Phone' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-portfolio-dark">Ranadeep<span className="text-portfolio-purple">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-purple transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Social Links - Desktop Only */}
        <div className="hidden md:flex items-center space-x-3">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              aria-label={link.label}
              className="p-2 text-gray-600 hover:text-portfolio-purple hover:bg-gray-100 rounded-full transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleMenu}
          className="md:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden border-t border-gray-100">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="px-8 py-3 text-gray-700 hover:bg-gray-50 hover:text-portfolio-purple transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.name}</span>
                </a>
              ))}
              <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="p-2 text-gray-600 hover:text-portfolio-purple hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
