'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export default function PaymentSuccessModal({ isOpen, onClose, paymentData }) {
    const [mounted, setMounted] = useState(false);
    const [transactionId] = useState(() => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let id = 'TX-';
        for (let i = 0; i < 9; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    });

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] animate-fadeIn p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-md my-auto shadow-2xl animate-[slideIn_0.3s_ease-out] relative">
                {/* Green Header */}
                <div className="bg-[#018000] text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
                    <h3 className="text-xl font-bold">Payment Successful!</h3>
                    <button 
                        onClick={onClose}
                        className="w-8 h-8 bg-white text-[#018000] rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:rotate-90 font-bold text-xl"
                    >
                        ×
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 text-center space-y-6">
                    {/* Party Icon */}
                    <div className="flex justify-center animate-bounce">
                        <Image src="/party.png" alt="Party" width={96} height={96} className="object-contain" />
                    </div>

                    {/* Success Message */}
                    <div>
                        <h2 className="text-2xl font-bold text-black mb-2">
                            Payment sent successfully
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Your payment has been processed and sent to the recipient
                        </p>
                    </div>

                    {/* Transaction Details Box */}
                    <div className="bg-green-50 rounded-2xl p-6 space-y-4 text-left">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">Amount:</span>
                            <span className="text-[#018000] font-bold text-xl">
                                ${paymentData?.amount || '2,000'}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">To:</span>
                            <span className="text-[#018000] font-bold">
                                {paymentData?.phoneNumber || '+234 800 000 0000'}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">Transaction ID:</span>
                            <span className="text-[#018000] font-bold">
                                {transactionId}
                            </span>
                        </div>
                    </div>

                    {/* Done Button */}
                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-base shadow-lg hover:scale-[1.02]"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

