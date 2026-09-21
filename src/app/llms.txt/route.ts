import { PRODUCT, GATES, EXITS, REFUSALS } from '@/lib/product';

export const dynamic = 'force-static';

/* llms.txt. What the package is, what it refuses, and where the real source is, as plain text.
 * It is generated from the same constants the page reads, so it cannot describe a different
 * package than the one rendered beside it. */
export function GET() {
  const body = [
    `# ${PRODUCT.name}`,
    '',
    `> ${PRODUCT.headline} ${PRODUCT.blurb}`,
    '',
    `Version ${PRODUCT.version}. ${PRODUCT.licence}. ${PRODUCT.node}. ${PRODUCT.deps}.`,
    `Source: ${PRODUCT.repo}`,
    `Registry: ${PRODUCT.npm}`,
    `Try it: ${PRODUCT.install}`,
    '',
    '## What does not exist',
    '',
    ...REFUSALS.map((r) => `- ${r.name}: ${r.say}`),
    '',
    'One rule governs every patch: nothing may be added that lets a known failure ship.',
    '',
    '## The four gates',
    '',
    ...GATES.flatMap((g) => [`### ${g.cmd}: ${g.title}`, '', g.what, '', g.detail, '']),
    '## Exit codes',
    '',
    ...EXITS.map((e) => `- ${e.code}: ${e.say}`),
    '',
    '## Publisher',
    '',
    'Compound Labs, https://thecompound.tech, hello@thecompound.tech',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}
