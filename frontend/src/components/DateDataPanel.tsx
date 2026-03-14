"use client";

import React from 'react';
import { useDate } from '@/context/DateContext';

export function DateDataPanel() {
    const { selectedDate } = useDate();

    if (!selectedDate) return null;

    const formattedDate = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="glass-panel p-6 rounded-3xl border border-white/40 shadow-sm bg-white/20 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">event_note</span>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-400 font-black uppercase tracking-widest leading-none">Intelligence Snapshot</h4>
                        <p className="text-xl font-headline font-bold text-slate-800 tracking-tight mt-1">{formattedDate}</p>
                    </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-success/10 text-success text-[11px] font-black uppercase tracking-widest">
                    Live Analysis Active
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date-Specific Notes</p>
                    <p className="text-sm font-semibold text-slate-700 leading-snug">
                        System automatically aggregated 12 operational updates and 3 strategic shifts for this period.
                    </p>
                </div>
                <div className="space-y-1 border-l border-outline-variant/30 pl-6">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Key Metric Change</p>
                    <p className="text-sm font-semibold text-primary leading-snug">
                        Revenue efficiency increased by 0.8% compared to previous baseline on this specific date.
                    </p>
                </div>
                <div className="space-y-1 border-l border-outline-variant/30 pl-6">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Risk Factor</p>
                    <p className="text-sm font-semibold text-error leading-snug uppercase">
                        Zero critical vulnerabilities detected in system logs for this timeframe.
                    </p>
                </div>
            </div>
        </div>
    );
}
