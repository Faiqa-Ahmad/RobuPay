'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaCalendar } from 'react-icons/fa';

export default function CreateInvoicePage() {
    const router = useRouter();
    const [selectedCurrency, setSelectedCurrency] = useState('USDT');
    const [isVisible, setIsVisible] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formData, setFormData] = useState({
        customer: '',
        invoiceNumber: '61DGHE562-001',
        dueDate: '11/11/2025',
        items: [{ description: '', qty: '', price: '' }],
        notes: ''
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const currencies = [
        { name: 'USDT', icon: '₮' },
        { name: 'Bitcoin', icon: '₿' },
        { name: 'Ethereum', icon: 'Ξ' },
        { name: 'USDC', icon: '$' }
    ];

    const handleAddItem = () => {
        setFormData({
            ...formData,
            items: [...formData.items, { description: '', qty: '', price: '' }]
        });
    };

    const handleBack = () => {
        router.push('/dashboard/invoices');
    };

    const handleSendInvoice = () => {
        console.log('Invoice sent:', formData);
        setShowSuccessModal(true);
        // Redirect to invoices page after 3 seconds
        setTimeout(() => {
            router.push('/dashboard/invoices');
        }, 3000);
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        router.push('/dashboard/invoices');
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-3 sm:px-4">
                <div className="rounded-full">
                    {/* Header */}
                    <div className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}>
                        <button
                            onClick={handleBack}
                            className="w-9 h-9 sm:w-10 sm:h-10 bg-[#018000] rounded-full flex items-center justify-center text-white hover:bg-[#016500] transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        >
                            <FaArrowLeft className="text-sm sm:text-base" />
                        </button>
                        <h2 className="text-lg sm:text-xl font-bold text-black">Invoice Details</h2>
                    </div>

                    {/* Customer */}
                    <div className={`mb-3 sm:mb-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`} style={{ transitionDelay: '100ms' }}>
                        <label className="block text-xs sm:text-sm font-medium text-black mb-1 sm:mb-1">Customer</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Find or add customer"
                                value={formData.customer}
                                onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 pr-20 sm:pr-24 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#018000] focus:border-transparent text-xs sm:text-sm shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15)]"
                            />
                            <button className="absolute right-1 top-1/2 -translate-y-1/2 px-3 sm:px-5 py-1.5 sm:py-2 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-xs sm:text-sm hover:scale-105 hover:shadow-md">
                                + Add
                            </button>
                        </div>
                    </div>

                    {/* Invoice Number and Due Date */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`} style={{ transitionDelay: '200ms' }}>
                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-black mb-1">Invoice Number</label>
                            <input
                                type="text"
                                value={formData.invoiceNumber}
                                onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#018000] focus:border-transparent text-xs sm:text-sm shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                            />
                        </div>
                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-black mb-1">Due Date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.dueDate}
                                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 pr-10 sm:pr-11 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#018000] focus:border-transparent text-xs sm:text-sm shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                                />
                                <FaCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-[#018000] text-sm transition-transform duration-300 hover:scale-125" />
                            </div>
                        </div>
                    </div>

                    {/* Currency */}
                    <div className={`mb-3 sm:mb-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`} style={{ transitionDelay: '300ms' }}>
                        <label className="block text-xs sm:text-sm font-medium text-black mb-2 sm:mb-3">Currency</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                            {currencies.map((currency, index) => (
                                <button
                                    key={currency.name}
                                    onClick={() => setSelectedCurrency(currency.name)}
                                    className={`p-2 sm:p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${selectedCurrency === currency.name
                                            ? 'border-[#018000] bg-green-100 scale-105'
                                            : 'border-gray-300 bg-white hover:border-gray-400'
                                        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                                >
                                    <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg transition-all duration-300 ${selectedCurrency === currency.name ? 'bg-[#018000] text-white rotate-[360deg]' : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {currency.icon}
                                        </div>
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-700">{currency.name}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Item/Services */}
                    <div className={`mb-3 sm:mb-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`} style={{ transitionDelay: '600ms' }}>
                        <label className="block text-xs sm:text-sm font-medium text-black mb-2 sm:mb-3">Item/Services</label>
                        {formData.items.map((item, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-3 animate-[slideIn_0.3s_ease-out]">
                                <input
                                    type="text"
                                    placeholder="Item description"
                                    value={item.description}
                                    className="px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#018000] focus:border-transparent text-xs sm:text-sm shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                                />
                                <div className="grid grid-cols-2 gap-2 sm:contents">
                                    <input
                                        type="text"
                                        placeholder="Qty"
                                        value={item.qty}
                                        className="px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#018000] focus:border-transparent text-xs sm:text-sm shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Price"
                                        value={item.price}
                                        className="px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#018000] focus:border-transparent text-xs sm:text-sm shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-start">
                            <button
                                onClick={handleAddItem}
                                className="text-[#018000] font-semibold text-xs sm:text-sm flex gap-2 border-2 border-dashed border-[#018000] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
                            >
                                + Add Another Item
                            </button>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className={`mb-3 sm:mb-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`} style={{ transitionDelay: '700ms' }}>
                        <label className="block text-xs sm:text-sm font-medium text-black mb-1">Notes Optional</label>
                        <textarea
                            placeholder="Additional Notes or terms"
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            rows="3"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#018000] focus:border-transparent resize-none text-xs sm:text-sm shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.2)]"
                        ></textarea>
                    </div>

                    {/* Send Invoice Button */}
                    <div className="flex justify-center mb-4 sm:mb-0">
                        <button
                            onClick={handleSendInvoice}
                            className={`py-2 sm:py-2 px-6 sm:px-8 bg-[#018000] text-white rounded-full hover:bg-[#016500] transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                            style={{ transitionDelay: '800ms' }}
                        >
                            Send Invoice
                        </button>
                    </div>

                </div>
                {/* Right Side - Preview */}
                <div className={`bg-[#D5E9D8] p-3 sm:p-4 rounded-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`} style={{ transitionDelay: '400ms' }}>
                    <div className="relative">
                        <div className="bg-[#018000] text-white px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 md:pt-6 pb-8 sm:pb-10 md:pb-12 rounded-b-2xl sm:rounded-b-3xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                            <div className="flex items-center justify-between mb-2 sm:mb-1">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <img src="/signin-image.png" alt="RobuPay" className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-110" />
                                </div>
                                <div className="text-right">
                                    <p className="text-xs sm:text-sm md:text-base font-bold mb-0.5 sm:mb-1">Bill to</p>
                                    <p className="text-xs sm:text-sm md:text-base">John Doe</p>
                                </div>
                            </div>

                            {/* Invoice Details Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                                <div>
                                    <p className="font-bold mb-0.5 sm:mb-1 md:mb-1.5 text-xs sm:text-sm">Invoice number:</p>
                                    <p className="text-xs sm:text-sm md:text-base break-all">{formData.invoiceNumber}</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-0.5 sm:mb-1 md:mb-1.5 text-xs sm:text-sm">Date of Issue:</p>
                                    <p className="text-xs sm:text-sm md:text-base">October 13, 2025</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-0.5 sm:mb-1 md:mb-1.5 text-xs sm:text-sm">Due Date:</p>
                                    <p className="text-xs sm:text-sm md:text-base">November 13, 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* White Table Header Section - Overlapping */}
                        <div className="relative -mt-4 sm:-mt-5 md:-mt-6 mx-2 sm:mx-3 md:mx-4">
                            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg px-3 sm:px-5 md:px-8 py-2 sm:py-3 md:py-4 transition-all duration-300 hover:shadow-xl">
                                <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                                    <div className="text-[10px] sm:text-xs md:text-base font-semibold text-gray-800">Description</div>
                                    <div className="text-[10px] sm:text-xs md:text-base font-semibold text-gray-800 text-center">Qty</div>
                                    <div className="text-[10px] sm:text-xs md:text-base font-semibold text-gray-800 text-center">Price</div>
                                    <div className="text-[10px] sm:text-xs md:text-base font-semibold text-gray-800 text-right">Amount</div>
                                </div>
                            </div>
                        </div>

                        {/* White Content Section */}
                        <div className="bg-white mt-1 sm:mt-1.5 md:mt-2 rounded-b-2xl sm:rounded-b-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
                            {/* Empty Space for Items */}
                            <div className="px-3 sm:px-5 md:px-8 py-10 sm:py-15 md:py-20">
                                {/* This space will be filled with items */}
                            </div>

                            {/* Totals Section */}
                            <div className="px-3 sm:px-5 md:px-8 pb-4 sm:pb-6 md:pb-8 space-y-2 sm:space-y-2.5 md:space-y-3">
                                <div className="flex justify-between items-center text-xs sm:text-sm md:text-base">
                                    <span className="text-gray-800 font-medium">Subtotal</span>
                                    <span className="font-semibold">$0.00</span>
                                </div>
                                <div className="flex justify-between items-center text-xs sm:text-sm md:text-base">
                                    <span className="text-gray-800 font-medium">Total</span>
                                    <span className="font-semibold">$0.00</span>
                                </div>
                                <div className="flex justify-between items-center text-xs sm:text-sm md:text-base border-t border-gray-300 pt-2 sm:pt-2.5 md:pt-3">
                                    <span className="font-bold">Amount Due</span>
                                    <span className="font-bold">$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] animate-fadeIn px-4">
                    <div className="bg-white rounded-lg max-w-md w-full overflow-hidden shadow-2xl animate-[slideIn_0.3s_ease-out]">
                        {/* Green Header */}
                        <div className="bg-[#018000] text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                            <h3 className="text-lg sm:text-xl font-bold">Create Invoice</h3>
                            <button 
                                onClick={handleCloseModal}
                                className="w-7 h-7 sm:w-8 sm:h-8 bg-white text-[#018000] rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:rotate-90 font-bold text-lg sm:text-xl"
                            >
                                ×
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 sm:p-8 text-center">
                            {/* Party Icon */}
                            <div className="flex justify-center mb-3 sm:mb-4 animate-bounce">
                                <img src='/party.png' className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">
                                Congratulations!!!
                            </h2>

                            {/* Success Message */}
                            <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm">
                                Invoice created successfully and sent to the customer
                            </p>

                            {/* Invoice Details Box */}
                            <div className="bg-green-50 rounded-2xl p-4 sm:p-6 space-y-2 sm:space-y-3">
                                <p className="text-[#018000] font-bold text-lg sm:text-2xl tracking-wider break-all">
                                    {formData.invoiceNumber}
                                </p>
                                <p className="text-gray-700 text-xs sm:text-sm font-medium">
                                    Invoice Amount
                                </p>
                                <p className="text-[#018000] font-bold text-2xl sm:text-3xl">
                                    2,000 {selectedCurrency}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
