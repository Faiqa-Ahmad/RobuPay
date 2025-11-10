'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Step1WithdrawForm from './components/Step1WithdrawForm';
import Step2ReviewWithdrawal from './components/Step2ReviewWithdrawal';
import Step3WithdrawalSuccess from './components/Step3WithdrawalSuccess';

export default function WithdrawPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [withdrawData, setWithdrawData] = useState({
        cryptocurrency: 'USDC',
        network: 'Ethereum',
        amount: '302.87',
        destinationAddress: '0x742d385Cc6e634C032926a3db4d0458b7e958f04Eb',
        networkFee: '2.00',
        youWillReceive: '300.00',
        availableBalance: '2,450.75'
    });

    const handleContinueStep1 = (data) => {
        setWithdrawData({ ...withdrawData, ...data });
        setCurrentStep(2);
    };

    const handleConfirmStep2 = () => {
        setCurrentStep(3);
    };

    const handleBackToStep1 = () => {
        setCurrentStep(1);
    };

    const handleBackToDashboard = () => {
        router.push('/dashboard');
    };

    const handleCancel = () => {
        router.push('/dashboard');
    };

    return (
        <div className="lg:min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
            {currentStep === 1 && (
                <Step1WithdrawForm
                    onContinue={handleContinueStep1}
                    onCancel={handleCancel}
                    withdrawData={withdrawData}
                />
            )}
            {currentStep === 2 && (
                <Step2ReviewWithdrawal
                    onConfirm={handleConfirmStep2}
                    onBack={handleBackToStep1}
                    withdrawData={withdrawData}
                />
            )}
            {currentStep === 3 && (
                <Step3WithdrawalSuccess
                    onBackToDashboard={handleBackToDashboard}
                    withdrawData={withdrawData}
                />
            )}
        </div>
    );
}

