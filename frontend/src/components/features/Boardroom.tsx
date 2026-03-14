"use client";

import React, { useState } from 'react';
import { boardroomDebate } from '@/lib/dummyData';

export function Boardroom() {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isRailOpen, setIsRailOpen] = useState(false);
    const [showVoteModal, setShowVoteModal] = useState(false);
    const [voteStatus, setVoteStatus] = useState<'idle' | 'voting' | 'completed'>('idle');

    const handleVote = async () => {
        setVoteStatus('voting');
        // Simulate board consensus
        await new Promise(resolve => setTimeout(resolve, 2000));
        setVoteStatus('completed');
    };

    return (
        <div className="flex-1 flex flex-col relative overflow-hidden bg-surface">
            {/* Boardroom Content */}
            <div className="flex-1 p-10 flex flex-col gap-10 overflow-y-auto w-full relative z-10">
                {/* Strategy Banner */}
                <div className="glass-panel p-8 rounded-3xl flex items-center justify-between relative overflow-hidden border border-outline-variant/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -z-10"></div>
                    <div className="flex items-center gap-8">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-outline-variant/20">
                            <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-1">Active Strategic Discussion</p>
                            <h2 className="text-3xl font-headline font-extrabold text-on-surface">Strategy: Reduce Enterprise Pricing by 10% to combat EU churn.</h2>
                        </div>
                    </div>
                </div>

                {/* Center Stage: The Avatars */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 shrink-0">
                    {/* CEO (User) */}
                    <div className="flex flex-col items-center gap-6">
                        <div className={`relative p-1 rounded-full border-4 ${isSpeaking ? 'border-primary animate-pulse' : 'border-dashed border-primary/20'}`}>
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                                <img alt="CEO" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhHSgRbgg1_FwOI-64turSrsjAcZMtnOJDi3wyIbjFLt7u0Unev7Tg7IMWRv0e58j2edoOoX1ROE6Kwh3fsQ6hVvU3M11ogbogrelQT_ms0tmKb8zAsx9--5pYx2qNrdYl8iRa6xhoWIn7MhWT6wFVHghgPN0b4kVJSLiDKeD9b5tZBDEgYMvtnIoLUB7CZ3RDEMvyaCL5-m4hn6HT_T-amss5bnaR7NPEg5Va1uxjiuGt16oaqUL4AYXVtt0UzZ2GzZRdr7N7z_UU"/>
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                                <button 
                                    onMouseDown={() => setIsSpeaking(true)}
                                    onMouseUp={() => setIsSpeaking(false)}
                                    onTouchStart={() => setIsSpeaking(true)}
                                    onTouchEnd={() => setIsSpeaking(false)}
                                    className={`${isSpeaking ? 'bg-error' : 'bg-primary'} text-on-primary flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/25 transition-all select-none`}
                                >
                                    <span className="material-symbols-outlined text-sm">{isSpeaking ? 'graphic_eq' : 'mic'}</span>
                                    <span className="text-[10px] uppercase tracking-widest">{isSpeaking ? 'Speaking...' : 'Hold to Speak'}</span>
                                </button>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline font-bold text-lg text-on-surface">CEO (You)</h3>
                            <p className="text-secondary text-xs italic font-semibold">Meeting Chair</p>
                        </div>
                    </div>

                    {/* CTO AI (Speaking/Analyzing) */}
                    <div className="flex flex-col items-center gap-6">
                        <div className={`relative p-1 rounded-full border-4 ring-2 transition-all ${
                            boardroomDebate.find(d => d.speaker === 'CTO AI')?.isCurrentlySpeaking ? 'border-primary ring-primary/10' : 'border-transparent ring-transparent opacity-60 grayscale'
                        }`}>
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                                <img alt="CTO AI" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPLEeb89bSfjnxO49NNuwC8i4RFtTdaCUqxS8RXnP8Rzc35SCMTYCkIhfJ8pv1xAmLzylRlcXit-dk4FR9mHVy7ZjQENXWjGyt_17YslhecyGIT2Uyu3tkr5q5KXMCB7Z3a3t4MLLqxV4uAFB3lBQZPoTpBbvUdn39ONWpbdVZjlQsGPsMOaTS4JtAj_rQRtVq41KUC7FC9mYtMMchjxkiX_KykGsmYBgKlj7PoF5Udv2NZkoKf75J7RpNoLcr8mlsF17YLj7Zbsd8"/>
                            </div>
                            {boardroomDebate.find(d => d.speaker === 'CTO AI')?.isCurrentlySpeaking && (
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-5 py-2 rounded-full flex items-center gap-2 shadow-md border border-primary/20 bg-white/80">
                                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>equalizer</span>
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Analyzing...</span>
                                </div>
                            )}
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline font-bold text-lg text-on-surface">CTO AI</h3>
                            <p className="text-secondary text-xs font-semibold">Pragmatic Logic</p>
                        </div>
                    </div>

                    {/* CFO AI (Listening) */}
                    <div className="flex flex-col items-center gap-6">
                        <div className={`relative p-1 rounded-full border-4 transition-all ${
                            boardroomDebate.find(d => d.speaker === 'CFO AI')?.isCurrentlySpeaking ? 'border-primary ring-2 ring-primary/10' : 'border-transparent opacity-60 grayscale'
                        }`}>
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-md ring-4 ring-white">
                                <img alt="CFO AI" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN6v47_jW4AI2ajLK5vlDEXAMarZQLJQSTU3MHkuBk1s42KSsb08QfpLbDXGQrY0hc-9rcil8gIE4BhpNUs0cxOSejR05JQeivtSZVcOrsBMHC3R2Peap4SCoydlik6YUOlHVLcf4EHzm6ZFbNtdq7YyqDA9PsKbdF9Wp2pId4jjmRv6FW9lQs_HcrwBs9-NuDb5ZfEP3xqYcozm5J338fjjSXkctue9oAm6PT8JOjfiWRf7GIGSdiIrLgWJ2Vj-dBN41uAX9ykD_d"/>
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surface-container-high px-5 py-2 rounded-full flex items-center gap-2 border border-outline-variant/30">
                                <span className={`w-1.5 h-1.5 rounded-full ${boardroomDebate.find(d => d.speaker === 'CFO AI')?.isCurrentlySpeaking ? 'bg-primary' : 'bg-outline'}`}></span>
                                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                                    {boardroomDebate.find(d => d.speaker === 'CFO AI')?.isCurrentlySpeaking ? 'Speaking' : 'Listening'}
                                </span>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline font-bold text-lg text-outline">CFO AI</h3>
                            <p className="text-outline text-xs font-semibold">Conservative Risk</p>
                        </div>
                    </div>

                    {/* CMO AI (Analyzing) */}
                    <div className="flex flex-col items-center gap-6">
                        <div className={`relative p-1 rounded-full border-4 transition-all ${
                            boardroomDebate.find(d => d.speaker === 'CMO AI')?.isCurrentlySpeaking ? 'border-primary ring-2 ring-primary/10' : 'border-transparent opacity-60 grayscale'
                        }`}>
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-md ring-4 ring-white">
                                <img alt="CMO AI" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPbmIj38kry_T0M2-M5DVfxCxGo6E8w5Oe0sTsqWtFYwWtgAUKwubfBNOb25SY9KwA-oq8tcGqX6No-vwOs_k-mvJ8aHtzd4TEEbqJh7itSF01CHsS2QbEleVUyzMq0nYG4R6ziieWgK5fOC_ua5Ka-8_Lb_EKRrlNUv3IpvX84D2doPFleUtStcOvRaHaToixsbSZfoCVgW90Az_F79RfgWCQM_6kD-lKwfrxj43olSegWfQybhtFFM-t8L3f4o9RZRjhEvS5dr9_"/>
                            </div>
                            {boardroomDebate.find(d => d.speaker === 'CMO AI')?.isCurrentlySpeaking && (
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary/5 px-5 py-2 rounded-full flex items-center gap-2 border border-primary/20 bg-white/60 backdrop-blur-sm">
                                    <div className="flex gap-0.5">
                                        <span className="w-1 h-1 rounded-full bg-primary animate-bounce"></span>
                                        <span className="w-1 h-1 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                        <span className="w-1 h-1 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                    </div>
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Analyzing</span>
                                </div>
                            )}
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline font-bold text-lg text-on-surface/80">CMO AI</h3>
                            <p className="text-secondary text-xs font-semibold">Aggressive Growth</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Live Debate Transcript */}
                <div className="flex-1 min-h-[300px] flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Live Debate Transcript</h4>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
                            <span className="text-[10px] font-bold text-outline uppercase tracking-wider">Cloud Secured</span>
                        </div>
                    </div>
                    
                    <div className="glass-panel flex-1 rounded-3xl overflow-hidden flex flex-col bg-white/50 border-outline-variant/30">
                        <div className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar">
                            {boardroomDebate.map((entry) => (
                                <div key={entry.id} className="flex gap-5 max-w-4xl">
                                    <div className={`w-10 h-10 shrink-0 rounded-full overflow-hidden ring-2 ring-primary/20 p-0.5 ${entry.speaker === 'CEO' ? 'ring-primary' : 'ring-secondary/20'}`}>
                                        <img alt={entry.speaker} className="w-full h-full rounded-full object-cover" src={
                                            entry.speaker === 'CTO AI' ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPLEeb89bSfjnxO49NNuwC8i4RFtTdaCUqxS8RXnP8Rzc35SCMTYCkIhfJ8pv1xAmLzylRlcXit-dk4FR9mHVy7ZjQENXWjGyt_17YslhecyGIT2Uyu3tkr5q5KXMCB7Z3a3t4MLLqxV4uAFB3lBQZPoTpBbvUdn39ONWpbdVZjlQsGPsMOaTS4JtAj_rQRtVq41KUC7FC9mYtMMchjxkiX_KykGsmYBgKlj7PoF5Udv2NZkoKf75J7RpNoLcr8mlsF17YLj7Zbsd8' :
                                            entry.speaker === 'CFO AI' ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN6v47_jW4AI2ajLK5vlDEXAMarZQLJQSTU3MHkuBk1s42KSsb08QfpLbDXGQrY0hc-9rcil8gIE4BhpNUs0cxOSejR05JQeivtSZVcOrsBMHC3R2Peap4SCoydlik6YUOlHVLcf4EHzm6ZFbNtdq7YyqDA9PsKbdF9Wp2pId4jjmRv6FW9lQs_HcrwBs9-NuDb5ZfEP3xqYcozm5J338fjjSXkctue9oAm6PT8JOjfiWRf7GIGSdiIrLgWJ2Vj-dBN41uAX9ykD_d' :
                                            entry.speaker === 'CMO AI' ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPbmIj38kry_T0M2-M5DVfxCxGo6E8w5Oe0sTsqWtFYwWtgAUKwubfBNOb25SY9KwA-oq8tcGqX6No-vwOs_k-mvJ8aHtzd4TEEbqJh7itSF01CHsS2QbEleVUyzMq0nYG4R6ziieWgK5fOC_ua5Ka-8_Lb_EKRrlNUv3IpvX84D2doPFleUtStcOvRaHaToixsbSZfoCVgW90Az_F79RfgWCQM_6kD-lKwfrxj43olSegWfQybhtFFM-t8L3f4o9RZRjhEvS5dr9_' :
                                            'https://lh3.googleusercontent.com/aida-public/AB6AXuDhHSgRbgg1_FwOI-64turSrsjAcZMtnOJDi3wyIbjFLt7u0Unev7Tg7IMWRv0e58j2edoOoX1ROE6Kwh3fsQ6hVvU3M11ogbogrelQT_ms0tmKb8zAsx9--5pYx2qNrdYl8iRa6xhoWIn7MhWT6wFVHghgPN0b4kVJSLiDKeD9b5tZBDEgYMvtnIoLUB7CZ3RDEMvyaCL5-m4hn6HT_T-amss5bnaR7NPEg5Va1uxjiuGt16oaqUL4AYXVtt0UzZ2GzZRdr7N7z_UU'
                                        } />
                                    </div>
                                    <div className="space-y-1.5 flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className={`text-[11px] font-bold uppercase tracking-wider ${entry.speaker === 'CEO' ? 'text-primary' : 'text-secondary'}`}>{entry.speaker}</span>
                                            <span className="text-[9px] text-outline font-medium">{entry.timestamp}</span>
                                        </div>
                                        <p className={`text-on-surface leading-relaxed p-4 rounded-2xl rounded-tl-none border text-sm ${
                                            entry.speaker === 'CEO' ? 'bg-primary/5 border-primary/10' : 'bg-secondary/5 border-secondary/10'
                                        }`}>
                                            {entry.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Insight Rail Overlay */}
            <div className={`fixed right-0 top-20 bottom-0 w-80 glass-panel border-l border-outline-variant/30 p-8 transition-all duration-500 ease-in-out z-30 bg-white/70 ${isRailOpen ? 'translate-x-0' : 'translate-x-[260px]'}`}>
                <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full py-6 px-1.5 bg-surface-container-highest rounded-l-xl border-y border-l border-outline-variant/30 cursor-pointer"
                    onClick={() => setIsRailOpen(!isRailOpen)}
                >
                    <span className="material-symbols-outlined text-secondary text-lg transition-transform duration-500" style={{ transform: isRailOpen ? 'rotate(180deg)' : 'none' }}>chevron_left</span>
                </div>

                <div className="flex items-center gap-2 mb-8">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-on-surface">Live Intelligence</h5>
                </div>
                
                <div className="space-y-8">
                    <div className="p-5 rounded-2xl bg-tertiary/5 border border-tertiary/10">
                        <p className="text-[10px] font-bold text-tertiary uppercase tracking-widest mb-3">Professional Cohesion</p>
                        <p className="text-xs text-on-surface/80 leading-relaxed font-medium">
                            Strategic Alignment Score: <span className="text-xl block font-bold mt-1 text-tertiary">88%</span>
                        </p>
                    </div>
                    <button 
                        onClick={() => setShowVoteModal(true)}
                        className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all active:scale-[0.98]"
                    >
                        Request Board Vote
                    </button>
                </div>
            </div>

            {/* Strategy Vote Modal */}
            {showVoteModal && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="glass-panel max-w-md w-full p-10 rounded-[40px] shadow-2xl bg-white/90 border border-white/50 animate-in zoom-in-95 duration-300">
                        <div className="text-center space-y-6">
                            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
                                <span className="material-symbols-outlined text-4xl">how_to_vote</span>
                            </div>
                            <h3 className="text-3xl font-headline font-bold text-slate-800 tracking-tight">Enterprise Strategy Vote</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Initiate AI consensus protocol for the 10% EU Discount Strategy?</p>
                            
                            {voteStatus === 'idle' && (
                                <div className="flex gap-4 pt-6">
                                    <button onClick={() => setShowVoteModal(false)} className="flex-1 py-4 px-6 rounded-2xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-all">Cancel</button>
                                    <button onClick={handleVote} className="flex-1 py-4 px-6 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:opacity-90 active:scale-95 transition-all">Confirm Protocol</button>
                                </div>
                            )}

                            {voteStatus === 'voting' && (
                                <div className="py-10 space-y-4">
                                    <div className="flex justify-center gap-2">
                                        <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                                        <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-100"></div>
                                        <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-200"></div>
                                    </div>
                                    <p className="text-sm font-bold text-primary uppercase tracking-widest">Aggregating Board Consensus...</p>
                                </div>
                            )}

                            {voteStatus === 'completed' && (
                                <div className="py-10 space-y-6">
                                    <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="material-symbols-outlined text-3xl">check</span>
                                    </div>
                                    <p className="text-xl font-bold text-slate-800">Strategy Approved (3-0)</p>
                                    <button onClick={() => setShowVoteModal(false)} className="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold">Close</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
