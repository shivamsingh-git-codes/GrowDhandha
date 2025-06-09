
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              <span className="block text-growdhanda-gold mb-2">Growth Simplified</span>
              Focus on your business, not paperwork
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10">
              growDhanda helps you eliminate repetitive tasks in accounting, HR, and payroll, 
              enabling 24/7 control over your business operations—even when you're away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="gd-button-primary text-base">Get Started</Button>
              <Button variant="outline" className="gd-button-secondary text-base flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-growdhanda-gold to-growdhanda-gold-light blur-md opacity-75"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-xl">
                <img 
                  src="/lovable-uploads/e55edcd1-c4d8-4057-b900-0d6c74328ca7.png" 
                  alt="growDhanda Logo" 
                  className="w-full h-auto"
                />
                <p className="text-center mt-4 text-lg font-medium">Business management, simplified.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave svg for transition to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path fillOpacity="1" d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
