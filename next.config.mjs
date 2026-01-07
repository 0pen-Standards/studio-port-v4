import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  productionBrowserSourceMaps: false,

  async redirects() {
    return [
      {
        source: '/selected-projects-2025',
        destination: '/selected-projects-2026',
        permanent: true, // 308 redirect (SEO-friendly)
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
