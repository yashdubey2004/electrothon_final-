"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarPicker } from '../CalendarPicker';
import { AccountMenu } from '../AccountMenu';
import { NotificationToast } from '../NotificationToast';

export function TopHeader() {
    const router = useRouter();
    const [showToast, setShowToast] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const handleAction = () => {
        setShowToast(false);
        setTimeout(() => setShowToast(true), 100);
    };

    const handleNotificationClick = () => {
        router.push('/risk-radar');
    };

    return (
        <header className="h-20 glass-panel flex items-center justify-between px-10 z-[30] sticky top-0 border-b-0">
            <div className="flex items-center gap-4">
                <h2 className="font-headline font-semibold text-xl text-on-surface">AI-COO Executive Suite</h2>
                <div className="h-4 w-[1px] bg-outline-variant mx-2"></div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold hover:ring-2 hover:ring-secondary/20 cursor-pointer transition-all" onClick={handleAction}>
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                    Status: Snowflake Cortex Connected
                </div>
            </div>
            <div className="flex items-center gap-6">
                {/* Search Bar Stub */}
                <div 
                    className="relative flex items-center group cursor-pointer"
                    onClick={() => setIsSearchModalOpen(true)}
                >
                    <input 
                        className="pl-10 pr-4 py-2 bg-white/60 border border-outline-variant rounded-full text-sm w-64 group-hover:bg-white transition-all cursor-pointer pointer-events-none" 
                        placeholder="Search data assets..." 
                        readOnly 
                        type="text"
                    />
                    <span className="material-symbols-outlined absolute left-3 text-outline text-lg group-hover:text-primary transition-colors">search</span>
                </div>

                <CalendarPicker />
                
                <div className="flex items-center gap-3">
                    <button 
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all text-on-surface-variant relative" 
                        onClick={handleNotificationClick}
                    >
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-secondary rounded-full border-2 border-white"></span>
                    </button>
                    <AccountMenu />
                </div>
            </div>

            {/* Refined Search Modal Stub */}
            {isSearchModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300 p-4">
                    <div className="glass-panel w-full max-w-2xl p-10 rounded-[40px] shadow-3xl border border-white/50 bg-white/95 animate-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-3xl font-headline font-extrabold text-slate-800 tracking-tight">Global Search</h3>
                            <button onClick={() => setIsSearchModalOpen(false)} className="p-3 hover:bg-slate-100 rounded-2xl transition-all active:scale-90">
                                <span className="material-symbols-outlined text-slate-500">close</span>
                            </button>
                        </div>
                        
                        <div className="relative mb-10">
                            <input 
                                autoFocus
                                className="w-full bg-slate-100 border-none rounded-2xl py-5 px-6 pl-14 focus:ring-4 focus:ring-primary/10 text-lg font-medium placeholder:text-slate-400 outline-none transition-all" 
                                placeholder="Search by SKU, Region, or Strategy..." 
                                type="text"
                            />
                            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary text-2xl">search</span>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Recent Searches</p>
                                <div className="space-y-3">
                                    {['Q3 Logistics Delta', 'EU Churn Forecast', 'Frankfurt Latency'].map(item => (
                                        <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-primary cursor-pointer transition-colors p-1 group">
                                            <span className="material-symbols-outlined text-sm text-slate-300 group-hover:text-primary">history</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Actions</p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm font-bold text-primary hover:underline cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">rocket_launch</span>
                                        Run Revenue Simulation
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-bold text-secondary hover:underline cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">upload_file</span>
                                        Upload Q4 Projections
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showToast && (
                <NotificationToast 
                    message="yet to update" 
                    onDismiss={() => setShowToast(false)} 
                />
            )}
        </header>
    );
}
