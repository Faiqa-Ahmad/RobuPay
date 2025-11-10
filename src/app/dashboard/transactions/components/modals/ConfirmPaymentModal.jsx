'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ConfirmPaymentModal({ isOpen, onClose, onConfirm, paymentData, autoConfirm = false }) {
    const [mounted, setMounted] = useState(false);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Auto-confirm after 5 seconds if autoConfirm is true
    useEffect(() => {
        if (isOpen && autoConfirm) {
            setCountdown(5);
            const countdownInterval = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(countdownInterval);
                        onConfirm();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [isOpen, autoConfirm, onConfirm]);

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] animate-fadeIn p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-md my-auto shadow-2xl animate-[slideIn_0.3s_ease-out] relative">
                {/* Green Header */}
                <div className="bg-[#018000] text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
                    <h3 className="text-xl font-bold">Confirm Payment</h3>
                    <button 
                        onClick={onClose}
                        className="w-8 h-8 bg-white text-[#018000] rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:rotate-90 font-bold text-xl"
                    >
                        ×
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                    {/* Payment Details Box */}
                    <div className="bg-green-50 rounded-2xl p-6 text-center space-y-4">
                        <p className="text-sm text-gray-700 font-medium">Sending to</p>
                        <p className="text-xl font-bold text-[#018000]">
                            {paymentData?.phoneNumber || '+234 800 000 0000'}
                        </p>
                        <div className="bg-white rounded-full px-6 py-3 inline-block">
                            <p className="text-3xl font-bold text-[#018000]">
                                ${paymentData?.amount || '2,000'}
                            </p>
                        </div>
                        <p className="text-lg font-semibold text-gray-800">
                            {paymentData?.currency || 'USDC'}
                        </p>
                    </div>

                    {/* Warning Box */}
                    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 flex gap-3">
                        <div className="flex-shrink-0">
                            <span className="text-2xl">⚠️</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-red-600 mb-1">Verify Details</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Make sure the phone number is correct. This transaction cannot be reversed.
                            </p>
                            {autoConfirm && countdown > 0 && (
                                <p className="text-sm font-bold mt-2 text-[#018000]">
                                    Auto-confirming in {countdown} seconds...
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={onClose}
                            className="py-3 border-2 border-[#018000] text-[#018000] rounded-full hover:bg-green-50 transition-all duration-300 font-semibold text-base"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            className="py-3 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-base shadow-lg hover:scale-[1.02]"
                        >
                            Confirm & Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

