/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    unoptimized:true
  }
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
