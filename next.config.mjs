/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return process.env.VERCEL_URL
      ? [
          {
            source: '/tripshaman/:path*',
            destination: '/:path*',
          },
        ]
      : [];
  },
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
};

export default nextConfig;