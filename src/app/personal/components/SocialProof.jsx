'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SocialProof = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    
    const partners = [
        { name: 'Sitemark', image: '/personal/sitemark.png' },
        { name: 'Luminous', image: '/personal/luminous.png' },
        { name: 'Snowflake', image: '/personal/snowflake.png' },
        { name: 'Waveless', image: '/personal/waveless.png' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % partners.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [partners.length]);

    const getLogoStyle = (index) => {
        const position = (index - activeIndex + partners.length) % partners.length;
        
        // Position 1 (activeIndex) is the focused one - full color
        if (position === 0) {
            return {
                opacity: 1,
                filter: 'grayscale(0%) blur(0px)',
                transform: 'scale(1.15)',
                maskImage: 'none',
            };
        }
        // Position before focused
        else if (position === partners.length - 1) {
            return {
                opacity: 0.4,
                filter: 'grayscale(100%) blur(0.5px)',
                transform: 'scale(0.95)',
                maskImage: index === 0 && activeIndex === 1 ? 'linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))' : 'none',
            };
        }
        // Position after focused
        else if (position === 1) {
            return {
                opacity: 0.6,
                filter: 'grayscale(100%) blur(0px)',
                transform: 'scale(1)',
                maskImage: 'none',
            };
        }
        // Far position
        else {
            return {
                opacity: 0.4,
                filter: 'grayscale(100%) blur(0.5px)',
                transform: 'scale(0.95)',
                maskImage: index === partners.length - 1 && activeIndex === 0 ? 'linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))' : 'none',
            };
        }
    };

    return (
        <section className="relative py-8 px-4 overflow-hidden">
            {/* Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7EB] to-[#E8F4E0]"></div>
            
            {/* Blur circles for decorative effect */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative max-w-6xl mx-auto">
                {/* Success Text */}
                <div className="text-center py-4">
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-black font-baloo">
                        More than +88,500 successful RobuPay users worldwide
                    </p>
                </div>

                {/* Partner Logos - Animated Chain */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 py-6">
                    {partners.map((partner, index) => {
                        const style = getLogoStyle(index);
                        return (
                            <div
                                key={index}
                                className="relative transition-all duration-1000 ease-in-out"
                                style={{
                                    opacity: style.opacity,
                                    filter: style.filter,
                                    transform: style.transform,
                                }}
                            >
                                <div 
                                    className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px]"
                                    style={{
                                        WebkitMaskImage: style.maskImage,
                                        maskImage: style.maskImage,
                                    }}
                                >
                                    <Image
                                        src={partner.image}
                                        alt={`${partner.name} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
