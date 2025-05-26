
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'robohash.org', // Kept in case it's used by other parts or future mock data
        port: '',
        pathname: '/**',
      }
      // Removed dummyjson.com as it's no longer the primary source for images
    ],
  },
};

export default nextConfig;
