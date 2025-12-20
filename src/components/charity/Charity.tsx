"use client";

import Image from "next/image";
import Link from "next/link";

export default function Charity() {
    return (
        <section className="hidden w-full lg:block">
            <div className="relative w-full">
                <Image
                    src="/hero/footer.avif"
                    alt="Miriluxe Goodness Foundation"
                    width={1920}
                    height={700}
                    priority
                    className="h-[540px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/30 to-white/5" />

                <div className="absolute inset-0">
                    <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-12">
                        <div className="max-w-lg space-y-4 text-slate-800">
                            <p className="text-xs font-semibold tracking-[0.3em] text-slate-500">WE PLANT GOODNESS</p>
                            <h2 className="text-4xl font-bold text-slate-900">Every Purchase Plants a Tree</h2>
                            <p className="text-base text-slate-600">
                                Together we have revived over <span className="font-semibold text-lime-600">1,002,168</span> trees.
                                Miriluxe partners with eco-warriors across India to restore green cover with every order you place.
                            </p>
                            <Link
                                href="/charity"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-sky-600 px-6 text-sm font-semibold tracking-wide text-white shadow-lg shadow-sky-400/40 hover:bg-sky-700"
                            >
                                Know More
                            </Link>
                        </div>

                        <div className="rounded-3xl border border-white/60 bg-white/80 px-10 py-8 text-center shadow-2xl backdrop-blur">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Trees Planted</p>
                            <p className="mt-4 text-6xl font-bold text-lime-600">1,002,168</p>
                            <p className="mt-2 text-sm text-slate-600">And counting every single day</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}