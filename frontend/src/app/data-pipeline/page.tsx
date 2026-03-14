export default function DataPipelinePage() {
    return (
        <div className="flex-1 overflow-y-auto p-10 space-y-12 h-screen">
            {/* Page Header */}
            <div className="max-w-6xl">
                <h3 className="text-4xl font-headline font-bold text-on-surface mb-2 tracking-tight">Data Pipeline</h3>
                <p className="text-on-surface-variant text-lg max-w-2xl">High-fidelity vectorization and contextualization for enterprise-grade generative intelligence.</p>
            </div>
            
            {/* Main Interactive Zone (Bento Grid Style) */}
            <div className="grid grid-cols-12 gap-8 max-w-7xl">
                {/* Large Drag & Drop Zone */}
                <div className="col-span-12 lg:col-span-8 group">
                    <div className="h-[420px] glass-panel rounded-3xl relative flex flex-col items-center justify-center p-12 transition-all hover:shadow-xl hover:bg-white/80 cursor-pointer overflow-hidden">
                        {/* Background Texture */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]"></div>
                        <div className="absolute inset-6 rounded-2xl border-2 border-dashed border-outline-variant group-hover:border-primary/40 transition-colors"></div>
                        <div className="relative flex flex-col items-center text-center space-y-6">
                            <div className="w-24 h-24 rounded-3xl bg-primary-container flex items-center justify-center text-primary transform group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-5xl">upload_file</span>
                            </div>
                            <div>
                                <h4 className="text-2xl font-headline font-bold text-on-surface">Drag & Drop CSVs, PDFs, or Logs for Snowflake Vectorization</h4>
                                <p className="text-on-surface-variant mt-2">Maximum file size 2GB • Automated ETL & Cortex Embedding</p>
                            </div>
                            <button className="px-8 py-3 primary-gradient text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined text-xl">add</span>
                                Select Local Files
                            </button>
                        </div>
                    </div>
                </div>

                {/* Live Status Card */}
                <div className="col-span-12 lg:col-span-4 space-y-8">
                    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden h-full flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">Processing Queue</span>
                            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
                        </div>
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs font-semibold text-primary uppercase tracking-wider">Cortex AI Processing</p>
                                        <h5 className="text-xl font-headline font-bold text-on-surface mt-1">Annual_Report_2023.pdf</h5>
                                    </div>
                                    <span className="text-primary font-bold text-lg">64%</span>
                                </div>
                                <div className="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden">
                                    <div className="h-full primary-gradient w-[64%] rounded-full"></div>
                                </div>
                                <div className="flex gap-4 text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">
                                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-xs">memory</span> Chunking</span>
                                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-xs">auto_awesome</span> Embedding</span>
                                    <span className="flex items-center gap-1.5 text-primary"><span className="material-symbols-outlined text-xs">storage</span> Vectorizing</span>
                                </div>
                            </div>
                            <div className="space-y-6 pt-6 border-t border-outline-variant">
                                <h6 className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold">Cortex Metrics</h6>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/50">
                                        <p className="text-xs text-on-surface-variant mb-1">Latency</p>
                                        <p className="text-lg font-bold text-on-surface">142ms</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/50">
                                        <p className="text-xs text-on-surface-variant mb-1">Tokens/Sec</p>
                                        <p className="text-lg font-bold text-on-surface">2.4k</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Inventory Table */}
                <div className="col-span-12">
                    <div className="glass-panel rounded-3xl overflow-hidden">
                        <div className="p-8 flex items-center justify-between border-b border-outline-variant">
                            <h4 className="text-xl font-headline font-bold text-on-surface">Data Inventory</h4>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 text-sm font-semibold bg-white border border-outline-variant hover:bg-surface-variant rounded-xl transition-all">Filter: All Types</button>
                                <button className="px-4 py-2 text-sm font-semibold bg-white border border-outline-variant hover:bg-surface-variant rounded-xl transition-all">Sort: Newest First</button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                                        <th className="px-8 py-5 font-bold">Asset Name</th>
                                        <th className="px-8 py-5 font-bold">Source Type</th>
                                        <th className="px-8 py-5 font-bold">Status</th>
                                        <th className="px-8 py-5 font-bold">Cortex Embedding</th>
                                        <th className="px-8 py-5 font-bold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant">
                                    <tr className="group hover:bg-white transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                                                    <span className="material-symbols-outlined">description</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-on-surface">EU_Contracts.pdf</p>
                                                    <p className="text-xs text-on-surface-variant">Uploaded 2h ago • 4.2 MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold">Unstructured</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container w-fit text-[11px] font-bold border border-secondary/10">
                                                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                                Vectorized
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex -space-x-2">
                                                <div className="w-7 h-7 rounded-full border-2 border-white bg-primary-container flex items-center justify-center text-[10px] font-bold text-primary">C1</div>
                                                <div className="w-7 h-7 rounded-full border-2 border-white bg-secondary-container flex items-center justify-center text-[10px] font-bold text-secondary">V2</div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="w-8 h-8 rounded-full hover:bg-surface-variant flex items-center justify-center text-outline">
                                                <span className="material-symbols-outlined text-lg">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-white transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                                                    <span className="material-symbols-outlined">table_view</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-on-surface">Q3_Sales.csv</p>
                                                    <p className="text-xs text-on-surface-variant">Uploaded 5h ago • 12.8 MB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold">Structured</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container w-fit text-[11px] font-bold border border-secondary/10">
                                                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                                Vectorized
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex -space-x-2">
                                                <div className="w-7 h-7 rounded-full border-2 border-white bg-primary-container flex items-center justify-center text-[10px] font-bold text-primary">C1</div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="w-8 h-8 rounded-full hover:bg-surface-variant flex items-center justify-center text-outline">
                                                <span className="material-symbols-outlined text-lg">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-white transition-colors opacity-70">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                                                    <span className="material-symbols-outlined">terminal</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-on-surface">System_Logs_Oct.log</p>
                                                    <p className="text-xs text-on-surface-variant">Uploaded 1d ago • 840 KB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-bold">Semi-Structured</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant w-fit text-[11px] font-bold border border-outline-variant/30">
                                                <span className="material-symbols-outlined text-[14px]">pending</span>
                                                Queued
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="text-[10px] text-on-surface-variant italic">Awaiting Snowflake...</span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="w-8 h-8 rounded-full hover:bg-surface-variant flex items-center justify-center text-outline">
                                                <span className="material-symbols-outlined text-lg">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* AI Insights Sub-Grid */}
                <div className="col-span-12 lg:col-span-4">
                    <div className="glass-panel p-8 rounded-3xl h-full border-l-4 border-primary">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-primary">auto_awesome</span>
                            <h5 className="font-headline font-bold text-on-surface">Cortex Optimization</h5>
                        </div>
                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                            Cortex AI detected a 12% improvement in retrieval accuracy by re-indexing <span className="font-bold text-on-surface">EU_Contracts.pdf</span> with specialized metadata tags.
                        </p>
                        <button className="w-full py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl font-bold text-sm transition-all border border-primary/10">
                            Apply Auto-Tags
                        </button>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-8">
                    <div className="glass-panel p-1 rounded-3xl relative h-[240px] overflow-hidden group">
                        <img className="w-full h-full object-cover rounded-[22px] opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" alt="Abstract data visualization with flowing cyan and indigo lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzfI12MXsZ97ahnVugFB8Eg2cQ3kCYdopwREcNrtYA1f5KfgAfipj85V1uLWOXn6-fpARR8W5YF1ww6L7izYrlvkQdc2KQMjIGK-Pm7txA3OfXGAm75nhX0bKhqYEIqeGjsLHtPKH7ZWxeke04QmF6LPUrJ5zAhc1XN_B_RHHPvdMiJxvVmTOvpaJedMIdPUq6Uj9nVIf75FOrqvI088AGOyW0V9PZn5oHFBHLenuuvglEHpihQsn8hFndgpdvD7kXNaqz-Dcej-zk"/>
                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h5 className="text-3xl font-headline font-bold text-on-surface">Storage Capacity</h5>
                                    <p className="text-on-surface-variant font-medium">8.2 TB of 20 TB Enterprise Tier Used</p>
                                </div>
                                <div className="px-6 py-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg shadow-on-surface/5">
                                    <span className="text-[10px] font-label font-bold uppercase text-on-surface-variant block mb-1">Growth Forecast</span>
                                    <span className="text-xl font-bold text-secondary">+1.2 TB / Mo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Insight Rail */}
            <div className="fixed right-6 bottom-6 flex flex-col gap-4">
                <button className="w-14 h-14 primary-gradient text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 transition-transform active:scale-95">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </button>
            </div>
        </div>
    );
}
