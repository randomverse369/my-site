import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // React's <ViewTransition> on route changes: the new page slides up over
    // the old one the way the work panels stack. Browsers without the View
    // Transitions API navigate instantly.
    viewTransition: true,
  },
};

export default nextConfig;
