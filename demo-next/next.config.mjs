/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
}
export default nextConfig
