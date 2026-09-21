/* SHOOT THE PAGE AT 1440 INTO review/.
 *
 *   node scripts/shoot.mjs [baseUrl]
 *
 * ⛔ DESKTOP ONLY, AND THIS SCRIPT HAS NO PHONE MODE AT ALL. No capture of this product or of
 * any site is taken at a phone viewport. The phone SHAPE is a measurement rather than a
 * picture, and the estate already owns the tool that takes it, so this file does not
 * re-implement one:
 *
 *   node ~/CompoundLabs/compound-ops/tools/gates/mobile-shape.mjs <url>
 *   node ~/CompoundLabs/compound-ops/tools/gates/lenis-nested-scroll.mjs <url>
 *
 * ⛔ TILED, NEVER fullPage. A fullPage capture paints white past about 8192 CSS px, so a long
 * page comes back half blank and the blank half reads as a rendering bug that is not there.
 * This scrolls a viewport at a time and writes one tile per screen, which is also the only
 * form a reader can actually look at.
 *
 * Nothing is selected in a capture. Selection is disabled on the page before the shot, and no
 * recorder in this tree ever drag selects text.
 */
import { createRequire } from 'node:module';
import { mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { launchSafe } from '/Users/admin/CompoundLabs/compound-ops/tools/lib/safe-chrome.mjs';

const require = createRequire('/Users/admin/CompoundLabs/compound-ops/package.json');
const puppeteer = require('puppeteer-core');

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'review');
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const BASE = process.argv.slice(2).find((a) => a.startsWith('http')) ?? 'http://localhost:3305';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await launchSafe(puppeteer, { headless: true });
const page = await browser.newPage();
await page.evaluateOnNewDocument(() => {
  const s = document.createElement('style');
  s.textContent = '*{user-select:none!important} ::selection{background:transparent!important}';
  document.addEventListener('DOMContentLoaded', () => document.head.appendChild(s));
});

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(BASE + '/', { waitUntil: 'networkidle2', timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await wait(400);

const total = await page.evaluate(() => document.documentElement.scrollHeight);
const tiles = Math.ceil(total / 900);
for (let i = 0; i < tiles; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * 900);
  await wait(260);
  await page.screenshot({ path: resolve(OUT, `home-${String(i + 1).padStart(2, '0')}.png`) });
}

/* The sideways scroll check belongs with the capture because it is free here and it is the one
 * defect a tile cannot show: a document 12px wider than its viewport looks identical in a
 * screenshot and is broken in a browser. */
const sideways = await page.evaluate(() => {
  const d = document.documentElement;
  return { clientWidth: d.clientWidth, scrollWidth: d.scrollWidth };
});

process.stdout.write(
  `shot ${tiles} tile(s) at 1440, page is ${total}px tall, ` +
    `document ${sideways.scrollWidth} in ${sideways.clientWidth}\n`,
);
await browser.close();
if (sideways.scrollWidth > sideways.clientWidth + 1) {
  process.stderr.write('the document scrolls sideways at 1440\n');
  process.exit(1);
}
