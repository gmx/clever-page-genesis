
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const projects = [
    { name: "E-commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Fitness Tracking App", category: "Mobile App", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Banking Dashboard", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Real Estate Manager", category: "Web Development", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Healthcare Portal", category: "Web Development", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Inventory System", category: "Enterprise Software", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Social Media Analytics", category: "Data Analysis", image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Restaurant Booking App", category: "Mobile App", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { name: "Educational Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  ];
  
  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };
  
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-company-orange/5 text-company-orange border-company-orange/20 mb-4 px-4 py-1 text-sm rounded-full">OUR WORK</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful projects across various industries. 
            Each project represents our commitment to excellence and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={index} 
              className="rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 w-full">
                    <Badge className="bg-company-blue text-white border-0 mb-2">{project.category}</Badge>
                    <h3 className="font-bold text-xl text-white">{project.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl mb-1">{project.name}</h3>
                <p className="text-gray-500 mb-4">{project.category}</p>
                <a href="#" className="text-company-blue font-medium inline-flex items-center hover:text-company-orange transition-colors">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              className="border-company-blue text-company-blue hover:bg-company-blue hover:text-white rounded-full px-8 py-6"
              onClick={showMoreProjects}
            >
              View More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
