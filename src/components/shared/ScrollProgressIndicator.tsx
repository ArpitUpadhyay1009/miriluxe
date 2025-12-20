"use client";

interface ScrollProgressIndicatorProps {
    progress: number;
    className?: string;
}

export default function ScrollProgressIndicator({ progress, className }: ScrollProgressIndicatorProps) {
    const clamped = Math.max(0, Math.min(1, progress));

    return (
        <div className={`flex items-center ${className ?? ""}`}>
            <div className="h-[3px] w-12 overflow-hidden rounded-full bg-slate-200">
                <div
                    className="h-full rounded-full bg-slate-900 transition-all duration-300"
                    style={{ width: `${clamped * 100}%` }}
                />
            </div>
        </div>
    );
}
