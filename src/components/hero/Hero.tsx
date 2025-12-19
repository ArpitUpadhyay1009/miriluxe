
"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type HeroSlide = {
    src: string;
    alt: string;
};

export default function Hero() {
    const slides = useMemo<HeroSlide[]>(
        () => [
            { src: "/hero/slide-1.png", alt: "Hero banner 1" },
            { src: "/hero/slide-2.png", alt: "Hero banner 2" },
            { src: "/hero/slide-3.png", alt: "Hero banner 3" },
            { src: "/hero/slide-4.png", alt: "Hero banner 4" },
        ],
        [],
    );

    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef<number | null>(null);

    const goTo = (next: number) => {
        const total = slides.length;
        setIndex(((next % total) + total) % total);
    };

    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    useEffect(() => {
        if (paused) return;

        if (timerRef.current) {
            window.clearInterval(timerRef.current);
        }

        timerRef.current = window.setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, 4500);

        return () => {
            if (timerRef.current) {
                window.clearInterval(timerRef.current);
            }
        };
    }, [paused, slides.length]);

    return (
        <section
            className="w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Hero carousel"
        >
            <div className="relative w-full overflow-hidden bg-slate-50">
                <div
                    className="flex w-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((s, i) => (
                        <div
                            key={s.src}
                            className="relative h-[220px] w-full shrink-0 sm:h-[320px] md:h-[420px]"
                        >
                            <Image
                                src={s.src}
                                alt={s.alt}
                                fill
                                priority={i === 0}
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-sm backdrop-blur hover:bg-white md:inline-flex"
                    onClick={prev}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                    type="button"
                    className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-sm backdrop-blur hover:bg-white md:inline-flex"
                    onClick={next}
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-sky-600" : "bg-white/70 hover:bg-white"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
