'use client';
import React, { useState, useEffect } from 'react';
export default function Step1SelectCrypto({ onContinue, onCancel, depositData }) {
    const [cryptocurrency, setCryptocurrency] = useState(depositData.cryptocurrency);
    const [network, setNetwork] = useState(depositData.network);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleContinue = () => {
        onContinue({ cryptocurrency, network });
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-4 sm:p-6 md:p-8 animate-[slideIn_0.3s_ease-out]">
            {/* Header */}
            <div className={`mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <h2 className="text-xl sm:text-2xl font-bold text-black flex items-center gap-2 mb-1 sm:mb-2">
                    <span className="text-xl sm:text-2xl animate-bounce-slow">💳</span>
                    Deposit Cryptocurrency
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm">Add funds to your RobuPay wallet in 3 simple steps</p>
            </div>

            {/* Progress Steps */}
            <div className={`flex items-center justify-center mb-6 sm:mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '100ms' }}>
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Step 1 - Active */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg animate-pulse-slow">
                            1
                        </div>
                    </div>
                    <div className="w-12 sm:w-20 h-1 bg-gray-300 transition-all duration-500"></div>
                    {/* Step 2 - Inactive */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-110">
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

            {/* Select Cryptocurrency */}
            <div className={`mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '200ms' }}>
                <label className="block text-xs sm:text-sm font-semibold text-black mb-2">
                    Select Cryptocurrency <span className="text-gray-500 font-normal text-xs sm:text-sm">(what you want to send)</span>
                </label>
                <select
                    value={cryptocurrency}
                    onChange={(e) => setCryptocurrency(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#018000] transition-colors text-black bg-white appearance-none cursor-pointer shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)] hover:scale-[1.01] text-xs sm:text-base"
                >
                    <option value="USDC">USDC</option>
                    <option value="USDT">USDT</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                </select>

                {/* Info Box for Cryptocurrency */}
                <div className="mt-2 sm:mt-3 bg-green-50 border-l-4 border-[#018000] p-3 sm:p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                    <p className="text-xs sm:text-sm text-gray-700">
                        💡 USD Coin is a stablecoin pegged to the US Dollar. Recommended for stability.
                    </p>
                </div>
            </div>

            {/* Select Network */}
            <div className={`mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '300ms' }}>
                <label className="block text-xs sm:text-sm font-semibold text-black mb-2">
                    Select Network <span className="text-gray-500 font-normal text-xs sm:text-sm">(which blockchain to use)</span>
                </label>
                <select
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#018000] transition-colors text-black bg-white appearance-none cursor-pointer shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)] hover:scale-[1.01] text-xs sm:text-base"
                >
                    <option value="Ethereum (ERC-20) - Secure, most popular">Ethereum (ERC-20) - Secure, most popular</option>
                    <option value="Polygon (MATIC) - Fast, low fees">Polygon (MATIC) - Fast, low fees</option>
                    <option value="Binance Smart Chain (BEP-20) - Low cost">Binance Smart Chain (BEP-20) - Low cost</option>
                    <option value="Solana - Ultra fast">Solana - Ultra fast</option>
                </select>

                {/* Info Box for Network */}
                <div className="mt-2 sm:mt-3 bg-green-50 border-l-4 border-[#018000] p-3 sm:p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                    <p className="text-xs sm:text-sm text-gray-700">
                        💡 Most secure and widely supported. Standard gas fees apply (~$5-15).
                    </p>
                </div>
            </div>

            {/* What's the difference? */}
            <div className={`mb-6 sm:mb-8 bg-green-50 border-l-4 border-[#018000] p-3 sm:p-4 rounded-lg transition-all duration-500 hover:shadow-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
                <p className="text-xs sm:text-sm font-semibold text-[#018000] mb-2">✨ What's the difference?</p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span><strong>Cryptocurrency:</strong> The token you're sending (USDC, ETH, BTC, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span><strong>Network:</strong> The blockchain that processes your transaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#018000] mt-0.5">•</span>
                        <span><strong>Make sure your exchange/wallet supports the network you select</strong></span>
                    </li>
                </ul>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
                <button
                    onClick={onCancel}
                    className="w-full sm:flex-1 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg"
                >
                    Cancel
                </button>
                <button
                    onClick={handleContinue}
                    className="w-full sm:flex-1 py-2.5 sm:py-3 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}

