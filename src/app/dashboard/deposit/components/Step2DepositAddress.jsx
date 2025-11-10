'use client';

import React, { useState, useEffect } from 'react';

export default function Step2DepositAddress({ onContinue, onBack, depositData }) {
    const [copied, setCopied] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(depositData.address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-4 sm:p-6 md:p-8 animate-[slideIn_0.3s_ease-out]">
            {/* Header */}
            <div className={`mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <h2 className="text-xl sm:text-2xl font-bold text-black flex items-center gap-2 mb-1 sm:mb-2">
                    <span className="animate-bounce-slow">📍</span> Your Deposit Address
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm">Send your {depositData.cryptocurrency} here</p>
            </div>

            {/* Progress Steps */}
            <div className={`flex items-center justify-center mb-6 sm:mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '100ms' }}>
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Step 1 - Completed */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:scale-110">
                            ✓
                        </div>
                    </div>
                    <div className="w-12 sm:w-20 h-1 bg-[#018000] transition-all duration-500"></div>
                    {/* Step 2 - Active */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg animate-pulse-slow">
                            2
                        </div>
                    </div>
                    <div className="w-12 sm:w-20 h-1 bg-gray-300 transition-all duration-500"></div>
                    {/* Step 3 - Inactive */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-110">
                            3
                        </div>
                    </div>
                </div>
            </div>

            {/* Address Display with Icon */}
            <div className={`bg-green-50 border-2 border-dashed border-[#018000] rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 transition-all duration-500 hover:shadow-lg ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
                <div className="flex flex-col items-center text-center">
                    {/* Dollar Icon */}
                    <div className="rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110">
                        <img src="/depositcurrency.png" alt="Dollar" className="w-20 h-20 sm:w-auto sm:h-auto animate-pulse-slow" />
                    </div>

                    <p className="text-xs sm:text-sm text-gray-700 font-medium mb-2 sm:mb-3">
                        Copy this address to your wallet or exchange
                    </p>

                    {/* Address */}
                    <div className="bg-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 mb-3 sm:mb-4 border border-gray-200 w-full transition-all duration-300 hover:shadow-md">
                        <p className="text-xs sm:text-sm font-mono text-gray-800 break-all">
                            {depositData.address}
                        </p>
                    </div>

                    {/* Copy Button */}
                    <button
                        onClick={handleCopyAddress}
                        className={`px-6 sm:px-8 py-2 ${
                            copied ? 'bg-green-600' : 'bg-white border-2 border-[#018000]'
                        } ${
                            copied ? 'text-white' : 'text-[#018000]'
                        } rounded-full hover:bg-green-50 transition-all duration-300 font-semibold text-xs sm:text-sm hover:scale-110 hover:shadow-lg ${copied ? 'scale-110' : ''}`}
                    >
                        {copied ? '✓ Copied!' : '📋 Copy Address'}
                    </button>
                </div>
            </div>

            {/* Before you send checklist */}
            <div className={`bg-green-50 border-l-4 border-green-400 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 transition-all duration-500 hover:shadow-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '300ms' }}>
                <p className="text-xs sm:text-sm font-semibold text-[#018000] mb-2 sm:mb-3">✅ Before you send:</p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span>You're sending {depositData.cryptocurrency} on {depositData.network.split(' - ')[0]}</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span>Check your exchange/wallet supports the network</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span>Start with a small amount to test</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span>Minimum deposit: $10 USD</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span>No deposit limits</span>
                    </li>
                </ul>
            </div>

            {/* Important warnings */}
            <div className={`bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 transition-all duration-500 hover:shadow-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '400ms' }}>
                <p className="text-xs sm:text-sm font-semibold text-red-600 mb-2 sm:mb-3">⚠️ Important:</p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>Send ONLY {depositData.cryptocurrency} on {depositData.network.split(' - ')[0]} to this address</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>Sending other tokens or using wrong network = permanent loss</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>Deposits typically arrive in 5-15 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>Our system will notify you when funds are received</span>
                    </li>
                </ul>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
                <button
                    onClick={onBack}
                    className="w-full sm:flex-1 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg"
                >
                    Back
                </button>
                <button
                    onClick={onContinue}
                    className="w-full sm:flex-1 py-2.5 sm:py-3 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl"
                >
                    Sent
                </button>
            </div>
        </div>
    );
}

