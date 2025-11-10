'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export default function ScanQRModal({ isOpen, onClose, onScanComplete }) {
    const [mounted, setMounted] = useState(false);
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleSimulateScanning = () => {
        setIsScanning(true);
        // Simulate scanning completion after 3 seconds
        setTimeout(() => {
            setIsScanning(false);
            // Trigger the payment flow with scanned data
            onScanComplete({
                phoneNumber: '+234 800 000 0000',
                amount: '150.00',
                currency: 'USDC',
                notes: 'Payment via QR scan'
            });
        }, 3000);
    };

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] animate-fadeIn p-4 overflow-y-auto scrollbar-hide">
            <div className="bg-white rounded-2xl w-full max-w-md my-auto shadow-2xl animate-[slideIn_0.3s_ease-out] relative">
                {/* Green Header */}
                <div className="bg-[#018000] text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
                    <h3 className="text-xl font-bold">Scan QR Code</h3>
                    <button 
                        onClick={onClose}
                        className="w-8 h-8 bg-white text-[#018000] rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:rotate-90 font-bold text-xl"
                    >
                        ×
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                    {/* Scanning Area */}
                    <div className="bg-black rounded-2xl p-6 relative overflow-hidden">
                        <div className="relative w-full h-50 flex items-center justify-center">
                            {/* Scanning Frame */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-54 h-54 border-4 border-[#018000] rounded-2xl relative">
                                    {/* Corner decorations */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#018000] rounded-tl-2xl"></div>
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#018000] rounded-tr-2xl"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#018000] rounded-bl-2xl"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#018000] rounded-br-2xl"></div>
                                </div>
                            </div>

                            {/* Scanning Animation GIF */}
                            <div className="relative z-10">
                                <Image 
                                    src="/transactions/scanqr.gif" 
                                    alt="Scanning" 
                                    width={210} 
                                    height={200}
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Instruction Text */}
                        <div className="text-center space-y-2 mt-4">
                            <p className="text-white text-sm font-semibold">
                                Position QR code within frame
                            </p>
                            <p className="text-gray-400 text-sm">
                                {isScanning ? 'Scanning...' : 'Scanning...'}
                            </p>
                        </div>
                    </div>

                    {/* Tip Box */}
                    <div className="bg-green-50 rounded-xl p-4 border-l-4 border-yellow-500">
                        <p className="text-sm text-gray-700">
                            <span className="mr-2">💡</span>
                            Tip: Make sure the QR code is well lit and centered
                        </p>
                    </div>

                    {/* Simulate Button */}
                    <button
                        onClick={handleSimulateScanning}
                        disabled={isScanning}
                        className="w-full py-3 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-base shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isScanning ? 'Scanning...' : 'Simulate Scanning...'}
                    </button>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

