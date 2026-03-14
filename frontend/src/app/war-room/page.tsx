export default function WarRoomPage() {
    return (
        <div className="flex-1 relative overflow-hidden flex flex-col h-[calc(100vh-80px)]">
            {/* Background Gradient Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-low pointer-events-none"></div>
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-5%] left-[-2%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

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
                        <div className="absolute w-[450px] h-[450px] pulsing-ring scale-100 opacity-30"></div>
                        <div className="absolute w-[350px] h-[350px] pulsing-ring scale-100 opacity-50"></div>
                        <div className="absolute w-[250px] h-[250px] pulsing-ring scale-100 opacity-70"></div>

                        {/* Main Mic Button */}
                        <button className="relative z-10 w-44 h-44 rounded-full glass-card shadow-2xl shadow-primary/10 flex items-center justify-center group transition-transform hover:scale-105 active:scale-95 border border-primary/20">
                            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
                            </div>
                        </button>

                        <div className="mt-16 text-center space-y-4">
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card border border-primary/10 relative z-10">
                                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                                <span className="text-sm font-semibold tracking-wide text-primary">Querying Snowflake Vector Store...</span>
                            </div>
                            <p className="text-on-surface-variant text-[11px] font-bold tracking-[0.2em] uppercase opacity-60 relative z-10">Holding for voice command</p>
                        </div>

                        {/* Refined Hardware Accents */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                            <div className="w-8 h-1 bg-secondary opacity-20 rounded-full"></div>
                            <div className="w-8 h-1 bg-secondary opacity-60 rounded-full"></div>
                            <div className="w-8 h-1 bg-secondary opacity-20 rounded-full"></div>
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
                            {/* User Message */}
                            <div className="flex flex-col items-end gap-2 max-w-[90%] ml-auto">
                                <div className="glass-pill-primary p-5 rounded-2xl rounded-tr-none text-on-surface">
                                    <p className="text-sm leading-relaxed">Analyze our Q3 inventory risk against the projected West Coast logistics disruption. Is Snowflake flagging any critical anomalies in the supplier vector space?</p>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">Executive User • 10:42 AM</span>
                            </div>

                            {/* AI Message */}
                            <div className="flex flex-col items-start gap-2 max-w-[90%]">
                                <div className="bg-white/80 border border-outline-variant/40 p-5 rounded-2xl rounded-tl-none text-on-surface shadow-sm">
                                    <p className="text-sm leading-relaxed">Processing Query against Snowflake Cortex... <br/><br/>I've identified a <span className="font-bold text-primary">12.4% variance</span> in lead times for Tier-1 electronics suppliers. The vector embeddings show a significant semantic shift in 'logistics_reliability' scores for regional hubs. Current risk rating is <span className="text-tertiary font-bold">CRITICAL</span>.</p>
                                    
                                    {/* Insight Card within chat */}
                                    <div className="mt-5 p-4 rounded-xl bg-primary-container/30 border border-primary/10 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary">analytics</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-wider text-primary">Action Suggested</p>
                                            <p className="text-sm font-medium text-on-primary-container">Re-route shipments via Port of Houston</p>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">AI-COO Intelligence • 10:42 AM</span>
                            </div>

                            {/* User Message */}
                            <div className="flex flex-col items-end gap-2 max-w-[90%] ml-auto">
                                <div className="glass-pill-primary p-5 rounded-2xl rounded-tr-none text-on-surface">
                                    <p className="text-sm leading-relaxed">Initiate the reroute simulation and notify the logistics VP. Include the cost-benefit delta from the Cortex analysis.</p>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">Executive User • 10:43 AM</span>
                            </div>

                            {/* AI Message (Typing) */}
                            <div className="flex flex-col items-start gap-2 max-w-[90%]">
                                <div className="bg-white/80 border border-outline-variant/40 px-5 py-4 rounded-2xl rounded-tl-none shadow-sm text-on-surface">
                                    <div className="flex gap-1.5 items-center h-5">
                                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '-0.15s' }}></div>
                                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '-0.3s' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="p-6 bg-white/40 border-t border-outline-variant/30 backdrop-blur-md">
                            <div className="relative">
                                <input className="w-full bg-white/80 border border-outline-variant/50 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 placeholder:text-on-surface-variant/50 text-sm transition-all outline-none" placeholder="Type command or press mic..." type="text"/>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                                    <button className="p-2 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors shadow-md">
                                        <span className="material-symbols-outlined text-sm">send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Quick Stats */}
                <div className="mt-8 flex justify-between items-center px-4 relative z-10">
                    <div className="flex gap-12">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-on-surface-variant/40">Latency</span>
                            <span className="text-lg font-bold text-on-surface/50">12ms</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-on-surface-variant/40">Vector Dims</span>
                            <span className="text-lg font-bold text-on-surface/50">1536</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-on-surface-variant/40">Model</span>
                            <span className="text-lg font-bold text-on-surface/50">Cortex-L</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-[11px] font-black tracking-widest text-on-surface-variant/50 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            EXPORT LOGS
                        </button>
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
