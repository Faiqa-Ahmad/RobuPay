'use client';

import React, { useState, useEffect } from 'react';
import { FaDollarSign, FaChartBar, FaUsers, FaFileInvoiceDollar, FaArrowUp, FaArrowDown, FaQrcode, FaLock, FaUserPlus, FaFileInvoice } from 'react-icons/fa';

export default function DashboardHome() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    const transactions = [
        { type: 'received', from: 'customer@email.com', amount: 400.00, time: '2 hours ago', status: 'Completed' },
        { type: 'sent', to: 'customer@email.com', amount: 1200.00, time: '2 hours ago', status: 'Pending' },
        { type: 'received', from: 'customer@email.com', amount: 400.00, time: '2 hours ago', status: 'Completed' },
        { type: 'sent', to: 'customer@email.com', amount: 1200.00, time: '2 hours ago', status: 'Pending' },
        { type: 'received', from: 'customer@email.com', amount: 400.00, time: '2 hours ago', status: 'Completed' },
        { type: 'sent', to: 'customer@email.com', amount: 1200.00, time: '2 hours ago', status: 'Pending' },
    ];

    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Stats Grid */}
            <div className="grid  grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* Total Revenue Card */}
                <div className={`bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: '100ms' }}>
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#018000] rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                            <img src="/auth/payment.png" alt="Revenue" className="p-2" />
                        </div>
                        <div className="flex items-center gap-1 text-[#018000] text-xs sm:text-sm font-semibold animate-pulse-slow">
                            <FaArrowUp className="text-xs" />
                            <span>16.5%</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">Total Revenue</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">$24,563.80</h3>
                    <p className="text-xs text-gray-500">+$2,868 from last month</p>
                </div>

                {/* Transactions Card */}
                <div className={`bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: '200ms' }}>
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3B82F6] rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                        <img src="/stats.png" alt="Revenue" className="p-2" />
                        </div>
                        <div className="flex items-center gap-1 text-[#018000] text-xs sm:text-sm font-semibold animate-pulse-slow">
                            <FaArrowUp className="text-xs" />
                            <span>8.2%</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">Transactions</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">1,247</h3>
                    <p className="text-xs text-gray-500">+659 from last month</p>
                </div>

                {/* Active Customers Card */}
                <div className={`bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: '300ms' }}>
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FCD34D] rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                        <img src="/twopersons.png" alt="Revenue" className="p-2" />
                        </div>
                        <div className="flex items-center gap-1 text-[#018000] text-xs sm:text-sm font-semibold animate-pulse-slow">
                            <FaArrowUp className="text-xs" />
                            <span>15.5%</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">Active Customers</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">453</h3>
                    <p className="text-xs text-gray-500">+56 new this month</p>
                </div>

                {/* Pending Invoices Card */}
                <div className={`bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: '400ms' }}>
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#10B981] rounded-lg flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                        <img src="/notes.png" alt="Revenue" className="p-2" />
                        </div>
                        <div className="flex items-center gap-1 text-[#018000] text-xs sm:text-sm font-semibold animate-pulse-slow">
                            <FaArrowUp className="text-xs" />
                            <span>13.5%</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">Pending Invoices</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">$24,563.80</h3>
                    <p className="text-xs text-gray-500">+$2,868 from last month</p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className={`bg-white rounded-xl border border-gray-200 p-4 sm:p-6 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '500ms' }}>
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 sm:gap-8">
                    {/* Recent Transactions */}
                    <div>
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-black">Recent Transactions</h3>
                            <button className="text-xs sm:text-sm text-gray-600 hover:text-[#018000] transition-colors">
                                View All →
                            </button>
                        </div>
                        <div className="space-y-1">
                            {transactions.map((transaction, index) => (
                                <div key={index} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 sm:py-1 px-2 sm:px-0 border-b border-gray-100 last:border-0 transition-all duration-300 hover:shadow-sm gap-2 sm:gap-0 ${
                                    transaction.status === 'Completed' ? 'bg-[#F5FCF6] hover:bg-[#e8f5e9]' : 'bg-white hover:bg-gray-50'
                                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                style={{ transitionDelay: `${600 + index * 100}ms` }}>
                                    <div className="flex items-center gap-2 sm:gap-4 sm:px-4 flex-1 min-w-0">
                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 flex-shrink-0 ${
                                            transaction.type === 'received' 
                                                ? 'bg-green-50' 
                                                : 'bg-blue-50'
                                        }`}>
                                            {transaction.type === 'received' ? (
                                                <FaArrowDown className="text-[#018000] text-sm sm:text-lg animate-bounce-slow" />
                                            ) : (
                                                <FaArrowUp className="text-[#3B82F6] text-sm sm:text-lg animate-bounce-slow" />
                                            )}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-semibold text-black text-xs sm:text-sm truncate">
                                                {transaction.type === 'received' ? 'Payment Received' : 'Invoice Sent'}
                                            </p>
                                            <p className="text-xs text-gray-500 truncate">
                                                {transaction.type === 'received' 
                                                    ? `From: ${transaction.from}` 
                                                    : `to: ${transaction.to}`
                                                } · {transaction.time}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-1 sm:flex-col sm:items-end sm:px-4 w-full sm:w-auto">
                                        <span className={`font-bold text-sm sm:text-base ${
                                            transaction.type === 'received' 
                                                ? 'text-[#018000]' 
                                                : 'text-black'
                                        }`}>
                                            {transaction.type === 'received' ? '+' : ''}${transaction.amount.toFixed(2)}
                                        </span>
                                        <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                                            transaction.status === 'Completed'
                                                ? 'bg-green-100 text-[#018000]'
                                                : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                            {transaction.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {/* Create Invoice */}
                            <button className={`p-4 sm:p-6 border border-gray-200 rounded-xl hover:border-[#018000] hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 ${
                                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`} style={{ transitionDelay: '800ms' }}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#018000] rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <img src="/transactions/card.png" alt="Revenue" className="p-2" />
                                </div>
                                <p className="font-bold text-black text-xs sm:text-sm mb-1 group-hover:text-[#018000] transition-colors">Create Invoice</p>
                                <p className="text-[10px] sm:text-xs text-gray-500">Send Payment Request</p>
                            </button>

                            {/* Payment QR */}
                            <button className={`p-4 sm:p-6 border border-gray-200 rounded-xl hover:border-[#018000] hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 ${
                                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`} style={{ transitionDelay: '900ms' }}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#018000] rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <img src="/link.png" alt="Revenue" className="p-2" />
                                </div>
                                <p className="font-bold text-black text-xs sm:text-sm mb-1 group-hover:text-[#018000] transition-colors">Payment QR</p>
                                <p className="text-[10px] sm:text-xs text-gray-500">Generate Payment QR Code</p>
                            </button>

                            {/* New Escrow */}
                            <button className={`p-4 sm:p-6 border border-gray-200 rounded-xl hover:border-[#018000] hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 ${
                                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`} style={{ transitionDelay: '1000ms' }}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#018000] rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <img src="/auth/security.png" alt="Revenue" className="p-2" />
                                </div>
                                <p className="font-bold text-black text-xs sm:text-sm mb-1 group-hover:text-[#018000] transition-colors">New Escrow</p>
                                <p className="text-[10px] sm:text-xs text-gray-500">Protected transaction</p>
                            </button>

                            {/* Add Customer */}
                            <button className={`p-4 sm:p-6 border border-gray-200 rounded-xl hover:border-[#018000] hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 ${
                                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`} style={{ transitionDelay: '1100ms' }}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#018000] rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <img src="/twopersons.png" alt="Revenue" className="p-2" />
                                </div>
                                <p className="font-bold text-black text-xs sm:text-sm mb-1 group-hover:text-[#018000] transition-colors">Add Customer</p>
                                <p className="text-[10px] sm:text-xs text-gray-500">Manage contacts</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

