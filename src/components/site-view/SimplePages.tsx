'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  GATES, EXITS, LIMITS, REFUSALS, PRIOR_ART, CENSUS, SOURCES, SPEC_SAMPLE, PRODUCT,
} from '@/lib/product';
import { SimpleHeader, SimpleFooter } from './SimpleChrome';
import Disclosure from './Disclosure';

function SimplePage({ label, title, intro, children }: { label: string; title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <SimpleHeader />
      <main className="sv-main">
        <div className="sv-in">
          <div className="sv-page-head">
            <div>
              <span className="sv-label">{label}</span>
              <h1>{title}</h1>
            </div>
            <p>{intro}</p>
          </div>
          {children}
        </div>
      </main>
      <SimpleFooter />
    </>
  );
}

function Intro({ label, title, id, children }: { label: string; title: string; id?: string; children: ReactNode }) {
  return (
    <div className="sv-section-intro">
      <div>
        <span className="sv-label">{label}</span>
        <h2 id={id}>{title}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
}

/* /kinds. One card per gate in the README's order. The clause grid is the Console's own table,
 * kept because a clause is three facts side by side and a table is the readable form of that. */
export function SimpleKinds() {
  return (
    <SimplePage
      label="EVERY CHECK"
      title="Every check the four gates run."
      intro="A check is one thing a gate refuses, with what it reads to know. Pick a gate and open its list."
    >
      {GATES.map((g, i) => (
        <section className="sv-section" id={g.id} key={g.id} aria-labelledby={`sv-${g.id}`}>
          <Intro label={`GATE ${i + 1} / ${g.cmd.toUpperCase()}`} title={`${g.title}.`} id={`sv-${g.id}`}>{g.what}</Intro>
          <div className="sv-card sv-gate">
            <p className="sv-gate-line">
              It runs {g.clauses.length} {g.unit}s and can exit {g.exits.join(', ')}.
            </p>
            <pre className="cmd" tabIndex={0}>{g.usage}</pre>
            <Disclosure title={`See the ${g.clauses.length} ${g.unit}s`}>
              <div className="grid-wrap">
                <table className="grid">
                  <thead>
                    <tr>
                      <th className="k">{g.unit}</th>
                      <th>What it reads</th>
                      <th>What makes it refuse</th>
                      <th>Answered off</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.clauses.map((c) => (
                      <tr key={c.name}>
                        <td className="k">{c.name}</td>
                        <td className="w">{c.reads}</td>
                        <td className="w">{c.refuses}</td>
                        <td className="r">{c.rail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Disclosure>
            <Disclosure title="The failure it was built against">
              <p>{g.incident}</p>
              <p>{g.measured}</p>
            </Disclosure>
          </div>
        </section>
      ))}
      <nav className="sv-next" aria-label="Next steps">
        <Link href="/#try">Run the demo <span aria-hidden="true">{'↗'}</span></Link>
        <Link href="/method">How a plan becomes a check <span aria-hidden="true">{'↗'}</span></Link>
        <a href={`${PRODUCT.repo}/blob/main/docs/SPEC.md`} rel="noopener">The spec format <span aria-hidden="true">{'↗'}</span></a>
      </nav>
    </SimplePage>
  );
}

/* /method. The same five sections as the Console page, in the same order, with the long lists
 * behind disclosures. The anchors match the Console's, so footer links land in either view. */
export function SimpleMethod() {
  return (
    <SimplePage
      label="HOW IT WORKS"
      title="How a plan becomes a check."
      intro="A rule stated in prose is checked by the same judgement that just broke it. So none of these gates ask. They exit non zero."
    >
      <section className="sv-section" id="spec" aria-labelledby="sv-spec">
        <Intro label="01 / THE SPEC" title="Write one check per sentence." id="sv-spec">
          You write a spec.json beside the approved plan. The gate prints the quoted sentence back when its check fails.
        </Intro>
        <div className="sv-card">
          <pre className="spec" tabIndex={0}>{SPEC_SAMPLE}</pre>
          <p className="sv-gate-line">Run it against the output folder. A spec with no checks cannot pass, and an unknown check kind fails rather than skips.</p>
          <pre className="cmd" tabIndex={0}>{'deferless check plan.spec.json ./out'}</pre>
        </div>
      </section>

      <section className="sv-section" id="exits" aria-labelledby="sv-exits">
        <Intro label="02 / EXIT CODES" title="What each exit code means." id="sv-exits">
          2 is the one that matters. A gate that could not run never reports as a pass.
        </Intro>
        <div className="sv-exits sv-exits--flush">
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

      <section className="sv-section" id="census" aria-labelledby="sv-census">
        <Intro label="03 / COUNTED" title="How often this happens." id="sv-census">
          This is the one outside figure the site states. It carries a DOI so you can check it.
        </Intro>
        <div className="sv-card">
          <p className="sv-lead">{CENSUS.say}</p>
          <ul className="sv-links">
            {CENSUS.links.map((l) => (
              <li key={l.href}><a href={l.href} rel="noopener">{l.label} <span aria-hidden="true">{'↗'}</span></a></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sv-section" id="limits" aria-labelledby="sv-limits">
        <Intro label="04 / LIMITS" title="What these gates do not do." id="sv-limits">
          The README puts these on its own front page, so this page carries them.
        </Intro>
        {LIMITS.map((l) => (
          <Disclosure key={l.id} title={l.head}><p>{l.say}</p></Disclosure>
        ))}
        <Disclosure title="What is different from a policy gateway">
          <p>{PRIOR_ART.before}</p>
          <p>{PRIOR_ART.after}</p>
        </Disclosure>
        <Disclosure title="What does not exist">
          <ul className="sv-plain">
            {REFUSALS.map((r) => (
              <li key={r.id}><strong>{r.name[0].toUpperCase() + r.name.slice(1)}.</strong> {r.say}</li>
            ))}
          </ul>
        </Disclosure>
      </section>

      <section className="sv-section" id="sources" aria-labelledby="sv-sources">
        <Intro label="05 / SOURCES" title="Where every claim came from." id="sv-sources">
          Each fact carries the file it was read from, a quote and the day it was read.
        </Intro>
        <Disclosure title={`See all ${SOURCES.length} sources`}>
          <ul className="sv-sources">
            {SOURCES.map((s) => (
              <li key={s.id}>
                <p>{s.claim}</p>
                <blockquote>{s.quote}</blockquote>
                <p className="sv-source-meta"><a href={s.url} rel="noopener nofollow">{s.cite}</a> <span>read {s.read_at}</span></p>
              </li>
            ))}
          </ul>
        </Disclosure>
      </section>

      <nav className="sv-next" aria-label="Next steps">
        <Link href="/#try">Run the demo <span aria-hidden="true">{'↗'}</span></Link>
        <Link href="/kinds">See every check <span aria-hidden="true">{'↗'}</span></Link>
        <a href={PRODUCT.repo} rel="noopener">Read the source <span aria-hidden="true">{'↗'}</span></a>
      </nav>
    </SimplePage>
  );
}

/* 404. Recovery links into the main journey. */
export function SimpleNotFound() {
  return (
    <SimplePage label="NOT FOUND" title="This page does not exist." intro="The address may be mistyped, or the page may have moved.">
      <nav className="sv-next" aria-label="Where to go next">
        <Link href="/">Go to the home page <span aria-hidden="true">{'↗'}</span></Link>
        <Link href="/kinds">See every check <span aria-hidden="true">{'↗'}</span></Link>
        <Link href="/method">How it works <span aria-hidden="true">{'↗'}</span></Link>
      </nav>
    </SimplePage>
  );
}
