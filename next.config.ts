import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  transpilePackages: [
    'sanity',
    'next-sanity',
    '@sanity/ui',
    '@sanity/icons',
    '@sanity/color',
  ],

  serverExternalPackages: ['@sanity/client'],
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
