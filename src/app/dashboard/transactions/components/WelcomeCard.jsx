'use client';

import React from 'react';

export default function WelcomeCard({ userName = "John", balance = "2,450.76" }) {
    return (
        <div className="relative rounded-2xl p-8 overflow-hidden shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src="/bgtransactions.png" alt="Welcome" className="w-full h-full object-cover" />
            </div>

            {/* Green Overlay */}
            <div className="absolute inset-0 bg-[#018000]/80"></div>

            {/* Content */}
            <div className="relative z-10">
                <h2 className="text-white text-2xl font-bold mb-2 flex items-center gap-2">
                    Welcome back, {userName}! <span className="text-3xl">👋</span>
                </h2>
                <p className="text-white/80 text-sm mb-2">Total Balance</p>
                <h1 className="text-white text-5xl font-bold tracking-tight">
                    ${balance}
                </h1>
            </div>
        </div>
    );
}

