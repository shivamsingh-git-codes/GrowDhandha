
import { useEffect, useRef } from 'react';
import { Clock, Globe, Shield, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
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
    <section id="features" className="gd-section bg-growdhanda-gray-light" ref={sectionRef}>
      <div className="gd-container section-scroll">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="gd-heading">Business Management Software</h2>
          <p className="gd-text">
            Our advanced platform gives you complete control over your business operations 24/7, 
            even when you're away from the office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-growdhanda-gray-dark">Complete Business Control</h3>
            <p className="text-lg text-gray-700 mb-6">
              With growDhanda's business management software, you gain unparalleled visibility 
              and control over your entire operation from anywhere, at any time.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time financial tracking and reporting",
                "Employee management and scheduling",
                "Inventory and supply chain monitoring",
                "Customer relationship management"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-5">
                    <svg className="h-5 w-5 text-growdhanda-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80"
              alt="Business Dashboard"
              className="rounded-lg max-h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "24/7 Access",
              description: "Manage your business anytime, anywhere with our cloud-based platform.",
              icon: Clock
            },
            {
              title: "Remote Operations",
              description: "Control all aspects of your business even when you're away from the office.",
              icon: Globe
            },
            {
              title: "Secure Platform",
              description: "Enterprise-grade security to protect your sensitive business data.",
              icon: Shield
            },
            {
              title: "Mobile Friendly",
              description: "Full functionality on all devices with our responsive mobile application.",
              icon: Smartphone
            }
          ].map((feature, index) => (
            <Card key={index} className="gd-card">
              <CardHeader>
                <div className="w-12 h-12 bg-growdhanda-gold/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-growdhanda-gold" size={24} />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
