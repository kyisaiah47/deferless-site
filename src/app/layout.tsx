import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { PRODUCT } from '@/lib/product';

export const runtime = 'edge';

/* A mono for everything a machine wrote. The sentence face is BDO Grotesk, declared as a
 * @font-face in globals.css off public/fonts, so the page's own words never wait on a CDN. */
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL || `https://${PRODUCT.host}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: `${PRODUCT.name}: ${PRODUCT.headline}`, template: `%s · ${PRODUCT.name}` },
  description: PRODUCT.blurb,
  alternates: { canonical: SITE },
  openGraph: {
    title: `${PRODUCT.name}: ${PRODUCT.headline}`,
    description: PRODUCT.blurb,
    url: SITE,
    siteName: PRODUCT.name,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: PRODUCT.name, description: PRODUCT.blurb },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>
        {/* LAYER 1 OF THE COMPOUND LABS CREDIT. The publisher is the apex Organization node,
            referenced by @id. Never a local Organization declaration: a second node under the
            same name is a second entity as far as a crawler is concerned, and the @id edge is
            what joins this package to everything else the studio publishes. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: PRODUCT.name,
              url: SITE,
              description: PRODUCT.blurb,
              codeRepository: PRODUCT.repo,
              programmingLanguage: 'JavaScript',
              runtimePlatform: 'Node.js',
              license: 'https://spdx.org/licenses/MIT.html',
              version: PRODUCT.version,
              publisher: {
                '@type': 'Organization',
                '@id': 'https://thecompound.tech/#organization',
                name: 'Compound Labs',
                url: 'https://thecompound.tech',
              },
            }).replace(/</g, '\\u003c'),
          }}
        />
        <SmoothScroll />
        {/* The masthead and the footer are drawn by each PAGE rather than here, because both
            carry page state: the masthead marks the current destination and the footer states
            the day this page's content was read. A layout cannot know either. */}
        {children}
      </body>
    </html>
  );
}
