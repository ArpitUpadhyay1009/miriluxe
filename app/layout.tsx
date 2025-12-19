import "./globals.css";

import Navbar from "@/src/components/navbar/Navbar";

import type { Metadata } from "next";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
