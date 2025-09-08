import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
    // ppr: 'incremental',
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
