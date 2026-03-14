import Link from 'next/link';

export function Sidebar() {
    return (
        <aside className="w-72 h-screen sticky top-0 bg-surface-container-low flex flex-col border-r border-outline-variant">
            <div className="p-8 flex items-center gap-3">
                <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white">bubble_chart</span>
                </div>
                <div>
                    <h1 className="font-headline font-bold text-lg tracking-tight leading-none text-on-surface">AI-COO</h1>
                    <p className="text-[10px] font-label tracking-widest uppercase text-outline mt-1">Enterprise Intelligence</p>
                </div>
            </div>
            <nav className="flex-1 px-4 mt-4 space-y-1">
                <Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm transition-all" href="/">
                    <span className="material-symbols-outlined">dashboard</span>
                    <span className="font-medium">Dashboard</span>
                </Link>
                <Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm transition-all" href="/data-pipeline">
                    <span className="material-symbols-outlined">database</span>
                    <span className="font-medium">Data Pipeline</span>
                </Link>
                <Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm transition-all" href="/risk-radar">
                    <span className="material-symbols-outlined">radar</span>
                    <span className="font-medium">Risk Radar</span>
                </Link>
                <Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm transition-all" href="/war-room">
                    <span className="material-symbols-outlined">crisis_alert</span>
                    <span className="font-medium">War Room</span>
                </Link>
                <Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm transition-all" href="/boardroom">
                    <span className="material-symbols-outlined">groups</span>
                    <span className="font-medium">The Boardroom</span>
                </Link>
            </nav>
            <div className="p-4 border-t border-outline-variant space-y-1">
                <Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm transition-all" href="#">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="font-medium">Settings</span>
                </Link>
                <Link className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm transition-all" href="#">
                    <span className="material-symbols-outlined">help</span>
                    <span className="font-medium">Support</span>
                </Link>
            </div>
        </aside>
    );
}
