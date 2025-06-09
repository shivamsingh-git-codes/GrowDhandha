
import { useEffect, useRef } from 'react';
import { ClipboardList, Users, CreditCard, BarChart3 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
  {
    title: "Accounting",
    description: "Streamline your financial processes with our comprehensive accounting solutions. Manage invoices, track expenses, and generate real-time reports.",
    icon: ClipboardList
  },
  {
    title: "HR Management",
    description: "Simplify employee management with our HR tools. Handle onboarding, performance reviews, leave management, and more in one place.",
    icon: Users
  },
  {
    title: "Payroll Processing",
    description: "Automate your payroll operations with precision and compliance. Calculate wages, taxes, and benefits while staying compliant with regulations.",
    icon: CreditCard
  },
  {
    title: "Business Intelligence",
    description: "Gain valuable insights with our analytics tools. Visualize data, track KPIs, and make informed decisions based on real-time business metrics.",
    icon: BarChart3
  }
];

const Services = () => {
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
    <section id="services" className="gd-section bg-white" ref={sectionRef}>
      <div className="gd-container section-scroll">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="gd-heading">Our Services</h2>
          <p className="gd-text">
            We provide comprehensive business management solutions to help you focus on what matters most - growing your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="gd-card border-t-4 border-t-growdhanda-gold">
              <CardHeader>
                <div className="w-12 h-12 bg-growdhanda-gold/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-growdhanda-gold" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
