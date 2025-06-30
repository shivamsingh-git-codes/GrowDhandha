import { useEffect, useRef } from 'react';
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

        <div className="flex justify-center">
          <div className="flex flex-col gap-8 max-w-xl w-full">
            <div>
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
