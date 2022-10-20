/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://radiant-mesa-38574.herokuapp.com',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'radiant-mesa-38574.herokuapp.com',
      'radiant-mesa-38574.herokuapp.comundefined',
      'localhost',
    ],
  },
}

module.exports = nextConfig
