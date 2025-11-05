'use client';

import { useEffect, useState } from 'react';

export function ForexTickerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const forexPairs = [
    { pair: 'EUR/USD', price: '1.0842', change: '+0.23%', positive: true },
    { pair: 'GBP/USD', price: '1.2634', change: '-0.15%', positive: false },
    { pair: 'USD/JPY', price: '149.82', change: '+0.41%', positive: true },
    { pair: 'AUD/USD', price: '0.6521', change: '+0.18%', positive: true },
    { pair: 'USD/CAD', price: '1.3456', change: '-0.32%', positive: false },
    { pair: 'NZD/USD', price: '0.6123', change: '+0.27%', positive: true },
    { pair: 'EUR/GBP', price: '0.8576', change: '+0.12%', positive: true },
    { pair: 'USD/CHF', price: '0.8834', change: '-0.08%', positive: false },
    { pair: 'EUR/JPY', price: '162.45', change: '+0.56%', positive: true },
    { pair: 'GBP/JPY', price: '189.34', change: '+0.34%', positive: true },
    { pair: 'AUD/JPY', price: '97.68', change: '+0.45%', positive: true },
    { pair: 'CAD/JPY', price: '111.38', change: '-0.21%', positive: false }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(forexPairs.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentPairs = () => {
    const start = currentIndex * itemsPerPage;
    return forexPairs.slice(start, start + itemsPerPage);
  };

  return (
    <div className="bg-[#0A1F44]/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm text-gray-400">Live Market Rates</h3>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#FDB714] w-6' : 'bg-gray-600'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {getCurrentPairs().map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-300 text-sm">{item.pair}</span>
                <div className="w-2 h-2 bg-[#00C853] rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white text-lg">{item.price}</span>
                <span className={`text-sm ${item.positive ? 'text-[#00C853]' : 'text-[#FF3B30]'}`}>
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
