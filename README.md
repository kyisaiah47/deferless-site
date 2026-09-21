# deferless-site

The published page for the `deferless` npm package, on its own clean Next.js tree with its own
register. Nothing here is imported from another product's repo: this app writes its own
`src/app/globals.css` and its own components. There is no shared shell and no component library;
those four repos were backed up and purged on 2026-09-14 and every app is its own tree.

    npm install
    npm run dev               # port 3305, reserved in compound-ops/dev/ports.json
    npm run check             # the register gate, fails closed
    npm run capture           # re-freeze `deferless demo` output into src/lib/demo.ts
    npm run icons             # re-vendor the Phosphor Regular glyphs into vendor/phosphor/
    npm run shoot             # shoot the page at 1440 into review/
    ./scripts/deploy.sh       # gate, build, deploy, populate, verify

**The subject is `~/CompoundLabs/deferless`**, the published package at
<https://www.npmjs.com/package/deferless> and <https://github.com/kyisaiah47/deferless>. Every
sentence on the page is either that README's own or a fact with a row in `SOURCES`, and
`scripts/check-register.mjs` refuses one without a row.

**Not deployed yet.** The Worker has never been published, so `deferless.thecompound.tech` is not
serving. The estate deploys on the 00:30 nightly sweep. Once the Worker exists on the account,
`~/CompoundLabs/compound-ops/tools/new-product.sh deferless-site` attaches the custom domain and
its exact route, which is the step that decides whether the host serves at all.

## The register

**The accent is `#33C9C4`**, OKLCH L 0.760 C 0.120 h 191.6, and the derivation is arithmetic
rather than taste. Every chromatic product accent on the estate was read on 2026-09-21 from
`~/.codex/skills/3d-image-gen/product-palette.json`, with StoreReady corrected to its repo's own
citron and ShelfCite and EntryLine added from their own `globals.css` because they post-date the
registry. That is 48 chromatic accents. The widest empty arc left on the ring runs 27.4 degrees
between StillShipping h 177.9 and BlockDex h 205.3, and h 191.6 is its midpoint. The next widest
slot offers 21.6. It measures 9.70:1 on the ground and 9.18:1 on the panel. `check-register.mjs`
re-derives the ring on every run rather than trusting this paragraph.

**The accent paints what the reader is doing, never a verdict.** The install line, the focus ring,
an anchor. This product's whole subject is the difference between pass, fail and could not run, so
an accent that also appeared on a result would make a fourth ambiguous state. The four status inks
are the four exit codes and nothing else uses them.

**Two faces, and the split is the subject.** BDO Grotesk sets anything a person wrote. IBM Plex
Mono sets anything a machine wrote or a person types at a machine. Nothing is set in mono for
texture.

## The terminal block is captured, never typed

`src/lib/demo.ts` is written by `scripts/capture.mjs`, which runs the installed package and
freezes its stdout with the terminal's colour removed and nothing else touched. A page that
retypes a program's output drifts from it the first time the program changes a word, and nothing
errors when it does: the block still looks like output.

Two things make that capture honest rather than decorative:

- **stderr is merged.** `deferless demo` writes its narration to stdout and the whole failing half
  to stderr. The first cut of the capture took stdout alone, came back with 29 of the 44 lines and
  none of the five violations, and reported a clean run.
- **rule 6 of the register gate re-runs the package and byte-compares.** That is what earns rule
  1's one exclusion: the gate refuses a dash wider than a hyphen anywhere this tree wrote, and
  `demo.ts` is skipped because the program itself prints one. Nothing can be smuggled through that
  hole by hand, because a hand-edited byte fails rule 6.

It emits a module rather than a data file because the Worker has no filesystem. Measured on
shelfcite, 2026-09-19: a page reading `data/` at request time answers 200 in dev and 500 in
production.

## The Compound Labs credit, four layers

1. **Entity.** `src/app/layout.tsx` references the apex Organization by
   `@id: https://thecompound.tech/#organization`. Never a local Organization declaration.
2. **The mark.** `public/brand/compound-labs.svg`, byte-identical to
   `compound-ops/brand/compound-labs/logo/compound-labs.svg` (md5
   `1778f602679101a49bbdbdc3dab1ea83`), drawn in an 80x20 box with both dimensions declared and
   `alt="Compound Labs"` exactly. The words "Built by" stay live text and the studio's name is
   never typed beside the mark, because it is inside the picture and the alt is its machine
   readable copy.
3. **The copyright line**, in live text: `A Compound Labs product.`
4. **Contact.** `hello@thecompound.tech` in the footer.

Rule 8 of the register gate asserts all four on the elements that hold them, and compares the
mark's BYTES rather than its filename: a red-diamond cube once shipped estate wide under this
exact filename, so no name test could have seen it.

## Gates this tree passes

`npm run check` is the one that blocks the deploy, and `scripts/deploy.sh` runs it in front of the
build rather than after the promote. The estate's own gates were run against the rendered page on
2026-09-21 and all four are clean:

    node ~/CompoundLabs/compound-ops/tools/gates/contrast.mjs            http://localhost:3305/ --vw 1440
    node ~/CompoundLabs/compound-ops/tools/gates/mobile-shape.mjs        http://localhost:3305/
    node ~/CompoundLabs/compound-ops/tools/gates/lenis-nested-scroll.mjs http://localhost:3305/
    node ~/CompoundLabs/compound-ops/tools/gates/figure-not-full-column.mjs http://localhost:3305/ --vw 1440

`mobile-shape` found four real defects on the first pass and each fix is commented where it
landed: two code fences scrolling sideways with nothing saying the track continued, and three
groups of tap targets under the WCAG 2.5.8 floor.

## What is not here

No `--force`, no allowlist, no known-issues file, and rule 12 of the register gate asserts that
the gate itself reads no command line arguments at all, so it cannot be given an escape by any
spelling. A site about a package that refuses those three would be arguing with its own subject.
