import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-[#F0F7EB] z-50 py-2">
           
            <div className=" mx-auto bg-white  flex items-center justify-between px-6 py-4 rounded-full shadow-[0px_4px_4px_0px_#01800040] mx-4 md:mx-20 mt-6 ">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="relative w-[203px] h-[63px]">
                        <Image
                            src="/robupay-logo.png"
                            alt="RobuPay Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>


                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 text-[20px] font-semibold text-black">
                    <a href="#" className=" ">
                        Personal
                    </a>
                    <a href="#" className=" ">
                        Business
                    </a>
                    <a href="#" className=" ">
                        Pricing
                    </a>
                    <a href="#" className=" ">
                        Developer
                    </a>
                </nav>

                {/* Buttons */}
                <div className="flex items-center space-x-3">
                    <button className="px-10 py-2 border-2 border-[#018000] text-[#018000] rounded-full hover:bg-green-50 transition">
                        Login
                    </button>
                    <button className="px-10 py-2 bg-[#018000] text-white rounded-full  transition">
                        Sign Up
                    </button>
                </div>
            </div>
            
        </header>
    );
};

export default Header;