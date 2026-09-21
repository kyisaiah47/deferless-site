import type { MetadataRoute } from 'next';
import { PRODUCT } from '@/lib/product';
import { DEMO_CAPTURED_AT } from '@/lib/demo';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || `https://${PRODUCT.host}`;

/* THE ROUTES. `lastModified` is the day this site's content was last read off the package, which
 * is the capture date, never the build clock: a nightly rebuild that changed nothing would
 * otherwise tell a crawler the page is new every day. */
export const ROUTES = ['/', '/kinds', '/method'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: r === '/' ? SITE : `${SITE}${r}`,
    lastModified: new Date(DEMO_CAPTURED_AT),
    changeFrequency: 'monthly' as const,
    priority: r === '/' ? 1 : 0.7,
  }));
}
