"use client";

import React, { useState, useEffect, useRef } from 'react';
import { boardroomDebate } from '@/lib/dummyData';

export function Boardroom() {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [showVoteModal, setShowVoteModal] = useState(false);
    const [voteStatus, setVoteStatus] = useState<'idle' | 'voting' | 'completed'>('idle');
    const [typingAIs, setTypingAIs] = useState<string[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [boardroomDebate, typingAIs]);

    const handleVote = async () => {
        setVoteStatus('voting');
        // Simulate board consensus
        await new Promise(resolve => setTimeout(resolve, 2000));
        setVoteStatus('completed');
    };

    return (
        <div className="flex-1 flex flex-col relative overflow-hidden bg-[#F8FAFF]">
            {/* Strategy Header */}
            <div className="p-8 pb-4 shrink-0">
                <div className="glass-panel p-6 rounded-3xl flex items-center justify-between relative overflow-hidden border border-outline-variant/30 bg-white/60 shadow-sm">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                            <span className="material-symbols-outlined text-primary text-2xl">insights</span>
                        </div>
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60 mb-0.5">Strategic Motion 24-0B</p>
                            <h2 className="text-xl font-headline font-black text-slate-800 tracking-tight">Strategy: Reduce Enterprise Pricing by 10% to combat EU churn.</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {['CTO', 'CFO', 'CMO'].map((role) => (
                                <div key={role} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[9px] font-black text-slate-400">
                                    {role}
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={() => {
                                setVoteStatus('idle');
                                setShowVoteModal(true);
                            }}
                            className="glass-pill-primary px-5 py-2 text-[10px] font-black shadow-lg shadow-primary/15"
                        >
                            Request Vote
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Interactive Transcript Area */}
            <div className="flex-1 px-8 pb-8 flex flex-col min-h-0 relative">
                <div className="flex-1 glass-panel rounded-[40px] flex flex-col bg-white/40 shadow-3xl border-white/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-transparent z-10 pointer-events-none" />
                    
                    {/* Transcript Scroll Area */}
                    <div className="flex-1 p-10 space-y-10 overflow-y-auto custom-scrollbar relative z-0">
                        {boardroomDebate.map((entry) => (
                            <div key={entry.id} className={`flex gap-6 max-w-4xl ${entry.speaker === 'CEO' ? 'ml-auto flex-row-reverse' : ''}`}>
                                <div className={`w-12 h-12 shrink-0 rounded-[18px] flex items-center justify-center shadow-sm border ${
                                    entry.speaker === 'CEO' 
                                    ? 'bg-primary text-white border-primary/20' 
                                    : entry.speaker === 'CTO AI' ? 'bg-indigo-50 text-indigo-500 border-indigo-100'
                                    : entry.speaker === 'CFO AI' ? 'bg-emerald-50 text-emerald-500 border-emerald-100'
                                    : 'bg-rose-50 text-rose-500 border-rose-100'
                                }`}>
                                    <span className="material-symbols-outlined text-2xl">
                                        {entry.speaker === 'CEO' ? 'person' : 'smart_toy'}
                                    </span>
                                </div>
                                <div className={`space-y-2 flex-1 ${entry.speaker === 'CEO' ? 'text-right' : ''}`}>
                                    <div className={`flex items-center gap-3 ${entry.speaker === 'CEO' ? 'justify-end' : ''}`}>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{entry.speaker}</span>
                                        <span className="text-[9px] font-bold text-slate-300">{entry.timestamp}</span>
                                    </div>
                                    <p className={`text-slate-700 leading-relaxed p-6 rounded-[28px] text-sm shadow-sm transition-all hover:shadow-md ${
                                        entry.speaker === 'CEO' 
                                        ? 'bg-white font-medium rounded-tr-none border-primary/10 border' 
                                        : 'bg-white/80 backdrop-blur-sm border-white/80 rounded-tl-none border'
                                    }`}>
                                        {entry.text}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicators */}
                        {typingAIs.map((ai) => (
                            <div key={ai} className="flex gap-6 max-w-lg items-center animate-in fade-in slide-in-from-bottom-2">
                                <div className={`w-12 h-12 shrink-0 rounded-[18px] flex items-center justify-center shadow-sm border ${
                                    ai === 'CTO AI' ? 'bg-indigo-50 text-indigo-500 border-indigo-100'
                                    : ai === 'CFO AI' ? 'bg-emerald-50 text-emerald-500 border-emerald-100'
                                    : 'bg-rose-50 text-rose-500 border-rose-100'
                                }`}>
                                    <span className="material-symbols-outlined text-2xl">smart_toy</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{ai} is typing</span>
                                        <div className="flex gap-1">
                                            <span className="w-1 h-1 rounded-full bg-primary animate-bounce"></span>
                                            <span className="w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></span>
                                            <span className="w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent z-10 pointer-events-none" />
                </div>

                {/* Input Area Overlay */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
                    <button 
                        onMouseDown={() => {
                            setIsSpeaking(true);
                        }}
                        onMouseUp={() => {
                            setIsSpeaking(false);
                            // Simulate AI starts typing after user speaks
                            setTimeout(() => setTypingAIs(['CTO AI']), 1000);
                            setTimeout(() => setTypingAIs(['CTO AI', 'CFO AI']), 2500);
                            setTimeout(() => setTypingAIs(['CFO AI']), 5000);
                            setTimeout(() => setTypingAIs([]), 7000);
                        }}
                        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl relative group ${
                            isSpeaking 
                            ? 'bg-error scale-110 shadow-error/40' 
                            : 'bg-primary hover:scale-105 shadow-primary/40'
                        }`}
                    >
                        {isSpeaking && (
                            <div className="absolute inset-0 rounded-full animate-ping bg-error/40 -z-10" />
                        )}
                        <span className="material-symbols-outlined text-white text-3xl">
                            {isSpeaking ? 'graphic_eq' : 'mic'}
                        </span>
                    </button>
                    <div className="glass-panel px-6 py-2 rounded-full border-white/50 bg-white/60 shadow-xl backdrop-blur-md">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                            {isSpeaking ? 'Transmitting Neural Feedback...' : 'Hold to Participate in Dialogue'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Vote Modal */}
            {showVoteModal && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300 text-center">
                    <div className="glass-panel max-w-md w-full p-10 rounded-[40px] shadow-2xl bg-white border border-white/50 animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
                            <span className="material-symbols-outlined text-4xl">how_to_vote</span>
                        </div>
                        <h3 className="text-3xl font-headline font-bold text-slate-800 tracking-tight mb-4">Board Consensus</h3>
                        <p className="text-slate-500 font-medium leading-relaxed mb-10">Initiate AI consensus protocol for the Europe Pricing Strategy?</p>
                        
                        {voteStatus === 'idle' && (
                            <div className="flex gap-4 font-sans justify-center">
                                <button onClick={() => setShowVoteModal(false)} className="px-8 py-4 rounded-2xl border border-slate-200 font-bold text-slate-400">Cancel</button>
                                <button onClick={handleVote} className="px-8 py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20">Confirm</button>
                            </div>
                        )}

                        {voteStatus === 'voting' && (
                            <div className="py-8 space-y-4">
                                <div className="flex justify-center gap-1.5">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                </div>
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Aggregating Cortex Data...</p>
                            </div>
                        )}

                        {voteStatus === 'completed' && (
                            <div className="py-8 space-y-6">
                                <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
                                    <span className="material-symbols-outlined text-2xl">check</span>
                                </div>
                                <p className="text-xl font-bold text-slate-800">Strategy Approved (3-0)</p>
                                <button onClick={() => setShowVoteModal(false)} className="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold uppercase tracking-widest text-[10px]">Close Session</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
