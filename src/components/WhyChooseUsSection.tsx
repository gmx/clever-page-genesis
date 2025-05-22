
import { Check } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Exceptional Technology & Strategic Partners",
      description: "We work with industry-leading platforms and tools to build scalable solutions"
    },
    {
      title: "Agile & Reliable Development",
      description: "Our development methodology ensures on-time delivery with maximum flexibility"
    },
    {
      title: "User-Centric Solution Development",
      description: "We design products that prioritize usability and deliver outstanding user experiences"
    },
    {
      title: "Continuous Support & Evolution",
      description: "Our commitment doesn't end at deployment; we provide ongoing maintenance and updates"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">WHY CHOOSE EVODEUS?</h2>
          <div className="h-1 w-20 bg-company-orange mx-auto mb-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          <div className="rounded-lg overflow-hidden shadow-xl col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Why Choose Us" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="col-span-1 flex flex-col justify-center">
            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <li key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-6 h-6 rounded-full bg-company-orange flex items-center justify-center text-white">
                      <Check size={14} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
