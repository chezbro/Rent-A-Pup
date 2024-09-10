/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/tripshaman',
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