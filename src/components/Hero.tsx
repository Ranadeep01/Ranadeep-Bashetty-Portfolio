
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-gray-100 pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Ranadeep Bashetty
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gradient">
            Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Building modern web and mobile applications with Angular, React, and Spring Boot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-8 py-6">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" className="px-8 py-6">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-portfolio-purple transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
