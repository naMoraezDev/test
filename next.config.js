/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.ASSET_PREFIX,
  images: {
    domains: ['lncimg.lance.com.br', 'dev-interativos.lancecorp.com.br'],
  },
  env: {
    EMBED_ID: process.env.EMBED_ID,
    SITE_URL: process.env.SITE_URL,
    EMBED_SRC: process.env.EMBED_SRC,
    EMBED_PROD: process.env.EMBED_PROD,
    EMBED_CONFIG: process.env.EMBED_CONFIG,
    EMBED_TARGET: process.env.EMBED_TARGET,
    NEXT_SHARP_PATH: process.env.NEXT_SHARP_PATH,
  },
};

module.exports = nextConfig;
