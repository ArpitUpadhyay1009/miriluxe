"use client";

import Link from "next/link";

type NavDropdownProps = {
    type: 'face' | 'hair' | 'makeup' | 'body' | 'baby' | 'combos' | 'ingredient';
    isVisible: boolean;
    position: number;
};

const ingredientCategories = [
    { label: 'Vitamin C', href: '/ingredient/vitamin-c' },
    { label: 'Onion', href: '/ingredient/onion' },
    { label: 'Ubtan', href: '/ingredient/ubtan' },
    { label: 'Rosemary', href: '/ingredient/rosemary' },
    { label: 'Rice', href: '/ingredient/rice' },
    { label: 'Beetroot', href: '/ingredient/beetroot' },
    { label: 'Aloe Vera', href: '/ingredient/aloe-vera' },
    { label: 'Tea Tree', href: '/ingredient/tea-tree' },
    { label: 'Multani Mitti', href: '/ingredient/multani-mitti' },
    { label: 'Retinol', href: '/ingredient/retinol' },
    { label: 'Charcoal', href: '/ingredient/charcoal' },
    { label: 'Bhringraj', href: '/ingredient/bhringraj' },
    { label: 'Honey Malai', href: '/ingredient/honey-malai' },
];

const combosCategories = [
    { label: 'Combos', href: '/combos/all' },
    { label: 'Kits', href: '/combos/kits' },
];

const babyCategories = [
    { label: 'Baby Shampoo', href: '/baby/baby-shampoo' },
    { label: 'Baby Wash', href: '/baby/baby-wash' },
    { label: 'Baby Body Lotion', href: '/baby/baby-body-lotion' },
    { label: 'Baby Soap', href: '/baby/baby-soap' },
    { label: 'Baby Oil', href: '/baby/baby-oil' },
];

const bodyCategories = [
    { label: 'Body Lotion', href: '/body/body-lotion' },
    { label: 'Soap', href: '/body/soap' },
    { label: 'Body Wash', href: '/body/body-wash' },
];

const makeupCategories = [
    { label: 'Lipstick', href: '/makeup/lipstick' },
    { label: 'Foundation', href: '/makeup/foundation' },
    { label: 'Kajal', href: '/makeup/kajal' },
    { label: 'Compact', href: '/makeup/compact' },
    { label: 'Lip Balm', href: '/makeup/lip-balm' },
    { label: 'Concealer', href: '/makeup/concealer' },
];

const hairCategories = [
    { label: 'Shampoo', href: '/hair/shampoo' },
    { label: 'Hair Oil', href: '/hair/hair-oil' },
    { label: 'Conditioner', href: '/hair/conditioner' },
    { label: 'Hair Serum', href: '/hair/hair-serum' },
    { label: 'Hair Mask', href: '/hair/hair-mask' },
];

const faceCategories = [
    { label: 'Face Wash', href: '/face/face-wash' },
    { label: 'Sunscreen', href: '/face/sunscreen' },
    { label: 'Face Serum', href: '/face/face-serum' },
    { label: 'Face Cream', href: '/face/face-cream' },
    { label: 'Face Moisturizer', href: '/face/face-moisturizer' },
    { label: 'Face Mask', href: '/face/face-mask' },
    { label: 'Facial Kits', href: '/face/facial-kits' },
    { label: 'Face Scrub', href: '/face/face-scrub' },
];

const exploreLinks = [
    { label: 'New Launches', href: '/new-launches' },
    { label: 'Best Sellers', href: '/best-sellers' },
    { label: 'Combos', href: '/combos' },
    { label: 'Gift Packs', href: '/gift-packs' },
];

export default function NavDropdown({ type, isVisible, position }: NavDropdownProps) {
    if (!isVisible) return null;

    return (
        <div
            className="absolute top-full z-[100] w-[280px] rounded-sm border border-slate-200 bg-white py-1.5 shadow-lg"
            style={{ transform: `translateX(${position}px)` }}
        >
            <div className="flex gap-6 px-4">
                <div className="space-y-1.5">
                    <h3 className="text-[11px] font-semibold text-slate-900">Explore</h3>
                    <ul className="space-y-0.5">
                        {exploreLinks.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-[11px] text-slate-600 hover:text-slate-900">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-1.5">
                    <h3 className="text-[11px] font-semibold text-slate-900">
                        {type === 'face' ? 'Face' : type === 'hair' ? 'Hair' : type === 'makeup' ? 'Makeup' : type === 'body' ? 'Body' : type === 'baby' ? 'Baby' : type === 'combos' ? 'Combos' : 'Ingredient'}
                    </h3>
                    <ul className="space-y-0.5">
                        {(type === 'face' ? faceCategories : type === 'hair' ? hairCategories : type === 'makeup' ? makeupCategories : type === 'body' ? bodyCategories : type === 'baby' ? babyCategories : type === 'combos' ? combosCategories : ingredientCategories).map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-[11px] text-slate-600 hover:text-slate-900">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href={`/${type}`}
                        className="mt-0.5 inline-block text-[11px] font-medium text-sky-600 hover:text-sky-700"
                    >
                        See All
                    </Link>
                </div>
            </div>
        </div>
    );
}
