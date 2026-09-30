import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { signalFonts } from "@/lib/fonts";
import { INTRO_INIT_SCRIPT } from "@/lib/intro";
import { siteUrl } from "@/lib/site";

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
  // Resolved against metadataBase and the current route, so every page
  // declares itself canonical rather than pointing at the home page.
  alternates: { canonical: "./" },
  /*
   * No title, description or url here on purpose. Next inherits an openGraph
   * block wholesale when a page does not declare one, so naming them meant
   * every case study shared as "Sachin Barnwal — Senior Product Designer"
   * pointing at the home page. Left out, Next fills each page's own title and
   * description in instead.
   */
  openGraph: {
    siteName: "Sachin Barnwal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
