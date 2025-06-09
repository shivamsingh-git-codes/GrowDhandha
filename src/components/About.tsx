
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="gd-section bg-white" ref={sectionRef}>
      <div className="gd-container section-scroll">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-growdhanda-gold to-growdhanda-gold-light blur-md opacity-75"></div>
              <img
                src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1000&q=80"
                alt="Team working together"
                className="relative rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="gd-heading">About growDhanda</h2>
              <p className="text-lg text-gray-700 mb-6">
                At growDhanda, we believe that business owners should focus on growth and innovation, 
                not paperwork and administrative tasks. Our mission is to simplify business operations 
                through technology and expertise.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded by a team of business and technology experts, growDhanda provides comprehensive 
                solutions for accounting, HR, payroll, and business management that help startups and 
                traditional businesses alike to streamline operations and achieve their growth potential.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our state-of-the-art business management software gives you complete control over your 
                operations 24/7, whether you're in the office or halfway around the world.
              </p>
              <Button className="gd-button-primary">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
