import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "https://sven-portfolio.pages.dev" : undefined,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Enable compression
  compress: true,
};

export default nextConfig;
