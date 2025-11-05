import { Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex flex-col gap-1">
                <div className="w-1.5 h-2.5 bg-[#0066FF] rounded-full"></div>
                <div className="w-1.5 h-2.5 bg-[#FDB714] rounded-full"></div>
                <div className="w-1.5 h-2.5 bg-[#0066FF] rounded-full"></div>
              </div>
              <span className="text-2xl">JTD Masters</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in forex education. Learn to trade with confidence from experienced mentors.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">News & Updates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Learning Info */}
          <div>
            <h4 className="text-lg mb-6">Learning</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Forex Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Mentorship Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Live Sessions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Market Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Trading Resources</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get free trading insights, market analysis, and learning resources.</p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#0066FF] transition-colors"
                />
              </div>
              <button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} JTD Masters. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">Risk Disclosure</a>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-6 text-center">
            Trading forex and CFDs carries a high level of risk and may not be suitable for all investors. 
            Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
          </p>
        </div>
      </div>
    </footer>
  );
}
