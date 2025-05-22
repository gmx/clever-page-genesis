
import { CheckCircle, CheckIcon } from "lucide-react";

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-company-orange font-medium mb-4">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Makes EvoDeus Different?
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              We're more than just developers. We're strategic partners who understand your business needs and deliver solutions that drive growth and user satisfaction.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1 text-company-orange">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-company-orange/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="transform md:translate-y-12">
                <img 
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Office Meeting" 
                  className="rounded-3xl shadow-xl h-80 w-full object-cover"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team Working" 
                  className="rounded-3xl shadow-xl h-80 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
