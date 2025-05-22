
import { Badge } from "@/components/ui/badge";

const TechnologiesSection = () => {
  const technologies = [
    { name: "React Native", color: "bg-blue-100 text-blue-800", icon: "🔵" },
    { name: "ReactJS", color: "bg-cyan-100 text-cyan-800", icon: "🔄" },
    { name: "Node.js", color: "bg-green-100 text-green-800", icon: "🟢" },
    { name: "Flutter", color: "bg-indigo-100 text-indigo-800", icon: "💙" },
    { name: "PHP", color: "bg-purple-100 text-purple-800", icon: "🐘" },
    { name: "Angular", color: "bg-red-100 text-red-800", icon: "🅰️" }
  ];

  return (
    <section id="services" className="py-20 bg-company-light">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              OUR TECHNOLOGIES & EXPERTISE
            </h2>
            <div className="h-1 w-20 bg-company-orange mb-6"></div>
            <p className="text-gray-700 mb-8">
              We specialize in building robust, scalable, and user-friendly web and mobile 
              applications. Our team of experienced developers and designers are proficient
              in a wide range of technologies and frameworks, ensuring that we can deliver
              the best solution for your business needs.
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our Technologies" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
