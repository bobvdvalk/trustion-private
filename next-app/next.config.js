/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/api/:path*",
          destination: `${process.env.DIRECTUS_INTERNAL_URL}/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
