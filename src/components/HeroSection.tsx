'use client';

import { ArrowRight, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ForexTickerCarousel } from './ForexTickerCarousel';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1F44] to-[#0066FF] text-white">

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#FDB714]" />
              <span className="text-sm">Trusted by 10K+ Successful Traders</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl mb-6 leading-tight">
              Master Forex Trading with
              <span className="block text-[#FDB714]">Expert Mentorship</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Learn from experienced traders who have mastered the markets. Get personalized guidance, proven strategies, and ongoing support to accelerate your trading journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0066FF] text-white px-8 py-4 rounded-lg hover:bg-[#0052CC] transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/+447451245665" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0A1F44] transition-all flex items-center justify-center gap-2"
              >
                Talk to a Mentor
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-3xl text-[#FDB714] mb-1">1-on-1</div>
                <div className="text-sm text-gray-400">Mentorship</div>
              </div>
              <div>
                <div className="text-3xl text-[#FDB714] mb-1">Expert</div>
                <div className="text-sm text-gray-400">Guidance</div>
              </div>
              <div>
                <div className="text-3xl text-[#FDB714] mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JleCUyMHRyYWRpbmclMjBwbGF0Zm9ybSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjIzODM4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Trading Platform Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-[#0A1F44] p-6 rounded-xl shadow-2xl backdrop-blur-sm">
              <div className="text-sm text-gray-600 mb-1">Success Rate</div>
              <div className="text-2xl">95%+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Ticker Carousel */}
      <ForexTickerCarousel />
    </section>
  );
}
