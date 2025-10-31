import React from 'react';
import Image from 'next/image';

const IntegratedSuite = () => {
    return (
        <section className="relative py-16 px-20 bg-white overflow-hidden ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <div className="relative w-[250px] h-[80px]">
                                <Image
                                    src="/robupay-logo.png"
                                    alt="RobuPay Logo"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-[32px] md:text-[40px] lg:text-[42px] leading-[60px] tracking-[0] font-bold text-black leading-tight font-baloo">
                            A Fully integrated suite of financial and payments products
                        </h2>

                        {/* Description */}
                        <p className="text-[16px] md:text-[18px] text-gray-800 leading-relaxed">
                            Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4 flex justify-center">
                            <button className="px-16 py-3 bg-[#018000] text-white text-[18px] font-semibold rounded-full  transition-all duration-300 shadow-lg hover:shadow-xl">
                                Pay with RobuPay
                            </button>
                        </div>
                    </div>

                    {/* Right Video Content */}
                    <div className="relative">
                        
                        
                        {/* Video Container */}
                        <div className="relative z-10  overflow-hidden  bg-white ">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto rounded-2xl"
                            >
                                <source src="/personal/pay.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Floating Icons - Decorative */}
                        <div className="absolute top-10 right-0 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
                        </div>
                        
                        <div className="absolute bottom-20 left-0 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float-delayed">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegratedSuite;

