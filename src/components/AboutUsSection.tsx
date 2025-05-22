
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section id="about" className="py-24 bg-company-blue/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="About EvoDeus" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-company-orange/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-company-orange" />
                </div>
                <p className="font-bold text-xl">150+</p>
              </div>
              <p className="text-gray-600">Projects successfully delivered across various industries</p>
            </div>
          </div>
          
          <div>
            <span className="inline-block text-company-blue font-medium mb-4">WHO WE ARE</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Are EvoDeus
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              EvoDeus is a premier software development company that specializes in 
              creating innovative digital solutions. Founded by a team of passionate 
              technologists, we've grown into a dynamic organization with a global 
              footprint and diverse expertise.
            </p>
            <p className="text-gray-600 mb-10">
              Our mission is to empower businesses through technology, transforming ideas 
              into powerful applications that drive growth and enhance user experiences.
              With a deep understanding of both established and emerging technologies,
              we consistently deliver solutions that exceed client expectations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <div className="bg-company-blue/10 p-3 rounded-full inline-flex mb-4">
                  <Briefcase className="h-6 w-6 text-company-blue" />
                </div>
                <h3 className="font-bold text-xl mb-2">Industry Experience</h3>
                <p className="text-gray-600">
                  With expertise across healthcare, finance, education, and more, we bring valuable industry insights to every project.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <div className="bg-company-orange/10 p-3 rounded-full inline-flex mb-4">
                  <Users className="h-6 w-6 text-company-orange" />
                </div>
                <h3 className="font-bold text-xl mb-2">Global Team</h3>
                <p className="text-gray-600">
                  Our diverse team brings together talent from around the world, offering unique perspectives to problem-solving.
                </p>
              </div>
            </div>
            
            <Button className="rounded-full bg-company-blue hover:bg-company-blue/90 text-white px-8 py-6">
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
