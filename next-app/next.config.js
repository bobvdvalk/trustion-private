/** @type {import('next').NextConfig} */
const nextConfig = {
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
