
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <h2 className="text-lg md:text-xl font-medium mb-2 text-portfolio-purple animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Ranadeep Bashetty
          </h1>
          <div className="h-1 w-20 bg-portfolio-purple mx-auto mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}></div>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gradient animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Crafting modern web and mobile experiences with Angular, React, and Spring Boot.
            Passionate about creating innovative solutions that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-8 py-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" className="px-8 py-6 border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10 transition-all hover:-translate-y-1">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            {['Angular', 'React', 'Spring Boot', 'TypeScript', 'Java'].map((tech, index) => (
              <span key={index} className="px-3 py-1 rounded-full bg-white shadow-sm text-sm font-medium text-gray-700">
                {tech}
              </span>
            ))}
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
