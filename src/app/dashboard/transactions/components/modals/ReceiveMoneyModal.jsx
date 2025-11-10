'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ReceiveMoneyModal({ isOpen, onClose }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleCopyNumber = () => {
        navigator.clipboard.writeText('+234 800 000 0000');
        alert('Phone number copied to clipboard!');
    };

    const handleShareQR = () => {
        alert('QR code sharing functionality will be implemented here');
    };

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] animate-fadeIn p-4 overflow-y-auto scrollbar-hide">
            <div className="bg-white rounded-2xl w-full max-w-md my-auto shadow-2xl animate-[slideIn_0.3s_ease-out] relative">
                {/* Green Header */}
                <div className="bg-[#018000] text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
                    <h3 className="text-xl font-bold">Receive Money</h3>
                    <button 
                        onClick={onClose}
                        className="w-8 h-8 bg-white text-[#018000] rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:rotate-90 font-bold text-xl"
                    >
                        ×
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6 text-center">
                    {/* Instruction Text */}
                    <p className="text-gray-700 text-sm">
                        Share this QR code or phone number to receive payments
                    </p>

                    {/* QR Code */}
                    <div className="bg-white border-4 border-[#018000] rounded-2xl p-6 inline-block mx-auto">
                        <div className="w-42 h-40 bg-white flex items-center justify-center">
                            {/* QR Code SVG - Using a placeholder pattern */}
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <rect width="200" height="200" fill="white"/>
                                {/* QR Code Pattern */}
                                <rect x="0" y="0" width="60" height="60" fill="black"/>
                                <rect x="10" y="10" width="40" height="40" fill="white"/>
                                <rect x="20" y="20" width="20" height="20" fill="black"/>
                                
                                <rect x="140" y="0" width="60" height="60" fill="black"/>
                                <rect x="150" y="10" width="40" height="40" fill="white"/>
                                <rect x="160" y="20" width="20" height="20" fill="black"/>
                                
                                <rect x="0" y="140" width="60" height="60" fill="black"/>
                                <rect x="10" y="150" width="40" height="40" fill="white"/>
                                <rect x="20" y="160" width="20" height="20" fill="black"/>
                                
                                {/* Random QR pattern */}
                                <rect x="70" y="10" width="10" height="10" fill="black"/>
                                <rect x="90" y="10" width="10" height="10" fill="black"/>
                                <rect x="110" y="10" width="10" height="10" fill="black"/>
                                <rect x="80" y="30" width="10" height="10" fill="black"/>
                                <rect x="100" y="30" width="10" height="10" fill="black"/>
                                <rect x="120" y="30" width="10" height="10" fill="black"/>
                                <rect x="70" y="50" width="10" height="10" fill="black"/>
                                <rect x="90" y="50" width="10" height="10" fill="black"/>
                                <rect x="110" y="50" width="10" height="10" fill="black"/>
                                
                                <rect x="70" y="80" width="10" height="10" fill="black"/>
                                <rect x="100" y="80" width="10" height="10" fill="black"/>
                                <rect x="130" y="80" width="10" height="10" fill="black"/>
                                <rect x="80" y="100" width="10" height="10" fill="black"/>
                                <rect x="110" y="100" width="10" height="10" fill="black"/>
                                <rect x="140" y="100" width="10" height="10" fill="black"/>
                                
                                <rect x="10" y="80" width="10" height="10" fill="black"/>
                                <rect x="30" y="80" width="10" height="10" fill="black"/>
                                <rect x="50" y="80" width="10" height="10" fill="black"/>
                                <rect x="20" y="100" width="10" height="10" fill="black"/>
                                <rect x="40" y="100" width="10" height="10" fill="black"/>
                                <rect x="60" y="100" width="10" height="10" fill="black"/>
                            </svg>
                        </div>
                    </div>

                    {/* Phone Number Box */}
                    <div className="bg-green-50 rounded-2xl p-4 border-l-4 border-[#018000]">
                        <p className="text-sm text-gray-700 mb-2">Your phone number</p>
                        <p className="text-2xl font-bold text-[#018000]">+234 800 000 0000</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={handleCopyNumber}
                            className="py-3 border-2 border-[#018000] text-[#018000] rounded-full hover:bg-green-50 transition-all duration-300 font-semibold text-base"
                        >
                            Copy Number
                        </button>
                        <button
                            onClick={handleShareQR}
                            className="py-3 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-base shadow-lg hover:scale-[1.02]"
                        >
                            Share QR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

