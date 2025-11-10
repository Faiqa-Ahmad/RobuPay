'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch, FaEllipsisV } from 'react-icons/fa';

export default function CustomersPage() {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const tabs = ['All', 'VIP', 'Regular', 'New'];

    const customers = [
        { name: 'Sarah Johnson', company: 'Tech Solutions LTD', email: 'Sarahjohnson@gmail.com', phone: '+234 810 385 5393', totalSent: 12874, status: 'VIP' },
        { name: 'Sarah Johnson', company: 'Tech Solutions LTD', email: 'Sarahjohnson@gmail.com', phone: '+234 810 385 5393', totalSent: 12874, status: 'VIP' },
        { name: 'Sarah Johnson', company: 'Tech Solutions LTD', email: 'Sarahjohnson@gmail.com', phone: '+234 810 385 5393', totalSent: 12874, status: 'VIP' },
        { name: 'Sarah Johnson', company: 'Tech Solutions LTD', email: 'Sarahjohnson@gmail.com', phone: '+234 810 385 5393', totalSent: 12874, status: 'VIP' },
        { name: 'Sarah Johnson', company: 'Tech Solutions LTD', email: 'Sarahjohnson@gmail.com', phone: '+234 810 385 5393', totalSent: 12874, status: 'VIP' },
        { name: 'Sarah Johnson', company: 'Tech Solutions LTD', email: 'Sarahjohnson@gmail.com', phone: '+234 810 385 5393', totalSent: 12874, status: 'VIP' },
        { name: 'Sarah Johnson', company: 'Tech Solutions LTD', email: 'Sarahjohnson@gmail.com', phone: '+234 810 385 5393', totalSent: 12874, status: 'VIP' },
        { name: 'Sarah Johnson', company: 'Tech Solutions LTD', email: 'Sarahjohnson@gmail.com', phone: '+234 810 385 5393', totalSent: 12874, status: 'VIP' },
    ];

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('');
    };

    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Header */}
            <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
                <h1 className="text-2xl sm:text-3xl font-bold text-black">Customers</h1>
                <button className="w-full sm:w-auto px-6 py-2 sm:py-1.5 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 shadow-md">
                    <span className="text-xl">+</span>
                    <span className="font-semibold">Add Customer</span>
                </button>
            </div>

            {/* Search and Filter Section */}
            <div className={`bg-white rounded-t-xl border border-b-0 border-gray-200 p-3 sm:p-4 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '100ms' }}>
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4">
                    {/* Search Bar */}
                    <div className="relative flex-1 lg:max-w-xl">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search customers..."
                            className="w-full pl-4 pr-12 py-2.5 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#018000] focus:border-transparent transition-all duration-300"
                        />
                        <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#018000] text-white w-9 h-9 rounded-full hover:bg-[#016500] transition-all duration-300 hover:scale-110 hover:rotate-12 flex items-center justify-center">
                            <FaSearch className="text-sm" />
                        </button>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide lg:ml-auto">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 sm:px-5 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm sm:text-base hover:scale-105 ${
                                    activeTab === tab
                                        ? 'bg-[#018000] text-white shadow-lg scale-105'
                                        : 'bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-[#018000]'
                                }`}
                                style={{
                                    animation: isVisible ? `slideIn 0.3s ease-out ${200 + index * 50}ms both` : 'none'
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop Table View - Hidden on Mobile */}
            <div className={`hidden md:block bg-white rounded-b-xl border border-gray-200 overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className='text-center'>
                            <tr className="bg-[#018000] text-white">
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold first:rounded-l-full text-sm lg:text-base">Customer</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Email</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Phone</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Total Sent</th>
                                <th className="text-left py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base">Status</th>
                                <th className="text-left py-3 px-2 lg:px-4 font-semibold last:rounded-r-full text-sm lg:text-base">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => (
                                <tr 
                                    key={index} 
                                    className={`text-black transition-all duration-300 bg-[#F5FCF6] border-b border-[#018000] hover:bg-green-100 hover:shadow-lg hover:scale-[1.01] cursor-pointer ${
                                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                    }`}
                                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                                >
                                    <td className="py-3 px-3 lg:px-6">
                                        <div className="flex items-center gap-2 lg:gap-3">
                                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#018000] rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg">
                                                {getInitials(customer.name)}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-semibold text-black text-sm lg:text-base truncate">{customer.name}</p>
                                                <p className="text-xs text-gray-600 truncate">{customer.company}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-3 lg:px-6 text-sm lg:text-base"><span className="block truncate max-w-[150px] xl:max-w-none">{customer.email}</span></td>
                                    <td className="py-3 px-3 lg:px-6 text-sm lg:text-base whitespace-nowrap">{customer.phone}</td>
                                    <td className="py-3 px-3 lg:px-6 font-semibold text-sm lg:text-base text-[#018000]">${customer.totalSent.toLocaleString()}</td>
                                    <td className="py-3 px-3 lg:px-6">
                                        <span className="px-3 lg:px-4 py-1 lg:py-1.5 bg-[#FF961633] text-[#FF9616] rounded-lg text-xs lg:text-sm font-medium inline-block transition-all duration-300 hover:scale-110 hover:shadow-md">
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-2 lg:px-4 text-center">
                                        <button className="text-gray-600 hover:text-[#018000] transition-all duration-300 p-2 hover:scale-125 hover:rotate-90">
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
                {customers.map((customer, index) => (
                    <div 
                        key={index} 
                        className={`bg-[#F5FCF6] border-2 border-[#018000] rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${400 + index * 80}ms` }}
                    >
                        {/* Customer Info */}
                        <div className="flex items-start gap-3 mb-3">
                            <div className="w-12 h-12 bg-[#018000] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg">
                                {getInitials(customer.name)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-black text-base">{customer.name}</p>
                                        <p className="text-xs text-gray-600">{customer.company}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-[#FF961633] text-[#FF9616] rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 hover:scale-110 hover:shadow-md animate-pulse-slow">
                                        {customer.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-2 mb-3 pb-3 border-b border-[#018000]/30">
                            <div className="flex items-center justify-between group">
                                <span className="text-xs text-gray-600">Email:</span>
                                <span className="text-sm text-black font-medium truncate ml-2 group-hover:text-[#018000] transition-colors duration-300">{customer.email}</span>
                            </div>
                            <div className="flex items-center justify-between group">
                                <span className="text-xs text-gray-600">Phone:</span>
                                <span className="text-sm text-black font-medium group-hover:text-[#018000] transition-colors duration-300">{customer.phone}</span>
                            </div>
                        </div>

                        {/* Total Sent & Action */}
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-gray-600 block mb-1">Total Sent</span>
                                <span className="text-lg font-bold text-[#018000] animate-pulse-slower">${customer.totalSent.toLocaleString()}</span>
                            </div>
                            <button className="text-gray-600 hover:text-[#018000] transition-all duration-300 p-2 hover:scale-125 hover:rotate-90">
                                <FaEllipsisV />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

