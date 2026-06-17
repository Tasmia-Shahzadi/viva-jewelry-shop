import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // Ye build ke waqt TypeScript errors ko ignore kar dega
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;