
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = {
    degree: "B.Tech - Computer Science and Engineering",
    institution: "MLR Institute of Technology, Hyderabad",
    period: "November 2020 – April 2024",
    location: "Hyderabad, Telangana",
    cgpa: "7.5"
  };

  const certifications = [
    {
      title: "Data Structures and Algorithms",
      issuer: "Smart Interviews"
    },
    {
      title: "Python",
      issuer: "HackerRank"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksForGeeks"
    },
    {
      title: "Spring Boot",
      issuer: "Wipro"
    }
  ];

  return (
    <section id="education" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-portfolio-purple/10 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-gray-500">Academic Background</p>
                </div>
              </div>
              
              <div className="border-l-2 border-portfolio-purple pl-4 ml-4 space-y-3">
                <div>
                  <h4 className="text-lg font-semibold">{education.degree}</h4>
                  <p className="text-portfolio-purple">{education.institution}</p>
                  <div className="flex items-center text-gray-500 mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{education.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{education.location}</p>
                  <p className="mt-2">
                    <span className="font-medium">CGPA:</span> {education.cgpa}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Certifications */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-portfolio-purple/10 rounded-full mr-4">
                  <Award className="h-6 w-6 text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Certifications</h3>
                  <p className="text-gray-500">Professional Qualifications</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-medium">{cert.title}</h4>
                    <Badge variant="outline" className="mt-2">{cert.issuer}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
