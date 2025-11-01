'use client';

import React from 'react';

const ToggleButtons = ({ activeTab, onToggle }) => {
  return (
    <div className="flex justify-center px-4 py-6">
      <div className="inline-flex bg-white rounded-full shadow-md border-2 border-[#018000]  transition-all duration-300 hover:shadow-lg ">
        <button
          onClick={() => onToggle('Personal')}
          className={`px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 rounded-full font-medium text-[14px] sm:text-[16px] transition-all duration-300 ease-in-out ${
            activeTab === 'Personal'
              ? 'bg-[#018000] text-white shadow-md scale-105'
              : 'text-black hover:bg-gray-50'
          }`}
        >
          Personal
        </button>
        <button
          onClick={() => onToggle('Business')}
          className={`px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 rounded-full font-medium text-[14px] sm:text-[16px] transition-all duration-300 ease-in-out ${
            activeTab === 'Business'
              ? 'bg-[#018000] text-white shadow-md scale-105'
              : 'text-black hover:bg-gray-50'
          }`}
        >
          Business
        </button>
      </div>
    </div>
  );
};

export default ToggleButtons;
