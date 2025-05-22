
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-company-orange font-medium mb-4">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to discuss your project? We're here to help transform your ideas into reality.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm h-full">
              <h3 className="font-bold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-company-blue/10 p-3 rounded-full text-company-blue">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Business Avenue, Silicon Valley, CA 94000, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-company-orange/10 p-3 rounded-full text-company-orange">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-gray-600">info@evodeus.com</p>
                    <p className="text-gray-600">support@evodeus.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-company-blue/10 p-3 rounded-full text-company-blue">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-2xl mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="rounded-xl border-gray-300 focus:border-company-blue focus:ring-company-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="rounded-xl border-gray-300 focus:border-company-blue focus:ring-company-blue/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    className="rounded-xl border-gray-300 focus:border-company-blue focus:ring-company-blue/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="rounded-xl border-gray-300 focus:border-company-blue focus:ring-company-blue/20"
                    rows={6}
                  />
                </div>
                
                <div>
                  <Button className="bg-company-blue hover:bg-company-blue/90 text-white rounded-full px-8 py-6 w-full md:w-auto">
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
