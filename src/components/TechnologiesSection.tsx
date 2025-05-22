
import { Badge } from "@/components/ui/badge";
import { LaptopIcon, SmartphoneIcon, ServerIcon, BrainCircuitIcon, Code2Icon, PaletteIcon } from "lucide-react";

const TechnologiesSection = () => {
  const technologies = [
    { name: "React Native", description: "Cross-platform mobile app development", icon: <SmartphoneIcon className="h-6 w-6" /> },
    { name: "ReactJS", description: "Modern web application development", icon: <LaptopIcon className="h-6 w-6" /> },
    { name: "Node.js", description: "Backend and server-side solutions", icon: <ServerIcon className="h-6 w-6" /> },
    { name: "Flutter", description: "Fast UI development for all screens", icon: <SmartphoneIcon className="h-6 w-6" /> },
    { name: "PHP", description: "Server-side programming language", icon: <Code2Icon className="h-6 w-6" /> },
    { name: "Angular", description: "Enterprise-level web applications", icon: <BrainCircuitIcon className="h-6 w-6" /> }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-company-blue/5 text-company-blue border-company-blue/20 mb-4 px-4 py-1 text-sm rounded-full">EXPERTISE</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Technologies & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We specialize in building robust, scalable applications using the latest and most reliable technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group hover:translate-y-[-5px]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-company-blue/10 text-company-blue group-hover:bg-company-blue group-hover:text-white transition-colors">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{tech.name}</h3>
                  <p className="text-gray-500">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
