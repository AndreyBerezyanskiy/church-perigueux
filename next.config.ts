import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  transpilePackages: ["sanity", "next-sanity"],
  experimental: {
    serverComponentsExternalPackages: ["@sanity/client"],
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);