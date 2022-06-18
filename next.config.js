/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://baucarquitectura.web.app/',
  }
}

module.exports = nextConfig
