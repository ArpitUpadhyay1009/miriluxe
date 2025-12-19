"use client";

import { Search } from "lucide-react";
import { useEffect, useId, useState } from "react";

export default function MobileBanner() {
    const searchId = useId();
    const [searchExpanded, setSearchExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (!searchExpanded && currentScrollY > 80) {
                setSearchExpanded(true);
            } else if (searchExpanded && currentScrollY < 20) {
                setSearchExpanded(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [searchExpanded]);

    return (
        <>
            {/* Fixed banner */}
            <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
                {/* Orange banner layer */}
                <div
                    className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 transition-opacity duration-500 ${searchExpanded ? "opacity-0" : "opacity-100"
                        }`}
                />

                {/* White background layer */}
                <div
                    className={`absolute inset-0 bg-white shadow-sm transition-opacity duration-500 ${searchExpanded ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* Content */}
                <div className="relative flex items-center gap-2 px-3 py-2">
                    <div
                        className={`min-w-0 shrink overflow-hidden transition-all duration-500 ${searchExpanded ? "w-0 opacity-0" : "flex-1 opacity-100"
                            }`}
                    >
                        <p className="text-[9px] font-semibold uppercase tracking-widest text-white/80">OMG! Sale</p>
                        <p className="text-sm font-bold text-white leading-tight">Buy 1 Get 1 FREE</p>
                        <p className="text-[10px] text-white/90">Few hours left</p>
                    </div>

                    <form
                        className={`flex items-center rounded-full bg-white px-3 py-1.5 transition-all duration-500 ${searchExpanded ? "flex-1 border border-slate-200" : "w-[120px] shadow-lg"
                            }`}
                        role="search"
                    >
                        <Search className="h-4 w-4 shrink-0 text-slate-400" />
                        <input
                            id={searchId}
                            type="search"
                            placeholder="Search"
                            className="ml-2 w-full min-w-0 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                        />
                    </form>
                </div>

                {/* Zigzag */}
                <div
                    className={`relative text-white transition-all duration-500 overflow-hidden ${searchExpanded ? "h-0" : "h-3"
                        }`}
                >
                    <svg viewBox="0 0 100 8" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
                        <defs>
                            <pattern id="zigzag-banner" width="8" height="8" patternUnits="userSpaceOnUse">
                                <polygon points="0,8 4,0 8,8" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="8" fill="url(#zigzag-banner)" />
                    </svg>
                </div>
            </div>

            {/* Spacer - adjusts based on expanded state */}
            <div
                className={`md:hidden transition-all duration-500 ${searchExpanded ? "h-[44px]" : "h-[75px]"
                    }`}
            />
        </>
    );
}
