
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto relative z-10 px-4 py-20 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-company-orange/10 rounded-full text-company-orange font-medium text-sm">
              WELCOME TO EVODEUS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-company-blue">Crafting</span> Reliable Software <span className="text-company-orange">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              We create powerful software solutions for enterprises and startups. Our expert team takes projects from concept to completion using cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-company-blue hover:bg-company-blue/90 text-white rounded-full px-8">
                Get Started 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-company-blue text-company-blue hover:bg-company-blue/5 rounded-full px-8">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-company-orange/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-company-blue/10 rounded-full filter blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Digital Solutions" 
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a 
            href="#services" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowDown className="w-5 h-5 text-company-blue" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
