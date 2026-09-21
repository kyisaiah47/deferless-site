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
 *
 * ⛔ THE GATE IS THIS CONSOLE'S ONE CONTROL, so every gate carries the SAME shape: a set of
 * clauses, the exit codes it can return, the incident it was built against, and the command a
 * reader types. A gate that carried a different shape would be a second design inside one page,
 * and the grid would stop meaning one thing.
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

/* THE TOP RULE. Every figure on this site was read off something, so the first line of every
 * page names what was opened and the day it was opened, before anything else is read. Each cell
 * is one read: the thing on the left, what the thing is on the right. */
/* ⛔ THE DATE IS ONE CELL AT THE END, NOT ONE PER CELL. Measured at 1440 on 2026-09-21: five
 * cells each carrying their own date came to a scrollWidth of 1907 inside a 1440 viewport, so
 * the last read was cut off at the frame and a reader saw four of five. Every read here was
 * taken in the same pass, so the day is one fact about the strip rather than five about its
 * cells. The DOI behind the census figures is a claim rather than a read of the package, so it
 * lives in SOURCES on the method page and not here. */
export const READS = [
  { it: 'registry.npmjs.org/deferless', is: 'the published version' },
  { it: 'README.md', is: 'every sentence here' },
  { it: 'docs/SPEC.md', is: 'the fourteen kinds' },
  { it: 'deferless demo', is: 'the captured block' },
] as const;

export const READ_ON = '2026-09-21';

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

/* THE FOUR STATUS INKS ARE THE FOUR EXIT CODES, and they mean the same thing in a cell, in the
 * captured block and in a rail. They are declared once in globals.css. */
export const EXITS = [
  { code: '0', ink: 'pass', name: 'clean', say: 'Every check passed.' },
  { code: '1', ink: 'fail', name: 'violated', say: 'At least one check failed on output that exists.' },
  {
    code: '2',
    ink: 'caution',
    name: 'could not run',
    say: 'The spec could not be read, declared no checks, or nothing could be checked. It never collapses into 0.',
  },
  {
    code: '3',
    ink: 'dim',
    name: 'never produced',
    say: 'Every violation was that a glob matched zero files.',
  },
] as const;

export type ExitCode = (typeof EXITS)[number]['code'];

/* A CLAUSE. One thing a gate refuses, with what it reads to know and what makes it refuse.
 * `rail` is where the answer comes from, and it is the same four words everywhere: the
 * filesystem, ffmpeg pixels, a real browser, the shell. */
export type Clause = {
  name: string;
  reads: string;
  refuses: string;
  rail: 'filesystem' | 'ffmpeg pixels' | 'a real browser' | 'the shell';
};

export type Gate = {
  id: string;
  cmd: string;
  title: string;
  glyph: string;
  /* What the gate does, one sentence. */
  what: string;
  /* The real failure it was built against. Every one has a date on it in the source. */
  incident: string;
  /* What one row of this gate's grid is. */
  unit: string;
  clauses: readonly Clause[];
  exits: readonly ExitCode[];
  usage: string;
  /* One measured fact about this gate, for the rail. */
  measured: string;
};

/* THE FOURTEEN CHECK KINDS, from docs/SPEC.md. Six answer off the filesystem and eight decode
 * real frames through ffmpeg at a small working width. The pixel group exists because the first
 * version of the plan gate was metadata only, and a browser rendering a single h1 passed every
 * check in a full video spec: a text slide and a product demo have identical ffprobe output. */
