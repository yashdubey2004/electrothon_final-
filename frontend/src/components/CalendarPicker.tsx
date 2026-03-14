"use client";

import React from 'react';
import { useDate } from '@/context/DateContext';

export function CalendarPicker() {
    const { selectedDate, setSelectedDate } = useDate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value ? new Date(e.target.value) : null;
        setSelectedDate(date);
    };

    return (
        <div className="relative flex items-center gap-3 glass-panel-sm px-4 py-2 rounded-2xl border border-white/20 bg-white/40 shadow-sm hover:shadow-md transition-all group">
            <span className="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">calendar_today</span>
            <input 
                type="date" 
                value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                onChange={handleChange}
                className="bg-transparent text-sm font-semibold text-on-surface outline-none cursor-pointer placeholder:text-outline"
            />
            <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/0 group-hover:ring-primary/10 transition-all pointer-events-none"></div>
        </div>
    );
}
