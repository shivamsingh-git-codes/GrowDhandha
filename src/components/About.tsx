import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState(false);

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
              <h2 className="gd-heading text-3xl font-bold mb-4">About grow Dhanda</h2>
              <p className="text-lg text-gray-700 mb-6">
                At grow Dhanda, we believe that business owners should focus on growth and innovation, 
                not paperwork and administrative tasks. Our mission is to simplify business operations 
                through technology and expertise.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded by a team of business and technology experts, grow Dhanda provides comprehensive 
                solutions for accounting, HR, payroll, and business management that help startups and 
                traditional businesses alike to streamline operations and achieve their growth potential.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our state-of-the-art business management software gives you complete control over your 
                operations 24/7, whether you're in the office or halfway around the world.
              </p>

              <Button className="gd-button-primary" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Hide Details" : "Learn More About Us"}
              </Button>

              {showMore && (
                <div className="mt-8 px-4 py-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md space-y-5 text-gray-800">
                  <h3 className="text-2xl font-semibold text-growdhanda-gold">Our Mission & Services</h3>
                  <p>
                    Our name reflects our purpose: driving the growth of MSMEs, startups, and legacy businesses that
                    form over 50% of our economy. Whether you're a new venture or an established enterprise—growth is essential for survival. 
                    As they say, <span className="italic text-gray-600">“life is a race, agar tej nahi bhagoge to koi kuchal ke aage nikal jaega.”</span>
                  </p>
                  <p>
                    We’re your partners in growth from Day 0. From incorporating your company or LLP, registering partnership firms, setting up robust business software, obtaining ‘Eligible Startup’ status as per Startup India, 
                    to handling accounting, taxation, HR, payroll, and government permissions—we take care of all admin functions so you can focus on scaling.
                  </p>
                  <div>
                    <h4 className="font-medium text-lg text-gray-900 mb-2">Our core strengths include:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Securing bank finance and managing fundraising & debt syndication</li>
                      <li>Creating investor-ready pitch decks, financial models & projections</li>
                      <li>Registering intellectual property—trademarks, copyrights, patents</li>
                    </ul>
                  </div>
                  <p>
                    Backed by a team of qualified Chartered Accountants and tech-savvy professionals, we’re building AI-powered, machine-learned business software that provides real-time control over accounts, banking, inventory, GST, income tax, TDS, and payroll.
                  </p>
                  <p>
                    This tool is a game-changer for sole owners and startup founders who need live insights into their business health.
                  </p>
                  <p className="font-semibold text-gray-900">
                    If you’re looking to start, grow, or expand your business—<span className="text-growdhanda-gold">we’re in the same boat</span>. Let’s connect:
                  </p>
                  <p>
                    📩 <a href="mailto:founder@growdhanda.com" className="text-blue-600 underline">founder@growdhanda.com</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
