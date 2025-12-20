"use client";

import Image from "next/image";
import { useMemo } from "react";

import ScrollProgressIndicator from "@/src/components/shared/ScrollProgressIndicator";
import { useScrollProgress } from "@/src/hooks/useScrollProgress";

type PromoSlide = {
    src: string;
    alt: string;
    eyebrow: string;
    title: string;
    description: string;
};

export default function PromoCarousel() {
    const slides = useMemo<PromoSlide[]>(
        () => [
            {
                src: "/hero/slide-1.png",
                alt: "Vitamin C Glow Essentials combo",
                eyebrow: "Glow Essentials",
                title: "Buy 1 Get 1 Free",
                description: "Pair any Vitamin C duo and grab the second one on us.",
            },
            {
                src: "/hero/slide-2.png",
                alt: "Hydra boost skincare kit",
                eyebrow: "Hydra Boost",
                title: "Weekend Flash Sale",
                description: "Extra 15% off on our hydration range till midnight.",
            },
            {
                src: "/hero/slide-3.png",
                alt: "Hair fall control ritual",
                eyebrow: "Hair Ritual",
                title: "Limited Time Drops",
                description: "Freshly stocked favorites curated for monsoon care.",
            },
        ],
        [],
    );

    const { scrollerRef, progress } = useScrollProgress<HTMLDivElement>();

    return (
        <section className="w-full bg-slate-50 py-8">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Exclusive Picks</p>
                        <h2 className="text-xl font-semibold text-slate-900">Swipe through our latest drops</h2>
                    </div>
                    <ScrollProgressIndicator className="hidden sm:flex" progress={progress} />
                </div>

                <div className="relative mt-6">
                    <div
                        ref={scrollerRef}
                        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6"
                        aria-label="Promotional image carousel"
                    >
                        {slides.map((slide) => (
                            <article
                                key={slide.src}
                                className="group relative h-[220px] w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl sm:h-[260px] sm:w-[320px]"
                            >
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    sizes="(min-width: 640px) 320px, 280px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority={slide.src === slides[0].src}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                                <div className="absolute inset-x-5 bottom-5 space-y-2 text-white">
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                                        {slide.eyebrow}
                                    </p>
                                    <h3 className="text-lg font-bold leading-tight">{slide.title}</h3>
                                    <p className="text-sm text-white/80">{slide.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <ScrollProgressIndicator className="sm:hidden" progress={progress} />
                </div>
            </div>
        </section>
    );
}
