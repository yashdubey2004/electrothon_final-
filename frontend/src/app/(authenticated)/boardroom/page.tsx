"use client";

import { Boardroom } from "@/components/features/Boardroom";

export default function BoardroomPage() {
    return (
        <div className="flex-1 flex flex-col relative overflow-hidden bg-surface h-[calc(100vh-80px)]">
            <Boardroom />
        </div>
    );
}
