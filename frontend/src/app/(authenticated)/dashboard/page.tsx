"use client";

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] font-sans selection:bg-primary/20">
            {/* Header / Nav */}
            <header className="fixed top-0 left-0 right-0 h-24 flex items-center justify-between px-12 z-50 bg-white/40 backdrop-blur-md border-b border-white/20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-white">bubble_chart</span>
                    </div>
                    <span className="font-headline font-bold text-xl tracking-tight">AI-COO</span>
                </div>
                
                <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-on-surface-variant">
                    <Link href="#" className="hover:text-primary transition-colors">Platform</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Solutions</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Security</Link>
                </nav>

                <div className="flex items-center gap-6">
                    <Link href="/login" className="text-sm font-bold text-primary hover:underline">Sign In</Link>
                    <Link href="/login" className="glass-pill-primary px-8 py-3 text-sm font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                        Request Demo
                    </Link>
                </div>
            </header>

            <main className="pt-48 pb-24 px-8 overflow-hidden">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto text-center relative">
                    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Enterprise Intelligence v4.0
                    </div>
                    
                    <h1 className="text-7xl md:text-8xl font-headline font-black tracking-tight leading-[0.9] text-on-surface mb-10 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        Ask your company <br/>
                        <span className="text-primary italic">anything.</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                        Replace static dashboards with a conversational AI executive. <br/>
                        Powered by <span className="font-bold text-on-surface">Snowflake Cortex</span>, <span className="font-bold text-on-surface">Gemini</span>, and <span className="font-bold text-on-surface">ElevenLabs</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
                        <Link href="/login" className="glass-pill-primary px-10 py-5 text-lg font-bold shadow-2xl shadow-primary/30 group flex items-center gap-3">
                            Enter Executive Suite
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                        <button className="px-10 py-5 text-lg font-bold text-on-surface-variant hover:bg-white hover:shadow-sm rounded-full transition-all flex items-center gap-3">
                            <span className="material-symbols-outlined fill-current">play_circle</span>
                            Watch Keynote
                        </button>
                    </div>

                    {/* Voice Wave Animation Placeholder */}
                    <div className="mt-24 max-w-5xl mx-auto glass-panel p-1 border-white/50 rounded-[40px] shadow-3xl">
                        <div className="bg-white/40 backdrop-blur-xl rounded-[38px] p-12 flex flex-col items-center justify-center gap-10">
                            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 border border-white/80 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-sm">mic</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Listening</span>
                                <span className="text-xs font-medium text-on-surface">What was our net churn in EMEA last quarter?</span>
                            </div>
                            
                            <div className="flex items-end gap-1 h-32">
                                {[30, 60, 45, 80, 50, 90, 40, 70, 55, 30].map((h, i) => (
                                    <div 
                                        key={i} 
                                        className="w-1.5 rounded-full primary-gradient animate-wave" 
                                        style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                                    ></div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-outline">
                                <span className="material-symbols-outlined text-sm">lock</span>
                                Encrypted Metadata
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="max-w-7xl mx-auto mt-48 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="glass-panel p-10 rounded-[40px] border-white/50 bg-white/20 hover:bg-white/40 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary">universal_currency_alt</span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold mb-4">Universal Data Ingestion</h3>
                        <p className="text-on-surface-variant leading-relaxed">
                            Native Snowflake Cortex integration allowing zero-copy data processing. Instant access to your entire data warehouse via voice.
                        </p>
                    </div>

                    <div className="glass-panel p-10 rounded-[40px] border-white/50 bg-white/20 hover:bg-white/40 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary">radar</span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold mb-4">Predictive Risk Radar</h3>
                        <p className="text-on-surface-variant leading-relaxed">
                            Continuous monitoring of enterprise KPIs with autonomous anomaly detection and proactive risk mitigation strategies.
                        </p>
                    </div>

                    <div className="glass-panel p-10 rounded-[40px] border-white/50 bg-white/20 hover:bg-white/40 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary">groups</span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold mb-4">Multi-Persona Boardroom</h3>
                        <p className="text-on-surface-variant leading-relaxed">
                            Switch between specialized AI personas: CFO for fiscal analysis, CMO for market sentiment, or CTO for architectural health.
                        </p>
                    </div>
                </section>

                {/* Partner Section */}
                <section className="max-w-5xl mx-auto mt-32 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        <span className="text-2xl font-bold tracking-tighter">Snowflake</span>
                        <span className="text-2xl font-bold tracking-tighter">Cortex</span>
                        <span className="text-2xl font-bold tracking-tighter">ElevenLabs</span>
                        <span className="text-2xl font-bold tracking-tighter">Gemini Pro</span>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="max-w-7xl mx-auto px-8 py-20 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-outline">
                    SOC2 Type II Compliant — Enterprise Grade Security
                </p>
                <div className="flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest text-outline">
                    <Link href="#" className="hover:text-primary">Terms of Service</Link>
                    <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        System Status: Optimal
                    </div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-outline/50">
                    © 2026 AI-COO Enterprise Operations. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
