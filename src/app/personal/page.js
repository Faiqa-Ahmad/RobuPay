'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import ToggleButtons from '../components/ToggleButtons';
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
  const [activeTab, setActiveTab] = useState('Personal');
  const router = useRouter();

  const handleToggle = (tab) => {
    setActiveTab(tab);
    if (tab === 'Business') {
      router.push('/business');
    }
  };

  return (
    <div className="bg-[#F0F7EB] min-h-screen">
      <Header />
      <div className="pt-28">
        <ToggleButtons activeTab={activeTab} onToggle={handleToggle} />
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
    </div>
  );
}

