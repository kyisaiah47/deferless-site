import { Icon } from './Icon';
import { PRODUCT } from '@/lib/product';

/* THE MASTHEAD AND THE FOOTER. One sticky strip at the top naming the package and its one
 * refusal, one strip at the bottom carrying the Compound Labs credit.
 *
 * THE DESTINATIONS ARE SECTIONS OF ONE PAGE, because this product is one package with one
 * README and inventing routes for it would be inventing a product. The two outward links are
 * where the thing actually lives: the repo and the registry.
 */
const NAV: { href: string; label: string; glyph: string }[] = [
  { href: '#output', label: 'Output', glyph: 'terminal-window' },
  { href: '#gates', label: 'Gates', glyph: 'stack-simple' },
  { href: '#exits', label: 'Exit codes', glyph: 'list-numbers' },
];

export function Masthead() {
  return (
    <header className="strip mast">
      <div className="in">
        <a className="mast-id" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="mk" src="/mark.svg" alt="" width={22} height={22} />
          <strong>{PRODUCT.name}</strong>
        </a>
        <span className="mast-standing">{PRODUCT.standing}</span>
        <nav className="mast-nav" aria-label="Sections">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              <Icon name={n.glyph} />
              <span>{n.label}</span>
            </a>
          ))}
          <a href={PRODUCT.repo} rel="noopener">
            <span>GitHub</span>
          </a>
          <a href={PRODUCT.npm} rel="noopener">
            <span>npm</span>
          </a>
        </nav>
        <a className="mast-cta" href="#output">
          <Icon name="lightning" />
          {PRODUCT.install}
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  const year = new Date().getUTCFullYear();
  return (
    <>
      <footer className="strip foot">
        <div className="in">
          <div className="foot-col">
            <h4>THE PACKAGE</h4>
            <ul>
              <li>
                <a href={PRODUCT.npm} rel="noopener">
                  deferless on npm
                </a>
              </li>
              <li>
                <a href={PRODUCT.repo} rel="noopener">
                  Source on GitHub
                </a>
              </li>
              <li>
                <a href={`${PRODUCT.repo}/blob/main/LICENSE`} rel="noopener">
                  MIT licence
                </a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>THE DOCS</h4>
            <ul>
              <li>
                <a href={`${PRODUCT.repo}/blob/main/docs/SPEC.md`} rel="noopener">
                  Every check kind
                </a>
              </li>
              <li>
                <a href={`${PRODUCT.repo}/blob/main/docs/PRINCIPLES.md`} rel="noopener">
                  What a patch may not add
                </a>
              </li>
              <li>
                <a href={`${PRODUCT.repo}/blob/main/CONTRIBUTING.md`} rel="noopener">
                  Writing a new check kind
                </a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>ON THIS PAGE</h4>
            <ul>
              <li>
                <a href="#output">What it prints</a>
              </li>
              <li>
                <a href="#gates">The four gates</a>
              </li>
              <li>
                <a href="#sources">Where every claim came from</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>COMPOUND LABS</h4>
            <ul>
              <li>
                <a href="https://thecompound.tech" rel="noopener">
                  thecompound.tech
                </a>
              </li>
              <li>
                <a href="mailto:hello@thecompound.tech">hello@thecompound.tech</a>
              </li>
              <li>
                <a href="https://toolproof.thecompound.tech" rel="noopener">
                  Toolproof
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="strip foot-line">
        <div className="in">
          {/* LAYER 2 OF THE CREDIT. "Built by" is live text and the studio's name is never typed
              beside it, because the name is inside the picture and alt="Compound Labs" is its
              machine readable copy. Both dimensions are declared so the bar does not reflow. */}
          <a
            className="credit"
            href={`https://thecompound.tech/?utm_source=${PRODUCT.slug}&utm_medium=studio_credit`}
            rel="noopener"
          >
            Built by
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="studio-credit-mark"
              src="/brand/compound-labs.svg"
              alt="Compound Labs"
              width={80}
              height={20}
            />
          </a>
          {/* LAYER 3. The copyright line names the studio in live text, so the page still
              carries the name for a reader who loads no images. */}
          <span>
            {'©'} {year} {PRODUCT.name}. A Compound Labs product.
          </span>
        </div>
      </div>
    </>
  );
}
