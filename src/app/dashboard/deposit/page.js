'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Step1SelectCrypto from './components/Step1SelectCrypto';
import Step2DepositAddress from './components/Step2DepositAddress';
import Step3WaitingConfirmation from './components/Step3WaitingConfirmation';

export default function DepositPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [depositData, setDepositData] = useState({
        cryptocurrency: 'USDC',
        network: 'Ethereum (ERC-20) - Secure, most popular',
        address: '0x3d2056c8d8c8c8c84d8c3d29f35b84cfb7b7b2f35f6d0'
    });

    const handleContinueStep1 = (data) => {
        setDepositData({ ...depositData, ...data });
        setCurrentStep(2);
    };

    const handleContinueStep2 = () => {
        setCurrentStep(3);
    };

    const handleBackToStep1 = () => {
        setCurrentStep(1);
    };

    const handleStartOver = () => {
        setCurrentStep(1);
    };

    const handleBackToDashboard = () => {
        router.push('/dashboard');
    };

    const handleCancel = () => {
        router.push('/dashboard');
    };

    return (
        <div className="lg:min-h-[calc(100vh-64px)] flex items-center justify-center lg:p-4">
            {currentStep === 1 && (
                <Step1SelectCrypto
                    onContinue={handleContinueStep1}
                    onCancel={handleCancel}
                    depositData={depositData}
                />
            )}
            {currentStep === 2 && (
                <Step2DepositAddress
                    onContinue={handleContinueStep2}
                    onBack={handleBackToStep1}
                    depositData={depositData}
                />
            )}
            {currentStep === 3 && (
                <Step3WaitingConfirmation
                    onStartOver={handleStartOver}
                    onBackToDashboard={handleBackToDashboard}
                    depositData={depositData}
                />
            )}
        </div>
    );
}

