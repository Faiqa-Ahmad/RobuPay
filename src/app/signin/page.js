'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleBackHome = () => {
        router.push('/personal');
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        // Add sign-in logic here
        console.log('Sign in with:', email, password);
        // Navigate to dashboard
        router.push('/dashboard');
    };

    const handleGoogleSignIn = () => {
        // Add Google sign-in logic
        console.log('Google sign in');
    };

    const handleAppleSignIn = () => {
        // Add Apple sign-in logic
        console.log('Apple sign in');
    };

    const handleCreateAccount = () => {
        router.push('/signup');
    };

    return (
        <div className="relative min-h-screen flex justify-center items-center bg-[#018000] overflow-hidden font-baloo ">
      
      {/* Back Home Button - Top Left */}
      <button 
        onClick={handleBackHome}
        className="absolute top-6 left-6 sm:top-8 sm:left-8 z-50 text-xs sm:text-sm text-white bg-white/15 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 hover:bg-white/25 transition shadow-[0_2px_6px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 backdrop-blur-md border border-white/20"
      >
        ← Back Home
      </button>


      {/* Large Decorative Circles Outside Form - Top Right */}
      <div className="absolute top-[-200px] right-[-100px] w-[300px] h-[350px] rounded-full border-2 border-white/30 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-sm shadow-[0_8px_32px_rgba(255,255,255,0.1)] animate-pulse-slow"></div>
      
      {/* Large Decorative Circles Outside Form - Bottom Left */}
      <div className="absolute bottom-[-250px] left-[-200px] w-[500px] h-[500px] rounded-full border-2 border-white/30 bg-gradient-to-tr from-white/25 via-white/15 to-transparent backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.15)] animate-pulse-slower"></div>
      
      {/* Medium Decorative Circle - Left Side */}
      <div className="absolute top-[50%] left-[-150px] w-[350px] h-[350px] rounded-full border-2 border-white/25 bg-gradient-to-tl from-white/15 via-white/8 to-transparent backdrop-blur-sm shadow-[0_8px_32px_rgba(255,255,255,0.12)] animate-pulse-slow"></div>
      
      {/* Additional Accent Circle - Top Left */}
      <div className="absolute top-[5%] right-[5%] w-[200px] h-[200px] rounded-full border border-white/20 bg-gradient-to-bl from-white/15 via-transparent to-transparent backdrop-blur-sm opacity-60"></div>
      
      {/* Additional Accent Circle - Bottom Right */}
      <div className="absolute bottom-[15%] left-[5%] w-[150px] h-[150px] rounded-full border border-white/20 bg-gradient-to-tr from-white/20 via-transparent to-transparent backdrop-blur-sm opacity-50"></div>

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-lg sm:rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_60px_rgba(255,255,255,0.1)] w-full max-w-[900px] mx-4  grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-white/20">

        {/* Left Section */}
        <div className="bg-[#018000] text-white p-6 px-4 md:p-6  flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Circle Inside Left Section - Top Right */}
          <div className="absolute top-[-80px] right-[-80px] w-[280px] h-[280px] rounded-full border-2 border-white/20 bg-gradient-to-bl from-white/20 via-white/10 to-transparent backdrop-blur-lg shadow-[inset_0_0_40px_rgba(255,255,255,0.1)]"></div>
          
          {/* Smaller Decorative Circle Inside Left Section */}
          <div className="absolute top-[20px] right-[-50px] w-[180px] h-[180px] rounded-full border border-white/15 bg-gradient-to-br from-white/15 via-white/8 to-transparent backdrop-blur-md shadow-[0_4px_20px_rgba(255,255,255,0.08)]"></div>
          
          {/* Tiny Accent Circle */}
          <div className="absolute bottom-[30%] left-[-30px] w-[120px] h-[120px] rounded-full border border-white/10 bg-gradient-to-tr from-white/12 via-white/5 to-transparent backdrop-blur-sm opacity-70"></div>
          
          <div className="relative z-10">
            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <div className="relative w-[160px] sm:w-[180px] md:w-[200px] h-[50px] sm:h-[55px] md:h-[60px]">
                <Image
                  src="/signin-image.png"
                  alt="RobuPay Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-4 sm:mt-6">
              Welcome Back to RobuPay
            </h2>
            <p className="text-xs sm:text-sm mt-2 text-white/90">
              Sign in to access your dashboard and manage your crypto payments with ease.
            </p>

            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {[
                "Access your payment dashboard",
                "Manage invoices and transactions",
                "View analytics and reports",
                "Configure payment settings",
                "24/7 customer support",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-white text-[#018000] rounded-full flex items-center justify-center font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        {/* Right Section */}
        <div className="bg-white p-6  md:p-6 px-4 flex flex-col justify-center shadow-inner">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Sign In</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
            Enter your credentials to access your account
          </p>

          <form onSubmit={handleSignIn} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="text-sm text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email@gmail.com"
                className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#018000]/40"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="text-sm text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#018000]/40"
                required
              />
              <p className="text-right text-xs mt-1 text-[#018000] cursor-pointer hover:underline">
                Forgot Password?
              </p>
            </div>

            {/* Get Started Button */}
            <button 
              type="submit"
              className="bg-[#018000] text-white font-medium w-full py-2 rounded-full hover:bg-[#016b00] transition shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-95"
            >
              Get Started
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-xs text-gray-500 mx-2">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <button 
              onClick={handleGoogleSignIn}
              className="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition hover:scale-110 active:scale-95"
            >
              <FcGoogle size={22} />
            </button>
            <button 
              onClick={handleAppleSignIn}
              className="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition hover:scale-110 active:scale-95"
            >
              <FaApple size={22} />
            </button>
          </div>

          {/* Create Account */}
          <p className="text-sm text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <span 
              onClick={handleCreateAccount}
              className="text-[#018000] font-medium cursor-pointer hover:underline"
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
    );
}

