import React from 'react';
import Image from 'next/image';

const CryptoPayment = () => {
    return (
        <section className="relative py-4 px-4 md:px-10 bg-[#F0F7EB] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-[32px] md:text-[40px] lg:text-[40px] font-bold text-black leading-tight font-baloo">
                        Pay and Check out in 120+ Cryptocurrencies.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
                    {/* Left Side - Crypto Icons with Button */}
                    <div className="relative flex flex-col items-center space-y-8">
                        {/* Crypto Icons Image */}
                        <div className="relative w-full max-w-[420px] h-[350px]">
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
                            <button className="px-16 py-2 bg-[#018000] text-white text-[18px] font-semibold rounded-full  transition-all duration-300 shadow-lg hover:shadow-xl">
                                Pay with RobuPay
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Phone Mockup with Person and Green Circle */}
                    <div className="relative flex justify-center lg:justify-end">
                        
                        
                        {/* Phone and Person Image */}
                        <div className="relative  w-full w-[753px] h-[450px] ">
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

