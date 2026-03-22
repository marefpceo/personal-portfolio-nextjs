/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    root: '/home/marefpceo/repos/personal',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  allowedDevOrigins: ['192.168.1.33'],
};

export default nextConfig;
