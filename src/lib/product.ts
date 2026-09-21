/* WHAT DEFERLESS IS, in one place. Every surface on this site reads these strings and none of
 * them is composed twice.
 *
 * ⛔ EVERY STRING HERE CAME OFF THE PACKAGE, NEVER OFF A DESCRIPTION OF IT. The subject is
 * ~/CompoundLabs/deferless: its README, its docs/SPEC.md, its package.json and the npm registry
 * are the sources, and SOURCES at the bottom records which sentence came from which, with the
 * day it was read. Nothing on this page is a paraphrase of a paraphrase.
 *
 * ⛔ THE TERMINAL BLOCK IS NOT IN THIS FILE. It is src/lib/demo.ts, written by
 * scripts/capture.mjs from the program's own stdout. A page that retypes output drifts from it
 * the first time the program changes a word, and nothing errors when it does.
 */

export const PRODUCT = {
  name: 'deferless',
  slug: 'deferless',
  host: 'deferless.thecompound.tech',

  /* The README's own first bold line, verbatim. */
  headline: 'Fail-closed gates for work an AI agent did on your behalf.',

  /* THE STANDING LINE IN THE MASTHEAD. It names what the package refuses, which is the only
   * claim it makes. It is not a tagline: three things do not exist, and that is the product. */
  standing: 'NO FORCE FLAG, NO ALLOWLIST, NO KNOWN ISSUES FILE',

  blurb:
    'A plan an AI agent cannot quietly deviate from, and findings it cannot defer to you. Fourteen check kinds, a promote gate that runs before the deploy instead of after it, a browser gate that measures painted pixels, and a deploy lock for a tree several agent sessions are editing at once.',

  version: '0.1.1',
  licence: 'MIT',
  node: 'Node 18 or newer',
  deps: 'Zero runtime dependencies',

  repo: 'https://github.com/kyisaiah47/deferless',
  npm: 'https://www.npmjs.com/package/deferless',
  install: 'npx deferless demo',

  /* The accent, derived rather than chosen. The arithmetic is in globals.css. */
  accent: '#33C9C4',
  accentHover: '#5FDBD6',
} as const;

/* THE BADGES THE README CARRIES, in its own order. Each is a live third party read: the shield
 * renders whatever the source says today, which is what a badge is for. The last one reads
 * `not indexed` until the crawl reaches a repository this new, and the README says in its own
 * words that this is the correct output and not a bad one. */
export const BADGES = [
  {
    id: 'gates',
    alt: 'gates',
    src: 'https://github.com/kyisaiah47/deferless/actions/workflows/ci.yml/badge.svg',
    href: 'https://github.com/kyisaiah47/deferless/actions/workflows/ci.yml',
    say: 'The suite, under bash and zsh',
  },
  {
    id: 'npm',
    alt: 'npm',
    src: 'https://img.shields.io/npm/v/deferless.svg',
    href: 'https://www.npmjs.com/package/deferless',
    say: 'The published version',
  },
  {
    id: 'licence',
    alt: 'licence: MIT',
    src: 'https://img.shields.io/badge/licence-MIT-blue.svg',
    href: 'https://github.com/kyisaiah47/deferless/blob/main/LICENSE',
    say: 'MIT',
  },
  {
    id: 'deps',
    alt: 'dependencies: 0',
    src: 'https://img.shields.io/badge/dependencies-0-brightgreen.svg',
    href: 'https://github.com/kyisaiah47/deferless/blob/main/package.json',
    say: 'Nothing to install but the package',
  },
  {
    id: 'agents',
    alt: 'AGENTS.md score',
    src: 'https://toolproof.thecompound.tech/badge/rulestack/kyisaiah47/deferless.svg',
    href: 'https://rulestack.thecompound.tech',
    say: 'A third party read of this repo AGENTS.md, re-read nightly',
  },
] as const;

/* THE FOUR GATES, in the README's own order. `why` is the incident each one was built against,
 * because every one of them is a real failure with a date on it and not a category. */
