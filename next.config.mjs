/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable src directory and App Router detection for Vercel
  srcDir: 'src',
  experimental: { appDir: true },
};

export default nextConfig;
