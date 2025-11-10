'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SendMoneyModal from './modals/SendMoneyModal';
import ConfirmPaymentModal from './modals/ConfirmPaymentModal';
import PaymentSuccessModal from './modals/PaymentSuccessModal';
import ReceiveMoneyModal from './modals/ReceiveMoneyModal';
import ScanQRModal from './modals/ScanQRModal';

export default function QuickActions() {
    const router = useRouter();
    const [showSendMoneyModal, setShowSendMoneyModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showReceiveMoneyModal, setShowReceiveMoneyModal] = useState(false);
    const [showScanQRModal, setShowScanQRModal] = useState(false);
    const [paymentData, setPaymentData] = useState(null);
    const [autoConfirmEnabled, setAutoConfirmEnabled] = useState(false);

    // Prevent body scroll when any modal is open
    useEffect(() => {
        if (showSendMoneyModal || showConfirmModal || showSuccessModal || showReceiveMoneyModal || showScanQRModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showSendMoneyModal, showConfirmModal, showSuccessModal, showReceiveMoneyModal, showScanQRModal]);

    const actions = [
        { 
            name: 'Send money', 
            image: '/transactions/money.png',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-500',
            onClick: () => setShowSendMoneyModal(true)
        },
        { 
            name: 'Receive money', 
            image: '/transactions/phone.png',
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-500',
            onClick: () => setShowReceiveMoneyModal(true)
        },
        { 
            name: 'Scan QR', 
            image: "/transactions/camera.png",
            bgColor: 'bg-gray-50',
            iconColor: 'text-gray-700',
            onClick: () => setShowScanQRModal(true)
        },
        { 
            name: 'Deposit Funds', 
            image: "/transactions/card.png",
            bgColor: 'bg-yellow-50',
            iconColor: 'text-yellow-600',
            onClick: () => router.push('/dashboard/deposit')
        },
        { 
            name: 'Withdraw Funds', 
            image: '/transactions/bank.png',
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-500',
            onClick: () => router.push('/dashboard/withdraw')
        },
    ];

    const handleSendMoneyNext = (data) => {
        setPaymentData(data);
        setShowSendMoneyModal(false);
        setAutoConfirmEnabled(false); // Manual confirmation for send money
        setShowConfirmModal(true);
    };

    const handleScanComplete = (data) => {
        setPaymentData(data);
        setShowScanQRModal(false);
        setAutoConfirmEnabled(true); // Auto-confirm for QR scan
        setShowConfirmModal(true);
    };

    const handleConfirmPayment = () => {
        setShowConfirmModal(false);
        setShowSuccessModal(true);
    };

    const handleCloseAll = () => {
        setShowSendMoneyModal(false);
        setShowConfirmModal(false);
        setShowSuccessModal(false);
        setShowReceiveMoneyModal(false);
        setShowScanQRModal(false);
        setPaymentData(null);
        setAutoConfirmEnabled(false);
    };

    return (
        <>
            <div>
                <h3 className="text-xl font-bold text-black mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {actions.map((action, index) => (
                        <button
                            key={index}
                            onClick={action.onClick}
                            className="bg-[#F5FCF6] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className={`w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                <img src={action.image} alt={action.name} className="w-10 h-10 object-contain" />
                            </div>
                            <p className="text-sm font-semibold text-gray-800 text-center group-hover:text-[#018000] transition-colors">
                                {action.name}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modals */}
            <SendMoneyModal 
                isOpen={showSendMoneyModal}
                onClose={handleCloseAll}
                onNext={handleSendMoneyNext}
            />
            <ConfirmPaymentModal
                isOpen={showConfirmModal}
                onClose={handleCloseAll}
                onConfirm={handleConfirmPayment}
                paymentData={paymentData}
                autoConfirm={autoConfirmEnabled}
            />
            <PaymentSuccessModal
                isOpen={showSuccessModal}
                onClose={handleCloseAll}
                paymentData={paymentData}
            />
            <ReceiveMoneyModal
                isOpen={showReceiveMoneyModal}
                onClose={handleCloseAll}
            />
            <ScanQRModal
                isOpen={showScanQRModal}
                onClose={handleCloseAll}
                onScanComplete={handleScanComplete}
            />
        </>
    );
}

