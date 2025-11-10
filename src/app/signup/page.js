'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaUser, FaBriefcase, FaDollarSign, FaShieldAlt, FaGlobe, FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoFlashSharp } from 'react-icons/io5';

export default function SignUpPage() {
    const router = useRouter();
    const [accountType, setAccountType] = useState('Business');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: 'Nigeria',
        phoneNumber: '',
        countryCode: '+44',
        password: '',
        acceptTerms: false,
        receiveNews: false
    });

    const handleBackHome = () => {
        router.push('/personal');
    };

    const handleSignIn = () => {
        router.push('/signin');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData, 'Account Type:', accountType);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const features = [
        {
            image: "/auth/setup.png",
            title: "Setup in Minutes",
            description: "Get started instantly with our simple onboarding process"
        },
        {
            image: "/auth/payment.png",
            title: "Only 0.25% Fees",
            description: "Save money with the lowest transaction fees in the industry"
        },
        {
            image: "/auth/security.png",
            title: "Bank-Level Security",
            description: "Your funds and data are protected by enterprise-grade encryption"
        },
        {
            image:"/auth/global.png",
            title: "Global Payments",
            description: "Accept payments from anywhere in the world, 24/7"
        }
    ];

    return (
        <div className="relative min-h-screen max-h-screen flex justify-center items-center bg-[#018000] overflow-hidden font-baloo py-6">
      
            {/* Back Home Button - Top Left */}
            <button 
                onClick={handleBackHome}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 text-[10px] sm:text-[12px] text-white bg-white/15 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 hover:bg-white/25 transition shadow-[0_2px_6px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 backdrop-blur-md border border-white/20"
            >
                ← Back Home
            </button>

            {/* Decorative Circles */}
            <div className="absolute top-[-200px] right-[-100px] w-[300px] h-[350px] rounded-full border-2 border-white/30 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-sm shadow-[0_8px_32px_rgba(255,255,255,0.1)] animate-pulse-slow"></div>
            <div className="absolute bottom-[-250px] left-[-200px] w-[500px] h-[500px] rounded-full border-2 border-white/30 bg-gradient-to-tr from-white/25 via-white/15 to-transparent backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.15)] animate-pulse-slower"></div>

            {/* Main Card */}
            <div className="relative bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-[900px] mx-4 my-4 overflow-hidden max-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr]">

                {/* Left Section */}
                <div className="bg-[#F5FCF6] text-black p-6 px-4 md:p-6 flex flex-col justify-center relative overflow-hidden">
                    {/* Decorative Circles */}
                    <div className="absolute top-[-80px] right-[-80px] w-[280px] h-[280px] rounded-full border-2 border-white/20 bg-gradient-to-bl from-white/20 via-white/10 to-transparent backdrop-blur-lg shadow-[inset_0_0_40px_rgba(255,255,255,0.1)]"></div>
                    <div className="absolute bottom-[20%] left-[-40px] w-[150px] h-[150px] rounded-full border border-white/15 bg-gradient-to-br from-white/15 via-white/8 to-transparent backdrop-blur-md opacity-60"></div>
          
                    <div className="relative z-10">
                        {/* Logo */}
                        <div className="mb-2">
                            <div className="relative w-[180px] sm:w-[200px] h-[55px] sm:h-[60px]">
                                <Image
                                    src="/robupay.png"
                                    alt="RobuPay Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-[20px] sm:text-[20px] font-bold text-[#564C4C]">
                            Start Accepting Crypto Payments Today
                        </h2>

                        {/* Description */}
                        <p className="text-[10px]  font-baloo ">
                            Join thousands of businesses already using RobuPay to simplify their payment processes
                        </p>

                        {/* Features */}
                        <div className="space-y-1">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                                    <div className=' bg-[#018000] rounded-lg flex items-center justify-center p-2'>
                                    <img src={feature.image} alt={feature.title} className='' />
                                    </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[16px] text-[#564C4C]">{feature.title}</h3>
                                        <p className="text-[10px] ">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="bg-white overflow-y-auto max-h-[calc(100vh-90px)] scrollbar-hide">
                    <div className="p-6 md:p-6">
                        {/* Header */}
                        <h2 className="text-2xl font-bold ">
                            Create a {accountType.toLowerCase()} account
                        </h2>
                        
                        {/* Account Type Toggle */}
                        <div className="flex gap-1">
                        <button
                            onClick={() => setAccountType('Personal')}
                            className={`flex-1 flex flex-col items-center justify-center py-3 rounded-lg border-2 transition-all duration-200 ${
                                accountType === 'Personal'
                                    ? 'bg-[#018000] border-[#018000] shadow-md'
                                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className={`rounded-lg p-2 mb-1 ${
                                accountType === 'Personal' ? 'bg-white' : 'bg-[#018000]'
                            }`}>
                                <img src='/auth/personal.png' alt='Personal' className='w-6 h-6' />
                            </div>
                            <span className={`text-[12px] font-semibold ${accountType === 'Personal' ? 'text-white' : 'text-gray-700'}`}>
                                Personal
                            </span>
                            <span className={`text-[10px] ${accountType === 'Personal' ? 'text-white/80' : 'text-gray-500'}`}>
                                For companies & stores
                            </span>
                        </button>
                        <button
                            onClick={() => setAccountType('Business')}
                            className={`flex-1 flex flex-col items-center justify-center py-3 rounded-lg border-2 transition-all duration-200 ${
                                accountType === 'Business'
                                    ? 'bg-[#018000] border-[#018000] shadow-md'
                                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <div className={`rounded-lg p-2 mb-1 ${
                                accountType === 'Business' ? 'bg-white' : 'bg-[#018000]'
                            }`}>
                                <img src='/auth/business.png' alt='Business' className='w-6 h-6' />
                            </div>
                            <span className={`text-[12px] font-semibold ${accountType === 'Business' ? 'text-white' : 'text-gray-700'}`}>
                                Business
                            </span>
                            <span className={`text-[10px] ${accountType === 'Business' ? 'text-white/80' : 'text-gray-500'}`}>
                                For companies & stores
                            </span>
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-2">
                        {/* Business Account Form */}
                        {accountType === 'Business' && (
                            <>
                                {/* Name Fields */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-[12px] font-semibold text-black  block">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="Email@gmail.com"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold text-black  block">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="Email@gmail.com"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50"
                                            required
                                        />
                                    </div>
                                </div>

                                <p className="text-[10px] text-black -mt-2">
                                    Enter the account owner's name. Make sure it matches a government ID.
                                </p>

                                {/* Email */}
                                <div>
                                    <label className="text-[12px] font-semibold text-black  block">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email@gmail.com"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-1.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50"
                                        required
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="text-[12px] font-semibold text-black block">Phone Number</label>
                                    <div className="flex gap-2">
                                        <select 
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleInputChange}
                                            className="border border-gray-300 rounded-lg px-3 py-1.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50"
                                        >
                                            <option value="+44">🇬🇧 +44</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+91">🇮🇳 +91</option>
                                        </select>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            placeholder="+234 *** **** ****"
                                            className="flex-1 border border-gray-300 rounded-lg px-4 py-1.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50"
                                            required
                                        />
                                    </div>
                                    <p className="text-[10px] text-black ">
                                        By continuing, you confirm you can receive texts at this phone number and you're authorized to use it. Mobile network fees may apply.
                                    </p>
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="text-[12px] font-semibold text-black  block">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Enter your password"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-1.5 pr-10 text-[12px] focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    <div className="text-[10px] text-black">
                                        <p>Enter from 8 to 20 characters</p>
                                        <p>Use upper and lower case letters</p>
                                        <p>Enter at least 1 number or 1 symbol (such as !@#$%^)</p>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Personal Account Form */}
                        {accountType === 'Personal' && (
                            <>
                                {/* Email */}
                                <div>
                                    <label className="text-[12px] font-semibold text-black mb-2 block">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email@gmail.com"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-1.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50"
                                        required
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="text-[12px] font-semibold text-black mb-2 block">Country</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-1.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50 appearance-none"
                                        style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                                    >
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="USA">United States</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="India">India</option>
                                    </select>
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="text-[12px] font-semibold text-black mb-2 block">Phone Number</label>
                                    <div className="flex gap-2">
                                        <select 
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleInputChange}
                                            className="border border-gray-300 rounded-lg px-3 py-1.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50"
                                        >
                                            <option value="+44">🇬🇧 +44</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+91">🇮🇳 +91</option>
                                        </select>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            placeholder="*** **** ****"
                                            className="flex-1 border border-gray-300 rounded-lg px-4 py-1.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50"
                                            required
                                        />
                                    </div>
                                    <p className="text-[10px] text-black ">
                                        By continuing, you confirm you can receive texts at this phone number and you're authorized to use it. Mobile network fees may apply.
                                    </p>
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="text-[12px] font-semibold text-black  block">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Enter your password"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-1.5 pr-10 text-[12px] focus:outline-none focus:ring-2 focus:ring-[#018000]/40 bg-gray-50"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    <div className="text-[10px] text-black ">
                                        <p>Enter from 8 to 20 characters</p>
                                        <p>Use upper and lower case letters</p>
                                        <p>Enter at least 1 number or 1 symbol (such as !@#$%^)</p>
                                    </div>
                                </div>

                                {/* Newsletter Checkbox */}
                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        name="receiveNews"
                                        checked={formData.receiveNews}
                                        onChange={handleInputChange}
                                        className="mt-1 w-4 h-4 border-2 border-gray-300 rounded"
                                        id="receiveNews"
                                    />
                                    <label htmlFor="receiveNews" className="text-[10px] text-gray-700 leading-snug">
                                        <span className="font-semibold">You agree</span> to receive news and offers from RobuPay by email. You can opt out at any time. <span className="text-[#018000] underline cursor-pointer">More information</span>
                                    </label>
                                </div>
                            </>
                        )}

                    </form>

                    {/* Sign In Link */}
                    <p className="text-[12px] text-black text-center ">
                        Already have an account?{' '}
                        <button
                            onClick={handleSignIn}
                            className="text-[#018000] font-semibold hover:underline"
                        >
                            Sign In
                        </button>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

