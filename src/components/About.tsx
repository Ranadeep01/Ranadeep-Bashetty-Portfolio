
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Database, Layout, Server, 
  Wrench, CheckCircle, GitBranch, Terminal
} from 'lucide-react';

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
    "Problem-Solving", "Team Player", "Analytical Thinking", 
    "Troubleshooting", "Strong Communication", "Attention to Detail"
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm a Full-Stack Developer based in Hyderabad, with expertise in building 
              modern web and mobile applications. I specialize in Angular and React for 
              frontend development, and Spring Boot for backend services.
            </p>
            <p className="text-gray-700 mb-6">
              Currently working at Endeavour Technologies, I'm passionate about creating 
              efficient and scalable solutions that solve real-world problems. My experience 
              spans healthcare management platforms and laboratory information systems.
            </p>
            <p className="text-gray-700">
              I'm constantly learning and staying updated with the latest technologies and 
              best practices in software development, with a focus on creating intuitive user 
              experiences and robust backend architectures.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {skillGroup.icon}
                    <h4 className="font-semibold text-lg">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, idx) => (
                      <span key={idx} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
