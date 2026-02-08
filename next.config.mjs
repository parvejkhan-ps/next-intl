// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './app/i18n/request.js'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config
};

export default withNextIntl(nextConfig);
