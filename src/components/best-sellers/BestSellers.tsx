
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

function svgPlaceholderDataUrl(label: string) {
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

export default function BestSellers() {
    const products = useMemo<Product[]>(
        () => [
            {
                id: "p1",
                title: "Vitamin C Daily Glow Face Serum With Vitamin C & Turmeric for Radiant Skin",
                subtitle: "Enriched with 50X Vitamin C | Brightens Skin",
                sizeLabel: "30ml",
                rating: 4.9,
                reviews: 915,
                price: 399,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "p2",
                title: "Rice Oil-Free Face Moisturizer With Rice Water & Niacinamide for Glass Skin",
                subtitle: "24-Hour Hydration | Brightens Skin Tone",
                sizeLabel: "80g",
                rating: 4.6,
                reviews: 816,
                price: 319,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "p3",
                title: "Beetroot Hydraful Moisturizer with Beetroot & Hyaluronic Acid for Natural Pink Glow",
                subtitle: "Gives 24 hrs Nourishment | Antioxidant Rich",
                sizeLabel: "200g",
                rating: 4.7,
                reviews: 32,
                price: 449,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "p4",
                title: "Beetroot Gentle Face Wash With Beetroot & Hyaluronic Acid - 100 ml",
                subtitle: "Gives Natural Pink Glow | Hydrates Skin",
                sizeLabel: "100ml",
                rating: 5.0,
                reviews: 110,
                price: 269,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "p5",
                title: "Onion Hair Oil for Hair Regrowth & Hair Fall Control",
                subtitle: "Boosts Hair Growth | Strengthens Roots",
                sizeLabel: "150ml",
                rating: 4.8,
                reviews: 1240,
                price: 399,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "p6",
                title: "Ubtan Face Wash with Turmeric & Saffron for Tan Removal",
                subtitle: "Removes Tan | Brightens Skin",
                sizeLabel: "100ml",
                rating: 4.7,
                reviews: 980,
                price: 249,
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
                        <h2 className="text-xl font-semibold text-slate-900">Best Sellers</h2>
                        <p className="mt-1 max-w-3xl text-sm text-slate-600">
                            Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Miriluxe.
                            Get amazing deals and start your toxin-free skin, hair, and baby care journey.
                        </p>
                    </div>
                    <Link
                        href="/best-sellers"
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
                        className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 md:left-0 md:-translate-x-1/2"
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
                                        src={svgPlaceholderDataUrl("Miriluxe")}
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
                        className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 md:right-0 md:translate-x-1/2"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
