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
            buttonStyle: "bg-[#018000] text-white hover:bg-[#018000] hover:text-white",
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
        <section className="relative py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-black mb-4 font-baloo">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-gray-700">
                        No hidden fees, no surprises. Just honest pricing for growing businesses
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ${
                                plan.isPopular ? 'border-2 border-[#018000]' : 'border border-gray-200'
                            }`}
                        >
                            {/* Badge */}
                            <div className="mb-6">
                                <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${plan.badgeColor}`}>
                                    {plan.badge}
                                </span>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                {plan.price === "Custom" ? (
                                    <h3 className="text-[48px] font-bold text-[#018000] font-baloo">
                                        {plan.price}
                                    </h3>
                                ) : (
                                    <div className="flex items-baseline">
                                        <span className="text-[24px] text-[#018000] font-semibold">$</span>
                                        <h3 className="text-[64px] font-bold text-[#018000] font-baloo leading-none">
                                            {plan.price}
                                        </h3>
                                        <span className="text-[18px] text-gray-600 ml-1">{plan.period}</span>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-[14px] text-gray-600 mb-8 min-h-[60px]">
                                {plan.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <GiCheckMark className="text-[#018000] text-sm" />
                                        </div>
                                        <p className="text-[14px] text-gray-700 leading-relaxed">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <button
                                className={`w-full py-3 px-6 rounded-full text-[16px] font-semibold transition-all duration-300 ${plan.buttonStyle}`}
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

