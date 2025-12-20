
import Link from "next/link";

export default function Charity() {
    return (
        <section className="flex min-h-screen w-full items-center bg-gradient-to-b from-sky-50 via-white to-emerald-50 py-10 sm:py-16">
            <div className="mx-auto w-full max-w-6xl px-4 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 shadow-2xl backdrop-blur-sm">
                    <div className="pointer-events-none absolute inset-0">
                        <svg
                            className="absolute left-0 top-0 h-32 w-32 opacity-20"
                            viewBox="0 0 120 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 38C30 22 48 20 63 32C78 44 90 42 110 28"
                                stroke="#16a34a"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M18 70C42 58 60 58 74 70C88 82 96 82 108 72"
                                stroke="#0ea5e9"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M12 96C26 88 42 86 60 94C78 102 96 102 112 92"
                                stroke="#16a34a"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>

                        <svg
                            className="absolute bottom-0 right-0 h-40 w-40 opacity-20"
                            viewBox="0 0 120 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 20C34 40 52 54 74 62C96 70 106 80 112 100"
                                stroke="#16a34a"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M18 32C40 48 60 56 82 56C104 56 112 64 114 80"
                                stroke="#0ea5e9"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div className="grid min-h-[60vh] gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
                        <div className="mx-auto w-full max-w-md">
                            <svg
                                viewBox="0 0 520 260"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-auto w-full"
                            >
                                <defs>
                                    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0" stopColor="#e0f2fe" />
                                        <stop offset="1" stopColor="#ffffff" />
                                    </linearGradient>
                                    <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0" stopColor="#bbf7d0" />
                                        <stop offset="1" stopColor="#4ade80" />
                                    </linearGradient>
                                </defs>

                                <rect x="0" y="0" width="520" height="260" fill="url(#sky)" />
                                <path
                                    d="M0 210C90 190 160 190 220 205C280 220 360 222 520 205V260H0V210Z"
                                    fill="url(#grass)"
                                    opacity="0.55"
                                />

                                <path
                                    d="M258 208C246 168 252 132 274 110C296 88 302 66 296 40C316 58 326 80 326 108C326 152 300 182 302 208H258Z"
                                    fill="#7c3f20"
                                    opacity="0.9"
                                />
                                <path
                                    d="M270 210C262 178 266 150 286 128C306 106 310 84 304 60C320 74 328 92 328 116C328 154 306 182 308 210H270Z"
                                    fill="#8b451f"
                                    opacity="0.9"
                                />

                                <circle cx="292" cy="88" r="52" fill="#86efac" opacity="0.9" />
                                <circle cx="252" cy="98" r="44" fill="#4ade80" opacity="0.75" />
                                <circle cx="330" cy="112" r="44" fill="#22c55e" opacity="0.75" />
                                <circle cx="292" cy="132" r="40" fill="#16a34a" opacity="0.6" />

                                <path d="M420 76C432 68 444 68 456 76C444 86 432 86 420 76Z" fill="#22c55e" opacity="0.5" />
                                <path d="M454 150C466 142 478 142 490 150C478 160 466 160 454 150Z" fill="#16a34a" opacity="0.45" />
                            </svg>
                        </div>

                        <div className="mx-auto w-full max-w-xl text-center lg:text-left">
                            <div className="text-xs font-semibold tracking-[0.2em] text-slate-700">WE PLANT GOODNESS</div>
                            <div className="mt-3 text-3xl font-bold tracking-widest text-lime-600 sm:text-4xl">
                                1002168
                            </div>
                            <div className="mt-2 text-xs font-semibold text-slate-700">Trees have got life already...</div>
                            <div className="mt-1 text-xs text-slate-600">Everytime you buy from us, we plant more trees!</div>

                            <div className="mt-6 flex justify-center lg:justify-start">
                                <Link
                                    href="/charity"
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-sky-600 px-6 text-xs font-semibold tracking-wide text-white hover:bg-sky-700"
                                >
                                    Know More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
