import type { Metadata } from 'next';
import { Rule, Masthead, Footer } from '@/components/Shell';
import { Folio } from '@/components/Folio';
import { Icon } from '@/components/Icon';
import {
  PRODUCT,
  READ_ON,
  SPEC_SAMPLE,
  EXITS,
  LIMITS,
  REFUSALS,
  PRIOR_ART,
  CENSUS,
  SOURCES,
} from '@/lib/product';


export const metadata: Metadata = {
  title: 'Method',
  description:
    'How an approved plan becomes something that can refuse output, what each exit code means, what these gates do not do, and where every claim on this site was read from.',
};

/* THE METHOD PAGE. How a plan becomes a refusal, what the exits mean, what this does not do,
 * and the source row behind every claim. A claim with no row here does not go on a page, and
 * scripts/check-register.mjs refuses one. */
export default function Page() {
  return (
    <>
      <Rule />
      <Masthead here="/method" />
      <Folio
        cells={[
          { k: 'exit codes', n: EXITS.length },
          { k: 'things that do not exist', n: REFUSALS.length },
          { k: 'stated limitations', n: LIMITS.length },
          { k: 'sources, each with a quote and a date', n: SOURCES.length },
          { k: 'published version', v: PRODUCT.version },
        ]}
      />
      <div className="strip head">
        <div className="in">
          <div>
            <h1>A rule stated in prose is checked by the judgement that just broke it.</h1>
            <p className="lede">
              So none of these gates ask. They remove the state that made the deviation possible,
              and they exit non zero.
            </p>
          </div>
          <dl className="facts">
            {EXITS.map((e) => (
              <div className="facts-row" key={e.code}>
                <dt>{e.name}</dt>
                <dd><span className="st" data-ink={e.ink}><b>{e.code}</b></span></dd>
              </div>
            ))}
            <div className="facts-row">
              <dt>stated limitations</dt>
              <dd>{LIMITS.length}</dd>
            </div>
            <div className="facts-row">
              <dt>sources</dt>
              <dd>{SOURCES.length}</dd>
            </div>
            <div className="facts-row">
              <dt>read</dt>
              <dd>{READ_ON}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="frame">
        <aside className="rail">
          <section>
            <h3><Icon name="list-numbers" className="" /> On this page</h3>
            <div className="rail-row"><span className="t"><Icon name="file-text" className="" /><a href="#spec">the spec</a></span></div>
            <div className="rail-row"><span className="t"><Icon name="list-numbers" className="" /><a href="#exits">exit codes</a></span></div>
            <div className="rail-row"><span className="t"><Icon name="table" className="" /><a href="#census">the count</a></span></div>
            <div className="rail-row"><span className="t"><Icon name="warning-circle" className="" /><a href="#limits">limitations</a></span></div>
            <div className="rail-row"><span className="t"><Icon name="check" className="" /><a href="#sources">sources</a></span></div>
          </section>
          <section>
            <h3>The package</h3>
            <div className="rail-row"><span className="t">version</span><span>{PRODUCT.version}</span></div>
            <div className="rail-row"><span className="t">licence</span><span>{PRODUCT.licence}</span></div>
            <div className="rail-row"><span className="t">runtime deps</span><span>0</span></div>
            <div className="rail-row"><span className="t">node</span><span>18+</span></div>
          </section>
        </aside>

        <main className="track">
          <section className="band" id="spec">
            <div className="band-head">
              <span className="eyebrow">written</span>
              <h2>How a plan becomes a refusal</h2>
              <span className="n">spec.json</span>
            </div>
            <p>
              You write a spec.json beside the approved plan, with one check per binding sentence.
              The quote field holds that sentence verbatim, and the gate prints it back when the
              check fails. Nothing here infers a check from prose.
            </p>
            <pre className="spec" tabIndex={0}>{SPEC_SAMPLE}</pre>
            <p style={{ marginTop: 16 }}>
              Run it against the output directory. A spec with no checks cannot pass, and an
              unknown check kind fails rather than skips.
            </p>
            <pre className="cmd" tabIndex={0}>{'deferless check plan.spec.json ./out'}</pre>
          </section>

          <section className="band" id="exits">
            <div className="band-head">
              <span className="eyebrow">exits</span>
              <h2>Exit codes</h2>
              <span className="n">{EXITS.length} codes</span>
            </div>
            <p>
              2 is the one that matters. Could not check and checked and it was fine are different
              answers, and a pipeline that renders them both as green has taught itself to ignore
              the gate.
            </p>
            <div className="grid-wrap">
              <table className="grid">
                <thead>
                  <tr>
                    <th className="k">code</th>
                    <th className="k">means</th>
                    <th>What it says</th>
                  </tr>
                </thead>
                <tbody>
                  {EXITS.map((e) => (
                    <tr key={e.code}>
                      <td className="k"><span className="st" data-ink={e.ink}><b>{e.code}</b></span></td>
                      <td className="k">{e.name}</td>
                      <td className="w">{e.say}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="band" id="census">
            <div className="band-head">
              <span className="eyebrow">counted</span>
              <h2>How often this happens, counted</h2>
              <span className="n">CC BY 4.0, with a DOI</span>
            </div>
            <p>{CENSUS.say}</p>
            <div className="led-wrap">
              <table className="led">
                <thead>
                  <tr><th>Source</th><th>Where</th></tr>
                </thead>
                <tbody>
                  {CENSUS.links.map((l) => (
                    <tr key={l.href}>
                      <td className="w">{l.label}</td>
                      <td><a href={l.href} rel="noopener">{l.href}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="band" id="limits">
            <div className="band-head">
              <span className="eyebrow">stated</span>
              <h2>What these gates do not do</h2>
              <span className="n">{LIMITS.length} limitations</span>
            </div>
            <p>
              The README puts these on its own front, so this page carries them. A page that drops
              them describes a different package.
            </p>
            <div className="grid-wrap">
              <table className="grid">
                <thead>
                  <tr><th className="k">limitation</th><th>What it means</th></tr>
                </thead>
                <tbody>
                  {LIMITS.map((l) => (
                    <tr key={l.id}>
                      <td className="k">{l.head}</td>
                      <td className="w">{l.say}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="band" id="sources">
            <div className="band-head">
              <span className="eyebrow">sourced</span>
              <h2>Where every claim came from</h2>
              <span className="n">{SOURCES.length} sources</span>
            </div>
            <p>
              Every fact this site states about the package carries the file it was read from, a
              verbatim quote, and the day it was read. A claim with no row here does not go on a
              page, and the register gate refuses one.
            </p>
            <div className="led-wrap">
              <table className="led">
                <thead>
                  <tr><th>Claim</th><th>Quote</th><th>Read from</th><th>On</th></tr>
                </thead>
                <tbody>
                  {SOURCES.map((s) => (
                    <tr key={s.id}>
                      <td className="w">{s.claim}</td>
                      <td className="w" style={{ color: 'var(--caution)' }}>{s.quote}</td>
                      <td><a href={s.url} rel="noopener nofollow">{s.cite}</a></td>
                      <td>{s.read_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <aside className="rail rail--r">
          <section>
            <h3><Icon name="info" className="" /> What is different</h3>
            <p>{PRIOR_ART.before}</p>
            <p>{PRIOR_ART.after}</p>
          </section>
          <section>
            <h3><Icon name="prohibit" className="" /> What does not exist</h3>
            <dl>
              {REFUSALS.map((r) => (
                <div key={r.id}>
                  <dt>{r.name}</dt>
                  <dd>{r.say}</dd>
                </div>
              ))}
            </dl>
            <p style={{ marginTop: 14 }}>
              One rule governs every patch: nothing may be added that lets a known failure ship.
              If a check is wrong, fix the check in the open.
            </p>
          </section>
          <section>
            <h3><Icon name="arrow-square-out" className="" /> The source</h3>
            <p><a href={PRODUCT.repo} rel="noopener">{PRODUCT.repo}</a></p>
            <p><a href={PRODUCT.npm} rel="noopener">{PRODUCT.npm}</a></p>
          </section>
        </aside>
      </div>
      <Footer readAt={READ_ON} />
    </>
  );
}
