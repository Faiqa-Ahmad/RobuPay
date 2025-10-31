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
    <div className="bg-[#F0F7EB]">
      <BusinessHero />
      <BusinessFeatures />
      <GlobalReach />
      <PowerfulTools />
      <Pricing />
      <DeveloperResources />
      <OurJourney />
      <Footer />
    </div>
  );
}

