import Header from '../components/Header';
import BusinessHero from './components/BusinessHero';
import BusinessFeatures from './components/BusinessFeatures';
import GlobalReach from './components/GlobalReach';
import PowerfulTools from './components/PowerfulTools';
import Pricing from '../personal/components/Pricing';
import DeveloperResources from '../personal/components/DeveloperResources';
import OurJourney from '../personal/components/OurJourney';
import Footer from '../personal/components/Footer';

export default function BusinessPage() {
  return (
    <div className="bg-[#F0F7EB] min-h-screen">
      <Header />
      <div className="pt-28">
        <BusinessHero />
        <BusinessFeatures />
        <GlobalReach />
        <PowerfulTools />
        <Pricing />
        <DeveloperResources />
        <OurJourney />
        <Footer />
      </div>
    </div>
  );
}