export const GATES = [
  {
    id: 'check',
    cmd: 'deferless check',
    title: 'The plan gate',
    glyph: 'file-text',
    what:
      'Turns an approved plan into something that can refuse output. You write a spec.json beside the plan, one check per binding sentence, and the quote field holds that sentence verbatim.',
    why:
      "A rule stated in prose is checked by the same judgement that just decided to break it. Every violation is reported in the plan's own words, so a failure is a quote from something a human approved rather than an error from a linter nobody remembers configuring.",
    detail:
      'Fourteen check kinds ship. Six are answerable from the filesystem: files, requires, forbids, pairedFile, sidecar, media. Eight decode real pixels out of video with ffmpeg: frame fill, luminance band, accent colour share, motion floor, text ink height, mark presence by cross correlation, cut cadence against declared seams, shot distinctness.',
    measured:
      'The pixel group exists because the first version was metadata only, and a browser rendering a single h1 passed every check in a full video spec. A text slide and a product demo have identical ffprobe output.',
    code: 'deferless check plan.spec.json ./out',
  },
  {
    id: 'promote',
    cmd: 'deferless promote',
    title: 'The no deferrals gate',
    glyph: 'seal-check',
    what:
      'Runs every gate you declare against a local production build, before anything is promoted.',
    why:
      'The enabling mechanic for reporting a finding instead of fixing it was never laziness, it was ordering. The deploy script ran its live checks after the deploy had already landed, so by the time a finding appeared the work was live and writing it up genuinely was the only remaining move. Move the checks in front of the promote and the same finding blocks instead of annotates.',
    detail:
      'Two invariants, both tested. A missing gate file is a failure and not a skip, because a renamed check that silently stops running is indistinguishable from a check that found nothing wrong. And zero gates run is not a pass.',
    measured:
      'If nothing could be checked, the honest answer is that it could not be checked, never that it was clean.',
    code: 'deferless init\ndeferless promote',
  },
  {
    id: 'render',
    cmd: 'deferless render',
    title: 'The gate that opens the page',
    glyph: 'globe-hemisphere-west',
    what:
      'Never reads a file. It takes a URL, drives a real browser, and asks the questions a screenshot answers and a grep cannot.',
    why:
      'Every other gate reads source, and all of them passed on the day a landing page shipped with an invisible hero. The h1 held its animation start frame at opacity 0.001, permanently. The element was in the DOM, at the right size, the right colour, the right position. There is no string to grep for that.',
    detail:
      'Seven questions per page: visible, contrast, overflow, wrap, fold, clipped, nested.',
    measured:
      "The --sample N flag reads the site's own sitemap.xml and takes up to N interior pages, one per distinct first path segment, so a sitemap with four thousand URLs of one shape contributes one of them. The sample is a tour of page types rather than N near identical rows.",
    code: 'npm i -D playwright && npx playwright install chromium\ndeferless render https://example.com/ --sample 6',
  },
  {
    id: 'deploy-gate',
    cmd: 'deferless deploy-gate',
    title: 'The multi agent deploy gate',
    glyph: 'stack-simple',
    what:
      'A POSIX shell library for the case where several agent sessions are editing the same tree at once. A deploy fired while other sessions are still working does not deploy. It registers as pending and exits, and when everything goes quiet one pass ships everything pending, once.',
    why:
      'It defers rather than queues, deliberately. A queued deploy builds a tree that three other sessions are still editing, ships it, and is stale before it finishes. Ten sessions produce ten builds of the same repo and only the last was ever worth running.',
    detail:
      'It counts a session as a peer by looking for interactive Claude Code control sockets with a TTY, because a headless lane fires constantly and would keep things looking busy forever. Underneath the deferral is a mutex with a heartbeat, stolen once the heartbeat goes cold, because a lock with no expiry strands a fleet for two days.',
    measured:
      'Forty six regression tests, run under both bash and zsh. The worst bug this gate ever had was invisible in bash: zsh scopes a trap EXIT set inside a function to that function, so installing the release trap inside the acquire helper deleted the lock the instant it was taken. Two deploys then ran straight through each other while the code looked completely correct.',
    code: '. node_modules/deferless/sh/deploy-lock.sh\ndeploy_gate my-app\n\nDEPLOY_NOW=1 ./scripts/deploy.sh',
  },
] as const;

