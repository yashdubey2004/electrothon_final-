"use client";

import React, { useState, useEffect } from 'react';

export function NotificationToast({ message, duration = 5000, onDismiss }: { message: string, duration?: number, onDismiss?: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onDismiss) onDismiss();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onDismiss]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 right-8 z-[100] animate-in slide-in-from-right-full duration-500">
            <div className="glass-panel px-6 py-4 rounded-2xl shadow-2xl border border-white/40 flex items-center gap-4 bg-white/80 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                    <span className="material-symbols-outlined">warning</span>
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-800 tracking-tight">{message}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">System Alert • Action Required</p>
                </div>
                <button 
                    onClick={() => { setIsVisible(false); if (onDismiss) onDismiss(); }}
                    className="ml-4 p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                >
                    <span className="material-symbols-outlined text-lg">close</span>
                </button>
            </div>
        </div>
    );
}
