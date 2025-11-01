import React from 'react';
import Image from 'next/image';

const PowerfulTools = () => {
    return (
        <section className="relative py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#018000] mb-4 sm:mb-5 md:mb-6 font-baloo leading-tight px-2">
                        Powerful tools for crypto payments
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[18px] text-black max-w-xl mx-auto leading-relaxed px-4">
                        Send invoices, collect payment, convert payouts to fiat currency, or keep the cryptocurrency.
                    </p>
                </div>

                {/* Image Section - Dashboard Mockup */}
                <div className="relative w-full flex justify-center items-center px-2 sm:px-4">
                    <div className="relative w-full max-w-6xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                        <Image
                            src="/business/powerfultools.png"
                            alt="Powerful tools for crypto payments - Dashboard Preview"
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

export default PowerfulTools;

