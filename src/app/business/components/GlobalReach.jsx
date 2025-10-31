'use client';

import React from 'react';

const GlobalReach = () => {
    const stats = [
        {
            number: "150+",
            label: "Countries"
        },
        {
            number: "1000+",
            label: "Businesses"
        },
        {
            number: "24/7",
            label: "Support"
        }
    ];

    return (
        <section className="relative  bg-[#0F132D] py-10 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h3 className="text-[24px] md:text-[32px] font-bold text-[#018000] mb-4 font-baloo">
                        Global Reach
                    </h3>
                    <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white mb-6 font-baloo leading-tight">
                        From Online to Offline
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-white leading-relaxed">
                        Whether you run an e-commerce store or a physical shop, RobuPay adapts to your business model.
                        <br />
                        Use payment links for online sales and crypto terminals for in-store purchases.
                    </p>
                </div>

                {/* Animated Globe Section */}
                <div className="flex justify-center  ">
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                        {/* Outer glow rings */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/5 to-teal-700/5 animate-pulse-slow"></div>
                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-teal-500/10 to-teal-700/10 animate-pulse-slower"></div>
                        
                        {/* Main globe container */}
                        <div className="absolute inset-8 md:inset-12 rounded-full bg-gradient-to-br from-teal-800/40 via-teal-700/30 to-teal-600/40 backdrop-blur-sm border-2 border-teal-500/30 shadow-2xl overflow-hidden">
                            {/* Globe grid lines - horizontal */}
                            <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-teal-400/20"></div>
                            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-teal-400/30"></div>
                            <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-teal-400/20"></div>
                            
                            {/* Globe grid lines - vertical */}
                            <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-teal-400/20"></div>
                            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-teal-400/30"></div>
                            <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-teal-400/20"></div>
                            
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-teal-600/10 animate-rotate-slow"></div>
                        </div>

                        {/* Animated location pins/dots */}
                        {/* Top pin */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
                            <div className="relative">
                                <div className="w-4 h-4 bg-teal-400 rounded-full animate-ping absolute"></div>
                                <div className="w-4 h-4 bg-teal-400 rounded-full relative shadow-lg shadow-teal-400/50"></div>
                                <div className="w-[2px] h-16 bg-gradient-to-b from-teal-400 to-transparent absolute top-4 left-1/2 -translate-x-1/2"></div>
                            </div>
                        </div>

                        {/* Top Right pin */}
                        <div className="absolute top-20 right-12 z-10 animate-float">
                            <div className="relative">
                                <div className="w-3 h-3 bg-teal-400 rounded-full animate-ping absolute" style={{animationDelay: '0.5s'}}></div>
                                <div className="w-3 h-3 bg-teal-400 rounded-full relative shadow-lg shadow-teal-400/50"></div>
                            </div>
                        </div>

                        {/* Middle Right pin */}
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 animate-float-delayed">
                            <div className="relative">
                                <div className="w-3 h-3 bg-teal-400 rounded-full animate-ping absolute" style={{animationDelay: '1s'}}></div>
                                <div className="w-3 h-3 bg-teal-400 rounded-full relative shadow-lg shadow-teal-400/50"></div>
                            </div>
                        </div>

                        {/* Bottom Left pin */}
                        <div className="absolute bottom-16 left-12 z-10 animate-float">
                            <div className="relative">
                                <div className="w-4 h-4 bg-teal-400 rounded-full animate-ping absolute" style={{animationDelay: '1.5s'}}></div>
                                <div className="w-4 h-4 bg-teal-400 rounded-full relative shadow-lg shadow-teal-400/50"></div>
                            </div>
                        </div>

                        {/* Bottom Right pin */}
                        <div className="absolute bottom-24 right-20 z-10 animate-float-delayed">
                            <div className="relative">
                                <div className="w-3 h-3 bg-teal-400 rounded-full animate-ping absolute" style={{animationDelay: '0.3s'}}></div>
                                <div className="w-3 h-3 bg-teal-400 rounded-full relative shadow-lg shadow-teal-400/50"></div>
                            </div>
                        </div>

                        {/* Connecting lines animation */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity: 0.3}}>
                            <line x1="50%" y1="15%" x2="75%" y2="35%" stroke="#14b8a6" strokeWidth="1" strokeDasharray="5,5" className="animate-dash" />
                            <line x1="75%" y1="35%" x2="90%" y2="50%" stroke="#14b8a6" strokeWidth="1" strokeDasharray="5,5" className="animate-dash" style={{animationDelay: '0.5s'}} />
                            <line x1="50%" y1="15%" x2="25%" y2="70%" stroke="#14b8a6" strokeWidth="1" strokeDasharray="5,5" className="animate-dash" style={{animationDelay: '1s'}} />
                        </svg>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <h3 className="text-[18px] md:text-[28px] font-bold text-[#018000] font-baloo">
                                {stat.number}
                            </h3>
                            <p className="text-[20px] md:text-[24px] text-white font-medium font-baloo">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(1.05);
                    }
                }

                @keyframes pulse-slower {
                    0%, 100% {
                        opacity: 0.4;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.6;
                        transform: scale(1.03);
                    }
                }

                @keyframes rotate-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes dash {
                    to {
                        stroke-dashoffset: -20;
                    }
                }

                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }

                .animate-pulse-slower {
                    animation: pulse-slower 6s ease-in-out infinite;
                }

                .animate-rotate-slow {
                    animation: rotate-slow 20s linear infinite;
                }

                .animate-dash {
                    animation: dash 2s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default GlobalReach;
