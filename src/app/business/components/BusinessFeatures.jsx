import React from 'react';
import Image from 'next/image';

const BusinessFeatures = () => {
    return (
        <section className="relative py-8 px-4 md:px-10  ">
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
                <div className="text-center mb-12">
                    <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#018000] mb-4 font-baloo">
                        Everything Your Business Needs
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-black max-w-xl mx-auto">
                        Powerful features designed to make cryptocurrency payments practical for everyday business use
                    </p>
                </div>

                {/* Business Needs Diagram */}
                <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-5xl h-[500px] md:h-[600px]">
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

