import type { MetadataRoute } from 'next';
import { PRODUCT } from '@/lib/product';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || `https://${PRODUCT.host}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
