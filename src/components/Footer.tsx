
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-growdhanda-black text-white">
      <div className="gd-container py-12 md:py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <img 
              src="/lovable-uploads/e55edcd1-c4d8-4057-b900-0d6c74328ca7.png" 
              alt="growDhanda Logo" 
              className="h-12 mb-4" 
            />
            <p className="text-gray-400 mb-6">
              Simplifying business operations through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-growdhanda-gold/80 transition-colors">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-growdhanda-gold/80 transition-colors">
                <Twitter size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-growdhanda-gold/80 transition-colors">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-growdhanda-gold/80 transition-colors">
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-growdhanda-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-growdhanda-gold transition-colors">Services</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-growdhanda-gold transition-colors">Features</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-growdhanda-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-growdhanda-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-growdhanda-gold transition-colors">Accounting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-growdhanda-gold transition-colors">HR Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-growdhanda-gold transition-colors">Payroll Processing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-growdhanda-gold transition-colors">Business Intelligence</a></li>
              <li><a href="#" className="text-gray-400 hover:text-growdhanda-gold transition-colors">Software Demo</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md bg-white/10 border-0 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-growdhanda-gold"
              />
              <button type="submit" className="bg-growdhanda-gold text-black px-4 py-2 rounded-r-md hover:bg-growdhanda-gold-light transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} growDhanda. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-growdhanda-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-growdhanda-gold transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 text-sm hover:text-growdhanda-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
