"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselChevronControlsProps = {
    scrollElement: HTMLElement | null;
};

export default function CarouselChevronControls({ scrollElement }: CarouselChevronControlsProps) {
    const scroll = (direction: "left" | "right") => {
        const node = scrollElement;
        if (!node) return;
        const amount = node.clientWidth;
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
                className="pointer-events-auto absolute -left-8 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-slate-600 shadow-lg hover:bg-gray-50 lg:flex"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scroll("right")}
                className="pointer-events-auto absolute -right-8 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-slate-600 shadow-lg hover:bg-gray-50 lg:flex"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </>
    );
}
