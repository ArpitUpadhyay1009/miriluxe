"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { useId, useMemo, useState, useEffect } from "react";
import NavDropdown from "./NavDropdown";

type NavLink = {
    label: string;
    href: string;
};

export default function Navbar() {
    const [showFaceDropdown, setShowFaceDropdown] = useState(false);
    const [showHairDropdown, setShowHairDropdown] = useState(false);
    const [showMakeupDropdown, setShowMakeupDropdown] = useState(false);
    const [showBodyDropdown, setShowBodyDropdown] = useState(false);
    const [showBabyDropdown, setShowBabyDropdown] = useState(false);
    const [showCombosDropdown, setShowCombosDropdown] = useState(false);
    const [showIngredientDropdown, setShowIngredientDropdown] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState(0);
    const searchId = useId();
    const [searchPlaceholder, setSearchPlaceholder] = useState("Search for Face Mask");
    const searchTerms = ["Search for Ubtan", "Search for Lipstick", "Search for Face Mask"];

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % searchTerms.length;
            setSearchPlaceholder("");
            let charIndex = 0;
            const word = searchTerms[currentIndex];
            const typingInterval = setInterval(() => {
                if (charIndex <= word.length) {
                    setSearchPlaceholder(word.substring(0, charIndex));
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 50); // Speed of typing
        }, 4000); // Time between words

        return () => {
            clearInterval(interval);
        };
    }, []);

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
            <div className="fixed top-0 left-0 right-0 z-50 hidden w-full md:block">
                <div className="bg-[#f13329] text-white">
                    <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-[11px] font-semibold uppercase tracking-wide">
                        <span>India&apos;s #1 brand with Made Safe Certified Products</span>
                        <span className="text-xs font-bold">OMG Sale Ends Tonight | Buy 1 Get 1 FREE | Use Code OMG | Shop Now</span>
                    </div>
                </div>
                <header className="w-full bg-white">
                    <div className="border-b border-slate-200 bg-white shadow-md">
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
                                                placeholder={searchPlaceholder}
                                                className="h-9 w-full rounded-l-md border border-slate-300 bg-white pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 [&::placeholder]:transition-opacity"
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

                            <nav
                                className="relative border-t border-slate-200"
                                onMouseLeave={() => {
                                    setShowFaceDropdown(false);
                                    setShowHairDropdown(false);
                                    setShowMakeupDropdown(false);
                                    setShowBodyDropdown(false);
                                    setShowBabyDropdown(false);
                                    setShowCombosDropdown(false);
                                    setShowIngredientDropdown(false);
                                }}
                            >
                                <ul className="flex h-9 items-center gap-4 overflow-x-auto text-[12px] font-semibold tracking-wide text-slate-700">
                                    {links.map((l) => (
                                        <li key={l.href} className="shrink-0">
                                            <Link
                                                href={l.href}
                                                className="inline-flex h-9 items-center border-b-2 border-transparent px-1 hover:border-sky-600 hover:text-slate-900"
                                                onMouseEnter={(e) => {
                                                    const target = e.currentTarget;
                                                    const navContainer = target.closest('nav');
                                                    if (navContainer) {
                                                        const targetRect = target.getBoundingClientRect();
                                                        const containerRect = navContainer.getBoundingClientRect();
                                                        setDropdownPosition(targetRect.left - containerRect.left);
                                                    }
                                                    if (l.label === "FACE") {
                                                        setShowHairDropdown(false);
                                                        setShowMakeupDropdown(false);
                                                        setShowBodyDropdown(false);
                                                        setShowBabyDropdown(false);
                                                        setShowCombosDropdown(false);
                                                        setShowIngredientDropdown(false);
                                                        setShowFaceDropdown(true);
                                                    } else if (l.label === "HAIR") {
                                                        setShowFaceDropdown(false);
                                                        setShowMakeupDropdown(false);
                                                        setShowBodyDropdown(false);
                                                        setShowBabyDropdown(false);
                                                        setShowCombosDropdown(false);
                                                        setShowIngredientDropdown(false);
                                                        setShowHairDropdown(true);
                                                    } else if (l.label === "MAKEUP") {
                                                        setShowFaceDropdown(false);
                                                        setShowHairDropdown(false);
                                                        setShowBodyDropdown(false);
                                                        setShowBabyDropdown(false);
                                                        setShowCombosDropdown(false);
                                                        setShowIngredientDropdown(false);
                                                        setShowMakeupDropdown(true);
                                                    } else if (l.label === "BODY") {
                                                        setShowFaceDropdown(false);
                                                        setShowHairDropdown(false);
                                                        setShowMakeupDropdown(false);
                                                        setShowBabyDropdown(false);
                                                        setShowCombosDropdown(false);
                                                        setShowIngredientDropdown(false);
                                                        setShowBodyDropdown(true);
                                                    } else if (l.label === "BABY") {
                                                        setShowFaceDropdown(false);
                                                        setShowHairDropdown(false);
                                                        setShowMakeupDropdown(false);
                                                        setShowBodyDropdown(false);
                                                        setShowCombosDropdown(false);
                                                        setShowIngredientDropdown(false);
                                                        setShowBabyDropdown(true);
                                                    } else if (l.label === "COMBOS") {
                                                        setShowFaceDropdown(false);
                                                        setShowHairDropdown(false);
                                                        setShowMakeupDropdown(false);
                                                        setShowBodyDropdown(false);
                                                        setShowBabyDropdown(false);
                                                        setShowIngredientDropdown(false);
                                                        setShowCombosDropdown(true);
                                                    } else if (l.label === "INGREDIENT") {
                                                        setShowFaceDropdown(false);
                                                        setShowHairDropdown(false);
                                                        setShowMakeupDropdown(false);
                                                        setShowBodyDropdown(false);
                                                        setShowBabyDropdown(false);
                                                        setShowCombosDropdown(false);
                                                        setShowIngredientDropdown(true);
                                                    } else {
                                                        setShowFaceDropdown(false);
                                                        setShowHairDropdown(false);
                                                        setShowMakeupDropdown(false);
                                                        setShowBodyDropdown(false);
                                                        setShowBabyDropdown(false);
                                                        setShowCombosDropdown(false);
                                                        setShowIngredientDropdown(false);
                                                    }
                                                }}
                                            >
                                                {l.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="absolute inset-x-0 top-[calc(100%+1px)]" style={{ paddingLeft: '8px', paddingRight: '8px' }}>
                                    {showFaceDropdown && (
                                        <div
                                            onMouseEnter={() => setShowFaceDropdown(true)}
                                            onMouseLeave={() => setShowFaceDropdown(false)}
                                        >
                                            <NavDropdown type="face" isVisible={true} position={dropdownPosition} />
                                        </div>
                                    )}
                                    {showHairDropdown && (
                                        <div
                                            onMouseEnter={() => setShowHairDropdown(true)}
                                            onMouseLeave={() => setShowHairDropdown(false)}
                                        >
                                            <NavDropdown type="hair" isVisible={true} position={dropdownPosition} />
                                        </div>
                                    )}
                                    {showMakeupDropdown && (
                                        <div
                                            onMouseEnter={() => setShowMakeupDropdown(true)}
                                            onMouseLeave={() => setShowMakeupDropdown(false)}
                                        >
                                            <NavDropdown type="makeup" isVisible={true} position={dropdownPosition} />
                                        </div>
                                    )}
                                    {showBodyDropdown && (
                                        <div
                                            onMouseEnter={() => setShowBodyDropdown(true)}
                                            onMouseLeave={() => setShowBodyDropdown(false)}
                                        >
                                            <NavDropdown type="body" isVisible={true} position={dropdownPosition} />
                                        </div>
                                    )}
                                    {showBabyDropdown && (
                                        <div
                                            onMouseEnter={() => setShowBabyDropdown(true)}
                                            onMouseLeave={() => setShowBabyDropdown(false)}
                                        >
                                            <NavDropdown type="baby" isVisible={true} position={dropdownPosition} />
                                        </div>
                                    )}
                                    {showCombosDropdown && (
                                        <div
                                            onMouseEnter={() => setShowCombosDropdown(true)}
                                            onMouseLeave={() => setShowCombosDropdown(false)}
                                        >
                                            <NavDropdown type="combos" isVisible={true} position={dropdownPosition} />
                                        </div>
                                    )}
                                    {showIngredientDropdown && (
                                        <div
                                            onMouseEnter={() => setShowIngredientDropdown(true)}
                                            onMouseLeave={() => setShowIngredientDropdown(false)}
                                        >
                                            <NavDropdown type="ingredient" isVisible={true} position={dropdownPosition} />
                                        </div>
                                    )}
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <div className="h-[7.5rem]"></div>
        </>
    );
}
