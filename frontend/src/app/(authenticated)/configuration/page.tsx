"use client";

import React, { useState } from 'react';

export default function ConfigurationPage() {
    const [activeTab, setActiveTab] = useState('integrations');

    return (
        <div className="p-10 space-y-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-headline font-black text-on-surface tracking-tight mb-2">System Configuration</h1>
                    <p className="text-on-surface-variant font-medium">Manage API keys, integrations, and AI persona traits.</p>
                </div>
                <button className="glass-pill-primary px-8 py-3 text-sm font-bold shadow-xl shadow-primary/20 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">save</span>
                    Save Configuration
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column: Integrations */}
                <div className="lg:col-span-1 space-y-10">
                    <div className="glass-panel p-1 border-white/50 rounded-[40px] shadow-xl">
                        <div className="bg-white/40 backdrop-blur-xl rounded-[38px] p-8 space-y-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">hub</span>
                                    <h3 className="font-bold text-lg">Integrations</h3>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest">Live Status</span>
                            </div>

                            <div className="space-y-6">
                                {/* Snowflake */}
                                <div className="p-5 rounded-3xl bg-white/60 border border-white/80 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-blue-500">ac_unit</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Snowflake</p>
                                                <p className="text-[10px] text-outline font-medium">Data Warehouse</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-secondary uppercase tracking-widest">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                            Connected
                                        </div>
                                    </div>
                                </div>

                                {/* Gemini */}
                                <div className="p-5 rounded-3xl bg-white/60 border border-white/80 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-indigo-500">auto_awesome</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Google Gemini</p>
                                                <p className="text-[10px] text-outline font-medium">Language Model API</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input 
                                            defaultValue="••••••••••••••••••••••••••••"
                                            className="w-full bg-slate-100/50 border-none rounded-xl py-3 px-4 pr-10 text-xs font-mono outline-none"
                                            type="password"
                                        />
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-sm">visibility</span>
                                    </div>
                                </div>

                                {/* ElevenLabs */}
                                <div className="p-5 rounded-3xl bg-white/60 border border-white/80 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-rose-500">settings_voice</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">ElevenLabs</p>
                                                <p className="text-[10px] text-outline font-medium">Neural Voice Synthesis</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <input 
                                            className="flex-1 bg-slate-100/50 border-none rounded-xl py-3 px-4 text-xs font-medium placeholder:text-outline-variant outline-none"
                                            placeholder="Enter API Key"
                                            type="text"
                                        />
                                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-rose-500 text-lg">error</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 border-white/50 rounded-[40px] bg-primary/5">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">AI Audit Log</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                            Last security sweep completed 14 minutes ago. 0 vulnerabilities found in API handshake protocols.
                        </p>
                    </div>
                </div>

                {/* Right Column: Boardroom Personas */}
                <div className="lg:col-span-2 space-y-10">
                    <div className="glass-panel p-1 border-white/50 rounded-[40px] shadow-xl h-full">
                        <div className="bg-white/40 backdrop-blur-xl rounded-[38px] p-10 h-full">
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary">explore</span>
                                    <h3 className="font-bold text-xl">Boardroom Personas</h3>
                                </div>
                                <div className="flex gap-2">
                                    {['CFO', 'CMO', 'CTO'].map(role => (
                                        <div key={role} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-outline">
                                            {role}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-12">
                                {/* CFO Persona */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xs shadow-lg shadow-primary/20">CFO</div>
                                        <div>
                                            <p className="text-[10px] font-black text-outline uppercase tracking-widest">Voice ID</p>
                                            <select className="bg-transparent font-bold text-on-surface outline-none cursor-pointer hover:text-primary transition-colors">
                                                <option>Marcus (Professional)</option>
                                                <option>Sarah (Analytical)</option>
                                            </select>
                                        </div>
                                        <div className="flex-1"></div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-outline uppercase tracking-widest">Risk Tolerance</p>
                                            <p className="text-xs font-bold text-primary">LOW</p>
                                        </div>
                                    </div>
                                    <input type="range" className="w-full accent-primary" defaultValue="20" />
                                    <p className="text-xs italic text-on-surface-variant/70">Focuses on capital preservation and EBITDA targets.</p>
                                </div>

                                {/* CMO Persona */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-white font-black text-xs shadow-lg shadow-secondary/20">CMO</div>
                                        <div>
                                            <p className="text-[10px] font-black text-outline uppercase tracking-widest">Voice ID</p>
                                            <select className="bg-transparent font-bold text-on-surface outline-none cursor-pointer hover:text-primary transition-colors">
                                                <option>Elena (Creative)</option>
                                                <option>James (Dynamic)</option>
                                            </select>
                                        </div>
                                        <div className="flex-1"></div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-outline uppercase tracking-widest">Growth Aggression</p>
                                            <p className="text-xs font-bold text-secondary">HIGH</p>
                                        </div>
                                    </div>
                                    <input type="range" className="w-full accent-secondary" defaultValue="85" />
                                    <p className="text-xs italic text-on-surface-variant/70">Prioritizes market share acquisition and brand velocity.</p>
                                </div>

                                {/* CTO Persona */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-rose-500/20">CTO</div>
                                        <div>
                                            <p className="text-[10px] font-black text-outline uppercase tracking-widest">Voice ID</p>
                                            <select className="bg-transparent font-bold text-on-surface outline-none cursor-pointer hover:text-primary transition-colors">
                                                <option>Tech Alpha (Neural)</option>
                                                <option>Ghost (Binary)</option>
                                            </select>
                                        </div>
                                        <div className="flex-1"></div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-right">
                                                <p className="text-[10px] font-black text-outline uppercase tracking-widest text-nowrap">Architecture Review</p>
                                                <div className="flex justify-end mt-1">
                                                    <div className="w-10 h-5 bg-primary rounded-full relative">
                                                        <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs italic text-on-surface-variant/70">Optimizes for stack scalability and latency reduction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
