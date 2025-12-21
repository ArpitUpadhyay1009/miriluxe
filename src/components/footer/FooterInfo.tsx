"use client";

import { ArrowRight } from "lucide-react";

export default function FooterInfo() {
    return (
        <section className="w-full bg-gray-50 px-4 py-12">
            <div className="mx-auto max-w-7xl space-y-8">
                {/* Main Product Info */}
                <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                    <h2 className="text-lg font-semibold text-slate-900">Get your hands on Nature-Inspired Miriluxe Products</h2>
                    <p>
                        Miriluxe brings you the best-in-class natural formulations to help you discover the essence of beauty with the goodness of nature. We are also Asia&apos;s first brand to be accredited with Made Safe Certification for our beauty products. Miriluxe has R&D labs that focus on formulating skin & hair care Natural remedies. Made Safe certified, trusted by millions for real results. Order now! We work with skincare experts to make the best natural skin care products for men and women to offer you the best skincare experience. Miriluxe is the one of the most trustworthy brands in India.
                    </p>
                    <p>
                        We are a brand by the people and for the people because we offer safe and gentle baby skin care products that were created to suit every skin type. We are proud to offer natural, toxin-free, baby care and body care products that are especially made friendly to suit our skin type. Free harmful chemicals free, paraben free products with utmost care and precision.
                    </p>
                </div>

                {/* Download App Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-slate-900">Download Miriluxe App for iOS and Android today!</h2>
                    <p className="text-sm leading-relaxed text-slate-600">
                        We welcome you to download our all-new Miriluxe app for iOS and Android smartphones. It offers you the best online shopping experience so you could place your order from the comfort of your home.
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                        Our app features help guide you safely for safe and smart payment gateways. All you that need to make an order with us is to select the products of your choice, add them to cart, input your address, and make a successful payment, and we will take it up from there.
                    </p>
                </div>

                {/* Skincare Range Info */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-slate-900">About Miriluxe Skincare Range</h2>
                    <p className="text-sm leading-relaxed text-slate-600">
                        Developing a skincare routine is overwhelming at times. With so many options available, it becomes tough to understand what your skin truly needs. Our skincare lifestyle has impacted skin health, leaving it dull, and damaged. With the excess use of toxins, it is possible to help, protect the skin, boost radiance, prevent breakouts, and reverse the damage. You can choose gentle products that are our toxin-free skincare top of the line products such as moisturizer, and skin glow cream made with natural ingredients are good for the skin. We also help you to take care of your skin with our expert range:
                    </p>
                    <ul className="ml-6 space-y-2 text-sm leading-relaxed text-slate-600">
                        <li>
                            <span className="font-semibold">Face wash</span> - The first step to following a great skincare regimen is to pick up a face cleanser that fits your skin type. We bring you a wide range of options comprising Vitamin-C, Foaming face Wash, Charcoal face Wash, Natural rice wash, Ubtan Mini face Wash, and Moringa Water Foaming Makeup Remover.
                        </li>
                        <li>
                            <span className="font-semibold">Face Toner</span> - We effectively lift PM toxics along with Cleansing Toning Moisturizing for that refreshed look on your face. Journey by our team choosing tea with Turmeric and Saffron for Gentle Cleansing or Vitamin C face Toner and Rose Face Toner to minimize pores size.
                        </li>
                        <li>
                            <span className="font-semibold">Face Serum</span> - We have a range of serums for anti-aging, whitening cream, and hydrating solutions. We also have Vitamin C and Turmeric, Hyaluronic Acid, and Retinol Serum, Rose Glow Face Serum, Niacinamide Serum, and more.
                        </li>
                    </ul>
                </div>

                {/* Hair Care Range Info */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-slate-900">About Miriluxe Hair Care Range</h2>
                    <p className="text-sm leading-relaxed text-slate-600">
                        Using the right hair products can make a big difference in your hair care regimen. Pollution, stress, and inadequate nutrition can leave your hair looking dull and lifeless. The best solution is to use safe and gentle hair care products that nourish your scalp and treat dull and frizzy hair. Our haircare products are though fully formulated with protein-rich solutions to address common hair care issues.
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                        Our hair oils, shampoos, masks, and serums come with natural ingredients like Biotin, Amla, Bhringraj, Rice Bran, Castor Oil & growth hair fall grey hair, oil dry and frizzy hair. You can also check out the hair fall control and Bhringharaj range, which contains 18 rare Ayurvedic herbs to nourish your scalp and strengthen your hair.
                    </p>
                    <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
