import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F7FA" },
    { media: "(prefers-color-scheme: dark)", color: "#0D1013" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      // The theme script writes data-theme onto this element before React
      // sees it, so the server markup and the hydrated markup differ by design.
      suppressHydrationWarning
    >
      <head>
        {/*
          Blocking and inline, ahead of everything else: it has to set the theme
          before the first paint or a returning dark-theme visitor gets a white
          flash. next/script cannot do this — even beforeInteractive is
          explicitly documented as not blocking paint.
        */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <div className="grain-overlay" />
        <LenisProvider>
          <Navigation />
          <main className="flex-grow pt-[calc(var(--nav-height,4.75rem)+2rem)]">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
