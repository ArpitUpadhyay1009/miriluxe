"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { useId, useMemo } from "react";

type NavLink = {
    label: string;
    href: string;
};

export default function Navbar() {
    const searchId = useId();

    const links = useMemo<NavLink[]>(
        () => [
            { label: "HOME", href: "/" },
            { label: "FACE", href: "/face" },
            { label: "HAIR", href: "/hair" },
            { label: "MAKEUP", href: "/makeup" },
            { label: "BODY", href: "/body" },
            { label: "BABY", href: "/baby" },
            { label: "COMBOS", href: "/combos" },
            { label: "NEW LAUNCHES", href: "/new" },
            { label: "INGREDIENT", href: "/ingredient" },
            { label: "ALL PRODUCTS", href: "/products" },
            { label: "BLOG", href: "/blog" },
            { label: "PLANT GOODNESS", href: "/plant-goodness" },
            { label: "STORE LOCATOR", href: "/store-locator" },
        ],
        [],
    );

    return (
        <>
            <div className="hidden bg-[#f13329] text-white md:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] font-semibold uppercase tracking-wide">
                    <span>India&apos;s #1 brand with Made Safe Certified Products</span>
                    <span className="text-xs font-bold">OMG Sale Ends Tonight | Buy 1 Get 1 FREE | Use Code OMG | Shop Now</span>
                </div>
            </div>
            <header className="hidden md:block w-full">
                <div className="border-b border-slate-200 bg-white">
                    <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                        <div className="flex h-14 items-center gap-3">
                            <Link href="/" className="flex items-center">
                                <span className="relative block h-12 w-60 overflow-hidden sm:h-12 sm:w-64">
                                    <Image
                                        src="/Miriluxe_logo.png"
                                        alt="Miriluxe"
                                        fill
                                        priority
                                        sizes="(min-width: 640px) 224px, 176px"
                                        className="object-cover object-center scale-[1.3]"
                                    />
                                </span>
                            </Link>

                            <div className="flex-1">
                                <form className="flex w-full max-w-2xl items-center" role="search">
                                    <div className="relative flex w-full items-center">
                                        <label htmlFor={searchId} className="sr-only">
                                            Search
                                        </label>
                                        <Search className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" />
                                        <input
                                            id={searchId}
                                            type="search"
                                            placeholder="Search for Face Mask"
                                            className="h-9 w-full rounded-l-md border border-slate-300 bg-white pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="inline-flex h-9 items-center gap-2 rounded-r-md bg-sky-600 px-3 text-sm font-medium text-white hover:bg-sky-700"
                                    >
                                        <Search className="h-4 w-4" />
                                        Search
                                    </button>
                                </form>
                            </div>

                            <div className="ml-auto flex items-center gap-5">
                                <Link
                                    href="/cart"
                                    className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                                >
                                    <ShoppingCart className="h-5 w-5 text-sky-600" />
                                    <span className="hidden sm:inline">Cart</span>
                                </Link>
                                <Link
                                    href="/login"
                                    className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                                >
                                    <User className="h-5 w-5 text-sky-600" />
                                    <span className="hidden sm:inline">Login</span>
                                </Link>
                            </div>
                        </div>

                        <nav className="border-t border-slate-200">
                            <ul className="flex h-9 items-center gap-4 overflow-x-auto text-[12px] font-semibold tracking-wide text-slate-700">
                                {links.map((l) => (
                                    <li key={l.href} className="shrink-0">
                                        <Link
                                            href={l.href}
                                            className="inline-flex h-9 items-center border-b-2 border-transparent px-1 hover:border-sky-600 hover:text-slate-900"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
