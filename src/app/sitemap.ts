import type { MetadataRoute } from 'next';
import { PRODUCT } from '@/lib/product';
import { DEMO_CAPTURED_AT } from '@/lib/demo';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || `https://${PRODUCT.host}`;

/* One page, so one row. `lastModified` is the day the page's own content was last read off the
 * package, which is the capture date, never the build clock: a nightly rebuild that changed
 * nothing would otherwise tell a crawler the page is new every day. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date(DEMO_CAPTURED_AT),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
