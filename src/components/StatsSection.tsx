'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, DollarSign, TrendingUp, Clock } from 'lucide-react';

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState({
    traders: 0,
    volume: 0,
    spreads: 0,
    support: 0
  });

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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      traders: 10,
      volume: 500,
      spreads: 0,
      support: 24
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        traders: Math.floor(targets.traders * progress),
        volume: Math.floor(targets.volume * progress),
        spreads: targets.spreads,
        support: Math.floor(targets.support * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: `${counts.traders}K+`,
      label: 'Students Mentored',
      color: 'from-[#0066FF] to-[#0052CC]'
    },
    {
      icon: DollarSign,
      value: `${counts.volume}+`,
      label: 'Success Stories',
      color: 'from-[#FDB714] to-[#F5A623]'
    },
    {
      icon: TrendingUp,
      value: `95%`,
      label: 'Success Rate',
      color: 'from-[#00C853] to-[#00A344]'
    },
    {
      icon: Clock,
      value: `${counts.support}/7`,
      label: 'Support',
      color: 'from-[#0066FF] to-[#0052CC]'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-[#0A1F44] via-[#0A1F44] to-[#0066FF] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #FDB714 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#FDB714] mb-2 tracking-wide uppercase text-sm">Our Achievement</p>
          <h2 className="text-4xl lg:text-5xl mb-4">
            Trusted by <span className="text-[#FDB714]">Thousands</span> Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl mb-2">{stat.value}</div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
