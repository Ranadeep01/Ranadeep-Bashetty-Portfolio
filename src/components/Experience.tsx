
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Endeavour Technologies",
      period: "March 2024 - Present",
      description: [
        "Developed and maintained MedWorldExpo, a healthcare management platform, using Angular for frontend and Spring Boot for backend, ensuring seamless data flow and robust functionality.",
        "Currently working on LIMS (Laboratory Information Management System), utilizing ReactJS for web applications, React Native for mobile applications, and Spring Boot for backend development.",
        "Designed and implemented RESTful APIs to facilitate communication between frontend and backend systems, improving data retrieval efficiency by 30%.",
        "Utilized Git for version control, enabling efficient collaboration and code repository management across teams.",
        "Optimized application performance by 25% through code refactoring and database indexing, ensuring scalability and maintainability.",
        "Followed Agile methodologies and SDLC best practices to deliver high-quality software solutions within deadlines."
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover border-l-4 border-l-portfolio-purple">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="text-lg text-portfolio-purple font-medium">{exp.company}</div>
                  </div>
                  <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mt-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex">
                      <span className="mr-2 mt-1 text-portfolio-purple">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
