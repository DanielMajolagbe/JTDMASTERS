'use client';

import { TrendingDown, Zap, Headphones, Laptop, BarChart3, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function FeaturesSection() {
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
    {
      icon: TrendingDown,
      title: 'Proven Strategies',
      description: 'Learn battle-tested trading strategies that our mentors have used successfully for years.'
    },
    {
      icon: Zap,
      title: 'Fast-Track Learning',
      description: 'Skip years of trial and error with direct guidance from experienced traders.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get answers to your questions anytime with round-the-clock mentor support.'
    },
    {
      icon: Laptop,
      title: 'Live Trading Sessions',
      description: 'Watch and learn as expert traders analyze markets and execute trades in real-time.'
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      description: 'Daily market breakdowns, trade setups, and technical analysis from our mentors.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Master proper risk management techniques to protect your capital and grow consistently.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#0066FF] mb-2 tracking-wide uppercase text-sm">Why Choose JTD Masters</p>
          <h2 className="text-4xl lg:text-5xl text-[#0A1F44] mb-4">
            Learn with <span className="text-[#FDB714]">Expert Mentors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to become a successful trader, guided by professionals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#0A1F44] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
