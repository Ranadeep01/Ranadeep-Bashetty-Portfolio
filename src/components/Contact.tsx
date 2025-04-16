
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91-9121923255",
      link: "tel:+919121923255"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "ranadeepbashetty008@gmail.com",
      link: "mailto:ranadeepbashetty008@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Hyderabad, Telangana",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      link: "#"
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      link: "#"
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      title: "LeetCode",
      link: "#"
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      title: "GeeksForGeeks",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-portfolio-purple/10 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-600 hover:text-portfolio-purple transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-6">Social Profiles</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="p-3 bg-gray-100 rounded-full hover:bg-portfolio-purple hover:text-white transition-all"
                  aria-label={social.title}
                  title={social.title}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
