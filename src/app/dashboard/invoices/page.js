'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaEllipsisV } from 'react-icons/fa';

export default function InvoicesPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const tabs = ['All', 'Draft', 'Open', 'Past Due', 'Paid'];

    const invoices = [
        { amount: 5000, invoiceNumber: '61DGHE562-001', customerName: 'John Doe', customerEmail: 'Johndoe@gmail.com', dueDate: 'Nov 19 2025', created: 'Oct 7, 1:08PM', status: 'Open', finalized: '------------' },
        { amount: 5000, invoiceNumber: '61DGHE562-001', customerName: 'John Doe', customerEmail: 'Johndoe@gmail.com', dueDate: 'Nov 19 2025', created: 'Oct 7, 1:08PM', status: 'Open', finalized: '------------' },
        { amount: 5000, invoiceNumber: '61DGHE562-001', customerName: 'John Doe', customerEmail: 'Johndoe@gmail.com', dueDate: 'Nov 19 2025', created: 'Oct 7, 1:08PM', status: 'Open', finalized: '------------' },
        { amount: 5000, invoiceNumber: '61DGHE562-001', customerName: 'John Doe', customerEmail: 'Johndoe@gmail.com', dueDate: 'Nov 19 2025', created: 'Oct 7, 1:08PM', status: 'Open', finalized: '------------' },
        { amount: 5000, invoiceNumber: '61DGHE562-001', customerName: 'John Doe', customerEmail: 'Johndoe@gmail.com', dueDate: 'Nov 19 2025', created: 'Oct 7, 1:08PM', status: 'Open', finalized: '------------' },
        { amount: 5000, invoiceNumber: '61DGHE562-001', customerName: 'John Doe', customerEmail: 'Johndoe@gmail.com', dueDate: 'Nov 19 2025', created: 'Oct 7, 1:08PM', status: 'Open', finalized: '------------' },
        { amount: 5000, invoiceNumber: '61DGHE562-001', customerName: 'John Doe', customerEmail: 'Johndoe@gmail.com', dueDate: 'Nov 19 2025', created: 'Oct 7, 1:08PM', status: 'Open', finalized: '------------' },
        { amount: 5000, invoiceNumber: '61DGHE562-001', customerName: 'John Doe', customerEmail: 'Johndoe@gmail.com', dueDate: 'Nov 19 2025', created: 'Oct 7, 1:08PM', status: 'Open', finalized: '------------' },
    ];

    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-black">Invoices</h1>
                <button 
                    onClick={() => router.push('/dashboard/create')}
                    className="w-full sm:w-auto px-6 py-2 sm:py-1.5 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-md"
                >
                    <span className="text-xl">+</span>
                    <span className="font-semibold">Create Invoice</span>
                </button>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white rounded-t-xl border border-b-0 border-gray-200 p-3 sm:p-4">
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4">
                    {/* Search Bar */}
                    <div className="relative flex-1 lg:max-w-xl">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search invoices!"
                            className="w-full pl-4 pr-12 py-2.5 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#018000] focus:border-transparent"
                        />
                        <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#018000] text-white w-9 h-9 rounded-full hover:bg-[#016500] transition-colors flex items-center justify-center">
                            <FaSearch className="text-sm" />
                        </button>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide lg:ml-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 sm:px-5 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                                    activeTab === tab
                                        ? 'bg-[#018000] text-white'
                                        : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop Table View - Hidden on Mobile */}
            <div className="hidden md:block bg-white rounded-b-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#018000] text-white">
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold first:rounded-l-full text-sm lg:text-base">Amount</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Invoice Number</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Customer name</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Customer Email</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Due Date</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Created</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Status</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Finalized on</th>
                                <th className="text-left py-3 px-2 lg:px-4 font-semibold last:rounded-r-full text-sm lg:text-base"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice, index) => (
                                <tr key={index} className="text-black transition-all duration-200 bg-[#F5FCF6] border-b border-[#018000] text-center hover:bg-green-100 hover:shadow-md">
                                    <td className="py-2 px-2 lg:px-3 text-sm lg:text-base">${invoice.amount.toLocaleString()}</td>
                                    <td className="py-2 px-2 lg:px-3 text-sm lg:text-base">{invoice.invoiceNumber}</td>
                                    <td className="py-2 px-2 lg:px-3 text-sm lg:text-base">{invoice.customerName}</td>
                                    <td className="py-2 px-2 lg:px-3 text-sm lg:text-base"><span className="block truncate max-w-[120px] xl:max-w-none">{invoice.customerEmail}</span></td>
                                    <td className="py-2 px-2 lg:px-3 text-sm lg:text-base whitespace-nowrap">{invoice.dueDate}</td>
                                    <td className="py-2 px-2 lg:px-3 text-sm lg:text-base whitespace-nowrap">{invoice.created}</td>
                                    <td className="py-2 px-2 lg:px-3">
                                        <span className="px-3 lg:px-4 py-1 lg:py-1.5 bg-[#0180004D] text-black rounded-lg text-xs lg:text-sm font-medium inline-block">
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-3 lg:px-6 text-gray-400 text-xs lg:text-sm">{invoice.finalized}</td>
                                    <td className="py-4 px-2 lg:px-4">
                                        <button className="text-gray-600 hover:text-[#018000] transition-colors p-2">
                                            <FaEllipsisV />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Card View - Hidden on Desktop */}
            <div className="md:hidden space-y-3">
                {invoices.map((invoice, index) => (
                    <div key={index} className="bg-[#F5FCF6] border-2 border-[#018000] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                        {/* Amount and Status */}
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <p className="text-xs text-gray-600 mb-1">Amount</p>
                                <h3 className="text-2xl font-bold text-[#018000]">${invoice.amount.toLocaleString()}</h3>
                            </div>
                            <span className="px-3 py-1.5 bg-[#0180004D] text-black rounded-lg text-xs font-medium">
                                {invoice.status}
                            </span>
                        </div>

                        {/* Invoice Details */}
                        <div className="space-y-2 mb-3 pb-3 border-b border-[#018000]/30">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Invoice #:</span>
                                <span className="font-semibold text-black">{invoice.invoiceNumber}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Customer:</span>
                                <span className="font-semibold text-black">{invoice.customerName}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Email:</span>
                                <span className="font-semibold text-black truncate ml-2">{invoice.customerEmail}</span>
                            </div>
                        </div>

                        {/* Dates and Action */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-600">Due Date:</span>
                                <span className="text-black font-medium">{invoice.dueDate}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-600">Created:</span>
                                <span className="text-black font-medium">{invoice.created}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-[#018000]/30">
                                <span className="text-xs text-gray-600">Finalized: <span className="text-gray-400">{invoice.finalized}</span></span>
                                <button className="text-gray-600 hover:text-[#018000] transition-colors p-2">
                                    <FaEllipsisV />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

