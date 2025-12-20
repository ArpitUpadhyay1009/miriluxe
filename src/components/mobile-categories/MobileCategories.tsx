"use client";

import {
    Baby,
    Droplet,
    Gift,
    Leaf,
    Smile,
    Snowflake,
    Sparkles,
    Star,
    TestTube,
} from "lucide-react";
import { useState } from "react";

type Category = {
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const categories: Category[] = [
    { label: "Best Sellers", icon: Sparkles },
    { label: "Winter Care", icon: Snowflake },
    { label: "Face", icon: Smile },
    { label: "Hair", icon: Droplet },
    { label: "Top Kits", icon: Gift },
    { label: "Makeup", icon: Star },
    { label: "Baby", icon: Baby },
    { label: "Ingredients", icon: TestTube },
    { label: "Body", icon: Leaf },
];

export default function MobileCategories() {
    const [activeCategory, setActiveCategory] = useState("Best Sellers");

    return (
        <div className="md:hidden border-b border-slate-100 bg-white">
            <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 py-3">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = cat.label === activeCategory;
                    return (
                        <button
                            key={cat.label}
                            type="button"
                            className="flex shrink-0 flex-col items-center gap-1 text-xs font-semibold"
                            onClick={() => setActiveCategory(cat.label)}
                        >
                            <span
                                className={`inline-flex h-12 w-12 items-center justify-center rounded-full border ${isActive ? "border-sky-500 bg-sky-50 text-sky-600" : "border-slate-200 text-slate-500"
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                            </span>
                            <span className={isActive ? "text-sky-600" : "text-slate-500"}>
                                {cat.label.split(" ")[0]}
                            </span>
                            <span
                                className={`h-1 w-8 rounded-full ${isActive ? "bg-sky-600" : "bg-transparent"}`}
                                aria-hidden
                            />
                        </button>
                    );
                })}
            </div>
            <p className="px-4 pb-3 text-sm font-semibold text-slate-900">
                Buy 1 Get 1 FREE : <span className="font-normal text-slate-600">Sale Ends Tonight</span>
            </p>
        </div>
    );
}
