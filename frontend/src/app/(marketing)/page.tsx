"use client";

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white">bubble_chart</span>
          </div>
          <span className="font-headline font-bold text-xl text-[#1E293B]">AI-COO</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="#" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Platform</Link>
          <Link href="#" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Solutions</Link>
          <Link href="#" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">Security</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Sign In</Link>
          <Link href="/login" className="glass-pill-primary px-6 py-2.5 text-sm font-black shadow-xl shadow-primary/20">
            Request Demo
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-10 pt-20 pb-40 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/5 border border-success/10 text-success text-[10px] font-black uppercase tracking-widest mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
          Enterprise Intelligence v4.0
        </div>
        
        <h1 className="text-6xl md:text-8xl font-headline font-black text-[#1E293B] tracking-tight leading-[0.95] mb-8">
          Ask your company <br />
          <span className="text-primary italic">anything.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed mb-12">
          Replace static dashboards with a conversational AI executive. <br className="hidden md:block" />
          Powered by <span className="text-slate-800 font-bold">Snowflake Cortex</span>, <span className="text-slate-800 font-bold">Gemini</span>, and <span className="text-slate-800 font-bold">ElevenLabs</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <Link href="/login" className="glass-pill-primary px-10 py-5 text-base font-black shadow-2xl shadow-primary/30 flex items-center gap-3 group">
            Enter Executive Suite
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
          <button className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-slate-700 font-black border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
            <span className="material-symbols-outlined text-2xl text-primary">play_circle</span>
            Watch Keynote
          </button>
        </div>

        {/* Voice Interface Mockup */}
        <div className="max-w-4xl mx-auto glass-panel p-2 rounded-[40px] shadow-3xl border-white/50 bg-white/30 backdrop-blur-2xl">
          <div className="bg-white/60 rounded-[34px] p-12 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">mic</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">Listening</p>
                <p className="text-sm font-bold text-slate-700">"What was our net churn in EMEA last quarter?"</p>
              </div>
              <div className="flex-1" />
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-[10px] font-black uppercase text-slate-400">
                <span className="material-symbols-outlined text-xs">lock</span>
                Cortex Protocol
              </div>
            </div>

            {/* Waveform Visualization */}
            <div className="h-32 flex items-center gap-2 mb-6">
              {[1, 0.6, 0.8, 0.4, 0.9, 0.5, 0.7, 0.3, 0.85, 0.45, 0.75, 0.2, 0.95, 0.65, 0.4].map((scale, i) => (
                <div 
                  key={i} 
                  className={`w-2 rounded-full transition-all duration-500 animate-pulse ${i === 7 ? 'bg-success' : 'bg-primary'}`}
                  style={{ height: `${scale * 100}%`, animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Universal Data Ingestion', desc: 'Native Snowflake Cortex integration allowing zero-copy data processing. Instant access to your entire data warehouse via voice.', icon: 'grid_view' },
            { title: 'Predictive Risk Radar', desc: 'Continuous monitoring of enterprise KPIs with autonomous anomaly detection and proactive risk mitigation strategies.', icon: 'radar' },
            { title: 'Multi-Persona Boardroom', desc: 'Switch between specialized AI personas: CFO for fiscal analysis, CMO for market sentiment, or CTO for architectural health.', icon: 'groups_3' }
          ].map((feature, i) => (
            <div key={i} className="glass-panel p-10 rounded-[40px] text-left hover:translate-y-[-8px] transition-all duration-500 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-headline font-black text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-40 pt-20 border-t border-slate-200 flex flex-wrap justify-center gap-20 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
          {['Snowflake', 'Cortex', 'ElevenLabs', 'Gemini Pro'].map(name => (
            <span key={name} className="text-2xl font-headline font-bold tracking-tighter text-slate-400">{name}</span>
          ))}
        </div>
      </main>

      <footer className="relative z-10 max-w-7xl mx-auto px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-100">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">SOC2 TYPE II COMPLIANT — ENTERPRISE GRADE SECURITY</p>
        <div className="flex gap-10">
          <Link href="#" className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="#" className="text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link>
          <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
            System Status: Optimal
          </div>
        </div>
      </footer>
    </div>
  );
}
