
"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Standard = {
    id: string;
    title: string;
    description: string;
    tone: "lime" | "slate";
};

type TestimonialItem = {
    id: string;
    name: string;
    rating: number;
    text: string;
};

function svgAvatarDataUrl(initials: string): string {
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#e2e8f0"/>
      <stop offset="1" stop-color="#cbd5e1"/>
    </linearGradient>
  </defs>
  <circle cx="80" cy="80" r="78" fill="url(#g)"/>
  <circle cx="80" cy="62" r="28" fill="#94a3b8" opacity="0.55"/>
  <path d="M30 138c8-30 32-48 50-48s42 18 50 48" fill="#94a3b8" opacity="0.55"/>
  <text x="80" y="92" font-family="ui-sans-serif, system-ui" font-size="34" font-weight="700" fill="#0f172a" text-anchor="middle">${initials}</text>
</svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function StandardIcon({ tone }: { tone: Standard["tone"] }) {
    const ring = tone === "lime" ? "stroke-lime-500" : "stroke-slate-500";
    const fill = tone === "lime" ? "fill-lime-50" : "fill-slate-50";

    return (
        <svg viewBox="0 0 80 80" className="h-12 w-12" aria-hidden="true">
            <circle cx="40" cy="40" r="30" className={fill} />
            <circle cx="40" cy="40" r="30" className={ring} fill="none" strokeWidth="5" />
            <path
                d="M28 41l7 7 17-17"
                className={ring}
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Testimonial() {
    const standards = useMemo<Standard[]>(
        () => [
            {
                id: "st1",
                title: "Dermatologically Tested",
                description:
                    "We ensure each product is tested clinically on sensitive human skin to ensure that it is not allergic.",
                tone: "lime",
            },
            {
                id: "st2",
                title: "FDA Approved",
                description: "FDA approved, which means we are 100% safe to be used for babies as well as mamas.",
                tone: "slate",
            },
            {
                id: "st3",
                title: "Made Safe Certified",
                description:
                    "The MADE SAFE seal means that a product is literally made with safe ingredients.",
                tone: "slate",
            },
        ],
        [],
    );

    const testimonials = useMemo<TestimonialItem[]>(
        () => [
            {
                id: "ts1",
                name: "Priyanshi Singh",
                rating: 5,
                text: "Being made of natural and toxin-free ingredients, Miriluxe's skincare and hair care products are very effective. They make my skin and hair healthy. I use Ubtan Face Wash, which is great for sun tan removal and treating hyper-pigmentation. If you are looking for any issues related to your skincare or hair care plans, you should opt for these products.",
            },
            {
                id: "ts2",
                name: "Sajal Goyal",
                rating: 5,
                text: "I use Miriluxe's Onion Hair Fall Kit. It comprises Onion Shampoo, Onion Conditioner, and Onion Hair Oil that help reduce excessive hair fall and boost growth. I've had one of the best shopping experiences. Recently I also bought a body lotion and Onion Hair Oil. The payment gateway is also secure.",
            },
            {
                id: "ts3",
                name: "Gina",
                rating: 5,
                text: "I wanted to use natural products for my baby and came across Miriluxe. I use its Baby Shampoo, Body Wash for Babies and Baby Hair Oil, and they all work very effectively. If you are looking for a brand with an app, safe and secure payment gateway, and a wider range of toxin-free products, Miriluxe is the one for you!",
            },
        ],
        [],
    );

    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (idx: number) => {
        const el = scrollerRef.current;
        if (!el) return;
        const child = el.children.item(idx) as HTMLElement | null;
        if (!child) return;
        child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };

    const scrollByCards = (direction: "left" | "right") => {
        const el = scrollerRef.current;
        if (!el) return;
        const base = Math.max(320, Math.round(el.clientWidth * 0.9));
        const amount = direction === "left" ? -base : base;
        el.scrollBy({ left: amount, behavior: "smooth" });
    };

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;

        let raf = 0;

        const onScroll = () => {
            window.cancelAnimationFrame(raf);
            raf = window.requestAnimationFrame(() => {
                const cards = Array.from(el.children) as HTMLElement[];
                if (cards.length === 0) return;
                const center = el.scrollLeft + el.clientWidth / 2;
                let bestIdx = 0;
                let bestDist = Number.POSITIVE_INFINITY;
                cards.forEach((c, i) => {
                    const cCenter = c.offsetLeft + c.clientWidth / 2;
                    const d = Math.abs(cCenter - center);
                    if (d < bestDist) {
                        bestDist = d;
                        bestIdx = i;
                    }
                });
                setActiveIndex(bestIdx);
            });
        };

        el.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            window.cancelAnimationFrame(raf);
            el.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <section className="w-full bg-white">
            <div className="w-full border-t border-slate-100">
                <div className="mx-auto w-full max-w-7xl px-4 py-10 lg:px-8">
                    <h2 className="text-center text-lg font-semibold text-slate-900">Super Safe Standards</h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {standards.map((s) => (
                            <div key={s.id} className="flex gap-4 rounded-md bg-white p-4">
                                <div className="shrink-0">
                                    <StandardIcon tone={s.tone} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">{s.title}</div>
                                    <div className="mt-1 text-xs leading-5 text-slate-600">{s.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <div className="text-base font-semibold text-slate-900">What Our Customers Say</div>
                        <div className="mx-auto mt-2 h-px w-40 bg-slate-200" />
                    </div>
                </div>
            </div>

            <div className="w-full bg-gradient-to-b from-white via-white to-lime-50">
                <div className="mx-auto w-full max-w-7xl px-4 pb-12 lg:px-8">
                    <div className="relative">
                        <button
                            type="button"
                            aria-label="Scroll left"
                            onClick={() => scrollByCards("left")}
                            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 md:inline-flex"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <div
                            ref={scrollerRef}
                            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
                        >
                            {testimonials.map((t) => (
                                <article
                                    key={t.id}
                                    className="w-[280px] shrink-0 snap-center rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:w-[340px]"
                                >
                                    <p className="text-xs leading-5 text-slate-600">{t.text}</p>

                                    <div className="mt-5 flex items-center gap-3">
                                        <img
                                            src={svgAvatarDataUrl(
                                                t.name
                                                    .split(" ")
                                                    .slice(0, 2)
                                                    .map((p) => p[0])
                                                    .join("")
                                                    .toUpperCase(),
                                            )}
                                            alt=""
                                            className="h-12 w-12 rounded-full border border-slate-200 object-cover"
                                        />

                                        <div className="min-w-0">
                                            <div className="truncate text-sm font-semibold text-slate-900">{t.name}</div>
                                            <div className="mt-0.5 inline-flex items-center gap-1 rounded bg-lime-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                                                <Star className="h-3 w-3" fill="currentColor" strokeWidth={0} />
                                                {t.rating.toFixed(1)}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <button
                            type="button"
                            aria-label="Scroll right"
                            onClick={() => scrollByCards("right")}
                            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 md:inline-flex"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-2">
                        {testimonials.map((t, idx) => (
                            <button
                                key={t.id}
                                type="button"
                                aria-label={`Go to testimonial ${idx + 1}`}
                                onClick={() => scrollToIndex(idx)}
                                className={`h-2 w-2 rounded-full ${idx === activeIndex ? "bg-slate-900" : "bg-slate-300"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
