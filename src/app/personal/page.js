import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import IntegratedSuite from './components/IntegratedSuite';
import SecurePayment from './components/SecurePayment';
import CryptoPayment from './components/CryptoPayment';
import Pricing from './components/Pricing';
import DeveloperResources from './components/DeveloperResources';
import OurJourney from './components/OurJourney';
import Footer from './components/Footer';

export default function PersonalPage() {
  return (
    <div className="bg-[#F0F7EB] min-h-screen">
      <Hero />
      <SocialProof />
      <IntegratedSuite />
      <SecurePayment />
      <CryptoPayment />
      <Pricing />
      <DeveloperResources />
      <OurJourney />
      <Footer />
    </div>
  );
}

