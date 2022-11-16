/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bulma.io'
      },
      {
        protocol: 'https',
        hostname: 'botanfotografos.es'
      },
    ],
  },
  distDir: 'build',
}


module.exports = nextConfig
