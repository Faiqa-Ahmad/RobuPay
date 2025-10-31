import React from 'react';
import Image from 'next/image';
import { GiCheckMark } from "react-icons/gi";
const SecurePayment = () => {
    const features = [
        {
            text: "Payments are processed quickly and efficiently",
        },
        {
            text: "Offers flexibility by accepting various payment methods",
        },
        {
            text: "Enable accept payments from customers worldwide",
        },
        {
            text: "Support for recurring billing and subscription models",
        },
    ];

    return (
        <section className="relative py-2  bg-[#F0F7EB] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
                    {/* Left Image Content */}
                    <div className="relative flex justify-center lg:justify-start">
                        
                        
                        {/* Phone Mockup */}
                        <div className="relative z-10 w-[280px] h-[500px] md:w-[750px] md:h-[646px]">
                            <Image
                                src="/personal/secure.png"
                                alt="Secure Payment App"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8 ">
                        {/* Heading */}
                        <p className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-black leading-tight font-baloo">
                            Secure, Fast, and Reliable payment solutions
                        </p>

                        {/* Features List */}
                        <div className="space-y-8 px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3 text-[#018000]">
                                        {/* Green Checkmark */}
                                        <div className="flex-shrink-0 mt-1">
                                        <GiCheckMark />
                                        </div>
                                        {/* Feature Text */}
                                        <p className="text-[12px] md:text-[14px] font-baloo ">
                                            {feature.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4 flex justify-center">
                            <button className="px-16 py-2 bg-[#018000] text-white text-[18px] font-semibold rounded-full  transition-all duration-300 shadow-lg hover:shadow-xl">
                                Download App
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecurePayment;

