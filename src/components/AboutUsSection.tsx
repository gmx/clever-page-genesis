
import { Button } from "@/components/ui/button";

const AboutUsSection = () => {
  return (
    <section id="about" className="py-24 bg-company-blue text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">WHO WE ARE</h2>
            <div className="h-1 w-20 bg-company-orange mb-6"></div>
            <p className="mb-6 text-lg">
              EvoDeus is a premier software development company that specializes in 
              creating innovative digital solutions. Founded by a team of passionate 
              technologists, we've grown into a dynamic organization with a global 
              footprint and diverse expertise.
            </p>
            <p className="mb-8">
              Our mission is to empower businesses through technology, transforming ideas 
              into powerful applications that drive growth and enhance user experiences.
              With a deep understanding of both established and emerging technologies,
              we consistently deliver solutions that exceed client expectations.
            </p>
            <Button className="bg-white text-company-blue hover:bg-white/90">
              Learn More
            </Button>
          </div>
          
          <div className="space-y-5">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-3 flex items-center">
                <span className="inline-block mr-3 w-8 h-8 rounded-full bg-company-orange flex items-center justify-center text-white text-sm">1</span>
                Notable Projects
              </h3>
              <p>
                We've successfully completed over 150 projects across various industries, 
                from healthcare and finance to education and entertainment. Our portfolio 
                includes enterprise applications, mobile apps, e-commerce platforms, 
                and custom software solutions that drive business growth.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-3 flex items-center">
                <span className="inline-block mr-3 w-8 h-8 rounded-full bg-company-orange flex items-center justify-center text-white text-sm">2</span>
                Global Team
              </h3>
              <p>
                Our diverse team brings together talent from around the world, offering 
                unique perspectives and approaches to problem-solving. With experts in 
                various domains and technologies, we're equipped to handle projects 
                of any scale and complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
