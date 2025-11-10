'use client';

import React, { useState, useEffect } from 'react';

export default function Step3WaitingConfirmation({ onStartOver, onBackToDashboard, depositData }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-4 sm:p-6 md:p-8 animate-[slideIn_0.3s_ease-out]">
            {/* Header */}
            <div className={`mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <h2 className="text-xl sm:text-2xl font-bold text-black flex items-center gap-2 mb-1 sm:mb-2">
                    <span className="animate-bounce-slow">⏳</span> Waiting for Confirmation
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm">Your deposit is being processed</p>
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
                    {/* Step 2 - Completed */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:scale-110">
                            ✓
                        </div>
                    </div>
                    <div className="w-12 sm:w-20 h-1 bg-[#018000] transition-all duration-500"></div>
                    {/* Step 3 - Active */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg animate-pulse-slow">
                            3
                        </div>
                    </div>
                </div>
            </div>

            {/* Deposit in Progress Box */}
            <div className={`bg-green-50 border-2 border-dashed border-[#018000] rounded-2xl p-6 sm:p-8 md:p-12 mb-4 sm:mb-6 transition-all duration-500 hover:shadow-lg ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
                <div className="flex flex-col items-center text-center">
                    {/* Spinning Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-6">
                        <svg
                            className="animate-spin text-[#018000]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#018000] mb-1 sm:mb-2">Deposit in Progress</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                        Waiting for blockchain confirmation...
                    </p>
                </div>
            </div>

            {/* Progress Steps List */}
            <div className={`space-y-3 sm:space-y-4 mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '300ms' }}>
                {/* Step 1 - Transaction sent */}
                <div className="flex items-start gap-2 sm:gap-3 transition-all duration-300 hover:translate-x-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base shadow-md">
                        1
                    </div>
                    <div>
                        <p className="font-semibold text-black text-sm sm:text-base">Transaction sent</p>
                        <p className="text-xs sm:text-sm text-gray-600">Your wallet has sent the transaction to the blockchain</p>
                    </div>
                </div>

                {/* Step 2 - Blockchain confirmation */}
                <div className="flex items-start gap-2 sm:gap-3 transition-all duration-300 hover:translate-x-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base animate-pulse">
                        2
                    </div>
                    <div>
                        <p className="font-semibold text-black text-sm sm:text-base">Blockchain confirmation</p>
                        <p className="text-xs sm:text-sm text-gray-600">Waiting for network confirmations (2/3 confirmed)</p>
                    </div>
                </div>

                {/* Step 3 - Funds received */}
                <div className="flex items-start gap-2 sm:gap-3 transition-all duration-300 hover:translate-x-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">
                        3
                    </div>
                    <div>
                        <p className="font-semibold text-black text-sm sm:text-base">Funds received</p>
                        <p className="text-xs sm:text-sm text-gray-600">Your balance will update automatically</p>
                    </div>
                </div>
            </div>

            {/* What happens next? */}
            <div className={`bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 transition-all duration-500 hover:shadow-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '400ms' }}>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 sm:mb-3">💡 What happens next?</p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>Your transaction is on the blockchain</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>It typically takes 5-15 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>You can close this page and check back later</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>We'll notify you when the deposit arrives</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>Your balance updates automatically</span>
                    </li>
                </ul>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
                <button
                    onClick={onStartOver}
                    className="w-full sm:flex-1 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg"
                >
                    Start Over
                </button>
                <button
                    onClick={onBackToDashboard}
                    className="w-full sm:flex-1 py-2.5 sm:py-3 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl"
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}

