'use client';

import React, { useState, useEffect } from 'react';

export default function Step3WithdrawalSuccess({ onBackToDashboard, withdrawData }) {
    const [transactionId] = useState(() => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let id = 'TXW-';
        for (let i = 0; i < 9; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-4 sm:p-6 md:p-8 animate-[slideIn_0.3s_ease-out]">
            {/* Header */}
            <div className={`mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 sm:mb-2">
                    <span className="animate-bounce-slow">✅</span> Withdrawal Successful
                </h2>
            </div>

            {/* Progress Steps */}
            <div className={`flex items-center justify-center mb-6 sm:mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '100ms' }}>
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Step 1 - Completed */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:scale-110">
                        ✓
                    </div>
                    <div className="w-12 sm:w-20 h-1 bg-[#018000] transition-all duration-500"></div>
                    {/* Step 2 - Completed */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:scale-110">
                        ✓
                    </div>
                    <div className="w-12 sm:w-20 h-1 bg-[#018000] transition-all duration-500"></div>
                    {/* Step 3 - Active */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg animate-pulse-slow">
                        3
                    </div>
                </div>
            </div>

            {/* Success Box */}
            <div className="bg-green-50 border-2 border-dashed border-[#018000] rounded-2xl p-6 sm:p-8 mb-4 sm:mb-6">
                <div className="flex flex-col items-center text-center">
                    {/* Checkmark Icon */}
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg transition-all duration-500 ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                    }`}>
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#018000] rounded-full flex items-center justify-center animate-pulse-slow">
                            <svg
                                className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M5 13l4 4L19 7"
                                ></path>
                            </svg>
                        </div>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#018000] mb-1 sm:mb-2">Withdrawal Initiated</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Your funds are on their way</p>
                </div>
            </div>

            {/* Transaction Details Box */}
            <div className={`bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 space-y-2 sm:space-y-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '300ms' }}>
                {/* Transaction ID */}
                <div className="flex justify-between items-center transition-all duration-300 hover:translate-x-1">
                    <span className="text-xs sm:text-sm text-gray-600">Transaction ID</span>
                    <span className="text-xs sm:text-sm font-bold text-[#018000]">{transactionId}</span>
                </div>

                {/* Cryptocurrency */}
                <div className="flex justify-between items-center transition-all duration-300 hover:translate-x-1">
                    <span className="text-xs sm:text-sm text-gray-600">Cryptocurrency</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">{withdrawData.cryptocurrency}</span>
                </div>

                {/* Network */}
                <div className="flex justify-between items-center transition-all duration-300 hover:translate-x-1">
                    <span className="text-xs sm:text-sm text-gray-600">Network</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">{withdrawData.network}</span>
                </div>

                {/* Amount */}
                <div className="flex justify-between items-center transition-all duration-300 hover:translate-x-1">
                    <span className="text-xs sm:text-sm text-gray-600">Amount</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">${withdrawData.amount}</span>
                </div>

                {/* Network Fee */}
                <div className="flex justify-between items-center transition-all duration-300 hover:translate-x-1">
                    <span className="text-xs sm:text-sm text-gray-600">Network Fee</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">${withdrawData.networkFee}</span>
                </div>

                {/* You will Receive */}
                <div className="flex justify-between items-center pt-2 sm:pt-3 border-t-2 border-gray-200 transition-all duration-300 hover:scale-105">
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">You will Receive</span>
                    <span className="text-base sm:text-lg font-bold text-[#018000]">${withdrawData.youWillReceive}</span>
                </div>

                {/* Status */}
                <div className="flex justify-between items-center pt-2 sm:pt-3 border-t-2 border-gray-200">
                    <span className="text-xs sm:text-sm text-gray-600">Status</span>
                    <span className="px-3 sm:px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold animate-pulse">
                        Processing
                    </span>
                </div>
            </div>

            {/* Next Steps Box */}
            <div className={`bg-green-50 border-l-4 border-green-400 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 transition-all duration-700 hover:shadow-md ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`} style={{ transitionDelay: '500ms' }}>
                <p className="text-xs sm:text-sm font-semibold text-[#018000] mb-2 sm:mb-3">Next Steps</p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span>Confirmation time: 10-30 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span>Check your wallet for the funds</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span>Keep your transaction ID for reference</span>
                    </li>
                </ul>
            </div>

            {/* Back to Dashboard Button */}
            <button
                onClick={onBackToDashboard}
                className={`w-full py-2.5 sm:py-3 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-700 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '700ms' }}
            >
                Back to Dashboard
            </button>
        </div>
    );
}

