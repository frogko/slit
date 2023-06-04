/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/corporate",
        destination: "/asdasdasd",
      },
    ];
  },
};

module.exports = nextConfig;
