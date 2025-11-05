'use client';

import { Check, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useRef, useState } from 'react';

export function TradingPlatform() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    'Weekly live trading sessions with mentors',
    'Personalized 1-on-1 mentorship calls',
    'Daily market analysis and trade ideas',
    'Access to exclusive trading community',
    'Step-by-step learning curriculum',
    'Lifetime access to learning resources'
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744473119469-905016183836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydHMlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyMzUwODUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Advanced Trading Platform"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00C853] rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm text-gray-600">Market Status</div>
                    <div className="text-lg text-[#0A1F44]">Live Trading</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="text-[#0066FF] mb-2 tracking-wide uppercase text-sm">Mentorship Program</p>
            <h2 className="text-4xl lg:text-5xl text-[#0A1F44] mb-6">
              Comprehensive <span className="text-[#FDB714]">Learning Experience</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join a structured mentorship program designed for traders at all levels. Learn directly from professionals who have achieved consistent profitability.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0066FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/+447451245665" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex bg-[#0066FF] text-white px-8 py-4 rounded-lg hover:bg-[#0052CC] transition-all hover:shadow-xl hover:-translate-y-1 items-center gap-2 group"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
