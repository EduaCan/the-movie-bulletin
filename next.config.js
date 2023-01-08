/** @type {import('next').NextConfig} */
 const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [ //why it doesn't work? see favourites page.
      {
        protocol: 'https',
        hostname: 'image.tmdb.org', 
        port: '',
        pathname: '/**'
      },
    ],
  },
}

export default nextConfig

