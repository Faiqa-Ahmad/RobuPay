'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function SpendingAnalytics() {
    const [activeTab, setActiveTab] = useState('Month');
    const [isVisible, setIsVisible] = useState(false);
    const tabs = ['Day', 'Week', 'Month', 'Year'];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const analytics = [
        {
            title: 'Total Income',
            amount: '$13,563.80',
            percentage: '10%',
            trend: 'up',
            trendText: 'from last month',
            gradient: 'linear-gradient(276.98deg, rgba(1,128,0,0.1) 0.24%, #F5FCF6 77.47%)'
        },
        {
            title: 'Total Expenses',
            amount: '$4,563.80',
            percentage: '8%',
            trend: 'down',
            trendText: 'from last month',
            gradient: 'linear-gradient(276.98deg, rgba(1,128,0,0.1) 0.24%, #F5FCF6 77.47%)'
        },
        {
            title: 'Net Balance',
            amount: '$24,563.80',
            percentage: '10%',
            trend: 'up',
            trendText: 'increase',
            gradient: 'linear-gradient(276.98deg, rgba(1,128,0,0.1) 0.24%, #F5FCF6 77.47%)'
        },
    ];

    return (
        <div>
            {/* Header with Tabs */}
            <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <h3 className="text-lg sm:text-xl font-bold text-black">Spending Analytics</h3>
                <div className="flex gap-1.5 sm:gap-2 w-full sm:w-auto overflow-x-auto scrollbar-hide ">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                activeTab === tab
                                    ? 'bg-[#018000] text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#018000] hover:scale-105'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {analytics.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ 
                            backgroundImage: item.gradient,
                            transitionDelay: `${(index + 1) * 100}ms`
                        }}
                    >
                        <p className="text-xs sm:text-sm text-gray-700 mb-1 sm:mb-2">{item.title}</p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#018000] mb-2 sm:mb-3 transition-all duration-300 hover:scale-105">
                            {item.amount}
                        </h2>
                        <div className="flex items-center gap-1">
                            {item.trend === 'up' ? (
                                <FaArrowUp className="text-[#018000] text-xs animate-bounce-slow" />
                            ) : (
                                <FaArrowDown className="text-red-500 text-xs animate-bounce-slow" />
                            )}
                            <span className={`text-xs font-medium ${
                                item.trend === 'up' ? 'text-[#018000]' : 'text-red-500'
                            }`}>
                                {item.percentage} {item.trendText}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

