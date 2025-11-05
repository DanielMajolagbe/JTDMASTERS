'use client';

import { Check, Star, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function PricingSection() {
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

  const accounts = [
    {
      name: 'Free Plan',
      popular: false,
      isFree: true,
      features: [
        'Access to basic learning materials',
        'Weekly market analysis emails',
        'Community forum access',
        'Monthly live webinars',
        'Self-paced courses',
        'Trading fundamentals'
      ]
    },
    {
      name: 'Premium Mentorship',
      popular: true,
      isFree: false,
      features: [
        'Everything in Free plan',
        '1-on-1 mentorship sessions',
        'Daily live trading sessions',
        'Private Discord community',
        'Personalized trading plan',
        '24/7 priority support',
        'Advanced strategies & tools',
        'Lifetime access to resources'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#0066FF] mb-2 tracking-wide uppercase text-sm">Membership Options</p>
          <h2 className="text-4xl lg:text-5xl text-[#0A1F44] mb-4">
            Choose Your <span className="text-[#FDB714]">Learning Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free or accelerate your growth with personalized mentorship
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {accounts.map((account, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 transition-all duration-1000 ${
                account.popular 
                  ? 'border-2 border-[#FDB714] shadow-2xl scale-105' 
                  : 'border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {account.popular && (
                <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FDB714] to-[#F5A623] text-[#0A1F44] px-4 py-2 rounded-lg mb-6 -mt-4">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">Recommended</span>
                </div>
              )}

              <h3 className="text-2xl text-[#0A1F44] mb-6">{account.name}</h3>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {account.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      account.popular ? 'bg-[#FDB714]' : 'bg-[#0066FF]'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              {account.isFree ? (
                <button className="w-full py-4 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group bg-white border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <a 
                  href="https://wa.me/+447451245665" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Not sure which plan is right for you?{' '}
            <a href="https://wa.me/+447451245665" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">Chat with us</a>
          </p>
        </div>
      </div>
    </section>
  );
}
