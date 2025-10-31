'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
    const cryptoIcons = [
        { image: '/personal/cryptocurrency.png', delay: '0s', left: '5%', bottom: '0%', duration: '25s' },
        { image: '/personal/cryptocurrency1.png', delay: '3s', left: '25%', bottom: '30%', duration: '30s' },
        { image: '/personal/cryptocurrency2.png', delay: '6s', right: '10%', bottom: '10%', duration: '28s' },
        { image: '/personal/cryptocurrency3.png', delay: '2s', right: '80%', bottom: '50%', duration: '32s' },
        { image: '/personal/cryptocurrency4.png', delay: '8s', left: '50%', bottom: '60%', duration: '27s' },
        { image: '/personal/cryptocurrency5.png', delay: '5s', right: '15%', bottom: '20%', duration: '29s' },
        { image: '/personal/cryptocurrency.png', delay: '10s', left: '65%', bottom: '40%', duration: '26s' },
        { image: '/personal/cryptocurrency1.png', delay: '12s', right: '25%', bottom: '5%', duration: '31s' },
        { image: '/personal/cryptocurrency2.png', delay: '4s', left: '30%', bottom: '70%', duration: '29s' },
        { image: '/personal/cryptocurrency3.png', delay: '7s', right: '5%', bottom: '35%', duration: '33s' },
    ];

    return (
        <section className="relative bg-[#F0F7EB] py-10 px-4 overflow-hidden">
            {cryptoIcons.map((icon, index) => (
                <div
                    key={index}
                    className="absolute w-12 h-12 md:w-16 md:h-16 animate-float-up opacity-60 z-50"
                    style={{
                        left: icon.left || 'auto',
                        right: icon.right || 'auto',
                        bottom: icon.bottom,
                        animationDelay: icon.delay,
                        animationDuration: icon.duration,
                    }}
                >
                    <Image
                        src={icon.image}
                        alt={`Cryptocurrency ${index + 1}`}
                        fill
                        className="object-contain "
                    />
                </div>
            ))}

            <div className="">
                {/* Hero Text Content */}
                <div className="text-center relative z-0">
                    <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold text-black leading-tight mb-6 font-baloo">
                        Your Trusted Crypto Gateway to Global
                        <br />
                        Transactions
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-gray-700 max-w-3xl mx-auto font-baloo">
                        An innovative payment gateway solution designed to facilitate digital transactions safely, quickly and efficiently.
                    </p>
                </div>
                <div className="relative w-full py-4 z-0">
                    <div className="relative z-0">
                        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[400px]">
                            <Image
                                src="/hero.png"
                                alt="RobuPay Dashboard Preview"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
                @keyframes float-up {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.6;
                    }
                    90% {
                        opacity: 0.6;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }

                .animate-float-up {
                    animation: float-up 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
