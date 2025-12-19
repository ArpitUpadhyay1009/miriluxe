import Link from "next/link";

export default function Information() {
    return (
        <section className="w-full bg-white py-12">
            <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="w-full">
                        <div className="relative w-full overflow-hidden rounded-md bg-slate-100 pt-[56.25%]">
                            <iframe
                                className="absolute inset-0 h-full w-full"
                                src="https://www.youtube.com/embed/1G4isv_Fylg"
                                title="Goodness Inside"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-xl text-center lg:text-left">
                        <h2 className="text-2xl font-semibold text-slate-900">Our Goodness Promise</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            At Miriluxe, we live to spread a little love and goodness every day. We believe that goodness isn’t
                            a superpower, nor a special gift; it’s inside all of us and it shows in the little choices we make.
                            Our mission is to bring you the best of nature through our purest and most nurturing products that
                            are made without any toxins or harmful chemicals. For us goodness also means being good to the
                            earth. This is why we recycle more plastic than we use and we’re PETA Certified - which means we
                            never test on animals.
                        </p>

                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
                            <Link
                                href="/products"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-sky-600 px-5 text-xs font-semibold tracking-wide text-white hover:bg-sky-700"
                            >
                                SHOP NOW
                            </Link>
                            <Link
                                href="/pledges"
                                className="inline-flex h-9 items-center justify-center rounded-md border border-sky-600 px-5 text-xs font-semibold tracking-wide text-sky-700 hover:bg-sky-50"
                            >
                                OUR PLEDGES
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
