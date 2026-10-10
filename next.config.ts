import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Prefer Vercel deployment. For GitHub Pages static export, set:
  // output: "export",
  // images: { unoptimized: true },
  // trailingSlash: true,
};

export default nextConfig;
