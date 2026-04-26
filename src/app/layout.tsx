import type { Metadata } from "next";
import { Public_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HUD from "@/components/HUD";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sachin Barnwal - Portfolio",
  description: "Senior Product Designer & AI Enthusiast",
};

import SpacetimeCursor from "@/components/SpacetimeCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen">
        <SpacetimeCursor />
        <HUD />
        <div className="grain-overlay" />
        <LenisProvider>
          <Navigation />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
