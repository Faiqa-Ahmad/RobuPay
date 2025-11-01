import React from 'react';
import Image from 'next/image';

const BusinessFeatures = () => {
    return (
        <section className="relative py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-10">
            {/* Background Image with Overlay - Full Height */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/business/RobuPayGreenbg.png"
                    alt="RobuPay Background"
                    fill
                    className="object-cover opacity-10"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#018000] mb-3 sm:mb-4 font-baloo leading-tight">
                        Everything Your Business Needs
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[18px] text-black max-w-xl mx-auto leading-relaxed">
                        Powerful features designed to make cryptocurrency payments practical for everyday business use
                    </p>
                </div>

                {/* Business Needs Diagram */}
                <div className="flex justify-center items-center px-2">
                    <div className="relative w-full max-w-5xl h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
                        <Image
                            src="/business/businessneeds.png"
                            alt="Business Features Diagram"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessFeatures;

