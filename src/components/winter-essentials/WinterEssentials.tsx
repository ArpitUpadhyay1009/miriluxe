
"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Droplet, Snowflake, Sparkles, Star } from "lucide-react";
import { useMemo } from "react";
import { useScrollProgress } from "@/src/hooks/useScrollProgress";
import ScrollProgressIndicator from "@/src/components/shared/ScrollProgressIndicator";
import SectionIntroMobile from "@/src/components/shared/SectionIntroMobile";
import CarouselChevronControls from "@/src/components/shared/CarouselChevronControls";

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

const winterSliderIcons = [
    { label: "Hydrate", icon: Droplet },
    { label: "Shield", icon: Snowflake },
    { label: "Glow", icon: Sparkles },
];

export default function WinterEssentials() {
    const products = useMemo<Product[]>(
        () => [
            {
                id: "w1",
                title: "Moisturizing Body Lotion with Turmeric & Saffron for Winters",
                subtitle: "48 Hrs Moisturization | 7-in-1 Care Benefits",
                sizeLabel: "400ml",
                rating: 4.6,
                reviews: 72,
                price: 499,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "w2",
                title: "Rice Water Hydrating Body Lotion with Rice Water & Niacinamide",
                subtitle: "Benefits | Moisturizes | Softens Skin",
                sizeLabel: "400ml",
                rating: 4.7,
                reviews: 68,
                price: 499,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "w3",
                title: "Vitamin C Daily Glow Light Moisturizer with Turmeric & Vitamin C",
                subtitle: "Gives 24 hrs Nourishment | Glowing Skin",
                sizeLabel: "200g",
                rating: 4.5,
                reviews: 68,
                price: 449,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "w4",
                title: "Vitamin C Daily Glow Face Cream with Vitamin C & Turmeric",
                subtitle: "Brightens Skin | Moisturizes Skin",
                sizeLabel: "80g",
                rating: 4.8,
                reviews: 165,
                price: 249,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "w5",
                title: "Aloe Vera Gel for Skin & Hair",
                subtitle: "Soothes Dry Skin | Hydrates & Nourishes",
                sizeLabel: "300ml",
                rating: 4.7,
                reviews: 512,
                price: 299,
                badge: "B1G1 + 5% OFF",
            },
            {
                id: "w6",
                title: "Cocoa Body Butter for Deep Moisturization",
                subtitle: "Deeply Nourishes | Soft & Smooth Skin",
                sizeLabel: "200g",
                rating: 4.6,
                reviews: 210,
                price: 399,
                badge: "B1G1 + 5% OFF",
            },
        ],
        [],
    );

    const { scrollerRef, scrollerElement, progress } = useScrollProgress<HTMLDivElement>();

    return (
        <section className="w-full bg-white py-10">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <SectionIntroMobile
                    title="Winter Hydration Staples"
                    description="Layer rich butters, gels, and oils that comfort cozy months."
                    icons={winterSliderIcons}
                />
                <div className="hidden flex-col gap-4 sm:flex-row sm:items-start sm:justify-between md:flex">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Winter Essentials</h2>
                        <p className="mt-1 max-w-3xl text-sm text-slate-600">
                            Explore the goodness of nature from Miriluxe. Take a look at our toxin-free and natural products
                            for Winter.
                        </p>
                    </div>
                    <Link
                        href="/winter-essentials"
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

                    <CarouselChevronControls scrollElement={scrollerElement} />
                    <ScrollProgressIndicator progress={progress} className="absolute bottom-0 left-3 translate-y-1/2" />
                </div>
            </div>
        </section>
    );
}
