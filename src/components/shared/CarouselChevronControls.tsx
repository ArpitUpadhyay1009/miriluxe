"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselChevronControlsProps = {
    scrollElement: HTMLElement | null;
};

export default function CarouselChevronControls({ scrollElement }: CarouselChevronControlsProps) {
    const scroll = (direction: "left" | "right") => {
        const node = scrollElement;
        if (!node) return;
        const amount = node.clientWidth * 0.9;
        node.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <>
            <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scroll("left")}
                className="pointer-events-auto absolute left-0 top-1/2 hidden -translate-y-1/2 translate-x-[-50%] items-center justify-center rounded-full bg-white/95 p-2 text-slate-600 shadow-lg ring-1 ring-slate-200 transition hover:bg-sky-50 lg:flex"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scroll("right")}
                className="pointer-events-auto absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[50%] items-center justify-center rounded-full bg-white/95 p-2 text-slate-600 shadow-lg ring-1 ring-slate-200 transition hover:bg-sky-50 lg:flex"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </>
    );
}
