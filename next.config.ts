import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gscljubljana.org',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tp-lj.si',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
