'use client';

import React from 'react';

const OurJourney = () => {
    const journeySteps = [
        {
            year: "2023",
            title: "The Beginning",
            description: "RobuPay was founded by a team of blockchain enthusiasts and payment industry veterans who saw the gap between crypto's potential and its practical use in everyday commerce.",
            badge: null
        },
        {
            year: "Early 2024",
            title: "Version 1 Launch",
            description: "We launched RobuPay v1, focusing on e-commerce integrations. Over 1,000 online stores adopted our platform in the first three months, processing millions in crypto transactions.",
            badge: "1,000+ Stores"
        },
        {
            year: "Mid 2024",
            title: "Global Expansion",
            description: "Expanded operations to 50+ countries, added multi-currency support, and introduced our revolutionary phone number payment system that simplified crypto transactions for millions of users.",
            badge: "50+ Countries"
        },
        {
            year: "2025",
            title: "Version 2 Evolution",
            description: "Launched RobuPay v2 with business-focused features including invoicing, escrow services, physical payment terminals, and advanced loyalty programs. Now serving both online and offline businesses worldwide.",
            badge: "Global Service"
        }
    ];

    return (
        <section className="relative py-4 px-10  bg-[#F0F7EB] font-baloo">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-[#018000] mb-4 font-baloo">
                        Our Journey
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-black">
                        Building the future of crypto payments
                    </p>
                </div>

                {/* Timeline Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {journeySteps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-3xl p-6 border border-[#018000] transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-transparent hover:border-t-4 hover:border-t-[#018000] hover:-translate-y-3 hover:scale-[1.05] overflow-hidden cursor-pointer group"
                        >
                            {/* Year Badge - Bounces from bottom on hover */}
                            <div className="mb-4 transition-all duration-700 ease-out group-hover:animate-bounce-from-bottom">
                                <span className="inline-block px-4 py-1.5 bg-[#018000] text-white rounded-full text-[14px] font-semibold shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                                    {step.year}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[20px] md:text-[22px] font-bold text-black mb-3 font-baloo transition-colors duration-300 group-hover:text-[#018000]">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] text-gray-700 leading-relaxed mb-10 min-h-[160px] transition-colors duration-300 group-hover:text-gray-900">
                                {step.description}
                            </p>

                            {/* Badge (if exists) - Bounces from top on hover */}
                            {step.badge && (
                                <div className="mb-4 transition-all duration-700 ease-out group-hover:animate-bounce-from-top">
                                    <span className="inline-block px-4 py-1.5 bg-[#018000]/40 text-[#018000] rounded-full text-[13px] font-bold shadow-md transition-all duration-300 group-hover:bg-[#018000] group-hover:text-white group-hover:shadow-lg group-hover:scale-110">
                                        {step.badge}
                                    </span>
                                </div>
                            )}

                            {/* Decorative Circle - Rotates on hover */}
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#018000] rounded-full opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-125 group-hover:rotate-65"></div>
                        </div>
                    ))}
                </div>

                {/* Custom Animations */}
                <style jsx>{`
                    @keyframes bounce-from-bottom {
                        0% {
                            transform: translateY(280px);
                            opacity: 0;
                        }
                        50% {
                            transform: translateY(-15px);
                            opacity: 1;
                        }
                        65% {
                            transform: translateY(8px);
                        }
                        80% {
                            transform: translateY(-4px);
                        }
                        95% {
                            transform: translateY(2px);
                        }
                        100% {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }

                    @keyframes bounce-from-top {
                        0% {
                            transform: translateY(-280px);
                            opacity: 0;
                        }
                        50% {
                            transform: translateY(15px);
                            opacity: 1;
                        }
                        65% {
                            transform: translateY(-8px);
                        }
                        80% {
                            transform: translateY(4px);
                        }
                        95% {
                            transform: translateY(-2px);
                        }
                        100% {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }

                    .group:hover .group-hover\:animate-bounce-from-bottom {
                        animation: bounce-from-bottom 0.7s ease-out forwards;
                    }

                    .group:hover .group-hover\:animate-bounce-from-top {
                        animation: bounce-from-top 0.7s ease-out forwards;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default OurJourney;

