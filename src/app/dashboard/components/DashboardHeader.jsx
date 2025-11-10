'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaBell, FaCog, FaBars, FaSearch } from 'react-icons/fa';

export default function DashboardHeader({ onMenuToggle }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-black text-white h-16 z-50 flex items-center px-3 sm:px-6 shadow-lg">
            <div className="flex items-center justify-between w-full gap-2">
                {/* Mobile Menu Button & Logo */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Hamburger Menu - Mobile Only */}
                    <button
                        onClick={onMenuToggle}
                        className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
                        aria-label="Toggle menu"
                    >
                        <FaBars className="text-xl" />
                    </button>

                    {/* Logo */}
                    <div className="relative w-[100px] sm:w-[140px] h-[35px] sm:h-[45px]">
                        <Image
                            src="/signin-image.png"
                            alt="RobuPay Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Desktop Search Bar */}
                <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8">
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search transactions, invoices..."
                            className="w-full bg-white text-black rounded-full px-4 lg:px-6 py-2 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#018000] transition-all duration-300"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#018000] text-white rounded-full p-2 hover:bg-[#016500] transition-all duration-300 hover:scale-110">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Mobile Search Toggle */}
                    <button
                        onClick={() => setShowSearch(!showSearch)}
                        className="md:hidden p-2 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
                    >
                        <FaSearch className="text-lg" />
                    </button>

                    {/* Notifications */}
                    <button className="relative p-2 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110">
                        <FaBell className="text-lg sm:text-xl" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    </button>

                    {/* Settings - Hidden on small mobile */}
                    <button className="hidden sm:block p-2 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110">
                        <FaCog className="text-lg sm:text-xl" />
                    </button>

                    {/* User Profile */}
                    <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-gray-700">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#018000] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-110 cursor-pointer">
                            EJ
                        </div>
                        <div className="hidden lg:block">
                            <p className="text-sm font-semibold">Emma Jones</p>
                            <p className="text-xs text-gray-400">Business Owner</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Search Dropdown */}
            {showSearch && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-black p-3 shadow-lg animate-[slideIn_0.3s_ease-out] border-t border-gray-800">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search transactions, invoices..."
                            className="w-full bg-white text-black rounded-full px-4 py-2 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#018000]"
                            autoFocus
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#018000] text-white rounded-full p-2 hover:bg-[#016500] transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

