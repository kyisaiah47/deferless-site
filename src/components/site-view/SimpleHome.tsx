'use client';

import Link from 'next/link';
import { Terminal } from '@/components/Terminal';
import { PRODUCT, GATES, EXITS, LIMITS, REFUSALS, SPEC_SAMPLE } from '@/lib/product';
import { DEMO_VERSION } from '@/lib/demo';
import { SimpleHeader, SimpleFooter } from './SimpleChrome';
import Disclosure from './Disclosure';
import CopyCommand from './CopyCommand';
import { PASSED, BROKEN, VIOLATIONS, FAILING_EXIT, PASSING_EXIT } from './demo-read';

/* The README's Install section, verbatim: `npm i -D deferless   # in a project`. */
const INSTALL = 'npm i -D deferless';
const CHECK = GATES[0];
const MORE = GATES.slice(1);

/* THE SIMPLE HOME. Outcome, the one action, the readable example, optional detail, next step.
 * Every figure is read off product.ts or the captured demo. */
export default function SimpleHome() {
  return (
    <>
      <SimpleHeader />
      <main className="sv-main">
        <div className="sv-in">
          <section className="sv-hero">
            <div className="sv-pitch">
              <span className="sv-label">FOR WORK AN AI AGENT DID</span>
              <h1>Stop agent work that breaks your plan.</h1>
              <p>
                You approve a plan, and an agent does the work. deferless checks the finished
                output against the plan&apos;s own sentences. A broken sentence stops the work
                from shipping.
              </p>
              <p className="sv-qualifier">
                Free, {PRODUCT.licence} licence. {PRODUCT.node}. {PRODUCT.deps}.
              </p>
            </div>

            <div className="sv-card sv-action" id="try">
              <div className="sv-step"><span>01 / TRY IT FIRST</span><span>NO INSTALL</span></div>
              <h2>Run the demo in your terminal.</h2>
              <p>The demo checks two folders of API docs against one approved plan and prints both results.</p>
              <CopyCommand command={PRODUCT.install} label="Command" />
              <p className="sv-terms">No account. Runs on your machine. {PRODUCT.licence} licence.</p>
            </div>
          </section>

          <section className="sv-section" aria-labelledby="sv-see">
            <div className="sv-section-intro">
              <div>
                <span className="sv-label">02 / WHAT YOU&apos;LL SEE</span>
                <h2 id="sv-see">A failure you can read.</h2>
              </div>
              <p>Each failure quotes the sentence of the plan it broke. Open the list when you want the details.</p>
            </div>

            <div className="sv-card sv-result">
              <div className="sv-step"><span>EXAMPLE RESULT</span><span>Captured from deferless {DEMO_VERSION}</span></div>
              <h3>The agent&apos;s work broke {BROKEN} sentences of the approved plan, so nothing ships.</h3>
              <p>
                The same plan passed the correct folder with {PASSED} of {PASSED} checks. The
                correct folder exits {PASSING_EXIT}. The agent&apos;s folder exits {FAILING_EXIT}.
              </p>
              <Disclosure title={`See the ${VIOLATIONS.length} broken sentences`}>
                <ol className="sv-violations">
                  {VIOLATIONS.map((v) => (
                    <li key={v.found}>
                      <p>&ldquo;{v.says}&rdquo;</p>
                      <code>{v.found}</code>
                    </li>
                  ))}
                </ol>
              </Disclosure>
              <Disclosure title="See the full output">
                <Terminal />
              </Disclosure>
              <p className="sv-note">
                This is the package&apos;s own demo, captured from its output. It is not a check of your work.
              </p>
            </div>
          </section>

          <section className="sv-section" aria-labelledby="sv-use">
            <div className="sv-section-intro">
              <div>
                <span className="sv-label">03 / USE IT ON YOUR PLAN</span>
                <h2 id="sv-use">Turn your plan into checks.</h2>
              </div>
              <p>You write the checks by hand. Each check holds one sentence of your plan, word for word.</p>
            </div>
            <ol className="sv-steps">
              <li className="sv-card">
                <span className="sv-step-n">1</span>
                <h3>Install it in your project.</h3>
                <pre className="cmd" tabIndex={0}>{INSTALL}</pre>
                <p>{PRODUCT.node}. {PRODUCT.deps}.</p>
              </li>
              <li className="sv-card">
                <span className="sv-step-n">2</span>
                <h3>Write one check per sentence.</h3>
                <p>Put a spec.json beside the plan. The quote field holds the sentence that the check enforces.</p>
                <Disclosure title="See an example spec">
                  <pre className="spec" tabIndex={0}>{SPEC_SAMPLE}</pre>
                </Disclosure>
              </li>
              <li className="sv-card">
                <span className="sv-step-n">3</span>
                <h3>Run it on the output.</h3>
                <pre className="cmd" tabIndex={0}>{CHECK.usage}</pre>
                <p>The exit code tells your pipeline whether the work may ship.</p>
              </li>
            </ol>
            <div className="sv-exits">
              <h3>What each exit code means</h3>
              <ul>
                {EXITS.map((e) => (
                  <li key={e.code}>
                    <span className="st" data-ink={e.ink}><b>{e.code}</b></span>
                    <p><strong>{e.name[0].toUpperCase() + e.name.slice(1)}.</strong> {e.say}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="sv-section" aria-labelledby="sv-more">
            <div className="sv-section-intro">
              <div>
                <span className="sv-label">04 / MORE GATES</span>
                <h2 id="sv-more">Three more gates in the same package.</h2>
              </div>
              <p>Each gate runs before the work ships. None of them has a force flag.</p>
            </div>
            <div className="sv-gates">
              {MORE.map((g) => (
                <article className="sv-card" key={g.id}>
                  <code className="sv-gate-cmd">{g.cmd}</code>
                  <h3>{g.title}</h3>
                  <p>{g.what}</p>
                  <Link href={`/kinds#${g.id}`}>See its {g.clauses.length} {g.unit}s <span aria-hidden="true">{'↗'}</span></Link>
                </article>
              ))}
            </div>
          </section>

          <section className="sv-section" aria-labelledby="sv-questions">
            <div className="sv-section-intro">
              <div>
                <span className="sv-label">05 / QUESTIONS</span>
                <h2 id="sv-questions">A few useful answers.</h2>
              </div>
              <p>Read these before you write your first spec.</p>
            </div>
            <Disclosure title="Can I skip a check that fails?">
              <p>No. These four things do not exist in deferless:</p>
              <ul className="sv-plain">
                {REFUSALS.map((r) => (
                  <li key={r.id}><strong>{r.name[0].toUpperCase() + r.name.slice(1)}.</strong> {r.say}</li>
                ))}
              </ul>
            </Disclosure>
            <Disclosure title="Why does exit code 2 matter?">
              <p>{EXITS[2].say}</p>
              <p>Could not check and checked and it was fine are different answers. A pipeline that shows both as green has stopped reading the gate.</p>
            </Disclosure>
            <Disclosure title="What does deferless not do?">
              <ul className="sv-plain">
                {LIMITS.map((l) => (
                  <li key={l.id}><strong>{l.head}.</strong> {l.say}</li>
                ))}
              </ul>
            </Disclosure>
            <Disclosure title="Where do the facts on this site come from?">
              <p>Every claim about the package carries the file it was read from, a quote and the day it was read.</p>
              <p><Link href="/method#sources">See every source <span aria-hidden="true">{'↗'}</span></Link></p>
            </Disclosure>
            <div className="sv-support">
              <h3>Need a hand?</h3>
              <p>Email <a href="mailto:hello@thecompound.tech">hello@thecompound.tech</a> with the spec and the output you ran it on.</p>
            </div>
          </section>

          <nav className="sv-next" aria-label="Next steps">
            <Link href="/kinds">See every check <span aria-hidden="true">{'↗'}</span></Link>
            <Link href="/method">How a plan becomes a check <span aria-hidden="true">{'↗'}</span></Link>
            <a href={PRODUCT.repo} rel="noopener">Read the source <span aria-hidden="true">{'↗'}</span></a>
          </nav>
        </div>
      </main>
      <SimpleFooter />
    </>
  );
}