export const CHECK_KINDS: readonly Clause[] = [
  {
    name: 'files',
    reads: 'how many files a glob matched',
    refuses: 'the count is outside min and max. With neither declared, an empty match still fails: a check that matched nothing has verified nothing.',
    rail: 'filesystem',
  },
  {
    name: 'requires',
    reads: 'the text of every matched file',
    refuses: 'any declared pattern is absent from any matched file. Every pattern must appear in every file.',
    rail: 'filesystem',
  },
  {
    name: 'forbids',
    reads: 'the text of every matched file',
    refuses: 'a banned pattern appears. This is the one that catches a renamed internal service, a placeholder that shipped, a leaked hostname.',
    rail: 'filesystem',
  },
  {
    name: 'pairedFile',
    reads: 'the directory beside every match',
    refuses: 'a match has no companion of the given extension at the same basename. A page without its schema, a clip without its poster frame.',
    rail: 'filesystem',
  },
  {
    name: 'sidecar',
    reads: 'a manifest the producer wrote, by dotted field path',
    refuses: 'the field is missing or is not the declared value. An undeclared capture fails closed, so a runtime value that leaves no trace in the artifact is still caught.',
    rail: 'filesystem',
  },
  {
    name: 'media',
    reads: 'the container: width, height, fps, pixel format',
    refuses: 'a file that is present does not carry the declared mechanics. Every present file is checked exactly as hard whether or not the role is optional.',
    rail: 'filesystem',
  },
  {
    name: 'frameFill',
    reads: 'uniform edge bands, sampled across a time window',
    refuses: 'a band of identical ground spans the full width or height. It measures gutters rather than a content bounding box, because a dark dense interface has its own near-black margins.',
    rail: 'ffmpeg pixels',
  },
  {
    name: 'luminance',
    reads: 'mean frame luma',
    refuses: 'the mean sits outside the declared band. A dark dense product film has a ground; a stock montage does not.',
    rail: 'ffmpeg pixels',
  },
  {
    name: 'accentShare',
    reads: 'the fraction of pixels within tolerance of the accent',
    refuses: 'the share is over the ceiling or under the floor. Absent is a failure too, because an accent that never appears is not a mark.',
    rail: 'ffmpeg pixels',
  },
  {
    name: 'motionFloor',
    reads: 'the area of pixels that changed between sampled frames',
    refuses: 'the clip freezes for longer than the declared hold, or moves for less of its length than declared.',
    rail: 'ffmpeg pixels',
  },
  {
    name: 'textInk',
    reads: 'median text line ink height as a fraction of frame height',
    refuses: 'type inside the declared region and window is set too small to read at the size it ships.',
    rail: 'ffmpeg pixels',
  },
  {
    name: 'markPresent',
    reads: 'normalised cross correlation of a template against sampled frames',
    refuses: 'the mark is absent from a declared window, so an artifact cannot ship a redrawn mark or none at all.',
    rail: 'ffmpeg pixels',
  },
  {
    name: 'cutCadence',
    reads: 'declared seams against real pixel discontinuities',
    refuses: 'a declared seam is not a real cut, an undeclared cut exists, or a held shot is out of range.',
    rail: 'ffmpeg pixels',
  },
  {
    name: 'distinct',
    reads: 'a 32 by 18 grayscale signature of the first frame of every pair',
    refuses: 'two clips are the same clip shipped twice.',
    rail: 'ffmpeg pixels',
  },
] as const;

/* THE SEVEN QUESTIONS THE BROWSER GATE ASKS, from the README's own table. */
export const RENDER_QUESTIONS: readonly Clause[] = [
  {
    name: 'visible',
    reads: 'effective opacity, the whole ancestor chain multiplied',
    refuses: 'text that occupies space is not actually painted.',
    rail: 'a real browser',
  },
  {
    name: 'contrast',
    reads: 'every text run against its computed background',
    refuses: 'a run does not clear WCAG on the ground it is really painted on.',
    rail: 'a real browser',
  },
  {
    name: 'overflow',
    reads: 'document width at every width from 320 to 1920',
    refuses: 'the page scrolls horizontally at any of them.',
    rail: 'a real browser',
  },
  {
    name: 'wrap',
    reads: 'the line box of every nav link, footer link and call to action',
    refuses: 'a label breaks onto a second line.',
    rail: 'a real browser',
  },
  {
    name: 'fold',
    reads: 'the headline and the primary action at 1280 by 800',
    refuses: 'either one sits below the fold.',
    rail: 'a real browser',
  },
  {
    name: 'clipped',
    reads: 'content against the start edge of its own scroll container',
    refuses: 'content is trapped where no scroll position can reach it.',
    rail: 'a real browser',
  },
  {
    name: 'nested',
    reads: 'a real wheel driven over every nested scroll region',
    refuses: 'a region that looks scrollable does not scroll.',
    rail: 'a real browser',
  },
] as const;

