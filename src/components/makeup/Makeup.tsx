"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { useMemo } from "react";
import { useScrollProgress } from "@/src/hooks/useScrollProgress";
import ScrollProgressIndicator from "@/src/components/shared/ScrollProgressIndicator";

type BadgeTone = "green" | "red";

type Product = {
    id: string;
    title: string;
    subtitle: string;
    sizeLabel: string;
    rating: number;
    reviews: number;
    price: number;
    mrp: number;
    offer: string;
    badge?: string;
    badgeTone?: BadgeTone;
};

function svgPlaceholderDataUrl(label: string): string {
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="500" viewBox="0 0 700 500">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f8fafc"/>
      <stop offset="1" stop-color="#e2e8f0"/>
    </linearGradient>
  </defs>
  <rect width="700" height="500" rx="24" fill="url(#g)"/>
  <rect x="70" y="60" width="560" height="320" rx="20" fill="#ffffff" opacity="0.75"/>
  <text x="350" y="255" font-family="ui-sans-serif, system-ui" font-size="34" fill="#0f172a" text-anchor="middle">${label}</text>
  <text x="350" y="305" font-family="ui-sans-serif, system-ui" font-size="18" fill="#64748b" text-anchor="middle">Product Image</text>
</svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function Makeup() {
    const products = useMemo<Product[]>(
        () => [
            {
                id: "mk1",
                title: "Pack of 2 Charcoal Black Long Stay Kajal with Vitamin C & Chamomile",
                subtitle: "11-Hour Long Stay | Smudge Proof | Waterproof",
                sizeLabel: "1g",
                rating: 4.5,
                reviews: 86,
                price: 275,
                mrp: 549,
                offer: "50% OFF",
                badge: "B1G1 + 5% OFF",
                badgeTone: "green" as const,
            },
            {
                id: "mk2",
                title: "Moisture Matte Long Stay Lipstick Gift Set - Bright and Bold",
                subtitle: "8 Hour Moisture Lock | Up to 12-Hour Long Stay",
                sizeLabel: "3.2g",
                rating: 4.8,
                reviews: 98,
                price: 500,
                mrp: 999,
                offer: "50% OFF",
                badge: "BEST SELLER",
                badgeTone: "red" as const,
            },
            {
                id: "mk3",
                title: "Nourishing Tinted 100% Natural Lip Balm with Vitamin E and Raspberry",
                subtitle: "12-Hour Moisturization | Makes Lips Soft & Supple",
                sizeLabel: "4g",
                rating: 4.7,
                reviews: 66,
                price: 199,
                mrp: 399,
                offer: "50% OFF",
                badge: "B1G1 + 5% OFF",
                badgeTone: "green" as const,
            },
            {
                id: "mk4",
                title: "Charcoal Black Kajal with Chamomile & Vitamin C",
                subtitle: "Smudge Proof | Waterproof",
                sizeLabel: "0.35g",
                rating: 4.6,
                reviews: 210,
                price: 199,
                mrp: 399,
                offer: "50% OFF",
                badge: "B1G1 + 5% OFF",
                badgeTone: "green" as const,
            },
            {
                id: "mk5",
                title: "Moisture Matte Long Stay Lipstick - Red Romance",
                subtitle: "Long Stay | Comfortable Matte",
                sizeLabel: "3.2g",
                rating: 4.7,
                reviews: 142,
                price: 499,
                mrp: 999,
                offer: "50% OFF",
                badge: "B1G1 + 5% OFF",
                badgeTone: "green" as const,
            },
            {
                id: "mk6",
                title: "Naturally Matte Compact Powder with Vitamin E",
                subtitle: "Oil Control | Smooth Finish",
                sizeLabel: "9g",
                rating: 4.5,
                reviews: 58,
                price: 349,
                mrp: 699,
                offer: "50% OFF",
                badge: "B1G1 + 5% OFF",
                badgeTone: "green" as const,
            },
        ],
        [],
    );

    const { scrollerRef, progress } = useScrollProgress<HTMLDivElement>();

    return (
        <section className="w-full bg-white py-10">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Makeup</h2>
                        <p className="mt-1 max-w-3xl text-sm text-slate-600">
                            Color with care with our all-new colorcare range that’s 100% toxin-free and formulated with the
                            goodness of natural ingredients. Check out our newly launched products & bring home your new
                            favorites.
                        </p>
                    </div>
                    <Link
                        href="/makeup"
                        className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-sky-600 px-4 text-xs font-semibold tracking-wide text-white hover:bg-sky-700"
                    >
                        VIEW ALL
                    </Link>
                </div>

                <div className="relative mt-6">
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
                                    <span
                                        className={`absolute left-2 top-2 rounded px-2 py-1 text-[10px] font-semibold text-white ${p.badgeTone === "red" ? "bg-rose-600" : "bg-lime-600"
                                            }`}
                                    >
                                        {p.badge}
                                    </span>
                                ) : null}

                                <div className="flex h-44 items-center justify-center p-4">
                                    <img
                                        src={svgPlaceholderDataUrl("Makeup")}
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

                                    <div className="mt-2 flex items-center justify-center gap-2">
                                        <span className="text-base font-bold text-slate-900">₹{p.price}</span>
                                        <span className="text-xs font-semibold text-slate-500 line-through">₹{p.mrp}</span>
                                        <span className="text-[10px] font-semibold text-lime-700">{p.offer}</span>
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

                    <ScrollProgressIndicator progress={progress} className="absolute bottom-0 left-3 translate-y-1/2" />
                </div>
            </div>
        </section>
    );
}
