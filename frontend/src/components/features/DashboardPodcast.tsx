"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export function DashboardPodcast() {
    const router = useRouter();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);
    const [isAuthorizing, setIsAuthorizing] = useState(false);

    const handlePlayToggle = () => {
        setIsPlaying(!isPlaying);
        // TODO: Connect ElevenLabs HTML5 Audio ref here
    };

    const handleAuthorize = async () => {
        setIsAuthorizing(true);
        // Simulate API POST request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsAuthorizing(false);
        alert("Migration Authorized Successfully.");
    };

    return (
        <section className="relative">
            <div className="glass-panel rounded-3xl p-10 flex items-center gap-12 overflow-hidden relative border border-white/40 shadow-sm">
                {/* Background Accent */}
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                
                {/* Media Cover Art */}
                <div className="relative w-52 h-52 flex-shrink-0">
                    <img alt="Podcast Cover" className="w-full h-full rounded-2xl object-cover shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgHAIuW71IOSzLrte7xRgF7gXSHVQbU0pEqLREY3y0_VC1bvr9z5AV3p7Xw1MYg0K4VH_Y_TJBn-0LWGwgOXVFvI2z9LvYca7HQ8O8Qai_U6vYJu9wlurBIfDculd2difFYDQ2VEkx9OZ05-i0BUTxFvc6DZMkIdRMPC4Cp1WZjn5uETmi0zpcJXD8nSFTLAyaAtA-mxBzbiSr2ZOiwi6P_MpyOaLJ4JoAyF_zsgBpOApBliF83a8vVAIbnD5GqapnEUtc2uPBWDIY"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-2xl"></div>
                    <button 
                        onClick={handlePlayToggle}
                        className="absolute inset-0 m-auto w-16 h-16 bg-white/95 text-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all group"
                    >
                        <span className="material-symbols-outlined text-4xl leading-none ml-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {isPlaying ? 'pause' : 'play_arrow'}
                        </span>
                    </button>
                    {isPlaying && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 px-4">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-1 bg-white/80 rounded-full animate-pulse" style={{ height: `${Math.random() * 20 + 10}px`, animationDelay: `${i * 0.1}s` }}></div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-5 relative z-10">
                    <div className="space-y-2">
                        <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Morning Commute</span>
                        <h3 className="text-4xl font-headline font-extrabold text-slate-800 tracking-tight">Daily Executive Briefing</h3>
                        <p className="text-slate-500 font-medium flex items-center gap-2 text-sm">
                            <span className="material-symbols-outlined text-lg text-primary">mic</span>
                            Generated 5:00 AM via ElevenLabs AI
                        </p>
                    </div>
                    
                    {/* Equalizer Centerpiece */}
                    <div className="flex items-end gap-[2px] h-10 py-1">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className={`w-1 bg-primary rounded-sm transition-all duration-300 ${isPlaying ? 'animate-bounce' : 'h-[30%]'}`} style={{ height: isPlaying ? 'auto' : `${Math.random() * 60 + 20}%`, opacity: 0.7 + (Math.random() * 0.3) }}></div>
                        ))}
                    </div>
                    
                    <div className="flex items-center gap-4 pt-2">
                        <button 
                            className="px-8 py-3 bg-primary text-on-primary rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
                            onClick={() => setIsTranscriptOpen(true)}
                        >
                            Listen to Full Brief
                        </button>
                        <button 
                            className="px-8 py-3 bg-white/60 text-slate-700 border border-slate-200 rounded-xl font-bold text-sm hover:bg-white transition-all active:scale-95"
                            onClick={() => setIsTranscriptOpen(true)}
                        >
                            View Transcript
                        </button>
                    </div>
                </div>

                {/* Secondary Action */}
                <div className="w-72 glass-panel bg-white/30 rounded-2xl p-6 hidden xl:block border border-white/40 shadow-sm relative z-10">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Key Discussion Points</p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                            <span className="text-primary mt-0.5 font-black">01</span>
                            <span className="leading-snug">Quarterly revenue growth trajectory analysis</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                            <span className="text-primary mt-0.5 font-black">02</span>
                            <span className="leading-snug">Multi-cloud infrastructure cost optimization</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                            <span className="text-primary mt-0.5 font-black">03</span>
                            <span className="leading-snug">EMEA region system availability report</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Strategy Insight Content with Buttons */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass-panel p-10 rounded-3xl relative overflow-hidden border border-white/40 shadow-sm">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-symbols-outlined text-tertiary text-3xl">auto_awesome</span>
                            <h4 className="font-headline font-bold text-2xl text-slate-800">Strategic AI Insight</h4>
                        </div>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
                            Regional operational costs in <span className="font-bold text-primary">Western Europe</span> have spiked by 12% due to inefficient server allocation. Automated migration recommended to save <span className="font-bold text-success">$24k/month</span>.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button 
                                className={`px-10 py-4 ${isAuthorizing ? 'bg-slate-400' : 'bg-primary'} text-on-primary rounded-2xl font-bold shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all`}
                                onClick={handleAuthorize}
                                disabled={isAuthorizing}
                            >
                                {isAuthorizing ? 'Authorizing...' : 'Authorize Migration'}
                            </button>
                            <button 
                                className="px-10 py-4 bg-white/80 text-slate-700 rounded-2xl font-bold border border-slate-200 hover:bg-white transition-all active:scale-95"
                                onClick={() => router.push('/risk-radar')}
                            >
                                Detailed Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transcript Modal Stub */}
            {isTranscriptOpen && (
                <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="glass-panel w-full max-w-3xl mx-4 p-8 rounded-t-3xl sm:rounded-3xl shadow-2xl border border-white/40 max-h-[80vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-8 sticky top-0 bg-white/80 backdrop-blur-md py-2 z-10">
                            <h3 className="text-2xl font-headline font-bold text-slate-800">Briefing Transcript</h3>
                            <button onClick={() => setIsTranscriptOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
                            <p className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                                <span className="text-primary font-bold mr-2">05:00 AM:</span>
                                Good morning. Initial system sweep shows revenue targets are on track, however, we have identified a significant cost anomaly in the Western Europe cloud clusters...
                            </p>
                            <p>[Transcript content continues here...]</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
