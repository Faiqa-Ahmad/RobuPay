'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ToggleButtons from '@/app/components/ToggleButtons';

const BusinessHero = () => {
    const [focusedImageIndex, setFocusedImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('Business');
    const router = useRouter();

    const handleToggle = (tab) => {
        setActiveTab(tab);
        if (tab === 'Personal') {
            router.push('/personal');
        }
    };

    const slides = [
        {
            title: "Airport",
            description: "Robupay can be integrated into any business operations, and we guarantee you a smooth operations Robupay can be integrated into any business operations, and we guarantee you a smooth operations",
            video: "/business/airport.gif",
            images: [
                "/business/airportpic.jpg"
            ]
        },
        {
            title: "Warehouse",
            description: "Robupay can be integrated into any business operations, and we guarantee you a smooth operations Robupay can be integrated into any business operations, and we guarantee you a smooth operations",
            video: "/business/warehouse.gif",
            images: [
                "/business/warehousepic.jpg"
            ]
        },
        {
            title: "Pharmacy",
            description: "Seamlessly integrate RobuPay into your retail operations for fast and secure cryptocurrency payments at checkout.",
            video: "/business/pharmacy.gif",
            images: [
                "/business/pharmacypic.jpg"
            ]
        },
        {
            title: "Factory",
            description: "Transform your hotel and restaurant payments with our comprehensive crypto payment solutions.",
            video: "/business/factory.gif",
            images: [
                "/business/factorypic.jpg"
            ]
        },
        {
            title: "Fashion",
            description: "Modernize healthcare payments with secure and compliant cryptocurrency transaction processing.",
            video: "/business/fashion.gif",
            images: [
                "/business/fashionpic.jpg"
            ]
        },
        {
            title: "Supermarket",
            description: "Modernize healthcare payments with secure and compliant cryptocurrency transaction processing.",
            video: "/business/supermarket.gif",
            images: [
                "/business/supermarketpic.jpg"
            ]
        }
    ];

    // Create array of all images with their slide info
    const allImages = slides.flatMap((slide, slideIndex) => 
        slide.images.map(image => ({
            image,
            slideIndex,
            video: slide.video,
            title: slide.title,
            description: slide.description
        }))
    );

    const totalImages = allImages.length;

    // Get current slide based on focused image
    const currentSlide = allImages[focusedImageIndex].slideIndex;

    // Image chain animation - rotates focused image every 2 seconds
    useEffect(() => {
        const imageTimer = setInterval(() => {
            setFocusedImageIndex((prev) => (prev + 1) % totalImages);
        }, 7000); // Change focused image every 2 seconds

        return () => clearInterval(imageTimer);
    }, [totalImages]);

    const handleDotClick = (index) => {
        setFocusedImageIndex(index);
    };

    // Get images in chain order with focused image first
    const getChainImages = () => {
        const ordered = [];
        const visibleCount = Math.min(3, totalImages); // Show up to 3 images at once
        
        for (let i = 0; i < visibleCount; i++) {
            ordered.push(allImages[(focusedImageIndex + i) % totalImages]);
        }
        return ordered;
    };

    return (
        <section className="relative overflow-hidden pt-28 ">
            {/* GIF Background with fade transition */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                        currentSlide === index ? 'opacity-100 z-0' : 'opacity-0 z-0'
                    }`}
                >
                    <Image
                        src={slide.video}
                        alt={`${slide.title} background`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        unoptimized
                    />
                </div>
            ))}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            {/* Toggle Buttons - Above everything */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
                <ToggleButtons activeTab={activeTab} onToggle={handleToggle} />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-20 py-4 md:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
                    {/* Left Content */}
                    <div className="text-white space-y-6">
                        <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-tight font-baloo transition-all duration-500">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-200">
                            {slides[currentSlide].description}
                        </p>
                    </div>

                    {/* Right Images - Chain Animation showing all images */}
                    <div className="relative flex justify-end h-[400px] md:h-[480px] pt-10">
                        <div className="relative w-full max-w-[800px] flex items-end">
                            {getChainImages().map((imageData, position) => (
                                <div
                                    key={`${focusedImageIndex}-${position}`}
                                    className={`absolute  py-4 rounded-xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out ${
                                        position === 0
                                            ? 'w-[240px] h-[320px] md:w-[280px] md:h-[350px] z-30'
                                            : position === 1
                                            ? 'w-[220px] h-[300px] md:w-[260px] md:h-[270px] z-20'
                                            : 'w-[200px] h-[280px] md:w-[240px] md:h-[270px] z-10'
                                    }`}
                                    style={{
                                        left: position === 0 ? '0' : position === 1 ? '180px' : '340px',
                                        bottom: 32,
                                        transform: `translateX(${position === 0 ? '0' : position === 1 ? '30px' : '30px'})`,
                                    }}
                                >
                                    <Image
                                        src={imageData.image}
                                        alt={`${imageData.title}`}
                                        fill
                                        className="object-cover"
                                        priority={position === 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="absolute py-4 bottom-2  left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {allImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3  rounded-full transition-all duration-300 ${
                                focusedImageIndex === index
                                    ? 'bg-[#018000] w-8'
                                    : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessHero;

