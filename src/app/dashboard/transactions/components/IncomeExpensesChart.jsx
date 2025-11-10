'use client';

import React, { useState } from 'react';

export default function IncomeExpensesChart() {
    const [hoveredBar, setHoveredBar] = useState(null);
    
    const data = [
        { day: 'Mon', income: 250, expenses: 650 },
        { day: 'Tue', income: 230, expenses: 650 },
        { day: 'Wed', income: 220, expenses: 650 },
        { day: 'Thu', income: 230, expenses: 650 },
        { day: 'Fri', income: 240, expenses: 650 },
        { day: 'Sat', income: 220, expenses: 650 },
        { day: 'Fri', income: 230, expenses: 650 },
        { day: 'Sat', income: 230, expenses: 650 },
        { day: 'Sun', income: 220, expenses: 650 },
    ];

    const maxValue = 1000;

    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-black">Income vs Expenses</h3>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#018000] rounded-full"></div>
                        <span className="text-sm text-gray-700">Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Expenses</span>
                    </div>
                </div>
            </div>

            {/* Chart Container */}
            <div className="relative h-[300px]">
                {/* Y-Axis Labels */}
                <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-right pr-2">
                    <span className="text-xs text-gray-500">$1000</span>
                    <span className="text-xs text-gray-500">$800</span>
                    <span className="text-xs text-gray-500">$600</span>
                    <span className="text-xs text-gray-500">$400</span>
                    <span className="text-xs text-gray-500">$200</span>
                    <span className="text-xs text-gray-500">0</span>
                </div>

                {/* Grid Lines */}
                <div className="absolute left-12 right-0 top-0 bottom-8 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-full border-t border-gray-200"></div>
                    ))}
                </div>

                {/* Bars Container */}
                <div className="absolute left-12 right-0 top-0 bottom-8 flex items-end justify-between px-2">
                    {data.map((item, index) => {
                        const incomeHeight = (item.income / maxValue) * 100;
                        const expensesHeight = (item.expenses / maxValue) * 100;
                        
                        return (
                            <div
                                key={index}
                                className="flex items-end gap-1 flex-1 justify-center relative group"
                                onMouseEnter={() => setHoveredBar(index)}
                                onMouseLeave={() => setHoveredBar(null)}
                            >
                                {/* Income Bar */}
                                <div
                                    className="w-8 bg-[#018000] rounded-t-lg transition-all duration-300 hover:opacity-80 cursor-pointer"
                                    style={{ height: `${incomeHeight}%` }}
                                ></div>
                                
                                {/* Expenses Bar */}
                                <div
                                    className="w-8 bg-red-500 rounded-t-lg transition-all duration-300 hover:opacity-80 cursor-pointer"
                                    style={{ height: `${expensesHeight}%` }}
                                ></div>

                                {/* Tooltip */}
                                {hoveredBar === index && (
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-xl border border-gray-200 z-10 whitespace-nowrap animate-[slideIn_0.2s_ease-out]">
                                        <p className="font-semibold text-gray-800 mb-1">{item.day}</p>
                                        <p className="text-[#018000] text-sm">Income: ${item.income}</p>
                                        <p className="text-red-500 text-sm">Expenses: ${item.expenses}</p>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* X-Axis Labels */}
                <div className="absolute left-12 right-0 bottom-0 h-8 flex items-center justify-between px-2">
                    {data.map((item, index) => (
                        <div key={index} className="flex-1 text-center">
                            <span className="text-xs text-gray-600 font-medium">{item.day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

