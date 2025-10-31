import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const footerSections = [
        {
            title: "Product",
            links: ["Features", "Pricing", "Integrations", "API Docs"]
        },
        {
            title: "Product",
            links: ["Features", "Pricing", "Integrations", "API Docs"]
        },
        {
            title: "Product",
            links: ["Features", "Pricing", "Integrations", "API Docs"]
        },
        {
            title: "Product",
            links: ["Features", "Pricing", "Integrations", "API Docs"]
        },
        {
            title: "Company",
            links: ["About Us", "Blog", "Careers", "Contact"]
        },
        {
            title: "Support",
            links: ["Help Center", "Security", "Terms of Service", "Privacy Policy"]
        }
    ];

    const socialLinks = [
        { icon: <FaInstagram />, href: "#", label: "Instagram" },
        { icon: <FaFacebookF />, href: "#", label: "Facebook" },
        { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
        { icon: <FaXTwitter />, href: "#", label: "Twitter" }
    ];

    return (
        <footer className="bg-black text-white py-8 px-4 md:px-20 rounded-t-[50px] md:rounded-t-[80px] font-baloo">
            <div className="max-w-7xl mx-auto">
                {/* Top Section - Links */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-[#018000] text-[16px] font-semibold mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-white text-[14px] hover:text-[#018000] transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    {/* Logo and Description */}
                    <div className="flex flex-col items-center lg:items-start max-w-[250px]">
                        <div className="flex  mb-4">
                            <div className="relative w-[180px] h-[53px]">
                                <Image
                                    src="/robupay-logo.png"
                                    alt="RobuPay Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="max-w-2xl mx-auto text-white text-[14px]  text-center lg:text-left">
                            Making cryptocurrency payments simple, safe, and useful for everyday business needs.
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 bg-[#018000] rounded-full flex items-center justify-center text-white hover:bg-[#016000] transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-4 pt-8 border-t border-gray-500 text-center">
                    <p className="text-white text-[14px]">
                        © 2025 RobuPay. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

