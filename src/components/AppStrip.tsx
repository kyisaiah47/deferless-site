import FAMILY from '@/lib/app-family.json';

/* THE APP STRIP, the row inside the masthead that the switch beside the mark opens: COMPOUND
 * LABS, which links to the lab's site, the name of this app's family under it, and every app in
 * that family with its own mark.
 *
 * The list is src/lib/app-family.json, written by compound-ops/roster/build-app-family.mjs, with
 * every mark inlined as a data URI so opening the strip loads nothing from the other hosts.
 * Nothing filters this app out of its own copy: every app in a family carries the same list, so
 * a reader learns the category once. */
export default function AppStrip() {
  return (
    <div className="apps" id="app-strip">
      <div className="apps-in">
        <nav className="apps-row" aria-label="Compound Labs apps">
          <div className="apps-lab">
            <a href="https://thecompound.tech" rel="noopener">COMPOUND LABS</a>
            <b>{FAMILY.label.toUpperCase()}</b>
          </div>
          <div className="apps-list">
            {FAMILY.apps.map((a) => (
              <a key={a.slug} className="app" href={a.url} rel="noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.logo} alt="" width={16} height={16} />
                <span>{a.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
