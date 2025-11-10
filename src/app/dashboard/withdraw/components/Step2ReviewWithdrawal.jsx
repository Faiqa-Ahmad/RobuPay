'use client';

import React, { useState, useEffect } from 'react';

export default function Step2ReviewWithdrawal({ onConfirm, onBack, withdrawData }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-4 sm:p-6 md:p-8 animate-[slideIn_0.3s_ease-out]">
            {/* Header */}
            <div className={`mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 sm:mb-2">
                    <span className="animate-bounce-slow">🔍</span> Review Your Withdrawal
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm">Verify all details before confirming</p>
            </div>

            {/* Progress Steps */}
            <div className={`flex items-center justify-center mb-6 sm:mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '100ms' }}>
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Step 1 - Completed */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:scale-110">
                        ✓
                    </div>
                    <div className="w-12 sm:w-20 h-1 bg-[#018000] transition-all duration-500"></div>
                    {/* Step 2 - Active */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg animate-pulse-slow">
                        2
                    </div>
                    <div className="w-12 sm:w-20 h-1 bg-gray-300 transition-all duration-500"></div>
                    {/* Step 3 - Inactive */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-110">
                        3
                    </div>
                </div>
            </div>

            {/* Withdrawal Details Box */}
            <div className={`bg-white border-2 border-[#018000] rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 space-y-3 sm:space-y-4 transition-all duration-500 hover:shadow-lg ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
                {/* Cryptocurrency */}
                <div className="flex justify-between items-center transition-all duration-300 hover:translate-x-1">
                    <span className="text-xs sm:text-sm text-gray-600">Cryptocurrency</span>
                    <span className="text-xs sm:text-sm font-bold text-[#018000]">{withdrawData.cryptocurrency}</span>
                </div>

                {/* Network */}
                <div className="flex justify-between items-center transition-all duration-300 hover:translate-x-1">
                    <span className="text-xs sm:text-sm text-gray-600">Network</span>
                    <span className="text-xs sm:text-sm font-bold text-[#018000]">{withdrawData.network}</span>
                </div>

                {/* Amount */}
                <div className="flex justify-between items-center transition-all duration-300 hover:translate-x-1">
                    <span className="text-xs sm:text-sm text-gray-600">Amount</span>
                    <span className="text-xs sm:text-sm font-bold text-[#018000]">${withdrawData.amount}</span>
                </div>

                {/* Network Fee */}
                <div className="flex justify-between items-center transition-all duration-300 hover:translate-x-1">
                    <span className="text-xs sm:text-sm text-gray-600">Network Fee</span>
                    <span className="text-xs sm:text-sm font-bold text-gray-700">${withdrawData.networkFee}</span>
                </div>

                {/* You will Receive */}
                <div className="flex justify-between items-center pt-2 sm:pt-3 border-t-2 border-gray-200 transition-all duration-300 hover:scale-105">
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">You will Receive</span>
                    <span className="text-base sm:text-lg font-bold text-[#018000]">${withdrawData.youWillReceive}</span>
                </div>

                {/* Destination Address */}
                <div className="pt-2 sm:pt-3 border-t-2 border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Destination Address</p>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200 transition-all duration-300 hover:shadow-md">
                        <p className="text-xs font-mono text-gray-800 break-all">
                            {withdrawData.destinationAddress}
                        </p>
                    </div>
                </div>
            </div>

            {/* Final Verification Warning */}
            <div className={`bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 transition-all duration-500 hover:shadow-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '300ms' }}>
                <p className="text-xs sm:text-sm font-semibold text-red-600 mb-2">⚠️ Final Verification</p>
                <p className="text-xs sm:text-sm text-gray-700">
                    This transaction cannot be reversed. Verify all details are correct before proceeding.
                </p>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
                <button
                    onClick={onBack}
                    className="w-full sm:flex-1 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg"
                >
                    Back
                </button>
                <button
                    onClick={onConfirm}
                    className="w-full sm:flex-1 py-2.5 sm:py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl"
                >
                    Confirm Withdrawal
                </button>
            </div>
        </div>
    );
}

