export default function ExecutiveDashboard() {
    return (
        <div className="p-10 space-y-10 max-w-7xl mx-auto w-full overflow-y-auto h-[calc(100vh-80px)]">
            {/* Podcast Section */}
            <section className="relative">
                <div className="glass-panel rounded-3xl p-10 flex items-center gap-12 overflow-hidden relative border border-white/40 shadow-sm">
                    {/* Background Accent */}
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                    
                    {/* Media Cover Art */}
                    <div className="relative w-52 h-52 flex-shrink-0">
                        <img alt="Podcast Cover" className="w-full h-full rounded-2xl object-cover shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgHAIuW71IOSzLrte7xRgF7gXSHVQbU0pEqLREY3y0_VC1bvr9z5AV3p7Xw1MYg0K4VH_Y_TJBn-0LWGwgOXVFvI2z9LvYca7HQ8O8Qai_U6vYJu9wlurBIfDculd2difFYDQ2VEkx9OZ05-i0BUTxFvc6DZMkIdRMPC4Cp1WZjn5uETmi0zpcJXD8nSFTLAyaAtA-mxBzbiSr2ZOiwi6P_MpyOaLJ4JoAyF_zsgBpOApBliF83a8vVAIbnD5GqapnEUtc2uPBWDIY"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-2xl"></div>
                        <button className="absolute inset-0 m-auto w-16 h-16 bg-white/95 text-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all group">
                            <span className="material-symbols-outlined text-4xl leading-none ml-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                        </button>
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
                            <div className="w-1 bg-primary rounded-sm h-[20%]"></div>
                            <div className="w-1 bg-primary rounded-sm h-[60%] opacity-80"></div>
                            <div className="w-1 bg-primary rounded-sm h-[40%]"></div>
                            <div className="w-1 bg-primary rounded-sm h-[90%] opacity-90"></div>
                            <div className="w-1 bg-primary rounded-sm h-[50%]"></div>
                            <div className="w-1 bg-primary rounded-sm h-[70%] opacity-80"></div>
                            <div className="w-1 bg-primary rounded-sm h-[30%]"></div>
                            <div className="w-1 bg-primary rounded-sm h-[85%] opacity-90"></div>
                            <div className="w-1 bg-primary rounded-sm h-[45%]"></div>
                            <div className="w-1 bg-primary rounded-sm h-[65%]"></div>
                            <div className="w-1 bg-primary rounded-sm h-[25%] opacity-70"></div>
                            <div className="w-1 bg-primary rounded-sm h-[75%]"></div>
                            <div className="w-1 bg-primary rounded-sm h-[40%] opacity-80"></div>
                            <div className="w-1 bg-primary rounded-sm h-[95%]"></div>
                            <div className="w-1 bg-primary rounded-sm h-[55%]"></div>
                        </div>
                        
                        <div className="flex items-center gap-4 pt-2">
                            <button className="px-8 py-3 bg-primary text-on-primary rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">Listen to Full Brief</button>
                            <button className="px-8 py-3 bg-white/60 text-slate-700 border border-slate-200 rounded-xl font-bold text-sm hover:bg-white transition-all active:scale-95">View Transcript</button>
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
            </section>

            {/* KPI Grid */}
            <section>
                <div className="flex items-center justify-between mb-8 px-2">
                    <h4 className="text-2xl font-headline font-bold text-slate-800 tracking-tight">Operational Pulse</h4>
                    <div className="flex gap-2">
                        <button className="p-2.5 rounded-xl bg-white/60 border border-slate-200 text-slate-600 hover:bg-white hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-xl">filter_list</span>
                        </button>
                        <button className="p-2.5 rounded-xl bg-white/60 border border-slate-200 text-slate-600 hover:bg-white hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-xl">refresh</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="glass-panel p-7 rounded-3xl group hover:translate-y-[-4px] transition-all duration-300">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-2xl">payments</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-success/10 text-success text-[11px] font-black">+2.4%</span>
                        </div>
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Revenue</h5>
                        <div className="text-3xl font-headline font-bold text-slate-800 tracking-tight">$12.4M</div>
                        <div className="mt-5 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[75%] rounded-full"></div>
                        </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="glass-panel p-7 rounded-3xl group hover:translate-y-[-4px] transition-all duration-300 border-l-4 border-l-error/30">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center text-error">
                                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trend: Improving</span>
                        </div>
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Active Tickets</h5>
                        <div className="text-3xl font-headline font-bold text-slate-800 tracking-tight">42</div>
                        <p className="mt-4 text-[11px] font-bold text-error/80 uppercase">12 Flagged Critical</p>
                    </div>
                    
                    {/* Card 3 */}
                    <div className="glass-panel p-7 rounded-3xl group hover:translate-y-[-4px] transition-all duration-300">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                                <span className="material-symbols-outlined text-2xl">cloud_done</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-primary-container text-primary text-[11px] font-black">-5.1%</span>
                        </div>
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Cloud Costs</h5>
                        <div className="text-3xl font-headline font-bold text-slate-800 tracking-tight">$482k</div>
                        <div className="mt-5 flex gap-1">
                            <div className="h-1.5 flex-1 bg-tertiary rounded-full"></div>
                            <div className="h-1.5 flex-1 bg-tertiary rounded-full"></div>
                            <div className="h-1.5 flex-1 bg-tertiary/30 rounded-full"></div>
                            <div className="h-1.5 flex-1 bg-tertiary/10 rounded-full"></div>
                        </div>
                    </div>
                    
                    {/* Card 4 */}
                    <div className="glass-panel p-7 rounded-3xl group hover:translate-y-[-4px] transition-all duration-300">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600">
                                <span className="material-symbols-outlined text-2xl">speed</span>
                            </div>
                            <div className="flex -space-x-2">
                                <div className="w-7 h-7 rounded-full border-2 border-white bg-success"></div>
                                <div className="w-7 h-7 rounded-full border-2 border-white bg-primary"></div>
                            </div>
                        </div>
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">System Uptime</h5>
                        <div className="text-3xl font-headline font-bold text-slate-800 tracking-tight">99.98%</div>
                        <p className="mt-4 text-[11px] font-bold text-success uppercase">All regions optimal</p>
                    </div>
                </div>
            </section>

            {/* Insights Bento Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Major Insight Card */}
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
                            <button className="px-10 py-4 bg-primary text-on-primary rounded-2xl font-bold shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all">Authorize Migration</button>
                            <button className="px-10 py-4 bg-white/80 text-slate-700 rounded-2xl font-bold border border-slate-200 hover:bg-white transition-all active:scale-95">Detailed Review</button>
                        </div>
                    </div>
                    {/* Abstract Mesh in Card */}
                    <div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[120%] opacity-[0.07] pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.5,-52.1C60.1,-43.3,67.7,-25.9,70.1,-7.7C72.5,10.5,69.7,29.4,59.3,44.1C48.9,58.8,30.8,69.3,12.1,72.1C-6.6,74.9,-25.9,70,-41.2,59.3C-56.5,48.6,-67.9,32.2,-71.3,14.6C-74.8,-3,-70.4,-21.7,-59.8,-35.3C-49.3,-48.9,-32.7,-57.4,-16.1,-61C0.5,-64.7,16.1,-64.7,31.4,-61.1C35.9,-60.1,41.7,-56.9,47.5,-52.1Z" fill="#6366f1" transform="translate(100 100)"></path>
                        </svg>
                    </div>
                </div>
                
                {/* Side Focus Card */}
                <div className="glass-panel p-10 rounded-3xl flex flex-col justify-between bg-primary text-on-primary border-none shadow-2xl shadow-primary/20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <circle cx="90" cy="10" fill="white" r="30"></circle>
                        </svg>
                    </div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                            <span className="material-symbols-outlined text-3xl">trending_up</span>
                        </div>
                        <h4 className="text-3xl font-headline font-bold mb-3 tracking-tight">Quarterly Projection</h4>
                        <p className="text-white/80 text-sm leading-relaxed font-medium">
                            AI forecasting indicates a <span className="text-white font-bold">14% growth</span> in market penetration if logistics pipelines are optimized by Q3.
                        </p>
                    </div>
                    <div className="relative z-10 pt-10 border-t border-white/10 mt-8">
                        <div className="text-5xl font-extrabold mb-1 tracking-tighter">+$1.2M</div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-black">Estimated Enterprise Upside</p>
                    </div>
                </div>
            </section>

            {/* Footer Meta */}
            <footer className="mt-12 px-2 py-8 text-slate-400 text-[11px] font-bold uppercase tracking-widest flex justify-between items-center border-t border-outline-variant/50">
                <p>© 2024 AI-COO Enterprise Suite • SOC2 Type II Compliant</p>
                <div className="flex gap-8">
                    <a className="hover:text-primary transition-colors" href="#">Privacy Protocol</a>
                    <a className="hover:text-primary transition-colors" href="#">Security Audit Logs</a>
                    <a className="hover:text-primary transition-colors" href="#">System Status</a>
                </div>
            </footer>
        </div>
    );
}
