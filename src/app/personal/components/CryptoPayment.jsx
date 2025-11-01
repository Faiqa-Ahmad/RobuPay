'use client';

import React from 'react';
import Image from 'next/image';

const CryptoPayment = () => {
    return (
        <section className="relative py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-10 bg-[#F0F7EB] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-6 sm:mb-8 md:mb-10 px-2">
                    <h2 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold text-black leading-tight font-baloo">
                        Pay and Check out in 120+ Cryptocurrencies.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
                    {/* Left Side - Crypto Icons with Button */}
                    <div className="relative flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
                        {/* Crypto Icons Image with animation */}
                        <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px] h-[280px] sm:h-[330px] md:h-[350px] transition-all duration-500 hover:scale-105">
                            <Image
                                src="/personal/paywithrobupay.png"
                                alt="120+ Cryptocurrencies"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>

                        {/* CTA Button positioned below crypto icons */}
                        <div className="flex justify-center">
                            <button className="px-10 sm:px-12 md:px-14 lg:px-16 py-2 sm:py-2.5 md:py-3 bg-[#018000] text-white text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:bg-[#016500] hover:scale-105 active:scale-95">
                                Pay with RobuPay
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Phone Mockup with Person */}
                    <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                        {/* Phone and Person Image with animation */}
                        <div className="relative w-full max-w-[450px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[753px] h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px] transition-all duration-500 hover:scale-[1.02]">
                            <Image
                                src="/personal/paycheckout.png"
                                alt="Pay with RobuPay - Coming Soon"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CryptoPayment;
