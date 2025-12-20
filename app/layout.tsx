import "./globals.css";

import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import Navbar from "@/src/components/navbar/Navbar";
import MobileNav from "@/src/components/mobile-nav/MobileNav";
import MobileBanner from "@/src/components/mobile-banner/MobileBanner";
import MobileCategories from "@/src/components/mobile-categories/MobileCategories";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/Miriluxe_logo.png",
    apple: "/Miriluxe_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} bg-white text-slate-900`}>
        {/* Mobile: Fixed banner at top (includes its own spacer) */}
        <MobileBanner />
        {/* Mobile: Category icons (scrolls with page) */}
        <MobileCategories />

        {/* Desktop: Full navbar */}
        <Navbar />

        <div className="pb-24 md:pb-0">{children}</div>
        <MobileNav />
      </body>
    </html>
  );
}
