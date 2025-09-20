import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  transpilePackages: ["sanity", "next-sanity", "@sanity/ui"],
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);