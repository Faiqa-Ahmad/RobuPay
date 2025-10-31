'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from "./components/Header";
import ToggleButtons from "./components/ToggleButtons";

export default function Home() {
  const [activeTab, setActiveTab] = useState('Personal');
  const router = useRouter();

  const handleToggle = (tab) => {
    setActiveTab(tab);
    if (tab === 'Personal') {
      router.push('/personal');
    } else {
      router.push('/business');
    }
  };

  return (
    <div className="flex justify-center  items-center w-full overflow-x-hidden`}">
      <div className="w-screen max-w-[1680px] bg-[#F0F7EB]">
        
        <Header />
      
      <ToggleButtons activeTab={activeTab} onToggle={handleToggle} />
    </div>
    </div>
  );
}
