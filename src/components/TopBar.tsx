import { Phone, Gift, Download, HelpCircle } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-[#0A1F44] text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          {/* Left side */}
          <div className="flex items-center gap-6">
            <a href="tel:+447451245665" className="flex items-center gap-2 hover:text-[#FDB714] transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">+44 7451 245665 or Request for a call back</span>
              <span className="md:hidden">+44 7451 245665</span>
            </a>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Gift className="w-3.5 h-3.5 text-[#FDB714]" />
              <span>Get 24/7 Mentorship Support</span>
            </div>
            <a href="#" className="flex items-center gap-2 hover:text-[#FDB714] transition-colors">
              <Download className="w-3.5 h-3.5" />
              <span>Free Learning Resources</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-[#FDB714] transition-colors">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Help Center</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
