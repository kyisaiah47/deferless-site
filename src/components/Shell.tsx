import Link from 'next/link';
import AppSwitch from './AppSwitch';
import AppStrip from './AppStrip';
import { Icon } from './Icon';
import { PRODUCT, READS, READ_ON } from '@/lib/product';

/* THE TOP RULE, THE MASTHEAD AND THE FOOTER.
 *
 * THE TOP RULE'S UNIT IS A CELL, never a run of comma separated strings. Each cell is one read:
 * the thing on the left in reading ink, what the thing is on the right in dim ink, and the day
 * it was opened. A path with no sentence beside it tells a reader nothing.
 *
 * THE DESTINATIONS ARE THREE PAGES, each with its own Phosphor glyph. The console is what the
 * gates do, the kinds page is every clause in one grid, the method page is how a plan becomes
 * something that can refuse and where every claim on this site came from. */
const NAV: { href: string; label: string; glyph: string }[] = [
  { href: '/', label: 'The gates', glyph: 'terminal-window' },
  { href: '/kinds', label: 'Every clause', glyph: 'table' },
  { href: '/method', label: 'Method', glyph: 'file-text' },
];

export function Rule() {
  return (
    <div className="strip rule" role="region" tabIndex={0} aria-label="What this page was read from">
      <div className="in">
        {READS.map((r) => (
          <span className="rule-cell" key={r.it}>
            <b>{r.it}</b> {r.is}
          </span>
        ))}
        <span className="rule-cell"><i>all read {READ_ON}</i></span>
      </div>
    </div>
  );
}

export function Masthead({ here }: { here: string }) {
  return (
    <header className="strip mast">
      <div className="in">
        <div className="mast-lock">
          <Link className="mast-id" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mk" src="/mark.svg" alt="" width={24} height={24} />
            <strong>{PRODUCT.name}</strong>
          </Link>
          <AppSwitch />
        </div>
        <span className="mast-standing">{PRODUCT.standing}</span>
        <nav className="mast-nav" aria-label="Sections">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={here === n.href ? 'page' : undefined}>
              <Icon name={n.glyph} />
              {n.label}
            </Link>
          ))}
        </nav>
        <span className="live">
          <i className="dot" />
          published {PRODUCT.version}
        </span>
        <a className="mast-cta" href={`${PRODUCT.npm}`} rel="noopener">
          <Icon name="lightning" />
          {PRODUCT.install}
        </a>
      </div>
      <AppStrip />
    </header>
  );
}

export function Footer({ readAt }: { readAt: string }) {
  const year = new Date().getUTCFullYear();
  return (
    <>
      <footer className="strip foot">
        <div className="in">
          <div>
            <h4>The package</h4>
            <ul>
              <li><a href={PRODUCT.npm} rel="noopener">deferless on npm</a></li>
              <li><a href={PRODUCT.repo} rel="noopener">Source on GitHub</a></li>
              <li><a href={`${PRODUCT.repo}/blob/main/LICENSE`} rel="noopener">MIT licence</a></li>
            </ul>
          </div>
          <div>
            <h4>The gates</h4>
            <ul>
              <li><Link href="/kinds">Every clause, in one grid</Link></li>
              <li><Link href="/method#exits">What each exit code means</Link></li>
              <li><a href={`${PRODUCT.repo}/blob/main/docs/SPEC.md`} rel="noopener">The spec format</a></li>
            </ul>
          </div>
          <div>
            <h4>Method</h4>
            <ul>
              <li><Link href="/method#spec">How a plan becomes a refusal</Link></li>
              <li><Link href="/method#limits">What this does not do</Link></li>
              <li><Link href="/method#sources">Where every claim came from</Link></li>
            </ul>
          </div>
          <div>
            <h4>Compound Labs</h4>
            <ul>
              <li><a href="https://thecompound.tech" rel="noopener">thecompound.tech</a></li>
              <li><a href="mailto:hello@thecompound.tech">hello@thecompound.tech</a></li>
              <li><a href="https://toolproof.thecompound.tech" rel="noopener">Toolproof</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="strip foot-line">
        <div className="in">
          {/* LAYER 2 OF THE STUDIO CREDIT. "Built by" is live text and the studio's name is
              never typed beside it, because the name is inside the picture and
              alt="Compound Labs" is its machine readable copy. */}
          <a
            className="credit"
            href={`https://thecompound.tech/?utm_source=${PRODUCT.slug}&utm_medium=studio_credit`}
            rel="noopener"
          >
            Built by
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="studio-credit-mark" src="/brand/compound-labs.svg" alt="Compound Labs" width={80} height={20} />
          </a>
          {/* LAYER 3. The copyright line names the studio in live text, so the page still
              carries the name for a reader who loads no images. */}
          <span>{'©'} {year} {PRODUCT.name}. A Compound Labs product.</span>
          <span>Every sentence on this page was read {readAt}.</span>
        </div>
      </div>
    </>
  );
}
