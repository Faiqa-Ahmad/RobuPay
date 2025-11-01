'use client';

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
        <section className="relative py-6  md:py-10 lg:py-12 px-4 sm:px-6 md:px-10 bg-[#F0F7EB] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-10 lg:gap-12 items-center">
                    <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative z-10 w-[450px] h-[260px] sm:w-[350px] sm:h-[480px] md:w-[450px] md:h-[600px] lg:w-[550px] lg:h-[646px] transition-all duration-500 hover:scale-105">
                            <Image
                                src="/personal/secure.png"
                                alt="Secure Payment App"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
                        <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] font-bold text-black leading-tight font-baloo animate-fade-in-up">
                            Secure, Fast, and Reliable payment solutions
                        </h2>
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-4 md:px-6 lg:px-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {features.map((feature, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start space-x-3 text-[#018000] transition-all duration-300 hover:translate-x-2"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {/* Green Checkmark */}
                                        <div className="flex-shrink-0 mt-1">
                                            <GiCheckMark className="text-lg sm:text-xl" />
                                        </div>
                                        {/* Feature Text */}
                                        <p className="text-[13px] sm:text-[14px] md:text-[15px] font-baloo text-left">
                                            {feature.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2 sm:pt-3 md:pt-4 flex justify-center lg:justify-start">
                            <button className="px-10 sm:px-12 md:px-16 py-2.5 sm:py-3 bg-[#018000] text-white text-[15px] sm:text-[16px] md:text-[18px] font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:bg-[#016500] hover:scale-105 active:scale-95">
                                Download App
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }
            `}</style>
        </section>
    );
};

export default SecurePayment;
