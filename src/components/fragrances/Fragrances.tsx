
"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { useMemo } from "react";
import { useScrollProgress } from "@/src/hooks/useScrollProgress";
import ScrollProgressIndicator from "@/src/components/shared/ScrollProgressIndicator";

type BadgeTone = "red" | "green";

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

export default function Fragrances() {
    const products = useMemo<Product[]>(
        () => [
            {
                id: "fr1",
                title: "Fragrance: The Waves Eau De Parfum For Men - 100 ml",
                subtitle: "Made Safe Approved | Premium & Long-Lasting Fragrance | Blend of Exotic Ingredients",
                sizeLabel: "100ml",
                rating: 5.0,
                reviews: 55,
                price: 450,
                mrp: 899,
                offer: "50% off",
                badge: "BEST SELLER",
                badgeTone: "green" as const,
            },
            {
                id: "fr2",
                title: "Fragrance: The Valley Eau De Parfum For Women - 100 ml",
                subtitle: "Made Safe Approved | Premium & Long-Lasting Fragrance | Blend of Exotic Ingredients",
                sizeLabel: "100ml",
                rating: 5.0,
                reviews: 61,
                price: 450,
                mrp: 899,
                offer: "50% off",
                badge: "BEST SELLER",
                badgeTone: "green" as const,
            },
            {
                id: "fr3",
                title: "Fragrance: The Sunset Eau De Parfum For Women - 100 ml",
                subtitle: "Made Safe Approved | Premium & Long-Lasting Fragrance | Blend of Exotic Ingredients",
                sizeLabel: "100ml",
                rating: 5.0,
                reviews: 84,
                price: 450,
                mrp: 899,
                offer: "50% off",
                badge: "BEST SELLER",
                badgeTone: "green" as const,
            },
            {
                id: "fr4",
                title: "Fragrance: The Vanilla Bliss Eau De Parfum For Women - 100 ml",
                subtitle: "Made Safe Approved | Premium & Long-Lasting Fragrance | Blend of Exotic Ingredients",
                sizeLabel: "100ml",
                rating: 5.0,
                reviews: 32,
                price: 450,
                mrp: 899,
                offer: "50% off",
                badge: "BEST SELLER",
                badgeTone: "green" as const,
            },
            {
                id: "fr5",
                title: "Fragrance: The Ocean Mist Eau De Parfum - 100 ml",
                subtitle: "Premium & Long-Lasting Fragrance | Blend of Exotic Ingredients",
                sizeLabel: "100ml",
                rating: 4.9,
                reviews: 110,
                price: 450,
                mrp: 899,
                offer: "50% off",
                badge: "BEST SELLER",
                badgeTone: "green" as const,
            },
            {
                id: "fr6",
                title: "Fragrance: The Floral Muse Eau De Parfum - 100 ml",
                subtitle: "Premium & Long-Lasting Fragrance | Blend of Exotic Ingredients",
                sizeLabel: "100ml",
                rating: 4.8,
                reviews: 76,
                price: 450,
                mrp: 899,
                offer: "50% off",
                badge: "BEST SELLER",
                badgeTone: "green" as const,
            },
        ],
        [],
    );

    const { scrollerRef, progress } = useScrollProgress<HTMLDivElement>();

    return (
        <section className="w-full bg-white py-10">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="hidden flex-col gap-4 sm:flex-row sm:items-start sm:justify-between md:flex">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Fragrances</h2>
                        <p className="mt-1 max-w-3xl text-sm text-slate-600">
                            Miriluxe perfume range is the India's 1st Made Safe Certified perfume and is inspired by both
                            nature and you.
                        </p>
                    </div>
                    <Link
                        href="/fragrances"
                        className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-sky-600 px-4 text-xs font-semibold tracking-wide text-white hover:bg-sky-700"
                    >
                        VIEW ALL
                    </Link>
                </div>

                <div className="relative mt-6">
                    <div
                        ref={scrollerRef}
                        className="no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                    >
                        {products.map((p) => (
                            <article
                                key={p.id}
                                className="relative flex w-[calc((100%-48px)/4)] min-w-[270px] shrink-0 flex-col snap-start rounded-lg border border-slate-200 bg-white"
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
                                        src={svgPlaceholderDataUrl("Perfume")}
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

                                <div className="mt-auto">
                                    <button
                                        type="button"
                                        className="inline-flex h-[52px] w-full items-center justify-center rounded-b-lg bg-[#00afef] text-[15px] font-medium text-white hover:bg-[#0095cc]"
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
