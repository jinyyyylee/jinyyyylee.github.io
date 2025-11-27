/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd && {
    output: 'export',
    basePath: '/jy-dev.github.io',
    assetPrefix: '/jy-dev.github.io/',
  }),

  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/jy-dev.github.io' : '',
  },

  images: {
    ...(isProd && {
      unoptimized: true,
    }),
  },
};


module.exports = nextConfig;
