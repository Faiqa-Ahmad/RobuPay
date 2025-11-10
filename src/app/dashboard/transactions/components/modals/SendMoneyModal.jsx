'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function SendMoneyModal({ isOpen, onClose, onNext }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USDC');
    const [notes, setNotes] = useState('');

    const recentContacts = [
        { name: 'Sarah Johnson', phone: '+234 800 000 0000', initials: 'SJ' },
        { name: 'Sarah Johnson', phone: '+234 800 000 0000', initials: 'SJ' },
    ];

    const handleContinue = () => {
        onNext({
            phoneNumber: phoneNumber || recentContacts[0].phone,
            amount: amount || '0.00',
            currency,
            notes
        });
    };

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] animate-fadeIn p-4 overflow-y-auto scrollbar-hide">
            <div className="bg-white rounded-2xl w-full max-w-md my-auto shadow-2xl animate-[slideIn_0.3s_ease-out] relative">
                {/* Green Header */}
                <div className="bg-[#018000] text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
                    <h3 className="text-xl font-bold">Send Money</h3>
                    <button 
                        onClick={onClose}
                        className="w-8 h-8 bg-white text-[#018000] rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:rotate-90 font-bold text-xl"
                    >
                        ×
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
                    {/* Send Money Header */}
                    <div>
                        <h4 className="text-xl font-bold text-black mb-1">Send Money</h4>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600">Send to phone number</p>
                            <p className="text-sm text-gray-400">------------------------</p>
                        </div>
                    </div>

                    {/* Phone Number Input */}
                    <input
                        type="text"
                        placeholder="80 800 000 0000"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#018000] transition-colors text-gray-700 shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                    />

                    {/* Recent Contacts */}
                    <div>
                        <p className="text-sm font-semibold text-gray-700 ">Recent Contacts</p>
                        <div className="space-y-1">
                            {recentContacts.map((contact, index) => (
                                <button
                                    key={index}
                                    onClick={() => setPhoneNumber(contact.phone)}
                                    className="w-full flex items-center gap-2 p-1 hover:bg-gray-50 rounded-full transition-colors"
                                >
                                    <div className="w-10 h-10 bg-[#018000] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {contact.initials}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-gray-900 text-sm">{contact.name}</p>
                                        <p className="text-xs text-gray-500">{contact.phone}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Amount Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 ">Amount</label>
                        <input
                            type="text"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#018000] transition-colors text-gray-700 shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                        />
                    </div>

                    {/* Currency Dropdown */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 ">Currency</label>
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#018000] transition-colors text-gray-700 cursor-pointer appearance-none bg-white shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                        >
                            <option value="USDC">USDC</option>
                            <option value="USDT">USDT</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                        </select>
                    </div>

                    {/* Notes Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 ">Notes Optional</label>
                        <textarea
                            placeholder="Additional Notes or terms"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows="3"
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#018000] transition-colors resize-none text-gray-700 shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                        ></textarea>
                    </div>

                    {/* Continue Button */}
                    <button
                        onClick={handleContinue}
                        className="w-full py-2 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-base shadow-lg hover:scale-[1.02]"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

