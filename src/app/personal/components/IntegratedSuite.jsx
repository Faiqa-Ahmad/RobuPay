'use client';

import React from 'react';
import Image from 'next/image';

const IntegratedSuite = () => {
    return (
        <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
                        {/* Logo */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative w-[200px] h-[65px] sm:w-[230px] sm:h-[75px] md:w-[250px] md:h-[80px] transition-all duration-300 hover:scale-105">
                                <Image
                                    src="/robupay-logo.png"
                                    alt="RobuPay Logo"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-tight font-bold text-black font-baloo">
                            A Fully integrated suite of financial and payments products
                        </h2>

                        {/* Description */}
                        <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-gray-800 leading-relaxed">
                            Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4 flex justify-center lg:justify-start">
                            <button className="px-12 sm:px-14 md:px-16 py-2.5 sm:py-3 bg-[#018000] text-white text-[16px] sm:text-[17px] md:text-[18px] font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:bg-[#016500] hover:scale-105 active:scale-95">
                                Pay with RobuPay
                            </button>
                        </div>
                    </div>

                    {/* Right Video Content */}
                    <div className="relative order-1 lg:order-2">
                        {/* Video Container */}
                        <div className="relative z-10 overflow-hidden bg-white transition-transform duration-500 hover:scale-[1.02]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto rounded-2xl shadow-xl"
                            >
                                <source src="/personal/pay.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Floating Icons - Decorative with animation */}
                        <div className="absolute top-6 sm:top-10 -right-2 sm:right-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float z-20">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
                        </div>
                        
                        <div className="absolute bottom-16 sm:bottom-20 -left-2 sm:left-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float-delayed z-20">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegratedSuite;
