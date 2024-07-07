/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.IMGS_PROTOCOL,
        hostname: process.env.IMGS_HOSTNAME,
        port: process.env.IMGS_PORT,
        pathname: process.env.IMGS_PATHNAME,
      },
    ],
  },
};

export default nextConfig;
