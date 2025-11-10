'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        router.push('/signin');
    };
    const handleLogin2 = () => {
        router.push('/signup');
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#F0F7EB] z-50 py-2 px-2 sm:px-4">
            <div className="mx-auto bg-white flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 rounded-full shadow-[0px_4px_4px_0px_#01800040] mx-2 sm:mx-4 md:mx-20 mt-3 sm:mt-6 transition-all duration-300">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="relative w-[140px] h-[45px] sm:w-[170px] sm:h-[53px] md:w-[203px] md:h-[63px] transition-all">
                        <Image
                            src="/robupay-logo.png"
                            alt="RobuPay Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-[18px] xl:text-[20px] font-semibold text-black">
                    <a href="#" className="hover:text-[#018000] transition-colors duration-200">
                        Personal
                    </a>
                    <a href="#" className="hover:text-[#018000] transition-colors duration-200">
                        Business
                    </a>
                    <a href="#" className="hover:text-[#018000] transition-colors duration-200">
                        Pricing
                    </a>
                    <a href="#" className="hover:text-[#018000] transition-colors duration-200">
                        Developer
                    </a>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center space-x-3">
                    <button 
                        onClick={handleLogin}
                        className="px-6 xl:px-10 py-2 border-2 border-[#018000] text-[#018000] rounded-full hover:bg-green-50 transition-all duration-300 text-[16px] xl:text-[18px] font-semibold hover:scale-105 active:scale-95"
                    >
                        Login
                    </button>
                    <button onClick={handleLogin2} className="px-6 xl:px-10 py-2 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 text-[16px] xl:text-[18px] font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
                        
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden text-[#018000] text-2xl p-2 transition-transform duration-200 active:scale-95"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden bg-white mx-2 sm:mx-4 md:mx-20 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <nav className="flex flex-col px-6 py-4 space-y-4">
                    <a href="#" className="text-[18px] font-semibold text-black hover:text-[#018000] transition-colors duration-200 py-2 border-b border-gray-100">
                        Personal
                    </a>
                    <a href="#" className="text-[18px] font-semibold text-black hover:text-[#018000] transition-colors duration-200 py-2 border-b border-gray-100">
                        Business
                    </a>
                    <a href="#" className="text-[18px] font-semibold text-black hover:text-[#018000] transition-colors duration-200 py-2 border-b border-gray-100">
                        Pricing
                    </a>
                    <a href="#" className="text-[18px] font-semibold text-black hover:text-[#018000] transition-colors duration-200 py-2 border-b border-gray-100">
                        Developer
                    </a>
                    <div className="flex flex-col space-y-3 pt-4">
                        <button 
                            onClick={handleLogin}
                            className="w-full py-3 border-2 border-[#018000] text-[#018000] rounded-full hover:bg-green-50 transition-all duration-300 text-[16px] font-semibold active:scale-95"
                        >
                            Login
                        </button>
                        <button className="w-full py-3 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 text-[16px] font-semibold shadow-md active:scale-95">
                            Sign Up
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
