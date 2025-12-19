"use client";

import Link from "next/link";
import { Download, Grid3X3, Home, Tag, User2 } from "lucide-react";
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
        <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
            <div className="mx-auto flex max-w-3xl items-stretch justify-between px-3 py-2">
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
                            <span className={`font-semibold ${isActive ? "text-sky-600" : "text-slate-500"}`}>{item.label}</span>
                            <span
                                className={`mt-1 h-1 w-6 rounded-full ${isActive ? "bg-sky-600" : "bg-transparent"
                                    }`}
                                aria-hidden
                            />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
