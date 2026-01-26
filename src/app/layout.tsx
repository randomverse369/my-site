import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque, Inter_Tight } from "next/font/google";
import "./globals.css";

import { SoundProvider } from "@/components/SoundManager";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ThreeBackground from "@/components/ThreeBackground";
import PageAnimations from "@/components/PageAnimations";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sachin Barnwal | Product Designer",
  description: "6+ years designing complex web and mobile products. UX, UI, and design systems for remote teams.",
  openGraph: {
    title: "Sachin Barnwal | Product Designer",
    description: "6+ years designing complex web and mobile products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@vyaktava",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} ${interTight.variable} antialiased selection:bg-[#007AFF]/30 selection:text-white`}
      >
        <SoundProvider>
          <SmoothScroll>
            <ThreeBackground />
            <PageAnimations />
            <CustomCursor />
            <Navbar />
            <div className="noise-overlay" />
            <div className="relative z-10">
              {children}
            </div>
          </SmoothScroll>
        </SoundProvider>
      </body>
    </html>
  );
}
