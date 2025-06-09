
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="gd-section bg-growdhanda-gray-light" ref={sectionRef}>
      <div className="gd-container section-scroll">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="gd-heading">Get In Touch</h2>
          <p className="gd-text">
            Have questions about our services? Ready to take your business to the next level? 
            Contact us today and our team will get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <Input id="name" placeholder="Your name" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="border-gray-300" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <Input id="subject" placeholder="Subject" className="border-gray-300" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="Your message" className="border-gray-300 min-h-32" />
              </div>

              <Button className="gd-button-primary w-full md:w-auto">Send Message</Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-growdhanda-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-growdhanda-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email Us</h4>
                    <a href="mailto:founder@growdhanda.com" className="text-gray-700 hover:text-growdhanda-gold transition-colors">founder@growdhanda.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h4 className="font-medium text-lg mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
