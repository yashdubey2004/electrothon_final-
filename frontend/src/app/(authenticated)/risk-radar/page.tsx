"use client";

import { RiskRadar } from "@/components/features/RiskRadar";

export default function RiskRadarPage() {
    return (
        <div className="flex-1 p-10 space-y-10 overflow-y-auto h-[calc(100vh-80px)] bg-gradient-mesh">
            <RiskRadar />
        </div>
    );
}
