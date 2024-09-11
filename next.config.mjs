/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'ALLOWALL' },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/tripshaman/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;