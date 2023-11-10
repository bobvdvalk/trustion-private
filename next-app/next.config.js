/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/api/:path*",
          destination: `${process.env.DIRECTUS_INTERNAL_URL}/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
