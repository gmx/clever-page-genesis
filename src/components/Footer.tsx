
import { Facebook, Instagram, Linkedin, Twitter, Heart, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="text-2xl font-bold mb-6">
              <span className="text-company-orange">Evo</span>
              <span className="text-company-blue">Deus</span>
            </div>
            <p className="mb-6 text-gray-400 max-w-md">
              Transforming ideas into powerful digital solutions that drive growth and enhance user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-company-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-company-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-company-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-company-blue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors inline-block">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors inline-block">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors inline-block">About Us</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors inline-block">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors inline-block">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors inline-block">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors inline-block">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors inline-block">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors inline-block">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors inline-block">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Subscribe</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white rounded-l-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-company-blue"
              />
              <button className="bg-company-blue hover:bg-company-blue/90 px-4 rounded-r-full">
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p className="flex items-center justify-center gap-1">
            &copy; {currentYear} EvoDeus. All rights reserved. Made with <Heart className="h-4 w-4 text-company-orange" /> for better web solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
