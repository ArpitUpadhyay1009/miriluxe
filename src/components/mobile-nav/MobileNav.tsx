"use client";

import Link from "next/link";
import { Download, Gift, Grid3X3, Home, Tag, User2 } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Categories", href: "/categories", icon: Grid3X3 },
    { label: "Offers", href: "/offers", icon: Tag },
    { label: "Profile", href: "/profile", icon: User2 },
    { label: "Get App", href: "/get-app", icon: Download },
];

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 shadow-[0_-6px_24px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 border-x-0 border-t rounded-t-2xl border-lime-200 bg-lime-50 px-4 py-2 text-xs font-semibold text-lime-900 shadow-sm">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lime-600">
                        <Gift className="h-4 w-4" />
                    </span>
                    <div className="text-left leading-tight">
                        <p>Add two products and get one FREE</p>
                        <span className="text-[11px] font-normal text-lime-700">Auto-applied at checkout</span>
                    </div>
                </div>

                <div className="flex items-stretch justify-between px-3 max-w-3xl mx-auto w-full">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex flex-1 flex-col items-center justify-center gap-1 text-[11px]"
                            >
                                <span
                                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 ${isActive ? "bg-sky-50 text-sky-600" : "text-slate-500"
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                </span>
                                <span className={`font-semibold ${isActive ? "text-sky-600" : "text-slate-500"}`}>
                                    {item.label}
                                </span>
                                <span
                                    className={`mt-1 h-1 w-6 rounded-full ${isActive ? "bg-sky-600" : "bg-transparent"}`}
                                    aria-hidden
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
