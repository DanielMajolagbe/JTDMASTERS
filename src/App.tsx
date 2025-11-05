import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TradingPlatform } from './components/TradingPlatform';
import { StatsSection } from './components/StatsSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TradingPlatform />
        <StatsSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
