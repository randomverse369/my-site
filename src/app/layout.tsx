import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

import CustomCursor from "@/components/CustomCursor";



const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin | Creative Developer",
  description: "Portfolio of Sachin, a creative developer focusing on interactive web experiences.",
  openGraph: {
    title: "Sachin | Creative Developer",
    description: "Portfolio of Sachin, a creative developer focusing on interactive web experiences.",
    type: "website",
  },
  icons: {
    icon: "/images/Sachin Barnwal_Favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`} suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-background text-foreground font-sans selection:bg-black selection:text-white overflow-x-hidden">
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10 min-h-screen flex flex-col pt-24">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
