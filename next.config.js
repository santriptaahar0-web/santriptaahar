/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_S3_BUCKET_DOMAIN || 'santriptaahar-images.s3.ap-south-1.amazonaws.com',
      'localhost'
    ],
  },
}

module.exports = nextConfig

