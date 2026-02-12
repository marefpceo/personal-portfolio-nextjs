/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    root: '/home/marefpceo/repos/personal/personal-portfolio-nextjs/',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;
