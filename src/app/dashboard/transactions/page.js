'use client';

import React, { useState, useEffect } from 'react';
import WelcomeCard from './components/WelcomeCard';
import QuickActions from './components/QuickActions';
import SpendingAnalytics from './components/SpendingAnalytics';
import IncomeExpensesChart from './components/IncomeExpensesChart';
import RecentTransactions from './components/RecentTransactions';

export default function TransactionsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="space-y-8">
            {/* Welcome Card */}
            <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
                <WelcomeCard userName="John" balance="2,450.76" />
            </div>

            {/* Quick Actions */}
            <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '200ms' }}>
                <QuickActions />
            </div>

            {/* Spending Analytics */}
            <div className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '400ms' }}>
                <SpendingAnalytics />
            </div>

                {/* Income vs Expenses Chart */}
                <div className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`} style={{ transitionDelay: '600ms' }}>
                    <IncomeExpensesChart />
                </div>

                {/* Recent Transactions */}
                <div className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`} style={{ transitionDelay: '600ms' }}>
                    <RecentTransactions />
                </div>
        </div>
    );
}