/* THE EXIT CODES, from the README table. `ink` names which status ink the register paints the
 * code in, and the four inks are declared once in globals.css. */
export const EXITS = [
  { code: '0', ink: 'pass', say: 'Clean.' },
  { code: '1', ink: 'fail', say: 'The output violates something that was agreed.' },
  {
    code: '2',
    ink: 'caution',
    say: 'The gate could not run. It never collapses into 0.',
  },
  {
    code: '3',
    ink: 'dim',
    say: 'Every violation was that the thing was never produced.',
  },
] as const;

/* THE THREE THINGS THAT DO NOT EXIST, plus the fourth a patch would try to add. This is the
 * product, so it is a list of absences and not a sentence about a philosophy. */
export const REFUSALS = [
  {
    id: 'force',
    name: 'a force flag',
    say: 'Ships a known failure once, on the day somebody is in a hurry.',
  },
  {
    id: 'allowlist',
    name: 'an allowlist',
    say: 'Ships a known failure every run after that, silently.',
  },
  {
    id: 'known-issues',
    name: 'a known issues file',
    say: 'A supported place to record a failure and ship past it.',
  },
  {
    id: 'warn',
    name: 'a warn instead of fail toggle',
    say: 'The same exit under a different name. If a check is wrong, fix the check in the open.',
  },
] as const;

/* THE HONEST LIMITATIONS, from the README section of that name. They are on this page because
 * the README puts them on its own front, and a product page that drops them is describing a
 * different package. */
export const LIMITS = [
  {
    id: 'hand',
    head: 'The spec is written by hand',
    say: 'Nothing here infers checks from prose. The gate is only as good as the sentences you chose to encode, and a plan with three binding sentences behind a one check spec is two thirds ungated.',
  },
  {
    id: 'intent',
    head: 'It gates output, not intent',
    say: 'An agent can satisfy every check and still build the wrong thing. This narrows the gap between approved and shipped. It does not close it.',
  },
  {
    id: 'ffmpeg',
    head: 'The pixel checks need ffmpeg',
    say: 'Their thresholds are calibrated for dark, dense product UI. Recalibrate them against your own reference material rather than trusting the defaults. The source says where every number came from.',
  },
  {
    id: 'playwright',
    head: 'The browser gate needs Playwright',
    say: 'And it takes real seconds per page.',
  },
  {
    id: 'shell',
    head: 'The deploy gate is macOS and Linux shell',
    say: 'It detects Claude Code sessions specifically. The socket directory is configurable, and other agent runners need a small patch.',
  },
] as const;

/* THE SPEC FRAGMENT the README prints to show what a check looks like. Verbatim. */
export const SPEC_SAMPLE = `{
  "source": "docs/plans/api-reference.md",
  "checks": [
    { "kind": "files",    "glob": "docs/*.md", "min": 3, "max": 3,
      "quote": "Ship exactly three endpoint pages: orders, refunds and webhooks." },
    { "kind": "requires", "glob": "docs/*.md", "patterns": ["curl -"],
      "quote": "Every endpoint page carries a runnable curl example." },
    { "kind": "forbids",  "glob": "**/*.md",   "patterns": ["billing-core"],
      "quote": "No page mentions the internal service name billing-core." }
  ]
}`;

/* THE CENSUS, the one outside figure this site states. It is the README's own closing section
 * and it carries a DOI, so a reader can check the number rather than take it from here. */
