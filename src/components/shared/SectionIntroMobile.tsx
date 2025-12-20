"use client";

import type { LucideIcon } from "lucide-react";

type SliderIcon = {
    label: string;
    icon: LucideIcon;
};

interface SectionIntroMobileProps {
    title: string;
    description: string;
    icons: SliderIcon[];
}

export default function SectionIntroMobile({ title, description, icons }: SectionIntroMobileProps) {
    return (
        <div className="px-4 pb-4 text-center md:hidden">
            <p className="text-sm font-semibold text-slate-900">{title}</p>
            <p className="mt-1 text-xs text-slate-500">{description}</p>
            <div className="no-scrollbar mt-3 flex items-center justify-center gap-2 overflow-x-auto">
                {icons.map(({ label, icon: Icon }) => (
                    <div
                        key={label}
                        className="flex shrink-0 flex-col items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-semibold text-slate-600"
                        aria-hidden
                    >
                        <Icon className="h-4 w-4 text-slate-900" />
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}
