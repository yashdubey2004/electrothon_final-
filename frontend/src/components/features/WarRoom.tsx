"use client";

import React, { useState } from 'react';
import { warRoomTranscript, ChatMessage } from '@/lib/dummyData';

export function WarRoom() {
    const [isListening, setIsListening] = useState(false);
    const [messages, setMessages] = useState(warRoomTranscript);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;
        const newMessage: ChatMessage = {
            id: `user-${Date.now()}`,
            sender: 'user',
            message: inputValue,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, newMessage]);
        setInputValue("");
        
        // Simulate AI response
        setTimeout(() => {
            const aiMessage: ChatMessage = {
                id: `ai-${Date.now()}`,
                sender: 'ai',
                message: "Initiating reroute simulation protocol. Notifying VP of Logistics via encrypted uplink. Analysis report will be available in the Risk Radar section shortly.",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, aiMessage]);
        }, 1500);
    };

    return (
        <div className="flex-1 relative overflow-hidden flex flex-col">
            {/* Page Content */}
            <div className="relative z-10 flex-1 flex flex-col p-8 overflow-hidden">
                <header className="mb-10 ml-4">
                    <h1 className="text-3xl font-black tracking-tight text-on-surface">War Room</h1>
                    <p className="text-base text-on-surface-variant font-medium">Active Neural Voice Uplink</p>
                </header>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden bg-white/30 rounded-3xl backdrop-blur-sm border border-white/40 shadow-sm p-4">
                    {/* Left: Interaction Zone */}
                    <div className="flex flex-col items-center justify-center relative">
                        {/* Pulse Rings */}
                        <div className={`absolute w-[450px] h-[450px] pulsing-ring transition-opacity duration-1000 ${isListening ? 'opacity-50 scale-110' : 'opacity-10 scale-100'}`}></div>
                        <div className={`absolute w-[350px] h-[350px] pulsing-ring transition-opacity duration-700 ${isListening ? 'opacity-70 scale-105' : 'opacity-20 scale-100'}`}></div>
                        <div className={`absolute w-[250px] h-[250px] pulsing-ring transition-opacity duration-500 ${isListening ? 'opacity-90 scale-102' : 'opacity-30 scale-100'}`}></div>

                        {/* Main Mic Button */}
                        <button 
                            onMouseDown={() => setIsListening(true)}
                            onMouseUp={() => setIsListening(false)}
                            onMouseLeave={() => setIsListening(false)}
                            className={`relative z-10 w-44 h-44 rounded-full glass-card shadow-2xl transition-all duration-300 flex items-center justify-center group border ${isListening ? 'border-primary ring-8 ring-primary/10 shadow-primary/20' : 'border-primary/20 shadow-primary/5'}`}
                        >
                            <div className={`w-36 h-36 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${isListening ? 'bg-error' : 'bg-gradient-to-tr from-primary to-primary-container'}`}>
                                <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>{isListening ? 'graphic_eq' : 'mic'}</span>
                            </div>
                        </button>

                        <div className="mt-16 text-center space-y-4">
                            <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card border transition-colors ${isListening ? 'border-error text-error' : 'border-primary/10 text-primary'} relative z-10`}>
                                <span className={`w-2.5 h-2.5 rounded-full animate-ping ${isListening ? 'bg-error' : 'bg-primary'}`}></span>
                                <span className="text-sm font-semibold tracking-wide">{isListening ? 'Listening...' : 'Querying Snowflake Vector Store...'}</span>
                            </div>
                            <p className="text-on-surface-variant text-[11px] font-bold tracking-[0.2em] uppercase opacity-60 relative z-10">
                                {isListening ? 'Release to process command' : 'Holding for voice command'}
                            </p>
                        </div>
                    </div>

                    {/* Right: Scrolling Transcript */}
                    <div className="glass-card rounded-3xl flex flex-col overflow-hidden border border-white/60 shadow-xl relative z-10 bg-white/70">
                        <div className="px-8 py-5 border-b border-outline-variant/30 flex justify-between items-center bg-white/40 backdrop-blur-md">
                            <h3 className="font-bold text-on-surface flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[22px]">forum</span>
                                Session Transcript
                            </h3>
                            <span className="text-[10px] font-black text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded-md border border-outline-variant/50 tracking-wider">LIVE</span>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar bg-white/30 backdrop-blur-sm">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} gap-2 max-w-[90%] ${msg.sender === 'user' ? 'ml-auto' : ''}`}>
                                    <div className={`${msg.sender === 'user' ? 'glass-pill-primary' : 'bg-white/80 border border-outline-variant/40 shadow-sm'} p-5 rounded-2xl ${msg.sender === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'} text-on-surface`}>
                                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                                        
                                        {msg.sender === 'ai' && (msg as any).suggestion && (
                                            <div className="mt-5 p-4 rounded-xl bg-primary-container/30 border border-primary/10 flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-wider text-primary">Action Suggested</p>
                                                    <p className="text-sm font-medium text-on-primary-container">{(msg as any).suggestion}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${msg.sender === 'user' ? 'text-on-surface-variant/50' : 'text-primary/60'}`}>
                                        {msg.sender === 'user' ? `Executive User • ${msg.timestamp}` : `AI-COO Intelligence • ${msg.timestamp}`}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Chat Input */}
                        <div className="p-6 bg-white/40 border-t border-outline-variant/30 backdrop-blur-md">
                            <div className="relative">
                                <input 
                                    className="w-full bg-white/80 border border-outline-variant/50 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 placeholder:text-on-surface-variant/50 text-sm transition-all outline-none" 
                                    placeholder="Type command or press mic..." 
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                                    <button 
                                        onClick={handleSendMessage}
                                        className="p-2 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors shadow-md"
                                    >
                                        <span className="material-symbols-outlined text-sm">send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Interaction Rail */}
            <div className="fixed right-6 top-24 w-12 flex flex-col gap-4 z-40">
                <button className="w-12 h-12 rounded-xl glass-card border border-white/60 flex items-center justify-center text-primary shadow-lg hover:bg-white transition-all group relative">
                    <span className="material-symbols-outlined">bolt</span>
                    <div className="absolute right-14 bg-on-surface text-white text-[10px] px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-wider pointer-events-none">FLASH INSIGHTS</div>
                </button>
                <button className="w-12 h-12 rounded-xl glass-card border border-white/60 flex items-center justify-center text-secondary shadow-lg hover:bg-white transition-all group relative">
                    <span className="material-symbols-outlined">architecture</span>
                    <div className="absolute right-14 bg-on-surface text-white text-[10px] px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold tracking-wider pointer-events-none">NODE VIEW</div>
                </button>
            </div>
        </div>
    );
}
