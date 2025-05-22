
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(8);
  
  const projects = [
    { name: "E-commerce Platform", category: "Web Development" },
    { name: "Fitness Tracking App", category: "Mobile App" },
    { name: "Banking Dashboard", category: "UI/UX Design" },
    { name: "Real Estate Manager", category: "Web Development" },
    { name: "Healthcare Portal", category: "Web Development" },
    { name: "Inventory System", category: "Enterprise Software" },
    { name: "Social Media Analytics", category: "Data Analysis" },
    { name: "Restaurant Booking App", category: "Mobile App" },
    { name: "Educational Platform", category: "Web Development" },
    { name: "Project Management Tool", category: "Enterprise Software" },
    { name: "Event Planning System", category: "Web Development" },
    { name: "Smart Home Control", category: "IoT" }
  ];
  
  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">PROJECTS</h2>
          <div className="h-1 w-20 bg-company-orange mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our portfolio of successful projects across various industries. 
            Each project represents our commitment to excellence and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-40 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-company-orange opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium text-sm">View Project</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-10">
            <Button 
              variant="outline" 
              className="border-company-orange text-company-orange hover:bg-company-orange hover:text-white"
              onClick={showMoreProjects}
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
