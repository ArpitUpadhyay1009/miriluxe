"use client";

import { useEffect, useState } from "react";

export default function InitialLoader() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => setShowLoader(false), 3000);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.clearTimeout(timer);
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    useEffect(() => {
        if (!showLoader) {
            document.body.style.overflow = "";
        }
    }, [showLoader]);

    if (!showLoader) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <div className="h-14 w-14 animate-spin rounded-full border-4 border-sky-100 border-t-sky-500" />
                <p className="text-sm font-semibold text-slate-600 tracking-wide">Loading your Miriluxe experience…</p>
            </div>
        </div>
    );
}
