"use client";

import React, { useState, useRef, useEffect } from 'react';

export function AccountMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

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
                    className="absolute right-0 mt-3 w-48 glass-panel rounded-2xl shadow-xl border border-white/40 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    role="menu"
                >
                    <button 
                        className="w-full text-left px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-3"
                        role="menuitem"
                    >
                        <span className="material-symbols-outlined text-lg">person</span>
                        Profile
                    </button>
                    <button 
                        className="w-full text-left px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-3"
                        role="menuitem"
                    >
                        <span className="material-symbols-outlined text-lg">settings</span>
                        Settings
                    </button>
                    <div className="h-[1px] bg-outline-variant/50 my-1 mx-2"></div>
                    <button 
                        className="w-full text-left px-4 py-2.5 text-sm font-semibold text-error hover:bg-error/5 transition-colors flex items-center gap-3"
                        role="menuitem"
                    >
                        <span className="material-symbols-outlined text-lg">logout</span>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
