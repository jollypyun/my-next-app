/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redwrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:9010/:path*"
      }
    ]
  }
}

module.exports = nextConfig
