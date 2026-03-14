export function Topbar() {
    return (
        <header className="h-20 glass-panel flex items-center justify-between px-10 z-10 sticky top-0 border-b-0">
            <div className="flex items-center gap-4">
                <h2 className="font-headline font-semibold text-xl text-on-surface">AI-COO Executive Suite</h2>
                <div className="h-4 w-[1px] bg-outline-variant mx-2"></div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                    Status: Snowflake Cortex Connected
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative flex items-center">
                    <input className="pl-10 pr-4 py-2 bg-white/60 border border-outline-variant rounded-full text-sm w-64 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-outline" placeholder="Search data assets..." type="text"/>
                    <span className="material-symbols-outlined absolute left-3 text-outline text-lg">search</span>
                </div>
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all text-on-surface-variant">
                        <span className="material-symbols-outlined">calendar_today</span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all text-on-surface-variant relative">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-secondary rounded-full border-2 border-white"></span>
                    </button>
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant p-0.5 bg-white">
                        <img className="w-full h-full object-cover rounded-full" alt="Executive User Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArpZB4t3B9Z6r2ldIpoHX1IM6EurLm-i2cEaYZrKlTmbt9RH_tU0VlsUuPmkgovjdAdmj9a0A5dpgK46aYG88_7s_p-Y264ZMftRWxWvTjZkMkJeY8Ma-3_GziWKKZ17rd4tdcxc7emU0_IOQ0eApo4QlmsojW1jpZhIdlEBeDSk1P1NfJts7Tsr8Lipph7KuUJLUn5tqdVNmkrtxnqmhowOpPu8IlBnTIZCk4OkPOfTEqL8wwwvxXHzBVMWOlqu-erqk_hcc9yG26"/>
                    </div>
                </div>
            </div>
        </header>
    );
}
