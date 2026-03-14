"use client";

import React, { useState } from 'react';

interface ProfileData {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  avatar: string;
  accessLevel: string;
}

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Eleanor Vance",
    role: "Chief Executive Officer",
    email: "e.vance@ai-coo.global",
    phone: "+1 (555) 902-4821",
    location: "North America HQ",
    timezone: "Eastern Standard Time",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKHJKNUiaT4_NivK0fZcCOR65TSl8LJ5RO3XxQ1mTOCPd1qF1gCz034I4KJ8yiCNxr6z4oOTA9KQM3_-YMJWk6NmOBeX2dwwK3AoPKyxf5esTINJWNGfJU4Pfhd42R1sS3QYlFiJrB9aGhd3VCWgWYBPWDvepE6xMdZKKu6PSRrFzUne5q7ozLxtaPBQXujzlUyHmpOAJZtLZ_9PpVRpCndr3dmaiCUw6YFPKd8yb2BkrgfjBB9sY4ZhhxfddQ_C9MS0e9_A9VGiyo",
    accessLevel: "Admin / Full Access"
  });

  const [voiceSpeed, setVoiceSpeed] = useState(1.2);
  const [isBriefingEnabled, setIsBriefingEnabled] = useState(true);
  const [verbosity, setVerbosity] = useState<'Detailed' | 'Balanced' | 'Concise'>('Concise');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tempData, setTempData] = useState<ProfileData>(profileData);

  const handleSave = () => {
    setProfileData(tempData);
    setIsEditModalOpen(false);
  };

  const handleEditClick = () => {
    setTempData(profileData);
    setIsEditModalOpen(true);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAFF] font-sans">
      <main className="p-10 max-w-7xl mx-auto w-full space-y-8 pb-20">
        {/* Profile Header */}
        <section className="glass-panel p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden border-white/60 bg-white/40 shadow-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary/30 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <img 
              alt="Executive Avatar" 
              className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl" 
              src={profileData.avatar}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
              <h2 className="text-4xl font-headline font-black tracking-tight text-slate-800">{profileData.name}</h2>
              <span className="px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/20">{profileData.accessLevel}</span>
            </div>
            <p className="text-xl text-slate-500 font-bold">{profileData.role}</p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-sm text-slate-400 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">location_on</span>
                {profileData.location}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">schedule</span>
                {profileData.timezone === 'Eastern Standard Time' ? 'EST (GMT-5)' : profileData.timezone}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleEditClick}
              className="px-8 py-3 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest"
            >
              Edit Profile
            </button>
            <button className="p-3 bg-white/60 text-primary border border-white/80 rounded-2xl hover:bg-white transition-all shadow-sm">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </section>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-panel p-8 rounded-3xl bg-white/60 border-white/80 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-headline font-black text-slate-800">Personal Information</h3>
                <button onClick={handleEditClick} className="text-primary font-black text-xs uppercase tracking-widest hover:underline">Update</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                {[
                  { label: 'Email Address', value: profileData.email },
                  { label: 'Phone', value: profileData.phone },
                  { label: 'Regional HQ', value: profileData.location },
                  { label: 'Timezone', value: profileData.timezone }
                ].map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</label>
                    <p className="text-lg font-bold text-slate-700">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Personalization */}
            <div className="glass-panel p-8 rounded-3xl bg-white/60 border-white/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <span className="material-symbols-outlined text-primary/10 text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <h3 className="text-xl font-headline font-black text-slate-800 mb-8">AI-COO Personalization</h3>
              
              <div className="space-y-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center border border-secondary/20">
                      <span className="material-symbols-outlined text-secondary">wb_sunny</span>
                    </div>
                    <div>
                      <p className="font-black text-slate-800 uppercase tracking-tight">Daily Briefing</p>
                      <p className="text-xs text-slate-500 font-bold">Scheduled morning intelligence delivery</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-black text-slate-700 bg-white/50 px-3 py-1 rounded-lg border border-slate-200">5:30 AM</span>
                    <button 
                      onClick={() => setIsBriefingEnabled(!isBriefingEnabled)}
                      className={`w-12 h-6 rounded-full relative p-1 transition-colors duration-300 ${isBriefingEnabled ? 'bg-secondary' : 'bg-slate-300'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${isBriefingEnabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </button>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <p className="font-black text-slate-800 uppercase tracking-tight">AI Voice Speed</p>
                    <span className="text-xs font-black px-3 py-1 bg-primary/10 text-primary rounded-lg border border-primary/20">{voiceSpeed}x</span>
                  </div>
                  <div className="relative w-full h-2 bg-slate-200 rounded-full">
                    <input 
                      type="range" min="0.5" max="2.0" step="0.1" value={voiceSpeed}
                      onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: `${((voiceSpeed - 0.5) / 1.5) * 100}%` }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-primary rounded-full shadow-lg z-0" style={{ left: `calc(${((voiceSpeed - 0.5) / 1.5) * 100}% - 10px)` }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="font-black text-slate-800 uppercase tracking-tight">Strategic Verbosity</p>
                  <div className="flex p-1.5 bg-slate-100/50 rounded-2xl gap-2 border border-slate-200/50">
                    {(['Detailed', 'Balanced', 'Concise'] as const).map((v) => (
                      <button 
                        key={v} onClick={() => setVerbosity(v)}
                        className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${verbosity === v ? 'bg-white text-primary shadow-sm ring-1 ring-slate-200/50' : 'text-slate-400 hover:text-slate-600 hover:bg-white/40'}`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (1/3) */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-3xl bg-white/60 border-white/80 shadow-sm">
              <h3 className="text-xl font-headline font-black text-slate-800 mb-6">Security</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20">
                    <span className="material-symbols-outlined text-primary">security</span>
                  </div>
                  <div>
                    <p className="font-black text-slate-800 text-sm uppercase tracking-tight">2FA Security</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active via Okta Enterprise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl bg-white/60 border-white/80 shadow-sm">
              <h3 className="text-xl font-headline font-black text-slate-800 mb-8">Interaction Audit</h3>
              <div className="space-y-8 relative">
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-200"></div>
                <div className="relative pl-12 group cursor-pointer">
                  <div className="absolute left-1.5 top-1.5 w-5 h-5 bg-white border-4 border-primary rounded-full z-10 group-hover:scale-125 transition-transform"></div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Today, 09:15 AM</p>
                    <p className="font-black text-slate-800 mt-1 leading-tight text-sm">Boardroom debate simulation complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="glass-panel max-w-2xl w-full p-10 rounded-[40px] shadow-2xl bg-white border border-white/50 animate-in zoom-in-95 duration-300">
            <h3 className="text-3xl font-headline font-black text-slate-800 tracking-tight mb-8">Edit Executive Profile</h3>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                <input 
                  type="text" value={tempData.name}
                  onChange={(e) => setTempData({...tempData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Title / Role</label>
                <input 
                  type="text" value={tempData.role}
                  onChange={(e) => setTempData({...tempData, role: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <input 
                  type="email" value={tempData.email}
                  onChange={(e) => setTempData({...tempData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                <input 
                  type="text" value={tempData.phone}
                  onChange={(e) => setTempData({...tempData, phone: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">HQ Location</label>
                <input 
                  type="text" value={tempData.location}
                  onChange={(e) => setTempData({...tempData, location: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Timezone</label>
                <input 
                  type="text" value={tempData.timezone}
                  onChange={(e) => setTempData({...tempData, timezone: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-700"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="flex-1 py-4 rounded-2xl border border-slate-200 text-slate-400 font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all"
              >
                Discard Changes
              </button>
              <button 
                onClick={handleSave}
                className="flex-1 py-4 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Save Updates
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
