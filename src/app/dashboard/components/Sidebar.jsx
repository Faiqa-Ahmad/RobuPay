'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaHome, FaFileInvoice, FaExchangeAlt, FaUsers, FaLock, FaCog, FaHeadset, FaTimes } from 'react-icons/fa';

export default function Sidebar({ isOpen, onClose }) {
    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { name: 'Home', icon: FaHome, path: '/dashboard' },
        { name: 'Invoices', icon: FaFileInvoice, path: '/dashboard/invoices' },
        { name: 'Transaction', icon: FaExchangeAlt, path: '/dashboard/transactions' },
        { name: 'Customer', icon: FaUsers, path: '/dashboard/customers' },
        { name: 'Escrows', icon: FaLock, path: '/dashboard/escrows' },
    ];

    const bottomMenuItems = [
        { name: 'Settings', icon: FaCog, path: '/dashboard/settings' },
        { name: 'Support', icon: FaHeadset, path: '/dashboard/support' },
    ];

    const handleNavigation = (path) => {
        router.push(path);
        // Close sidebar on mobile after navigation
        if (onClose) {
            onClose();
        }
    };

    const isActive = (path) => {
        return pathname === path;
    };

    // Prevent body scroll when mobile sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar */}
            <aside className={`
                fixed top-16 bottom-2 w-64 bg-black text-white flex flex-col py-4 px-3 z-50 rounded-lg my-2
                transition-all duration-300 ease-in-out
                
                /* Mobile: Slide from left */
                lg:left-2 lg:w-16 lg:items-center lg:px-0 lg:py-2
                
                /* Mobile positioning and animation */
                ${isOpen 
                    ? 'left-2 translate-x-0' 
                    : '-translate-x-full lg:translate-x-0'
                }
                
                /* Shadow */
                shadow-2xl lg:shadow-lg
            `}>
                {/* Mobile Close Button */}
                <button
                    onClick={onClose}
                    className="lg:hidden absolute top-3 right-3 p-2 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
                >
                    <FaTimes className="text-xl" />
                </button>

                {/* Logo/Title - Mobile Only */}
                <div className="lg:hidden mb-6 pb-4 border-b border-gray-800">
                    <h2 className="text-lg font-bold text-white">Menu</h2>
                    <p className="text-xs text-gray-400 mt-1">Navigate your dashboard</p>
                </div>

                {/* Top Menu Items */}
                <div className="flex flex-col gap-2 flex-1">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);
                        return (
                            <button
                                key={index}
                                onClick={() => handleNavigation(item.path)}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                                    lg:flex-col lg:justify-center lg:w-12 lg:h-12 lg:px-0 lg:py-0 lg:rounded-full lg:gap-0
                                    ${active 
                                        ? 'bg-[#018000] shadow-lg scale-105' 
                                        : 'bg-transparent hover:bg-gray-800 hover:scale-105'
                                    }
                                    ${isOpen 
                                        ? 'lg:opacity-100 lg:translate-x-0' 
                                        : ''
                                    }
                                `}
                                style={{
                                    animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                                }}
                                title={item.name}
                            >
                                <Icon className="text-lg lg:mb-0.5 flex-shrink-0" />
                                <span className="text-sm lg:text-[8px] font-medium">{item.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Bottom Menu Items */}
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-800 lg:border-0 lg:pt-0">
                    {bottomMenuItems.map((item, index) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);
                        return (
                            <button
                                key={index}
                                onClick={() => handleNavigation(item.path)}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                                    lg:flex-col lg:justify-center lg:w-12 lg:h-12 lg:px-0 lg:py-0 lg:rounded-full lg:gap-0
                                    ${active 
                                        ? 'bg-[#018000] shadow-lg scale-105' 
                                        : 'bg-transparent hover:bg-gray-800 hover:scale-105'
                                    }
                                `}
                                style={{
                                    animation: isOpen ? `slideIn 0.3s ease-out ${(menuItems.length + index) * 0.05}s both` : 'none'
                                }}
                                title={item.name}
                            >
                                <Icon className="text-lg lg:mb-0.5 flex-shrink-0" />
                                <span className="text-sm lg:text-[8px] font-medium">{item.name}</span>
                            </button>
                        );
                    })}
                </div>
            </aside>
        </>
    );
}

