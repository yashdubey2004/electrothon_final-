export default function RiskRadarPage() {
    return (
        <div className="flex-1 p-10 space-y-10 overflow-y-auto h-[calc(100vh-80px)] bg-gradient-mesh">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Predictive Risk Radar</h1>
                    <p className="text-on-surface-variant text-lg max-w-xl font-medium opacity-80">Algorithmic threat detection and revenue simulations powered by Cortex ML.</p>
                </div>
                <div className="flex gap-4">
                    <div className="glass-card px-6 py-4 rounded-2xl flex flex-col border-l-4 border-l-error shadow-sm bg-white/50 backdrop-blur-md">
                        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1 opacity-70">Global Risk Index</span>
                        <span className="text-2xl font-black text-error">Elevated (7.4)</span>
                    </div>
                </div>
            </header>

            {/* Revenue Forecast Chart Section */}
            <section className="grid grid-cols-12 gap-6 relative z-10">
                <div className="col-span-12 glass-card rounded-3xl p-8 min-h-[500px] relative overflow-hidden shadow-xl shadow-primary/5 bg-white/60">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h3 className="text-xl font-bold text-on-surface">Revenue Forecast Simulation</h3>
                            <p className="text-on-surface-variant text-sm font-medium opacity-70">Historical Actuals vs. 45-Day AI Projection</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary shadow-sm shadow-primary/40"></div>
                                <span className="text-xs font-bold text-on-surface-variant">Actuals</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full border-2 border-dashed border-error"></div>
                                <span className="text-xs font-bold text-on-surface-variant">Forecasted Volatility</span>
                            </div>
                        </div>
                    </div>

                    {/* Simulated Recharts AreaChart */}
                    <div className="relative w-full h-80 px-4">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300">
                            <defs>
                                <linearGradient id="areaPrimary" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity="0.25"></stop>
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="areaWarning" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity="0.15"></stop>
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            {/* Grid Lines */}
                            <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="0" y2="0"></line>
                            <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="75" y2="75"></line>
                            <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
                            <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="225" y2="225"></line>
                            <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="300" y2="300"></line>
                            {/* Historical Solid Blue Line */}
                            <path d="M0,150 Q100,140 200,160 T400,130 T600,145" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="3"></path>
                            <path d="M0,150 Q100,140 200,160 T400,130 T600,145 L600,300 L0,300 Z" fill="url(#areaPrimary)"></path>
                            {/* 45-day Dashed Red Line Dip (Projection) */}
                            <path d="M600,145 Q700,160 800,260 T1000,220" fill="none" stroke="#ef4444" strokeDasharray="8,4" strokeLinecap="round" strokeWidth="3"></path>
                            <path d="M600,145 Q700,160 800,260 T1000,220 L1000,300 L600,300 Z" fill="url(#areaWarning)"></path>
                            {/* Critical Point Pulse */}
                            <circle cx="800" cy="260" fill="#ef4444" r="6"></circle>
                            <circle className="animate-ping" cx="800" cy="260" fill="#ef4444" opacity="0.3" r="12"></circle>
                        </svg>
                        {/* X-Axis Labels */}
                        <div className="flex justify-between mt-8 text-[11px] font-bold text-on-surface-variant px-2 tracking-wider opacity-60">
                            <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span className="text-error opacity-100">MAY (FORECAST)</span><span>JUN</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Red Alert Banner */}
            <div className="col-span-12 alert-glow bg-error-container/50 border border-error/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:bg-error-container/70 relative z-10">
                <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-error rounded-full flex items-center justify-center shadow-lg shadow-error/20">
                        <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-on-error-container">Projected $500k Loss in EU Region</h4>
                        <p className="text-on-surface-variant font-medium text-sm">Anomaly detected in supply chain logistics and energy surcharges.</p>
                    </div>
                </div>
                <button className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center gap-3 active:scale-95">
                    <span className="material-symbols-outlined text-lg">auto_awesome</span>
                    Generate Mitigation Strategy
                </button>
            </div>

            {/* Insight Cards (Bottom Row) */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20 relative z-10">
                {/* Professional Slate Card 1 */}
                <div className="glass-card bg-white/60 rounded-3xl p-8 border-t-4 border-t-primary shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-primary-container rounded-2xl">
                            <span className="material-symbols-outlined text-primary">analytics</span>
                        </div>
                        <span className="text-[10px] font-bold text-primary bg-primary-container px-3 py-1 rounded-full uppercase tracking-tighter">Regional Shift</span>
                    </div>
                    <h5 className="text-lg font-bold mb-2 text-on-surface">EU Market Volatility</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-medium opacity-80">Historical trends suggest a 12% correction cycle. ML model predicts stabilization by late Q3.</p>
                    <div className="h-1.5 w-full bg-secondary-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                </div>

                {/* Professional Slate Card 2 */}
                <div className="glass-card bg-white/60 rounded-3xl p-8 border-t-4 border-t-tertiary shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-tertiary-container rounded-2xl">
                            <span className="material-symbols-outlined text-tertiary">finance</span>
                        </div>
                        <span className="text-[10px] font-bold text-tertiary bg-tertiary-container px-3 py-1 rounded-full uppercase tracking-tighter">Fiscal Impact</span>
                    </div>
                    <h5 className="text-lg font-bold mb-2 text-on-surface">Cost Optimization</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-medium opacity-80">AI recommends immediate reallocation of $250k from R&D to direct logistics support.</p>
                    <div className="flex items-center gap-2 text-primary font-bold text-xs cursor-pointer hover:gap-3 transition-all">
                        Review Recommendations <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </div>
                </div>

                {/* Professional Slate Card 3 */}
                <div className="glass-card bg-white/60 rounded-3xl p-8 border-t-4 border-t-secondary shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-secondary-container rounded-2xl">
                            <span className="material-symbols-outlined text-secondary">hub</span>
                        </div>
                        <span className="text-[10px] font-bold text-secondary bg-secondary-container px-3 py-1 rounded-full uppercase tracking-tighter">Network Health</span>
                    </div>
                    <h5 className="text-lg font-bold mb-2 text-on-surface">Supply Chain Integrity</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-medium opacity-80">Snowflake Cortex signals potential delays in Rotterdam hub operations within 15 days.</p>
                    <div className="flex -space-x-2">
                        <img alt="Logistics Manager Profile" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXTN8Nnj7AS0kp9s-7KsZgvvc1dyAiqKBQbdeOC7Hd6iUAqRn5uf_8xeYrHj7Sb74EajFEfJoHcOoAKNfTpMuJl4KkCckjc62-Vtht4IZzUGFsO0sVmUhvd6xOhF1J06_Zlnvx0Zq7vpwGuxbBOM17swRi6l50ylm_3qGNWuamydadQD6pFlhq0UzHK_n3DLfXY4GfTKPMtV7qep0FPxbdVs1msrc3fKT_DPVEiO3d31M7A3cDIHTw8OUqQEXaNGiyiv5ajlcW12Hb"/>
                        <img alt="Operations Director Profile" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrELAoVRWakfuMsdo9ClJionUKGAms5otantQaHbo9JcssAnjjvQB0TcTPsUOh4CtLwFt0z5QDbMgQw83_7qgzGKC1raE2rJhCTljGrBgWp0f9ibp0NYESynBo8haMXIsK4OPSsWfTY72H1q8tMH0j9x-GB4q9s8asaVHjxVOvfvyIzqa_x1mbGMRYlIHVnq8BtHhkU8pCPK5ATKBrsTtNthplNTCaGgk1DuBohnotMXBi5k26B8DN2xPuLd0nI94zKd3WaBjDd7cX"/>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary text-[10px] font-bold text-white flex items-center justify-center">+4</div>
                    </div>
                </div>
            </section>

            {/* The Insight Rail (Floating Signature Component) */}
            <div className="fixed bottom-8 right-8 w-80 glass-card rounded-3xl p-6 shadow-2xl border-primary/10 border-t-4 border-t-primary bg-white/80 backdrop-blur-xl z-50">
                <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    <span className="text-[11px] font-extrabold text-on-surface uppercase tracking-widest opacity-80">Live Context</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-5 font-medium">
                    Snowflake Cortex is analyzing 4,200 additional variables from the <span className="text-primary font-bold">War Room</span> data stream.
                </p>
                <div className="bg-primary-container/60 p-4 rounded-2xl border border-primary/10">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider">NEXT RECOMMENDED STEP</span>
                    <p className="text-sm font-bold mt-1.5 text-on-primary-container">Schedule Emergency Board Meeting</p>
                </div>
            </div>
        </div>
    );
}
