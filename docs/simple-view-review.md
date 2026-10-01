# deferless-site: Simple view review

Branch `simple-view`. Built fresh on 2026-10-01 from `5becfda`, which reverted the unapproved
commit `1470304`. Nothing from that commit is reused. Not deployed: the 00:30 sweep deploys
`master`, and this branch is not merged.

## Truth map (blueprint 2.A)

Sources read: `src/lib/product.ts`, `src/lib/demo.ts`, `src/components/Console.tsx`,
`src/app/{page,kinds/page,method/page}.tsx`, `~/CompoundLabs/deferless/README.md`.

| Field | Value | Source |
| --- | --- | --- |
| Primary user | A person who hands work to an AI coding agent and approves a plan first | README, "The thing this is actually about" |
| Problem | The agent breaks a sentence of the approved plan, and nothing in the pipeline notices | README |
| Input | No form. The first action is one command, `npx deferless demo` | `PRODUCT.install` |
| Action | Copy the command and run it in a terminal | README, Install |
| Output | The demo checks two folders against one plan. One passes 5 of 5 checks. One breaks 5 plan sentences and exits 1 | `DEMO_OUTPUT`, captured by `scripts/capture.mjs` |
| Free / paid | Free. MIT licence. Nothing is for sale, so there is no paid step | `PRODUCT.licence`, README |
| Next step | `npm i -D deferless`, write `spec.json`, run `deferless check plan.spec.json ./out` | README, Install and The four gates |
| Timing | The demo runs locally. The browser gate takes real seconds per page | `LIMITS` |
| Limits | Five stated limitations | `LIMITS` |
| Permissions | None. No account, no network write from the site | the site has no API routes |
| Failure states | Exit 1 violated, exit 2 could not run, exit 3 never produced. 2 never reads as 0 | `EXITS` |
| Recovery | No account to recover. 404 gets a recovery page with links | new `src/app/not-found.tsx` |
| Shared state | The only control is the Console gate picker (local state). Simple has a copy button | `Console.tsx` |

How it differs from CiteRank: there is no input field, no request, no result and no checkout.
The action card holds the product's real first action, which is a command a reader runs. The
example result is the package's own captured demo output, read line by line from `DEMO_OUTPUT`,
never retyped. The paid step is replaced by the free "use it on your plan" steps, because
nothing is for sale.

## Route inventory (blueprint 2.E)

| Route | Class | Simple surface |
| --- | --- | --- |
| `/` | curated | `SimpleHome`: hero, command card, captured example, steps, gates, questions |
| `/kinds` | readable adaptation | `SimpleKinds`: one card per gate, clauses behind a disclosure |
| `/method` | readable adaptation | `SimpleMethod`: spec, exit codes, census, limits, sources |
| `/_not-found` | recovery | new `not-found.tsx`, both views |
| `/llms.txt`, `/robots.txt`, `/sitemap.xml` | machine | unchanged |

There is no pricing, help, dashboard or account route in this product. Help questions sit on the
Simple home as disclosures.

## State

- `deferless:view` and `deferless:welcome-off` in localStorage, every access in try/catch.
- Valid `?view=simple|console` wins, then the saved view, then Console.
- `?welcome=0` skips the automatic welcome for one visit.
- No middleware or crawl guard exists in this tree, so display parameters reach the page.

## Verification receipt, 2026-10-01

- `npx tsc --noEmit`: clean.
- `npm run check` (register gate): 20 held, 0 refused. It refused one em dash in the Open Graph
  title from `7cf083a`, which is also on `master`. This branch replaces it with a colon.
- `npm run build`: 11 static pages.
- `node scripts/verify-simple-view.mjs http://localhost:3305 <shots>` at 1440: 30 held, 0 refused.
  It covers the welcome (auto open, Escape, backdrop, Start here, suppression across reload), view
  precedence, param preservation, one header, main and footer, h1 63px, a 17px command field, the
  action above the fold, the clipboard copy, disclosure semantics, inert closed bodies, 404 recovery,
  and the Console home keeping its masthead, frame and the new footer view controls.
- `node scripts/mobile-gate.mjs`: 10 held, 0 refused. No page overflows at 390 in either view,
  including with every disclosure on the Simple home open. The welcome fits and scrolls. The gate
  measures widths only and takes no screenshots.
- `contrast.mjs` on `/?view=simple&welcome=0` at 1440: 0 findings.
- Mocked: nothing needed mocking. The site has no API routes, forms, checkout or email. The mailto
  address is read from the DOM, and every page carries the safe-chrome click guard.
- Not verified: Safari and Brave rendering (Chromium only), and a real terminal run of
  `npx deferless demo` from the copy button.

Screens: `compound-ops/standards/simple-view-ref/review/deferless-site-{welcome,simple-home,simple-example-open,simple-kinds,simple-method,console-home}.png`.
