
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/lovable-uploads/e55edcd1-c4d8-4057-b900-0d6c74328ca7.png" alt="growDhanda Logo" className="h-10 md:h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium text-gray-800 hover:text-growdhanda-gold transition-colors">Home</a>
            <a href="#services" className="font-medium text-gray-800 hover:text-growdhanda-gold transition-colors">Services</a>
            <a href="#features" className="font-medium text-gray-800 hover:text-growdhanda-gold transition-colors">BMS</a>
            <a href="#about" className="font-medium text-gray-800 hover:text-growdhanda-gold transition-colors">About</a>
            <a href="#contact" className="font-medium text-gray-800 hover:text-growdhanda-gold transition-colors">Contact</a>
            
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="font-medium text-gray-800 hover:text-growdhanda-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#services" className="font-medium text-gray-800 hover:text-growdhanda-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#features" className="font-medium text-gray-800 hover:text-growdhanda-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#about" className="font-medium text-gray-800 hover:text-growdhanda-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="font-medium text-gray-800 hover:text-growdhanda-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
             
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
