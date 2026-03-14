export default function BoardroomPage() {
    return (
        <div className="flex-1 flex flex-col relative overflow-hidden bg-surface h-[calc(100vh-80px)]">
            {/* Background Gradient Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/10 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4 -z-10"></div>

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
                    <div className="flex gap-6">
                        <div className="text-right">
                            <p className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Projected Impact</p>
                            <p className="text-2xl font-headline font-bold text-success">+14% Retention</p>
                        </div>
                        <div className="w-[1px] h-12 bg-outline-variant/30"></div>
                        <div className="text-right">
                            <p className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Urgency</p>
                            <p className="text-2xl font-headline font-bold text-error">High</p>
                        </div>
                    </div>
                </div>

                {/* Center Stage: The Avatars */}
                <div className="grid grid-cols-4 gap-8 shrink-0">
                    {/* CEO (User) */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative p-1 rounded-full border-4 border-dashed border-primary/20">
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                                <img alt="CEO Profile Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhHSgRbgg1_FwOI-64turSrsjAcZMtnOJDi3wyIbjFLt7u0Unev7Tg7IMWRv0e58j2edoOoX1ROE6Kwh3fsQ6hVvU3M11ogbogrelQT_ms0tmKb8zAsx9--5pYx2qNrdYl8iRa6xhoWIn7MhWT6wFVHghgPN0b4kVJSLiDKeD9b5tZBDEgYMvtnIoLUB7CZ3RDEMvyaCL5-m4hn6HT_T-amss5bnaR7NPEg5Va1uxjiuGt16oaqUL4AYXVtt0UzZ2GzZRdr7N7z_UU"/>
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                                <button className="bg-primary text-on-primary flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 active:scale-95 transition-all">
                                    <span className="material-symbols-outlined text-sm">mic</span>
                                    <span className="text-[10px] uppercase tracking-widest">Hold to Speak</span>
                                </button>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline font-bold text-lg text-on-surface">CEO (You)</h3>
                            <p className="text-secondary text-xs italic font-semibold">Meeting Chair</p>
                        </div>
                    </div>

                    {/* CTO AI (Speaking) */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative p-1 rounded-full border-4 border-primary/40 ring-2 ring-primary/10">
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                                <img alt="CTO AI Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPLEeb89bSfjnxO49NNuwC8i4RFtTdaCUqxS8RXnP8Rzc35SCMTYCkIhfJ8pv1xAmLzylRlcXit-dk4FR9mHVy7ZjQENXWjGyt_17YslhecyGIT2Uyu3tkr5q5KXMCB7Z3a3t4MLLqxV4uAFB3lBQZPoTpBbvUdn39ONWpbdVZjlQsGPsMOaTS4JtAj_rQRtVq41KUC7FC9mYtMMchjxkiX_KykGsmYBgKlj7PoF5Udv2NZkoKf75J7RpNoLcr8mlsF17YLj7Zbsd8"/>
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-5 py-2 rounded-full flex items-center gap-2 shadow-md border border-primary/20 bg-white/80">
                                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>equalizer</span>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Speaking...</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline font-bold text-lg text-on-surface">CTO AI</h3>
                            <p className="text-secondary text-xs font-semibold">Pragmatic Logic</p>
                        </div>
                    </div>

                    {/* CFO AI (Listening) */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative p-1 rounded-full border-4 border-transparent">
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-md ring-4 ring-white grayscale opacity-70">
                                <img alt="CFO AI Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN6v47_jW4AI2ajLK5vlDEXAMarZQLJQSTU3MHkuBk1s42KSsb08QfpLbDXGQrY0hc-9rcil8gIE4BhpNUs0cxOSejR05JQeivtSZVcOrsBMHC3R2Peap4SCoydlik6YUOlHVLcf4EHzm6ZFbNtdq7YyqDA9PsKbdF9Wp2pId4jjmRv6FW9lQs_HcrwBs9-NuDb5ZfEP3xqYcozm5J338fjjSXkctue9oAm6PT8JOjfiWRf7GIGSdiIrLgWJ2Vj-dBN41uAX9ykD_d"/>
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surface-container-high px-5 py-2 rounded-full flex items-center gap-2 border border-outline-variant/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Listening</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="font-headline font-bold text-lg text-outline">CFO AI</h3>
                            <p className="text-outline text-xs font-semibold">Conservative Risk</p>
                        </div>
                    </div>

                    {/* CMO AI (Analyzing) */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative p-1 rounded-full border-4 border-transparent">
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-md ring-4 ring-white opacity-80 border border-outline-variant/10">
                                <img alt="CMO AI Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPbmIj38kry_T0M2-M5DVfxCxGo6E8w5Oe0sTsqWtFYwWtgAUKwubfBNOb25SY9KwA-oq8tcGqX6No-vwOs_k-mvJ8aHtzd4TEEbqJh7itSF01CHsS2QbEleVUyzMq0nYG4R6ziieWgK5fOC_ua5Ka-8_Lb_EKRrlNUv3IpvX84D2doPFleUtStcOvRaHaToixsbSZfoCVgW90Az_F79RfgWCQM_6kD-lKwfrxj43olSegWfQybhtFFM-t8L3f4o9RZRjhEvS5dr9_"/>
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary/5 px-5 py-2 rounded-full flex items-center gap-2 border border-primary/20 bg-white/60 backdrop-blur-sm">
                                <div className="flex gap-0.5">
                                    <span className="w-1 h-1 rounded-full bg-primary animate-bounce"></span>
                                    <span className="w-1 h-1 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                    <span className="w-1 h-1 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                </div>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Analyzing</span>
                            </div>
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
                    
                    <div className="glass-panel flex-1 rounded-3xl overflow-hidden flex flex-col bg-white/50 border-outline-variant/30 relative">
                        <div className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar">
                            {/* CTO Segment */}
                            <div className="flex gap-5 max-w-4xl">
                                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden ring-2 ring-primary/20 p-0.5">
                                    <img alt="CTO AI Small Avatar" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCft8ZW32ykPBQIpJFFB9EztxtQt6YhMH8bbI1Q6hiDAlEKayrXprEi0EGYCNCV0c5Bu8V0MDbhkJmaIELCYoD-F5u4nL3Cyo8maN5I7sOwpU8lQ-bJ1ae5xwzuJuJLAiKja0iWtc6DidvsLW8ZWuIc-3xoHEzig7JdAXiLx0TGDN2xiwArEK_ZUu-TM0lAaZq2KfRqzwLM1Vqa9SPTB0AYdq7zw7jd4bd3ikCQ7T-iRmFrzKwSmBcvb78KVAJmXdcRzkpg5DfNI6q-"/>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider">CTO AI</span>
                                        <span className="text-[9px] text-outline font-medium">14:02:11</span>
                                    </div>
                                    <p className="text-on-surface leading-relaxed bg-primary/5 p-4 rounded-2xl rounded-tl-none border border-primary/10 text-sm">
                                        &quot;From a technical infrastructure perspective, applying a global 10% discount across our API endpoints will require a mid-tier re-indexing of the billing middleware. However, my data suggests that the 'churn' isn't just pricing—it's latency in our Frankfurt region. If we lower the price but don't address the 40ms lag, we're just subsidizing a failing experience.&quot;
                                    </p>
                                </div>
                            </div>
                            
                            {/* CMO Segment */}
                            <div className="flex gap-5 max-w-4xl opacity-75">
                                <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden ring-2 ring-secondary/10 p-0.5">
                                    <img alt="CMO AI Small Avatar" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGX_jbAmnjGkYwBv8V2qc_2T1I38wz-bFN3t8Z7UJGTSE6nnpz1HPb6LSZ1TiuWmREgkkIvi7ziNeVgqmdbq3QRTEzQttN_AIlH99RFwF9WvZ3DQ6B-9gKGVp1pWa0SyDB8bc-bN8lrad0Q1I353zRWjT4nNCbIaeklDB6EM8NuSlEHtqyn7X777O1Xi1ZEpi74ZPD0STkf4xj9TOrVhE_VgPApFdWzROao2UG4OrJFxwku39Vq0EqWocJCYK9Oii7uNkZ76JG9P53"/>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">CMO AI</span>
                                        <span className="text-[9px] text-outline font-medium">14:01:45</span>
                                    </div>
                                    <p className="text-secondary leading-relaxed bg-surface-container-high/50 p-4 rounded-2xl rounded-tl-none border border-outline-variant/20 text-sm italic">
                                        &quot;Latency is a footnote in the marketing narrative. Europe is feeling the squeeze of local competitors undercutting us on seat-based pricing. A 10% reduction isn't enough; we need an 'EU-Specific Enterprise Tier' that bundles premium support.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Real-time Typing Indicator */}
                        <div className="h-14 bg-surface-container/30 border-t border-outline-variant/20 flex items-center px-8">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1 items-center h-4">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">CTO AI is formulating a rebuttal...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Insight Rail Overlay */}
            <div className="absolute right-0 top-20 bottom-0 w-80 glass-panel border-l border-outline-variant/30 p-8 translate-x-[260px] hover:translate-x-0 transition-all duration-500 ease-in-out z-30 group bg-white/70">
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
                    
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] font-bold text-outline uppercase tracking-wider">Board Sentiment</span>
                            <span className="text-[10px] font-bold text-success uppercase">Bullish</span>
                        </div>
                        <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-success w-[70%]"></div>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] font-bold text-outline uppercase tracking-wider">Risk Exposure</span>
                            <span className="text-[10px] font-bold text-tertiary uppercase">Moderate</span>
                        </div>
                        <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-tertiary w-[45%]"></div>
                        </div>
                    </div>
                    
                    <div className="pt-10">
                        <button className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all active:scale-[0.98]">
                            Request Board Vote
                        </button>
                    </div>
                </div>
                
                {/* Peeking Handle */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full py-6 px-1.5 bg-surface-container-highest rounded-l-xl border-y border-l border-outline-variant/30 cursor-pointer group-hover:opacity-0 transition-opacity">
                    <span className="material-symbols-outlined text-secondary text-lg">chevron_left</span>
                </div>
            </div>
        </div>
    );
}
