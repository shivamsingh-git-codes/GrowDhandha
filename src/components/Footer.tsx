
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
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-growdhanda-gold/80 transition-colors">
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
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
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
