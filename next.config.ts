import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the site deployable on GoDaddy and other static web hosts.
  output: "export",
  trailingSlash: true,
  // Local WebP assets are optimized before export; no image server is required.
  images: { unoptimized: true },
};

export default nextConfig;
