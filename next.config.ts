/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd && {
    output: 'export',
  }),
  images: {
    ...(isProd && {
      unoptimized: true,
    }),
  },
};


module.exports = nextConfig;
