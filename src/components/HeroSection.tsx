
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-up">
            <span className="text-company-orange">EvoDeus</span>
            <span className="block mt-2">Crafting Reliable</span>
            <span>Software <span className="text-company-orange">Solutions</span></span>
          </h1>
          <p className="text-xl opacity-90 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We create powerful software solutions for enterprises and startups. Our expert team takes projects from concept to completion using cutting-edge technologies.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-company-orange hover:bg-company-orange/90 text-white font-medium">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#services" 
          className="animate-bounce w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
