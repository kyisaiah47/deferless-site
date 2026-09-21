import { Rule, Masthead, Footer } from '@/components/Shell';
import { Console } from '@/components/Console';
import { PRODUCT, BADGES, READ_ON } from '@/lib/product';

/* THE CONSOLE PAGE. The order is the dev apps' own: the read, the masthead, what this page
 * holds, the claim beside its evidence, the one control, then rail, track, rail. */
export default function Page() {
  return (
    <>
      <Rule />
      <Masthead here="/" />
      <Console>
        <div className="strip head">
          <div className="in">
            <div>
              {/* ⛔ NO GLYPH INSIDE THE SENTENCE. The dev apps that put a mark in a headline put
                  a VENDOR's mark there because the sentence names that vendor: CiteRank names five
                  engines, BreachProbe names four builders. This sentence names nobody, so a glyph
                  in it is texture. */}
              <h1>Fail closed gates for work an AI agent did on your behalf.</h1>
              <p className="lede">
                A plan it cannot quietly deviate from, and findings it cannot defer to you.
              </p>
              <p className="badges">
                {BADGES.map((b) => (
                  <a key={b.id} href={b.href} rel="noopener" title={b.say}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.src} alt={b.alt} height={20} />
                  </a>
                ))}
              </p>
            </div>
            <dl className="facts">
              <div className="facts-row">
                <dt>published</dt>
                <dd><a href={PRODUCT.npm} rel="noopener">{PRODUCT.version}</a></dd>
              </div>
              <div className="facts-row">
                <dt>licence</dt>
                <dd>{PRODUCT.licence}</dd>
              </div>
              <div className="facts-row" data-ink="pass">
                <dt>runtime dependencies</dt>
                <dd>0</dd>
              </div>
              <div className="facts-row">
                <dt>node</dt>
                <dd>18 or newer</dd>
              </div>
            </dl>
          </div>
        </div>
      </Console>
      <Footer readAt={READ_ON} />
    </>
  );
}
