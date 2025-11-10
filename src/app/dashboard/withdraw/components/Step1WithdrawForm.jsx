'use client';

import React, { useState, useEffect } from 'react';

export default function Step1WithdrawForm({ onContinue, onCancel, withdrawData }) {
    const [cryptocurrency, setCryptocurrency] = useState(withdrawData.cryptocurrency);
    const [network, setNetwork] = useState('Ethereum (ERC-20) - Secure, most popular');
    const [amount, setAmount] = useState('0.00');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const availableBalance = parseFloat(withdrawData.availableBalance.replace(',', ''));

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handlePercentageClick = (percentage) => {
        const calculatedAmount = (availableBalance * percentage / 100).toFixed(2);
        setAmount(calculatedAmount);
    };

    const networkFee = 2.00;
    const withdrawalAmount = parseFloat(amount) || 0;
    const youWillReceive = Math.max(0, withdrawalAmount - networkFee).toFixed(2);

    const handleContinue = () => {
        onContinue({
            cryptocurrency,
            network: network.split(' - ')[0],
            amount: withdrawalAmount.toFixed(2),
            destinationAddress,
            networkFee: networkFee.toFixed(2),
            youWillReceive
        });
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-4 sm:p-6 md:p-8 animate-[slideIn_0.3s_ease-out] transition-all duration-300">
            {/* Header */}
            <div className={`mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 sm:mb-2">
                    <span className="animate-bounce-slow">💸</span> Withdraw Cryptocurrency
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm">Transfer funds from your RobuPay wallet</p>
            </div>

            {/* Progress Steps */}
            <div className={`flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '100ms' }}>
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Step 1 - Active */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#018000] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg animate-pulse-slow">
                        1
                    </div>
                    <div className="w-12 sm:w-20 h-1 bg-gray-300 transition-all duration-500"></div>
                    {/* Step 2 - Inactive */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-110">
                        2
                    </div>
                    <div className="w-12 sm:w-20 h-1 bg-gray-300 transition-all duration-500"></div>
                    {/* Step 3 - Inactive */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-110">
                        3
                    </div>
                </div>
            </div>

            {/* Available Balance */}
            <div className={`bg-green-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 text-center border-2 border-green-200 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Available Balance</p>
                <p className="text-2xl sm:text-3xl font-bold text-[#018000] transition-all duration-300 animate-pulse-slower">${withdrawData.availableBalance}</p>
            </div>

            {/* Select Cryptocurrency */}
            <div className={`mb-3 sm:mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '300ms' }}>
                <label className="block text-xs sm:text-sm font-semibold text-black mb-2">
                    Select Cryptocurrency
                </label>
                <select
                    value={cryptocurrency}
                    onChange={(e) => setCryptocurrency(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#018000] transition-all duration-300 text-black bg-white appearance-none cursor-pointer text-xs sm:text-base shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)] hover:scale-[1.01]"
                >
                    <option value="USDC">USDC</option>
                    <option value="USDT">USDT</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                </select>
            </div>

            {/* Select Network */}
            <div className={`mb-3 sm:mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '350ms' }}>
                <label className="block text-xs sm:text-sm font-semibold text-black mb-2">
                    Select Network
                </label>
                <select
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#018000] transition-all duration-300 text-black bg-white appearance-none cursor-pointer text-xs sm:text-base shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)] hover:scale-[1.01]"
                >
                    <option value="Ethereum (ERC-20) - Secure, most popular">Ethereum (ERC-20) - Secure, most popular</option>
                    <option value="Polygon (MATIC) - Fast, low fees">Polygon (MATIC) - Fast, low fees</option>
                    <option value="Binance Smart Chain (BEP-20) - Low cost">Binance Smart Chain (BEP-20) - Low cost</option>
                    <option value="Solana - Ultra fast">Solana - Ultra fast</option>
                </select>
            </div>

            {/* Withdrawal Amount */}
            <div className={`mb-3 sm:mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
                <label className="block text-xs sm:text-sm font-semibold text-black mb-2">
                    Withdrawal Amount (USD)
                </label>
                <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#018000] transition-all duration-300 text-black bg-white text-xs sm:text-base shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                />
                
                {/* Percentage Buttons */}
                <div className="flex gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    {[20, 40, 60, 80, 100].map((percentage, index) => (
                        <button
                            key={percentage}
                            onClick={() => handlePercentageClick(percentage)}
                            className={`flex-1 py-1.5 sm:py-2 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-[#018000] hover:text-white hover:border-[#018000] hover:scale-110 transition-all duration-300 text-xs sm:text-sm font-semibold ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ transitionDelay: `${450 + index * 30}ms` }}
                        >
                            {percentage}%
                        </button>
                    ))}
                </div>
            </div>

            {/* Destination Wallet Address */}
            <div className={`mb-3 sm:mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '600ms' }}>
                <label className="block text-xs sm:text-sm font-semibold text-black mb-2">
                    Destination Wallet Address
                </label>
                <input
                    type="text"
                    value={destinationAddress}
                    onChange={(e) => setDestinationAddress(e.target.value)}
                    placeholder="0x... or wallet address"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#018000] transition-all duration-300 text-black bg-white text-xs sm:text-sm shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                />
            </div>

            {/* Withdrawal Summary */}
            <div className={`bg-gray-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border border-gray-200 transition-all duration-500 hover:shadow-md ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '650ms' }}>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs sm:text-sm text-gray-600">Withdrawal Amount</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#018000] transition-all duration-300">${withdrawalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-2 sm:mb-3 pb-2 sm:pb-3 border-b border-gray-200">
                    <span className="text-xs sm:text-sm text-gray-600">Network Fee</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">${networkFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center bg-[#018000] text-white rounded-lg p-2 sm:p-3 transition-all duration-300 hover:bg-[#016500] hover:scale-105">
                    <span className="text-xs sm:text-sm font-semibold">You will receive</span>
                    <span className="text-base sm:text-lg font-bold transition-all duration-300">${youWillReceive}</span>
                </div>
            </div>

            {/* Important Warning */}
            <div className={`bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 transition-all duration-500 hover:shadow-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '700ms' }}>
                <p className="text-xs sm:text-sm font-semibold text-red-600 mb-2">⚠️ Important!</p>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>Double-check your wallet address</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>Transactions cannot be reversed</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>Minimum $20 to withdraw</span>
                    </li>
                </ul>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '750ms' }}>
                <button
                    onClick={onCancel}
                    className="w-full sm:flex-1 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg"
                >
                    Cancel
                </button>
                <button
                    onClick={handleContinue}
                    disabled={!amount || parseFloat(amount) < 20 || !destinationAddress}
                    className="w-full sm:flex-1 py-2.5 sm:py-3 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    Review Withdrawal
                </button>
            </div>
        </div>
    );
}

