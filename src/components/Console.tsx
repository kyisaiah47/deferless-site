'use client';

import { useState } from 'react';
import { Folio } from './Folio';
import { Icon } from './Icon';
import { Terminal } from './Terminal';
import { GATES, EXITS, REFUSALS, PRODUCT } from '@/lib/product';

/* THE CONSOLE. The gate is this product's one control, and pressing one re-reads the whole
 * page: the folio counts above it, the clause grid in the track, both rails, the command.
 *
 * THE CONTROL IS A LABELLED ROW OF CHIPS, not a grid of padded cards. StackTab labels DATABASE,
 * AUTH, PAYMENTS and HOSTING in a fixed left gutter and fills the rest of the row with chips,
 * and BlockDex labels KIND, ACCESS and ORDER the same way. A reader learns what the chips are
 * choosing before reading any chip, and several rows line up on one edge.
 *
 * ⛔ THE FOLIO IS DRAWN HERE AND NOT BY THE PAGE, so the counts sit between the masthead and
 * the head band the way the rest of the estate orders them, and so a count moves when the
 * control moves. Drawn from the page, the folio would be static markup above a control it can
 * no longer answer. */
export function Console({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState(GATES[0].id);
  const gate = GATES.find((g) => g.id === id) || GATES[0];

  const kinds = gate.clauses.length;
  const RAILS = ['filesystem', 'ffmpeg pixels', 'a real browser', 'the shell'] as const;
  const byRail = (r: string) => gate.clauses.filter((c) => c.rail === r).length;

  return (
    <>
      <Folio
        cells={[
          { k: `${gate.unit}s this gate runs`, n: kinds },
          { k: 'exit codes it can return', n: gate.exits.length },
          { k: 'things that do not exist', n: REFUSALS.length },
          { k: 'runtime dependencies', n: 0, ink: 'pass' },
          { k: 'published version', v: PRODUCT.version },
          { k: 'read off the package', v: '2026-09-21' },
        ]}
      />

      {children}

      <div className="strip bar">
        <div className="in">
          <div className="bar-row" role="group" aria-label="The gate">
            <span className="bar-lab"><Icon name="stack-simple" className="" /> gate</span>
            <div className="chips">
              {GATES.map((g) => (
                <button key={g.id} type="button" className="chip" aria-pressed={g.id === id} onClick={() => setId(g.id)}>
                  <Icon name={g.glyph} className="" />
                  <b>{g.cmd}</b>
                  <i>{g.clauses.length} {g.unit}{g.clauses.length === 1 ? '' : 's'}</i>
                </button>
              ))}
            </div>
          </div>
          <div className="bar-row">
            <span className="bar-lab"><Icon name="list-numbers" className="" /> it exits</span>
            <div className="chips">
              {EXITS.map((e) => (
                <span key={e.code} className="chip" data-static data-ink={e.ink}>
                  <span className="st" data-ink={e.ink}><b>{e.code}</b></span>
                  <i>{(gate.exits as readonly string[]).includes(e.code) ? e.name : 'not from this gate'}</i>
                </span>
              ))}
            </div>
          </div>
          <div className="bar-row">
            <span className="bar-lab"><Icon name="check" className="" /> answered off</span>
            <div className="chips">
              {RAILS.filter((r) => byRail(r) > 0).map((r) => (
                <span key={r} className="chip" data-static>
                  <b>{r}</b>
                  <i>{byRail(r)}</i>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="frame">
        <aside className="rail">
          <section>
            <h3><Icon name="stack-simple" className="" /> Every gate</h3>
            {GATES.map((g) => (
              <div className="rail-row" key={g.id} data-on={g.id === id}>
                <span className="t"><Icon name={g.glyph} className="" />{g.cmd.replace('deferless ', '')}</span>
                <span>{g.clauses.length}</span>
              </div>
            ))}
          </section>
          <section>
            <h3>Where this gate reads</h3>
            {RAILS.filter((r) => byRail(r) > 0).map((r) => (
              <div className="rail-row" key={r}>
                <span className="t">{r}</span>
                <span>{byRail(r)}</span>
              </div>
            ))}
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
          <section className="band">
            <div className="band-head">
              <span className="eyebrow">refuses</span>
              <h2>What {gate.cmd} will not let through</h2>
              <span className="n">{kinds} {gate.unit}{kinds === 1 ? '' : 's'}</span>
            </div>
            <p>{gate.what}</p>
            <div className="grid-wrap">
              <table className="grid">
                <thead>
                  <tr>
                    <th className="k">{gate.unit}</th>
                    <th>What it reads</th>
                    <th>What makes it refuse</th>
                    <th>Answered off</th>
                  </tr>
                </thead>
                <tbody>
                  {gate.clauses.map((c) => (
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
          </section>

          <section className="band">
            <div className="band-head">
              <span className="eyebrow">typed</span>
              <h2>What a reader runs</h2>
              <span className="n">{gate.cmd}</span>
            </div>
            <pre className="cmd" tabIndex={0}>{gate.usage}</pre>
          </section>

          <section className="band" id="output">
            <div className="band-head">
              <span className="eyebrow">captured</span>
              <h2>What the program prints</h2>
              <span className="n">deferless {PRODUCT.version}</span>
            </div>
            <p>
              Two directories of API documentation. Both build. Both render. One of them was
              produced by an agent working from an approved plan. Every violation is reported in
              the plan&apos;s own words rather than the gate&apos;s, so a failure is a quote from
              something a person approved.
            </p>
            <Terminal />
          </section>

          <section className="band" id="exits">
            <div className="band-head">
              <span className="eyebrow">exits</span>
              <h2>Could not check and checked and it was fine are different answers</h2>
              <span className="n">{gate.cmd} returns {gate.exits.join(', ')}</span>
            </div>
            <p>
              A pipeline that renders both of them as green has taught itself to ignore the gate,
              which is why 2 has its own code and its own ink and never collapses into 0.
            </p>
            <div className="grid-wrap">
              <table className="grid">
                <thead>
                  <tr>
                    <th className="k">code</th>
                    <th className="k">means</th>
                    <th>What it says</th>
                    <th>{gate.cmd}</th>
                  </tr>
                </thead>
                <tbody>
                  {EXITS.map((e) => (
                    <tr key={e.code}>
                      <td className="k"><span className="st" data-ink={e.ink}><b>{e.code}</b></span></td>
                      <td className="k">{e.name}</td>
                      <td className="w">{e.say}</td>
                      <td className="r">{(gate.exits as readonly string[]).includes(e.code) ? 'returns it' : 'cannot return it'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <aside className="rail rail--r">
          <section>
            <h3><Icon name="warning-circle" className="" /> The failure it was built against</h3>
            <p>{gate.incident}</p>
          </section>
          <section>
            <h3><Icon name="check" className="" /> What was measured</h3>
            <p>{gate.measured}</p>
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
          </section>
          <section>
            <h3><Icon name="arrow-square-out" className="" /> Read the source</h3>
            <div className="rail-row"><span className="t"><Icon name="file-text" className="" />the spec format</span><span><a href={`${PRODUCT.repo}/blob/main/docs/SPEC.md`} rel="noopener">docs</a></span></div>
            <div className="rail-row"><span className="t"><Icon name="prohibit" className="" />what a patch may not add</span><span><a href={`${PRODUCT.repo}/blob/main/docs/PRINCIPLES.md`} rel="noopener">docs</a></span></div>
            <div className="rail-row"><span className="t"><Icon name="stack-simple" className="" />the package</span><span><a href={PRODUCT.npm} rel="noopener">npm</a></span></div>
          </section>
        </aside>
      </div>
    </>
  );
}
