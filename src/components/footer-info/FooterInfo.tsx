
import Link from "next/link";
import {
    BadgeCheck,
    Facebook,
    Instagram,
    Linkedin,
    Phone,
    ShieldCheck,
    Truck,
    Twitter,
    Youtube,
} from "lucide-react";

export default function FooterInfo() {
    return (
        <section className="w-full bg-white">
            <div className="w-full border-t border-slate-100">
                <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                    <div className="grid divide-y divide-slate-100 border-x border-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        <div className="flex items-center gap-3 p-5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-lime-50 text-lime-700">
                                <Truck className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-slate-900">Free Shipping</div>
                                <div className="mt-0.5 text-[11px] text-slate-600">On Orders Above ₹399</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-lime-50 text-lime-700">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-slate-900">COD Available</div>
                                <div className="mt-0.5 text-[11px] text-slate-600">@ ₹40 Per Order</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-3 p-5">
                            <div>
                                <div className="text-xs font-semibold text-slate-900">Have Queries or Concerns?</div>
                                <div className="mt-0.5 text-[11px] text-slate-600">We’re here to help</div>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex h-9 items-center justify-center rounded-md border border-sky-600 px-4 text-[11px] font-semibold tracking-wide text-sky-700 hover:bg-sky-50"
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </div>

                    <div className="border-x border-slate-100 border-t border-slate-100 px-5 py-6">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <div className="text-[11px] font-semibold tracking-wide text-slate-900">PAYMENT</div>
                                <div className="mt-1 inline-flex items-center gap-2 text-[11px] text-lime-700">
                                    <BadgeCheck className="h-4 w-4" />
                                    100% Payment Protection, Easy Return Policy
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                                {[
                                    "UPI",
                                    "NetBanking",
                                    "Card",
                                    "Visa",
                                    "Mastercard",
                                    "Amex",
                                    "RuPay",
                                ].map((m) => (
                                    <span
                                        key={m}
                                        className="inline-flex h-7 items-center justify-center rounded border border-slate-200 bg-white px-2 text-[10px] font-semibold text-slate-700"
                                    >
                                        {m}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 border-x border-slate-100 border-t border-slate-100 px-5 py-8 md:grid-cols-4">
                        <div>
                            <div className="text-[11px] font-semibold tracking-wide text-slate-900">USEFUL LINKS</div>
                            <ul className="mt-3 space-y-2 text-[11px] text-slate-600">
                                <li>
                                    <Link className="hover:text-slate-900" href="/privacy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-slate-900" href="/returns">
                                        Returns
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-slate-900" href="/terms">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-slate-900" href="/cashback">
                                        Terms & Conditions - Cashback
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-slate-900" href="/we-are-safe">
                                        We’re Safe
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-slate-900" href="/track">
                                        Track Order
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-slate-900" href="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-slate-900" href="/sitemap">
                                        Sitemap
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-slate-900" href="/about">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="text-[11px] font-semibold tracking-wide text-slate-900">CATEGORIES</div>
                            <ul className="mt-3 space-y-2 text-[11px] text-slate-600">
                                {[
                                    { label: "Baby", href: "/category/baby" },
                                    { label: "Beauty", href: "/category/beauty" },
                                    { label: "Hair", href: "/category/hair" },
                                    { label: "Face", href: "/category/face" },
                                    { label: "Body", href: "/category/body" },
                                    { label: "Makeup", href: "/category/makeup" },
                                    { label: "Ingredient", href: "/category/ingredient" },
                                    { label: "Gift Pack", href: "/category/gift" },
                                ].map((c) => (
                                    <li key={c.label}>
                                        <Link className="hover:text-slate-900" href={c.href}>
                                            {c.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <div className="text-[11px] font-semibold tracking-wide text-slate-900">MY ACCOUNT</div>
                            <ul className="mt-3 space-y-2 text-[11px] text-slate-600">
                                <li>
                                    <Link className="hover:text-slate-900" href="/account">
                                        Account
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-slate-900" href="/orders">
                                        Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link className="hover:text-slate-900" href="/addresses">
                                        Addresses
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link
                                        href="/support"
                                        className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 hover:bg-slate-50"
                                    >
                                        <Phone className="h-4 w-4" />
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-start justify-center md:justify-end">
                            <div className="flex w-full max-w-[240px] items-center justify-center rounded-md border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 text-center">
                                <div>
                                    <div className="text-[10px] font-semibold tracking-wide text-slate-700">
                                        The Economic Times
                                    </div>
                                    <div className="mt-2 text-3xl font-black text-slate-900">Bb</div>
                                    <div className="text-xs font-bold text-slate-900">BEST BRANDS</div>
                                    <div className="text-[10px] text-slate-600">2019</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-x border-slate-100 border-t border-slate-100 px-5 py-6">
                        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                            <div className="flex items-center gap-3 text-slate-500">
                                <Link href="#" aria-label="Facebook" className="hover:text-slate-900">
                                    <Facebook className="h-4 w-4" />
                                </Link>
                                <Link href="#" aria-label="Twitter" className="hover:text-slate-900">
                                    <Twitter className="h-4 w-4" />
                                </Link>
                                <Link href="#" aria-label="Instagram" className="hover:text-slate-900">
                                    <Instagram className="h-4 w-4" />
                                </Link>
                                <Link href="#" aria-label="YouTube" className="hover:text-slate-900">
                                    <Youtube className="h-4 w-4" />
                                </Link>
                                <Link href="#" aria-label="LinkedIn" className="hover:text-slate-900">
                                    <Linkedin className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 text-[11px] font-semibold text-white hover:bg-slate-800"
                                >
                                    Google Play
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 text-[11px] font-semibold text-white hover:bg-slate-800"
                                >
                                    App Store
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-x border-b border-slate-100 border-t border-slate-100 px-5 py-4">
                        <div className="text-center text-[11px] text-slate-500">
                            © {new Date().getFullYear()} Miriluxe. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
