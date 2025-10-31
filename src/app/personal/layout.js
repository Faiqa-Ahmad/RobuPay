'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import ToggleButtons from '../components/ToggleButtons';

export default function PersonalLayout({ children }) {
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
        {children}
      </div>
    </div>
  );
}

