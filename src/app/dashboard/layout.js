'use client';

import React, { useState } from 'react';
import DashboardHeader from './components/DashboardHeader';
import Sidebar from './components/Sidebar';

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-baloo">
            {/* Dashboard Header */}
            <DashboardHeader onMenuToggle={toggleSidebar} />

            <div className="flex pt-16">
                {/* Sidebar */}
                <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

                {/* Main Content Area */}
                <main className="flex-1 p-4 sm:p-6 lg:ml-20 transition-all duration-300">
                    {children}
                </main>
            </div>
        </div>
    );
}

