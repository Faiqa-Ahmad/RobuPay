'use client';

import React from 'react';
import { GiCheckMark } from "react-icons/gi";

const Pricing = () => {
    const pricingPlans = [
        {
            badge: "Starter",
            badgeColor: "bg-green-100 text-green-700",
            price: "0",
            period: "/month",
            description: "Perfect for testing and small businesses just getting started",
            features: [
                "0.25% transaction fee",
                "Phone number payments",
                "Payment links & QR codes",
                "Basic invoicing",
                "Up to 100 transactions/month",
                "Weekly settlements",
                "Email support"
            ],
            buttonText: "Get Started",
            buttonStyle: "border-2 border-[#018000] text-[#018000] hover:bg-[#018000] hover:text-white",
            isPopular: false
        },
        {
            badge: "Most Popular",
            badgeColor: "bg-[#018000] text-white",
            price: "49",
            period: "/month",
            description: "For established businesses ready to scale with crypto payments",
            features: [
                "0.25% transaction fee",
                "Everything in Starter",
                "Unlimited transactions",
                "Daily settlements",
                "Escrow services",
                "Advanced invoicing with reminders",
                "Loyalty programs & NFTs",
                "Custom tokens",
                "Analytics dashboard",
                "Priority support"
            ],
            buttonText: "Start Free Trial",
            buttonStyle: "bg-[#018000] text-white hover:bg-[#016500]",
            isPopular: true
        },
        {
            badge: "Enterprise",
            badgeColor: "bg-green-100 text-green-700",
            price: "Custom",
            period: "",
            description: "For large organizations with specific requirements",
            features: [
                "Custom transaction fees",
                "Everything in Business",
                "Physical payment terminals",
                "White-label solutions",
                "API access & integrations",
                "Dedicated account manager",
                "Custom settlement terms",
                "Advanced security features",
                "SLA guarantee",
                "24/7 phone support"
            ],
            buttonText: "Contact Sales",
            buttonStyle: "border-2 border-[#018000] text-[#018000] hover:bg-[#018000] hover:text-white",
            isPopular: false
        }
    ];

    return (
        <section className="relative py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">
                    <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-bold text-black mb-3 sm:mb-4 font-baloo leading-tight">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-gray-700 max-w-2xl mx-auto">
                        No hidden fees, no surprises. Just honest pricing for growing businesses
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                                plan.isPopular ? 'border-2 border-[#018000] lg:scale-105' : 'border border-gray-200'
                            }`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Badge with animation */}
                            <div className="mb-4 sm:mb-5 md:mb-6">
                                <span className={`inline-block px-3 sm:px-4 py-1 rounded-full text-[12px] sm:text-[13px] md:text-sm font-semibold ${plan.badgeColor} transition-all duration-300 hover:scale-105`}>
                                    {plan.badge}
                                </span>
                            </div>

                            {/* Price with animation */}
                            <div className="mb-4 sm:mb-5 md:mb-6">
                                {plan.price === "Custom" ? (
                                    <h3 className="text-[36px] sm:text-[42px] md:text-[48px] font-bold text-[#018000] font-baloo leading-none">
                                        {plan.price}
                                    </h3>
                                ) : (
                                    <div className="flex items-baseline">
                                        <span className="text-[18px] sm:text-[20px] md:text-[24px] text-[#018000] font-semibold">$</span>
                                        <h3 className="text-[48px] sm:text-[56px] md:text-[64px] font-bold text-[#018000] font-baloo leading-none">
                                            {plan.price}
                                        </h3>
                                        <span className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 ml-1">{plan.period}</span>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-600 mb-5 sm:mb-6 md:mb-8 min-h-[48px] sm:min-h-[54px] md:min-h-[60px] leading-relaxed">
                                {plan.description}
                            </p>

                            {/* Features with staggered animation */}
                            <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-5 sm:mb-6 md:mb-8">
                                {plan.features.map((feature, idx) => (
                                    <div 
                                        key={idx} 
                                        className="flex items-start space-x-2 sm:space-x-3 transition-all duration-300 hover:translate-x-1"
                                    >
                                        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                            <GiCheckMark className="text-[#018000] text-xs sm:text-sm" />
                                        </div>
                                        <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Button with animation */}
                            <button
                                className={`w-full py-2.5 sm:py-3 px-5 sm:px-6 rounded-full text-[14px] sm:text-[15px] md:text-[16px] font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 ${plan.buttonStyle}`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
