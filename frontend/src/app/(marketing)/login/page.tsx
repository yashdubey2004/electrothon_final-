"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication/registration
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] relative flex items-center justify-center p-6 overflow-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />

      <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in-95 duration-500">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 primary-gradient rounded-[24px] flex items-center justify-center shadow-2xl shadow-primary/20 mb-6 group cursor-pointer hover:rotate-6 transition-transform">
            <span className="material-symbols-outlined text-white text-4xl">bubble_chart</span>
          </div>
          <h1 className="text-4xl font-headline font-black text-slate-800 tracking-tight leading-none mb-2">
            {isSignup ? 'Create Account' : 'Executive Login'}
          </h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
            {isSignup ? 'AI-COO Registration Portal' : 'AI-COO Secure Gateway'}
          </p>
        </div>

        {/* Auth Card */}
        <div className="glass-panel p-1 rounded-[48px] bg-white/40 shadow-3xl border-white/60">
          <form onSubmit={handleAuth} className="bg-white/70 backdrop-blur-2xl rounded-[44px] p-10 space-y-7">
            
            <div className="space-y-5">
              {isSignup && (
                <div className="space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative">
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-white border border-slate-200/60 rounded-2xl py-4 px-5 text-sm font-medium outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all placeholder:text-slate-300"
                      />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 text-xl">account_circle</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Organization</label>
                    <div className="relative">
                      <input 
                        required
                        type="text" 
                        placeholder="Enterprise Corp" 
                        className="w-full bg-white border border-slate-200/60 rounded-2xl py-4 px-5 text-sm font-medium outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all placeholder:text-slate-300"
                      />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 text-xl">corporate_fare</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Corporate Email</label>
                <div className="relative">
                  <input 
                    required
                    type="email" 
                    placeholder="executive@enterprise.com" 
                    className="w-full bg-white border border-slate-200/60 rounded-2xl py-4 px-5 text-sm font-medium outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all placeholder:text-slate-300"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 text-xl">alternate_email</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                <div className="relative">
                  <input 
                    required
                    type="password" 
                    placeholder="••••••••••••" 
                    className="w-full bg-white border border-slate-200/60 rounded-2xl py-4 px-5 text-sm font-medium outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all placeholder:text-slate-300"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 text-xl">lock</span>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full glass-pill-primary py-5 text-base font-black shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
            >
              {isSignup ? 'Create Executive Account' : 'Access Secure Environment'}
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>

            <div className="text-center">
              <button 
                type="button"
                onClick={() => setIsSignup(!isSignup)}
                className="text-xs font-bold text-primary hover:underline transition-all"
              >
                {isSignup ? 'Already have access? Sign In' : 'Need an account? Request Access'}
              </button>
            </div>

            {!isSignup && (
              <>
                <div className="relative py-2 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200/60"></div>
                  </div>
                  <span className="relative z-10 bg-white/70 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Or continue with</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button type="button" className="flex items-center justify-center gap-3 py-4 px-6 bg-white border border-slate-200/60 rounded-2xl text-[11px] font-black text-slate-600 hover:bg-slate-50 transition-all active:scale-95">
                    <img src="https://www.google.com/favicon.ico" className="w-4 h-4 grayscale opacity-60" alt="" />
                    Workspace
                  </button>
                  <button type="button" className="flex items-center justify-center gap-3 py-4 px-6 bg-white border border-slate-200/60 rounded-2xl text-[11px] font-black text-slate-600 hover:bg-slate-50 transition-all active:scale-95">
                    <img src="https://www.microsoft.com/favicon.ico" className="w-4 h-4 grayscale opacity-60" alt="" />
                    Entra ID
                  </button>
                </div>
              </>
            )}
          </form>
        </div>

        {/* Footer Info */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm text-success">verified_user</span>
            End-to-End Encrypted Session
          </div>
          
          <div className="w-full h-[1px] bg-slate-200 opacity-60" />

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1.5 text-[9px] font-black text-success uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
              Systems Operational
            </div>
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">v4.2.0-PREMIUM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
