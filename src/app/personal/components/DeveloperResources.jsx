import React from 'react';
import Image from 'next/image';
import { FaKey, FaGamepad } from 'react-icons/fa';
import { IoChatbubbles } from 'react-icons/io5';
import { GiCheckMark } from 'react-icons/gi';
import { FaArrowRight } from 'react-icons/fa6';

const DeveloperResources = () => {
    const resources = [
        {
            image: "/personal/key.png",
            title: "Get API Credentials",
            description: "Access your unique API keys and start integrating in minutes with our comprehensive authentication system.",
            link: "Get Started",
            linkColor: "text-[#018000]"
        },
        {
            image: "/personal/play.png",
            title: "Demo Product Experiences",
            description: "Test our payment gateway in a sandbox environment with demo transactions and real-time feedback.",
            link: "Try Demo",
            linkColor: "text-[#018000]"
        },
        {
            image: "/personal/chat.png",
            title: "Developer Community",
            description: "Join thousands of developers building with RobuPay. Share insights, get help, and collaborate.",
            link: "Join Community",
            linkColor: "text-[#018000]"
        }
    ];

    const features = [
        "Comprehensive API Documentation",
        "SDKs for Popular Languages",
        "Webhook Support",
        "24/7 Technical Support"
    ];

    return (
        <section className="relative py-10 px-4  bg-[#F0F7EB] font-baloo">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-[#018000] mb-4 font-baloo">
                        Developer Resources
                    </h2>
                    <p className=" text-[16px] md:text-[18px] text-black max-w-xl mx-auto ">
                        Get API credentials, demo product experiences, and participate in our developer community
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8 px-4">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                            <Image
                                src="/personal/developer-resources.png"
                                alt="Developer Resources"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side - Resource Cards */}
                    <div className="space-y-6">
                        {resources.map((resource, index) => (
                            <div
                                key={index}
                                className="bg-white  rounded-2xl p-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-t-2 hover:border-[#018000] hover:-translate-y-2 hover:scale-[1.02] cursor-pointer group"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#018000] rounded-full flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                            <Image
                                                src={resource.image}
                                                alt={resource.title}
                                                width={48}
                                                height={48}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#018000] font-baloo transition-colors duration-300 group-hover:text-[#019500]">
                                        {resource.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-[14px] md:text-[15px] text-black leading-relaxed mb-3 transition-colors duration-300 group-hover:text-gray-700">
                                    {resource.description}
                                </p>

                                {/* Link Button at the end */}
                                <div className="flex justify-end">
                                    <a
                                        href="#"
                                        className={`inline-flex items-center space-x-2 ${resource.linkColor} font-semibold text-[14px] md:text-[16px] hover:underline transition-all duration-300 group-hover:space-x-3`}
                                    >
                                        <span>{resource.link}</span>
                                        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Features Bar */}
                <div className="bg-[#018000] rounded-lg lg:py-10 py-6 px-6">
                    <div className="flex flex-wrap justify-center items-center gap-x-28 gap-y-4 text-white">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <GiCheckMark className="text-white text-base" />
                                <span className="text-[14px] md:text-[15px] font-medium whitespace-nowrap">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeveloperResources;

