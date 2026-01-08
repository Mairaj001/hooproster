import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  // Enable experimental features for better performance
  experimental: {
    // Optimize for production
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // Suppress React warnings from third-party libraries (like Sanity Studio)
  reactStrictMode: true,
};

export default nextConfig;
