"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function AccountMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
    };

    const navigateTo = (path: string) => {
        router.push(path);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={menuRef} onKeyDown={handleKeyDown}>
            <button 
                onClick={toggleMenu}
                className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant p-0.5 bg-white hover:ring-2 hover:ring-primary/20 transition-all"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <img 
                    className="w-full h-full object-cover rounded-full" 
                    alt="Executive User Profile" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuArpZB4t3B9Z6r2ldIpoHX1IM6EurLm-i2cEaYZrKlTmbt9RH_tU0VlsUuPmkgovjdAdmj9a0A5dpgK46aYG88_7s_p-Y264ZMftRWxWvTjZkMkJeY8Ma-3_GziWKKZ17rd4tdcxc7emU0_IOQ0eApo4QlmsojW1jpZhIdlEBeDSk1P1NfJts7Tsr8Lipph7KuUJLUn5tqdVNmkrtxnqmhowOpPu8IlBnTIZCk4OkPOfTEqL8wwwvxXHzBVMWOlqu-erqk_hcc9yG26"
                />
            </button>

            {isOpen && (
                <div 
                    className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 py-3 z-[100] animate-in fade-in slide-in-from-top-2 duration-200"
                    role="menu"
                >
                    <div className="px-4 py-2 border-b border-outline-variant/30 mb-2">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Executive Session</p>
                        <p className="text-sm font-bold text-slate-800">CFO AI Monitor</p>
                    </div>
                    <button 
                        onClick={() => navigateTo('/profile')}
                        className="w-full text-left px-5 py-3 text-sm font-bold text-slate-700 hover:bg-primary/5 hover:text-primary transition-all flex items-center gap-4"
                        role="menuitem"
                    >
                        <span className="material-symbols-outlined text-xl opacity-60">person</span>
                        Profile
                    </button>
                    <button 
                        onClick={() => navigateTo('/configuration')}
                        className="w-full text-left px-5 py-3 text-sm font-bold text-slate-700 hover:bg-primary/5 hover:text-primary transition-all flex items-center gap-4"
                        role="menuitem"
                    >
                        <span className="material-symbols-outlined text-xl opacity-60">settings</span>
                        Settings
                    </button>
                    <div className="h-[1px] bg-outline-variant/30 my-2 mx-3"></div>
                    <button 
                        onClick={() => navigateTo('/login')}
                        className="w-full text-left px-5 py-3 text-sm font-black text-error hover:bg-error/5 transition-all flex items-center gap-4"
                        role="menuitem"
                    >
                        <span className="material-symbols-outlined text-xl opacity-80">logout</span>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