const PROMOTE_CLAUSES: readonly Clause[] = [
  {
    name: 'gates run before the promote',
    reads: 'a local production build, served',
    refuses: 'any declared gate finds anything. The finding blocks instead of annotating, because it arrives while the work is still local.',
    rail: 'the shell',
  },
  {
    name: 'a missing gate file is a failure',
    reads: 'every gate path declared in deferless.json',
    refuses: 'a declared gate file is not there. A renamed check that silently stops running is indistinguishable from a check that found nothing.',
    rail: 'the shell',
  },
  {
    name: 'zero gates run is not a pass',
    reads: 'how many gates actually executed',
    refuses: 'the count is zero. If nothing could be checked, the honest answer is that it could not be checked.',
    rail: 'the shell',
  },
];

const DEPLOY_CLAUSES: readonly Clause[] = [
  {
    name: 'a peer is still working',
    reads: 'interactive agent control sockets that hold a TTY',
    refuses: 'another session is live. The deploy registers as pending and exits rather than shipping a tree somebody is still editing.',
    rail: 'the shell',
  },
  {
    name: 'it defers, it does not queue',
    reads: 'the pending register',
    refuses: 'nothing, and that is the point. When the tree goes quiet one pass ships everything pending, once, rather than ten builds of the same repo.',
    rail: 'the shell',
  },
  {
    name: 'a headless lane is not a peer',
    reads: 'whether the socket has a TTY',
    refuses: 'nothing, so a background lane firing constantly cannot keep the tree looking busy forever.',
    rail: 'the shell',
  },
  {
    name: 'a cold heartbeat loses the lock',
    reads: 'the mutex heartbeat',
    refuses: 'a stale holder. A lock with no expiry is how a fleet gets stranded for two days.',
    rail: 'the shell',
  },
  {
    name: 'DEPLOY_NOW overrides the wait',
    reads: 'the environment',
    refuses: 'nothing. It is a way to ship now, not a way to ship a failure: no gate result changes.',
    rail: 'the shell',
  },
];

