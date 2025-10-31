'use client';

import React from 'react';

const ToggleButtons = ({ activeTab, onToggle }) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="inline-flex bg-white rounded-full shadow-sm border-2 border-[#018000]">
        <button
          onClick={() => onToggle('Personal')}
          className={`px-10 py-2 rounded-full font-medium transition-all duration-200 ${
            activeTab === 'Personal'
              ? 'bg-[#018000] text-white shadow-md'
              : 'text-black'
          }`}
        >
          Personal
        </button>
        <button
          onClick={() => onToggle('Business')}
          className={`px-10 py-2 rounded-full font-medium transition-all duration-200 ${
            activeTab === 'Business'
              ? 'bg-[#018000] text-white shadow-md'
              : 'text-black'
          }`}
        >
          Business
        </button>
      </div>
    </div>
  );
};

export default ToggleButtons;