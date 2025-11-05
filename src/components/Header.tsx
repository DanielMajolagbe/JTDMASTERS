'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, ChevronDown, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md' 
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <div className="w-1.5 h-2.5 bg-[#0066FF] rounded-full"></div>
              <div className="w-1.5 h-2.5 bg-[#FDB714] rounded-full"></div>
              <div className="w-1.5 h-2.5 bg-[#0066FF] rounded-full"></div>
            </div>
            <span className="text-2xl text-[#0A1F44]">JTD Masters</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-[#0066FF] flex items-center gap-1 transition-colors">
              Home <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#markets" className="text-[#1A1A1A] hover:text-[#0066FF] transition-colors flex items-center gap-1">
              Markets <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#trading" className="text-[#1A1A1A] hover:text-[#0066FF] transition-colors flex items-center gap-1">
              Trading <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#education" className="text-[#1A1A1A] hover:text-[#0066FF] transition-colors flex items-center gap-1">
              Education <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#about" className="text-[#1A1A1A] hover:text-[#0066FF] transition-colors flex items-center gap-1">
              About <ChevronDown className="w-4 h-4" />
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/+447451245665" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#F5F7FA] rounded-full transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#0066FF]" />
            </a>
            <button className="hidden sm:block bg-[#0066FF] text-white px-6 py-3 rounded-lg hover:bg-[#0052CC] transition-all hover:shadow-lg hover:-translate-y-0.5">
              Sign In
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 hover:bg-[#F5F7FA] rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1A1A1A]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1A1A1A]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-xl z-40 border-t border-gray-200">
          <nav className="flex flex-col p-8 gap-6">
            <a href="#" className="text-[#0066FF] text-xl py-2 border-b border-gray-100">Home</a>
            <a href="#markets" className="text-[#1A1A1A] text-xl hover:text-[#0066FF] transition-colors py-2 border-b border-gray-100">Markets</a>
            <a href="#trading" className="text-[#1A1A1A] text-xl hover:text-[#0066FF] transition-colors py-2 border-b border-gray-100">Trading</a>
            <a href="#education" className="text-[#1A1A1A] text-xl hover:text-[#0066FF] transition-colors py-2 border-b border-gray-100">Education</a>
            <a href="#about" className="text-[#1A1A1A] text-xl hover:text-[#0066FF] transition-colors py-2 border-b border-gray-100">About</a>
            <button className="bg-[#0066FF] text-white px-6 py-4 rounded-lg hover:bg-[#0052CC] transition-all mt-4 shadow-lg">
              Sign In
            </button>
            <a 
              href="https://wa.me/+447451245665" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-[#0066FF] text-[#0066FF] px-6 py-4 rounded-lg hover:bg-[#0066FF] hover:text-white transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
