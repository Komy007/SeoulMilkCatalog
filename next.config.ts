import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.seoulmilk.co.kr',
        pathname: '/Product_Data/pimages/**',
      },
    ],
  },
};

export default nextConfig;
