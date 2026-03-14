"use client";

import { DateDataPanel } from "@/components/DateDataPanel";
import { DashboardPodcast } from "@/components/features/DashboardPodcast";
import { kpiMetrics } from "@/lib/dummyData";

export default function ExecutiveDashboard() {
    return (
        <div className="p-10 space-y-10 max-w-7xl mx-auto w-full overflow-y-auto h-[calc(100vh-80px)]">
            <DateDataPanel />
            
            <DashboardPodcast />

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
                    {kpiMetrics.map((metric) => (
                        <div key={metric.id} className="glass-panel p-7 rounded-3xl group hover:translate-y-[-4px] transition-all duration-300">
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                                    metric.title === 'Total Revenue' || metric.id === '1' ? 'bg-primary/10 text-primary' :
                                    metric.title === 'Active Support Tickets' || metric.id === '2' ? 'bg-error/10 text-error' :
                                    metric.title === 'Cloud Infrastructure Cost' || metric.id === '3' ? 'bg-tertiary/10 text-tertiary' : 'bg-slate-100 text-slate-600'
                                }`}>
                                    <span className="material-symbols-outlined text-2xl">
                                        {metric.title === 'Monthly Recurring Revenue' ? 'payments' : 
                                         metric.title === 'Active Support Tickets' ? 'confirmation_number' :
                                         metric.title === 'Cloud Infrastructure Cost' ? 'cloud_done' : 'speed'}
                                    </span>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[11px] font-black ${
                                    metric.trendType === 'positive' ? 'bg-success/10 text-success' : 
                                    metric.trendType === 'negative' ? 'bg-error/10 text-error' : 'bg-slate-100 text-slate-500'
                                }`}>
                                    {metric.trend}
                                </span>
                            </div>
                            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{metric.title}</h5>
                            <div className="text-3xl font-headline font-bold text-slate-800 tracking-tight">{metric.value}</div>
                            <p className="mt-4 text-[11px] font-bold text-slate-400 uppercase">{metric.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quarterly Projection Card (Moved outside original Podcast component for layout) */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-start-3 glass-panel p-10 rounded-3xl flex flex-col justify-between bg-primary text-on-primary border-none shadow-2xl shadow-primary/20 relative overflow-hidden">
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