export const CENSUS = {
  artefacts: 445348,
  failing: 43199,
  say: 'A census published the same week as this package measured 445,348 published Claude Code artefacts and found 43,199 of them fail a structural check. 88.4% of those are a YAML block that does not parse. Nothing in the publishing path checks it.',
  links: [
    { label: 'The census', href: 'https://toolproof.thecompound.tech/census' },
    { label: 'DOI 10.5281/zenodo.21936490', href: 'https://doi.org/10.5281/zenodo.21936490' },
    {
      label: 'Measurement vocabulary',
      href: 'https://toolproof.thecompound.tech/methodology/vocabulary',
    },
  ],
} as const;

/* EVERY FACT THIS SITE STATES ABOUT THE PACKAGE, with where it was read and the day. A figure
 * or a claim with no row here does not go on a page, and scripts/check-register.mjs refuses
 * one. `quote` is verbatim from the cited source. */
export const SOURCES = [
  {
    id: 'version',
    claim: 'The published version is 0.1.1 and the licence is MIT.',
    quote: '"dist-tags":{"latest":"0.1.1"}',
    cite: 'npm registry, GET /deferless',
    url: 'https://registry.npmjs.org/deferless',
    read_at: '2026-09-21',
  },
  {
    id: 'deps',
    claim: 'The package has zero runtime dependencies and needs Node 18 or newer.',
    quote: 'Node 18+. Zero runtime dependencies.',
    cite: 'README, Install',
    url: 'https://github.com/kyisaiah47/deferless#install',
    read_at: '2026-09-21',
  },
  {
    id: 'refusals',
    claim: 'There is no force flag, no allowlist and no known issues file.',
    quote: 'There is no --force, no allowlist and no known-issues file.',
    cite: 'README, opening',
    url: 'https://github.com/kyisaiah47/deferless',
    read_at: '2026-09-21',
  },
  {
    id: 'kinds',
    claim: 'Fourteen check kinds ship, six reading the filesystem and eight decoding video pixels.',
    quote:
      'Fourteen check kinds ship. Six are answerable from the filesystem (files, requires, forbids, pairedFile, sidecar, media). Eight decode real pixels out of video with ffmpeg',
    cite: 'README, The four gates',
    url: 'https://github.com/kyisaiah47/deferless/blob/main/docs/SPEC.md',
    read_at: '2026-09-21',
  },
  {
    id: 'exit2',
    claim: 'Exit code 2 means the gate could not run, and it never collapses into 0.',
    quote:
      'I could not check and I checked and it was fine are different answers, and a pipeline that renders them both as green has taught itself to ignore the gate.',
    cite: 'README, Exit codes',
    url: 'https://github.com/kyisaiah47/deferless#exit-codes',
    read_at: '2026-09-21',
  },
  {
    id: 'zsh',
    claim: 'The deploy gate suite is forty six tests run under both bash and zsh.',
    quote: '46 regression tests, run under both bash and zsh',
    cite: 'README, The multi-agent deploy gate',
    url: 'https://github.com/kyisaiah47/deferless',
    read_at: '2026-09-21',
  },
  {
    id: 'census',
    claim: 'A census of 445,348 published artefacts found 43,199 failing a structural check.',
    quote:
      'a census published the same week as this repo measured 445,348 published Claude Code artefacts and found 43,199 of them fail a structural check',
    cite: 'README, The defect class these were built for, counted',
    url: 'https://doi.org/10.5281/zenodo.21936490',
    read_at: '2026-09-21',
  },
  {
    id: 'hero',
    claim:
      'The browser gate exists because a landing page shipped with an h1 held at opacity 0.001.',
    quote:
      'the h1 held its animation start frame at opacity: 0.001, permanently. The element was in the DOM, at the right size, the right colour, the right position. There is no string to grep for that.',
    cite: 'README, The gate that opens the page',
    url: 'https://github.com/kyisaiah47/deferless',
    read_at: '2026-09-21',
  },
] as const;
