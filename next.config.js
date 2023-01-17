/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
     domains: ['image.tmdb.org', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;