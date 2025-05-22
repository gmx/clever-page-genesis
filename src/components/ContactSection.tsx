
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-company-orange text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-2">What is Lorem Ipsum?</h2>
          <p className="text-center mb-8 opacity-90">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
              />
            </div>
            
            <Textarea
              placeholder="Your Message"
              className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
              rows={6}
            />
            
            <div className="flex justify-center">
              <Button className="bg-white text-company-orange hover:bg-white/90 px-8">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
