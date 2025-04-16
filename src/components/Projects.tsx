
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dynamic Notes",
      description: "A note-taking web application built with ReactJS that allows users to create, edit, and organize notes with rich media content.",
      technologies: ["ReactJS", "Node.JS", "JavaScript", "HTML", "CSS"],
      points: [
        "Developed new user-facing features with the latest UI frameworks like React.JS, Node.JS",
        "Improved user experience through efficient search, media display, searching and sorting capabilities",
        "Exposure to debugging application programs along with development and debugging tools",
        "Strong testing inclination to ensure programs are comprehensive and well tested for all use cases"
      ],
      period: "October 2023 - November 2023",
      image: "https://images.unsplash.com/photo-1648822265268-2efdb08e0b40?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "Form Data Integration",
      description: "A MERN stack application for user authentication and form data management with CRUD operations.",
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      points: [
        "Implemented user authentication for secure login and signup using MERN stack",
        "Merged components in react for mounting, updating and unmounting the data from the user",
        "Build ReactJs frontend components that are well-versed with React ecosystems like React router, Hooks, CRA, etc",
        "Performed CRUD operations, validation, verification testing and performance analysis",
        "Acquired MongoDB skills for effective database management and fixed application security"
      ],
      period: "January 2024 - March 2024",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                
                <ul className="space-y-2 mt-4 mb-6">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex text-sm">
                      <span className="mr-2 text-portfolio-purple">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                <Button asChild variant="outline" size="sm" className="flex gap-1">
                  <a href={project.github}>
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-portfolio-purple hover:bg-portfolio-purple/90 flex gap-1">
                  <a href={project.demo}>
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
