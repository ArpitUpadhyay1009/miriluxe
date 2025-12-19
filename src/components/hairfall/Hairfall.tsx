
"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useMemo, useRef } from "react";

type Product = {
    id: string;
    title: string;
    subtitle: string;
    sizeLabel: string;
    rating: number;
    reviews: number;
    price: number;
    badge?: string;
};

function svgPlaceholderDataUrl(label: string): string {
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="500" viewBox="0 0 700 500">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f1f5f9"/>
      <stop offset="1" stop-color="#e2e8f0"/>
    </linearGradient>
  </defs>
  <rect width="700" height="500" rx="24" fill="url(#g)"/>
  <rect x="70" y="60" width="560" height="320" rx="20" fill="#ffffff" opacity="0.7"/>
  <text x="350" y="255" font-family="ui-sans-serif, system-ui" font-size="34" fill="#334155" text-anchor="middle">${label}</text>
  <text x="350" y="305" font-family="ui-sans-serif, system-ui" font-size="18" fill="#64748b" text-anchor="middle">Product Image</text>
</svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function Hairfall() {
    const products = useMemo<Product[]>(
        () => [
            {
                id: "hf1",
                title: "Rosemary Anti-Hair Fall Shampoo with Rosemary & Methi Dana",
                subtitle: "Gives up to 94% Stronger Hair | Up to 93% Less Hair Fall",
                sizeLabel: "600ml",
                rating: 4.9,
                reviews: 26,
                price: 799,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "hf2",
                title: "Rosemary Hair Growth Oil with Rosemary & Methi Dana",
                subtitle: "Stimulates Hair Growth | Controls Hair Fall | Strengthens Hair",
                sizeLabel: "200ml",
                rating: 5.0,
                reviews: 35,
                price: 311,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "hf3",
                title: "Lemon Anti-Dandruff Shampoo with Lemon & Ginger",
                subtitle: "Reduces up to 100% Dandruff | Soothes Itchiness",
                sizeLabel: "400ml",
                rating: 5.0,
                reviews: 13,
                price: 399,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "hf4",
                title: "Onion Hair Oil with Onion Oil & Redensyl for Hair Fall Control",
                subtitle: "Boosts Hair Growth | Adds Strength & Shine",
                sizeLabel: "250ml",
                rating: 5.0,
                reviews: 113,
                price: 533,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "hf5",
                title: "Onion Shampoo with Onion & Plant Keratin",
                subtitle: "Reduces Hair Fall | Strengthens Hair",
                sizeLabel: "400ml",
                rating: 4.8,
                reviews: 780,
                price: 349,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "hf6",
                title: "Onion Hair Serum with Onion Seed Extract",
                subtitle: "Controls Frizz | Adds Shine",
                sizeLabel: "100ml",
                rating: 4.7,
                reviews: 512,
                price: 299,
                badge: "B1G1 + 5% OFF",
            },
        ],
        [],
    );

    const scrollerRef = useRef<HTMLDivElement | null>(null);

    const scrollByCards = (direction: "left" | "right") => {
        const el = scrollerRef.current;
        if (!el) return;
        const base = Math.max(260, Math.round(el.clientWidth * 0.9));
        const amount = direction === "left" ? -base : base;
        el.scrollBy({ left: amount, behavior: "smooth" });
    };

    return (
        <section className="w-full bg-white py-10">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Hairfall Control Range</h2>
                        <p className="mt-1 max-w-3xl text-sm text-slate-600">
                            Explore 100% toxin-free and safe hair products, formulated with the goodness of natural
                            ingredients and no harmful chemicals.
                        </p>
                    </div>
                    <Link
                        href="/hairfall"
                        className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-sky-600 px-4 text-xs font-semibold tracking-wide text-white hover:bg-sky-700"
                    >
                        VIEW ALL
                    </Link>
                </div>

                <div className="relative mt-6">
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
                        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
                    >
                        {products.map((p) => (
                            <article
                                key={p.id}
                                className="relative w-[240px] shrink-0 snap-start rounded-md border border-slate-200 bg-white sm:w-[260px]"
                            >
                                {p.badge ? (
                                    <span className="absolute left-2 top-2 rounded bg-lime-600 px-2 py-1 text-[10px] font-semibold text-white">
                                        {p.badge}
                                    </span>
                                ) : null}

                                <div className="flex h-44 items-center justify-center p-4">
                                    <img
                                        src={svgPlaceholderDataUrl("Hair")}
                                        alt=""
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                <div className="px-4">
                                    <h3 className="min-h-[44px] overflow-hidden text-sm font-semibold text-slate-900">
                                        {p.title}
                                    </h3>
                                    <p className="mt-1 min-h-[32px] overflow-hidden text-[11px] font-medium text-lime-700">
                                        {p.subtitle}
                                    </p>
                                    <div className="mt-2 flex items-center justify-center text-[11px] font-semibold text-slate-700">
                                        {p.sizeLabel}
                                    </div>

                                    <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-slate-700">
                                        <span className="inline-flex items-center gap-1">
                                            <Star className="h-3.5 w-3.5 text-amber-500" fill="currentColor" strokeWidth={0} />
                                            <span className="font-semibold">{p.rating.toFixed(1)}</span>
                                        </span>
                                        <span className="text-slate-400">|</span>
                                        <span className="text-slate-600">{p.reviews} Reviews</span>
                                    </div>

                                    <div className="mt-2 flex items-center justify-center text-base font-bold text-slate-900">
                                        ₹{p.price}
                                    </div>
                                </div>

                                <div className="mt-4 px-4 pb-4">
                                    <button
                                        type="button"
                                        className="inline-flex h-10 w-full items-center justify-center rounded-md bg-sky-600 text-xs font-semibold tracking-wide text-white hover:bg-sky-700"
                                    >
                                        ADD TO CART
                                    </button>
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
            </div>
        </section>
    );
}
