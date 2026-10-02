# deferless-site

The published page for the `deferless` npm package runs in its own Next.js tree and uses its own
register. This app imports nothing from another product's repo. This app writes its own
`src/app/globals.css` and components. This app has no shared shell or component library. The
four repos were backed up and purged on 2026-09-14. Each app now has its own tree.

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

The site is not deployed yet. The Worker has never been published. `deferless.thecompound.tech`
does not serve. The estate deploys on the 00:30 nightly sweep. After the Worker exists on the
account, `~/CompoundLabs/compound-ops/tools/new-product.sh deferless-site` attaches the custom
domain and its exact route. That command determines whether the host serves.

## The register

The accent is `#33C9C4`. Its OKLCH values are L 0.760, C 0.120 and h 191.6. The derivation uses
arithmetic rather than taste. The estate read every chromatic product accent on 2026-09-21 from
`~/.codex/skills/3d-image-gen/product-palette.json`. StoreReady uses its repo's citron.
ShelfCite and EntryLine use values from their own `globals.css` files because they post-date the
registry. The set contains 48 chromatic accents. The widest empty arc on the ring spans 27.4
degrees between StillShipping h 177.9 and BlockDex h 205.3. h 191.6 is that arc's midpoint. The
next widest slot spans 21.6 degrees. The accent measures 9.70:1 on the ground and 9.18:1 on the
panel. `check-register.mjs` re-derives the ring on every run.

The accent marks the reader's current action, not a verdict. The accent appears on the install
line, the focus ring and an anchor. The product distinguishes pass, fail and could not run. An
accent on a result would create a fourth ambiguous state. The four status inks represent the four
exit codes. No other element uses them.

**Two faces, and the split is the subject.** BDO Grotesk sets anything a person wrote. IBM Plex
Mono sets anything a machine wrote or a person types at a machine. Nothing is set in mono for
texture.

## The terminal block comes from a capture.

`scripts/capture.mjs` writes `src/lib/demo.ts`. It runs the installed package and removes
terminal colour from its stdout before freezing the result. A page that retypes the program's
output can drift when the program changes a word. The page can still show the drift without an
error.

Two checks keep the capture faithful.

- The capture merges stderr. `deferless demo` writes its narration to stdout and its entire
  failing half to stderr. The first capture read stdout alone. It returned 29 of the 44 lines,
  omitted all five violations and reported a clean run.
- Rule 6 of the register gate re-runs the package and compares the bytes. This gives rule 1 its
  one exclusion. The gate rejects a dash wider than a hyphen anywhere this tree writes. The gate
  skips `demo.ts` because the program itself prints the wider dash. A hand-edited byte fails rule
  6.

The package emits a module instead of a data file because the Worker has no filesystem. On
shelfcite, measured on 2026-09-19, a page that reads `data/` at request time returns 200 in
development and 500 in production.

## The Compound Labs credit has four layers.

1. **Entity.** `src/app/layout.tsx` references the apex Organization by
   `@id: https://thecompound.tech/#organization`. The page never
   declares a local Organization.
2. The mark is `public/brand/compound-labs.svg`. Its bytes match
   `compound-ops/brand/compound-labs/logo/compound-labs.svg` with md5
   `1778f602679101a49bbdbdc3dab1ea83`. The mark occupies an 80x20 box with both dimensions
   declared. Its exact alt text is `alt="Compound Labs"`. The words "Built by" remain live
   text. The page does not type the studio's name beside the mark because the name appears
   inside the image and the alt text provides its machine-readable copy.
3. The live copyright text is `A Compound Labs product.`
4. **Contact.** `hello@thecompound.tech` in the footer.

Rule 8 of the register gate checks all four credit layers on their owning elements. It
compares the mark's BYTES instead of its filename. A red-diamond cube once shipped across the
estate under this exact filename. A filename check would not have detected it.

## This tree passes these gates.

`npm run check` blocks the deploy. `scripts/deploy.sh` runs it before the build and promote. The
estate ran its own gates against the rendered page on 2026-09-21. All four gates passed.

    node ~/CompoundLabs/compound-ops/tools/gates/contrast.mjs            http://localhost:3305/ --vw 1440
    node ~/CompoundLabs/compound-ops/tools/gates/mobile-shape.mjs        http://localhost:3305/
    node ~/CompoundLabs/compound-ops/tools/gates/lenis-nested-scroll.mjs http://localhost:3305/
    node ~/CompoundLabs/compound-ops/tools/gates/figure-not-full-column.mjs http://localhost:3305/ --vw 1440

`mobile-shape` found four real defects on its first pass. The fixes are commented where they
landed. Two code fences scrolled sideways without indicating that the track continued. Three
groups of tap targets were below the WCAG 2.5.8 floor.

## This tree does not contain these files or options.

The tree has no `--force`, allowlist or known-issues file. Rule 12 of the register gate
requires the gate to read no command line arguments. The gate therefore has no command-line
escape.
