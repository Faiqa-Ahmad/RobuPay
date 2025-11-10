'use client';

import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function RecentTransactions() {
    const transactions = [
        {
            type: 'received',
            from: 'Sarah',
            time: 'Today, 2:45PM',
            amount: 400.00
        },
        {
            type: 'sent',
            to: 'Micheal',
            time: 'Yesterday, 5:20PM',
            amount: 1200.00
        },
        {
            type: 'received',
            from: 'Sarah',
            time: 'Today, 2:45PM',
            amount: 400.00
        },
        {
            type: 'sent',
            to: 'Micheal',
            time: 'Yesterday, 5:20PM',
            amount: 1200.00
        },
        {
            type: 'received',
            from: 'Sarah',
            time: 'Today, 2:45PM',
            amount: 400.00
        },
        {
            type: 'sent',
            to: 'Micheal',
            time: 'Yesterday, 5:20PM',
            amount: 1200.00
        },
    ];

    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-black">Recent Transactions</h3>
                <button className="text-sm text-[#018000] font-semibold hover:underline transition-all">
                    View All →
                </button>
            </div>

            <div className="space-y-3">
                {transactions.map((transaction, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-1 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
                    >
                        <div className="flex items-center gap-4">
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                                transaction.type === 'received'
                                    ? 'bg-green-100'
                                    : 'bg-red-100'
                            }`}>
                                {transaction.type === 'received' ? (
                                    <FaArrowDown className="text-[#018000] text-lg" />
                                ) : (
                                    <FaArrowUp className="text-red-500 text-lg" />
                                )}
                            </div>

                            {/* Transaction Details */}
                            <div>
                                <p className="font-semibold text-gray-900 text-base mb-1">
                                    {transaction.type === 'received' 
                                        ? `Received from ${transaction.from}`
                                        : `Sent to ${transaction.to}`
                                    }
                                </p>
                                <p className="text-sm text-gray-500">{transaction.time}</p>
                            </div>
                        </div>

                        {/* Amount */}
                        <div className={`text-lg font-bold ${
                            transaction.type === 'received'
                                ? 'text-[#018000]'
                                : 'text-red-500'
                        }`}>
                            {transaction.type === 'received' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

