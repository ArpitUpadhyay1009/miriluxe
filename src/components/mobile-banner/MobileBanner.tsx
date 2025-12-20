"use client";

import { Search } from "lucide-react";
import { useEffect, useId, useState } from "react";

export default function MobileBanner() {
    const searchId = useId();
    const [scrollExpanded, setScrollExpanded] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const expanded = scrollExpanded || searchFocused || searchValue.length > 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (!scrollExpanded && currentScrollY > 80) {
                setScrollExpanded(true);
            } else if (scrollExpanded && currentScrollY < 20) {
                setScrollExpanded(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollExpanded]);

    return (
        <>
            {/* Fixed banner */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 overflow-hidden md:hidden transition-[height] duration-500 ${expanded ? "h-[56px]" : "h-[110px]"
                    }`}
            >
                {/* Orange banner layer */}
                <div
                    className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 transition-opacity duration-500 ${expanded ? "opacity-0" : "opacity-100 rounded-b-[24px]"
                        }`}
                />

                {/* White background layer */}
                <div
                    className={`absolute inset-0 bg-white transition-opacity duration-500 ${expanded ? "opacity-100 shadow-[0_6px_14px_rgba(15,23,42,0.08)]" : "opacity-0 rounded-b-[24px]"
                        }`}
                />

                {/* Content */}
                <div
                    className={`relative flex h-full items-center gap-3 px-4 transition-all duration-500 ${expanded ? "py-2" : "py-3"
                        }`}
                >
                    <div
                        className={`min-w-0 flex-1 space-y-1 text-white transition-all duration-500 ${expanded ? "max-w-0 -translate-y-1 opacity-0" : "max-w-[220px] opacity-100"
                            }`}
                    >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80">OMG! Sale</p>
                        <p className="text-base font-bold leading-tight text-white">Buy 1 Get 1 FREE</p>
                        <p className="text-[11px] text-white/90">Few hours left</p>
                    </div>

                    <form
                        className={`flex h-10 shrink-0 items-center rounded-full bg-white px-3 transition-all duration-500 ${expanded
                                ? "flex-1 border border-slate-200 shadow-none"
                                : "ml-auto w-[130px] border border-transparent shadow-[0_10px_28px_rgba(15,23,42,0.28)]"
                            }`}
                        role="search"
                    >
                        <Search className="h-4 w-4 shrink-0 text-slate-400" />
                        <input
                            id={searchId}
                            type="search"
                            placeholder="Search"
                            className="ml-2 w-full min-w-0 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                            value={searchValue}
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                            onChange={(event) => setSearchValue(event.target.value)}
                        />
                    </form>
                </div>

                {/* Zigzag */}
                <div
                    className={`absolute bottom-0 left-0 right-0 overflow-hidden text-white transition-all duration-500 ${expanded ? "h-0" : "h-4"
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

            {/* Spacer uses same height as fixed banner */}
            <div
                className={`md:hidden transition-[height] duration-500 ${expanded ? "h-[56px]" : "h-[110px]"
                    }`}
            />
        </>
    );
}
