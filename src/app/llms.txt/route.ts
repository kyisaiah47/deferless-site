import { PRODUCT, GATES, EXITS, REFUSALS, LIMITS, SOURCES } from '@/lib/product';
import { ROUTES } from '../sitemap';

export const dynamic = 'force-static';

/* llms.txt. What the package is, what it refuses, what each gate checks and where the real
 * source is, as plain text. It is generated from the same constants the pages read, so it
 * cannot describe a different package than the one rendered beside it, and its route list is
 * the sitemap's own so a route can never be published without a line here. */
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
    '## Pages',
    '',
    ...ROUTES.map((r) => `- https://${PRODUCT.host}${r === '/' ? '' : r}`),
    '',
    '## What does not exist',
    '',
    ...REFUSALS.map((r) => `- ${r.name}: ${r.say}`),
    '',
    'One rule governs every patch: nothing may be added that lets a known failure ship.',
    '',
    '## The four gates',
    '',
    ...GATES.flatMap((g) => [
      `### ${g.cmd}: ${g.title}`,
      '',
      g.what,
      '',
      `Exits ${g.exits.join(', ')}. ${g.clauses.length} ${g.unit}${g.clauses.length === 1 ? '' : 's'}:`,
      ...g.clauses.map((c) => `- ${c.name}: reads ${c.reads}; refuses when ${c.refuses}`),
      '',
    ]),
    '## Exit codes',
    '',
    ...EXITS.map((e) => `- ${e.code} (${e.name}): ${e.say}`),
    '',
    '## What it does not do',
    '',
    ...LIMITS.map((l) => `- ${l.head}: ${l.say}`),
    '',
    '## Sources',
    '',
    ...SOURCES.map((s) => `- ${s.claim} (${s.cite}, ${s.url}, read ${s.read_at})`),
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
