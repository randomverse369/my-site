import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { signalFonts } from "@/lib/fonts";
import { INTRO_INIT_SCRIPT } from "@/lib/intro";

// metadataBase needs an absolute origin to resolve OG image URLs. Set
// NEXT_PUBLIC_SITE_URL to the production domain; Vercel supplies VERCEL_URL on
// previews, and localhost is the local fallback.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const title = "Sachin Barnwal — Senior Product Designer";
const description =
  "Senior product designer working at the intersection of design and AI. Seven years across fintech, SaaS and AI products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Sachin Barnwal",
  },
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Sachin Barnwal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@vyaktava",
  },
};

// Every page opens on the dark tone.
export const viewport: Viewport = {
  themeColor: "#0b0c0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${signalFonts} antialiased`}
      // The intro script writes data-intro onto this element before React
      // sees it, so the server markup and the hydrated markup differ by design.
      suppressHydrationWarning
    >
      <head>
        {/*
          Blocking and inline, ahead of everything else: a return visit must
          skip the preloader before the first paint, or it flashes. next/script
          cannot do this; even beforeInteractive does not block paint.
        */}
        <script dangerouslySetInnerHTML={{ __html: INTRO_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
