import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    industry: '',
    problems: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send to your backend or email service here
    console.log('Form submitted:', formData);
    alert("Thank you! We'll get in touch soon.");
    setShowForm(false);
  };

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
              growDhanda aims to boost and simplify your expansion journey. As a business owner you
              spend most of your time in routine repetitive work which reduces your efficiency. We takeover your
              Finance and HR function to help you get rid of your routine work so that you can focus on your business
              growth. We also assist in accelerating your growth by helping you with Fund raising, Debt Syndication
              along with helping you to avail Government Schemes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="gd-button-primary text-base" onClick={() => setShowForm(true)}>
                Get Started
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

      {/* Wave svg */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path fillOpacity="1" d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
            <button className="absolute top-2 right-4 text-gray-500" onClick={() => setShowForm(false)}>✕</button>
            <h2 className="text-xl font-bold mb-4">Get Started with growDhanda</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" className="w-full border p-2 rounded" onChange={handleChange} required />
              <input type="text" name="businessName" placeholder="Business Name" className="w-full border p-2 rounded" onChange={handleChange} required />
              <input type="text" name="industry" placeholder="Industry you operate in" className="w-full border p-2 rounded" onChange={handleChange} required />
              <textarea name="problems" placeholder="Problems we can solve for you" className="w-full border p-2 rounded" onChange={handleChange} required />
              <input type="tel" name="contact" placeholder="Contact Number" className="w-full border p-2 rounded" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Id" className="w-full border p-2 rounded" onChange={handleChange} required />
              <Button type="submit" className="w-full gd-button-primary">Submit</Button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
