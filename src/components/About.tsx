
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Database, Layout, Server, 
  Wrench, CheckCircle, GitBranch, Terminal, 
  UserCircle, BrainCircuit, Award
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-6 w-6 text-portfolio-purple" />,
      items: ["Angular", "ReactJS", "Redux", "React Native", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6 text-portfolio-purple" />,
      items: ["Spring Boot", "REST APIs", "Microservices", "NodeJS"]
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6 text-portfolio-purple" />,
      items: ["SQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools",
      icon: <Wrench className="h-6 w-6 text-portfolio-purple" />,
      items: ["Git", "GitHub", "POSTMAN", "VS Code", "Eclipse"]
    },
    {
      category: "Programming",
      icon: <Code className="h-6 w-6 text-portfolio-purple" />,
      items: ["Java", "JavaScript", "TypeScript", "Python"]
    }
  ];

  const softSkills = [
    { skill: "Problem-Solving", icon: <BrainCircuit className="h-5 w-5 text-green-500" /> },
    { skill: "Team Player", icon: <UserCircle className="h-5 w-5 text-green-500" /> },
    { skill: "Analytical Thinking", icon: <Award className="h-5 w-5 text-green-500" /> },
    { skill: "Troubleshooting", icon: <Wrench className="h-5 w-5 text-green-500" /> },
    { skill: "Strong Communication", icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
    { skill: "Attention to Detail", icon: <CheckCircle className="h-5 w-5 text-green-500" /> }
  ];

  return (
    <section id="about" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-purple">Who I Am</h3>
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
                I'm a <span className="font-medium text-portfolio-purple">Full-Stack Developer</span> based in Hyderabad, with expertise in building 
                modern web and mobile applications. I specialize in Angular and React for 
                frontend development, and Spring Boot for backend services.
              </p>
              <p className="leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Currently working at <span className="font-medium text-portfolio-purple">Endeavour Technologies</span>, I'm passionate about creating 
                efficient and scalable solutions that solve real-world problems. My experience 
                spans healthcare management platforms and laboratory information systems.
              </p>
              <p className="leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
                I'm constantly learning and staying updated with the latest technologies and 
                best practices in software development, with a focus on creating intuitive user 
                experiences and robust backend architectures.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-portfolio-purple">Soft Skills</h3>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 transition-transform hover:translate-x-1">
                    {skill.icon}
                    <span className="text-gray-700">{skill.skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-portfolio-purple">Technical Skills</h3>
          <TooltipProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="card-hover border border-gray-100 overflow-hidden bg-white">
                  <div className="h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple"></div>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-gray-50">
                        {skillGroup.icon}
                      </div>
                      <h4 className="font-semibold text-lg">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, idx) => (
                        <Tooltip key={idx}>
                          <TooltipTrigger asChild>
                            <span className="skill-tag hover:bg-portfolio-purple/10 cursor-pointer transition-colors">
                              {item}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Experienced in {item}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default About;
