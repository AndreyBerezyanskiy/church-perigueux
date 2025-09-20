import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["sanity", "next-sanity"],
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);