import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  // У Next 15 це топ-левел, НЕ в experimental
  transpilePackages: ["sanity", "next-sanity", "@sanity/ui", "@sanity/icons", "@sanity/color"],

  // Якщо імпортуєш @sanity/client на сервері — ок
  experimental: {
    serverComponentsExternalPackages: ["@sanity/client"],
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);