/* THE FOUR GATES, in the README's own order. */
export const GATES: readonly Gate[] = [
  {
    id: 'check',
    cmd: 'deferless check',
    title: 'The plan gate',
    glyph: 'file-text',
    what: 'Turns an approved plan into something that can refuse output. One check per binding sentence, and the quote field holds that sentence verbatim, so a failure is a quote from something a person approved.',
    incident:
      'A rule stated in prose is checked by the same judgement that just decided to break it. An agent follows a plan for about ninety minutes, hits something the plan did not anticipate, and invents a local fix. The fix builds, it renders, nothing errors. The sentence it contradicted is in a document.',
    unit: 'check kind',
    clauses: CHECK_KINDS,
    exits: ['0', '1', '2', '3'],
    usage: 'deferless check plan.spec.json ./out',
    measured:
      'The first version was metadata only, and a browser rendering a single h1 passed every check in a full video spec. A text slide and a product demo have identical ffprobe output, which is why eight of the fourteen kinds decode real frames.',
  },
  {
    id: 'promote',
    cmd: 'deferless promote',
    title: 'The no deferrals gate',
    glyph: 'seal-check',
    what: 'Runs every gate you declare against a local production build, before anything is promoted.',
    incident:
      'The enabling mechanic for reporting a finding instead of fixing it was ordering, not laziness. The deploy script ran its live checks after the deploy had landed, so by the time a finding appeared the work was live and writing it up was the only remaining move.',
    unit: 'invariant',
    clauses: PROMOTE_CLAUSES,
    exits: ['0', '1', '2'],
    usage: 'deferless init\ndeferless promote',
    measured:
      'Both invariants are tested. Move the checks in front of the promote and the same finding blocks instead of annotates.',
  },
  {
    id: 'render',
    cmd: 'deferless render',
    title: 'The gate that opens the page',
    glyph: 'globe-hemisphere-west',
    what: 'Never reads a file. It takes a URL, drives a real browser, and asks the seven questions a screenshot answers and a grep cannot.',
    incident:
      'Every other gate reads source, and all of them passed on the day a landing page shipped with an invisible hero. The h1 held its animation start frame at opacity 0.001, permanently. The element was in the DOM, at the right size, the right colour, the right position. There is no string to grep for that.',
    unit: 'question',
    clauses: RENDER_QUESTIONS,
    exits: ['0', '1', '2'],
    usage: 'npm i -D playwright && npx playwright install chromium\ndeferless render https://example.com/ --sample 6',
    measured:
      'The sample flag reads the site own sitemap and takes up to N interior pages, one per distinct first path segment, so a sitemap with four thousand URLs of one shape contributes one of them. The sample is a tour of page types rather than N near identical rows.',
  },
  {
    id: 'deploy-gate',
    cmd: 'deferless deploy-gate',
    title: 'The multi agent deploy gate',
    glyph: 'stack-simple',
    what: 'A POSIX shell library for a tree several agent sessions are editing at once. A deploy fired while other sessions are working registers as pending and exits.',
    incident:
      'A queued deploy builds a tree that three other sessions are still editing, ships it, and is stale before it finishes. Ten sessions produce ten builds of the same repo and only the last was ever worth running.',
    unit: 'rule',
    clauses: DEPLOY_CLAUSES,
    exits: ['0', '2'],
    usage: '. node_modules/deferless/sh/deploy-lock.sh\ndeploy_gate my-app\n\nDEPLOY_NOW=1 ./scripts/deploy.sh',
    measured:
      'Forty six regression tests, run under both bash and zsh. The worst bug this gate ever had was invisible in bash: zsh scopes a trap EXIT set inside a function to that function, so installing the release trap inside the acquire helper deleted the lock the instant it was taken. Two deploys then ran straight through each other while the code looked correct.',
  },
] as const;

export const GATE_IDS = GATES.map((g) => g.id);

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

/* THE HONEST LIMITATIONS, from the README section of that name. They are on this site because
 * the README puts them on its own front, and a page that drops them describes a different
 * package. */
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
    say: 'Their thresholds are calibrated for dark, dense product interfaces. Recalibrate them against your own reference material rather than trusting the defaults. The source says where every number came from.',
  },
  {
    id: 'playwright',
    head: 'The browser gate needs Playwright',
    say: 'And it takes real seconds per page.',
  },
  {
    id: 'shell',
    head: 'The deploy gate is macOS and Linux shell',
    say: 'It detects agent sessions specifically. The socket directory is configurable, and other agent runners need a small patch.',
  },
] as const;

/* WHAT IS DIFFERENT, from the README section of that name. */
export const PRIOR_ART = {
  before:
    'Pre-action authorization plugins, policy gateways, runtime interception and approval steps in front of every tool call all sit before the agent acts, and they answer whether an action is allowed.',
  after:
    'These gates sit after, and answer a different question: does the artifact that came out match the thing that was agreed, and did anything get quietly left behind on the way. No amount of pre-action policy answers that, because every individual action was allowed.',
} as const;

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
  yamlShare: '88.4%',
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
  {
    id: 'questions',
    claim: 'The browser gate asks seven questions per page.',
    quote: 'Seven questions per page: visible, contrast, overflow, wrap, fold, clipped, nested.',
    cite: 'README, The gate that opens the page',
    url: 'https://github.com/kyisaiah47/deferless',
    read_at: '2026-09-21',
  },
  {
    id: 'prior-art',
    claim: 'These gates sit after the agent acts, where pre-action policy cannot answer.',
    quote:
      'those all sit before the agent acts, and they answer is this action allowed. These gates sit after, and answer a different question',
    cite: 'README, Prior art, and what is different',
    url: 'https://github.com/kyisaiah47/deferless',
    read_at: '2026-09-21',
  },
] as const;
