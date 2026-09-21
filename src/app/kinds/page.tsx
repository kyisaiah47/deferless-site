import type { Metadata } from 'next';
import { Rule, Masthead, Footer } from '@/components/Shell';
import { Folio } from '@/components/Folio';
import { Icon } from '@/components/Icon';
import { GATES, CHECK_KINDS, RENDER_QUESTIONS, EXITS } from '@/lib/product';
import { READ_ON } from '@/lib/product';

export const metadata: Metadata = {
  title: 'Every clause',
  description:
    'Every clause the four gates run: fourteen check kinds, seven browser questions, three promote invariants and five deploy rules, with what each one reads and what makes it refuse.',
};

const ALL = GATES.flatMap((g) => g.clauses);

/* EVERY CLAUSE IN ONE GRID, per gate, in the gate's own order. The console shows one gate at a
 * time because a reader arrives wanting one. This page is the whole set, for a reader deciding
 * whether a plan of theirs is expressible. */
export default function Page() {
  return (
    <>
      <Rule />
      <Masthead here="/kinds" />
      <Folio
        cells={[
          { k: 'clauses across four gates', n: ALL.length },
          { k: 'check kinds', n: CHECK_KINDS.length },
          { k: 'answered off real pixels', n: CHECK_KINDS.filter((c) => c.rail === 'ffmpeg pixels').length },
          { k: 'browser questions', n: RENDER_QUESTIONS.length },
          { k: 'exit codes', n: EXITS.length },
        ]}
      />
      <div className="strip head">
        <div className="in">
          <div>
            <h1>Every clause the four gates run.</h1>
            <p className="lede">
              A clause is one thing a gate refuses, with what it reads to know. Each carries the
              sentence it enforces, so a failure is a quote from something a person approved.
            </p>
          </div>
          <dl className="facts">
            {GATES.map((g) => (
              <div className="facts-row" key={g.id}>
                <dt>{g.cmd.replace('deferless ', '')}</dt>
                <dd>
                  <a href={`#${g.id}`}>
                    {g.clauses.length} {g.unit}
                    {g.clauses.length === 1 ? '' : 's'}
                  </a>
                </dd>
              </div>
            ))}
            <div className="facts-row">
              <dt>answered off real pixels</dt>
              <dd>{CHECK_KINDS.filter((c) => c.rail === 'ffmpeg pixels').length}</dd>
            </div>
            <div className="facts-row">
              <dt>read</dt>
              <dd>{READ_ON}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="frame frame--wide">
        <aside className="rail">
          <section>
            <h3><Icon name="stack-simple" className="" /> Every gate</h3>
            {GATES.map((g) => (
              <div className="rail-row" key={g.id}>
                <span className="t"><Icon name={g.glyph} className="" />{g.cmd.replace('deferless ', '')}</span>
                <span><a href={`#${g.id}`}>{g.clauses.length}</a></span>
              </div>
            ))}
          </section>
          <section>
            <h3>Where an answer comes from</h3>
            <div className="rail-row"><span className="t">the filesystem</span><span>{ALL.filter((c) => c.rail === 'filesystem').length}</span></div>
            <div className="rail-row"><span className="t">ffmpeg pixels</span><span>{ALL.filter((c) => c.rail === 'ffmpeg pixels').length}</span></div>
            <div className="rail-row"><span className="t">a real browser</span><span>{ALL.filter((c) => c.rail === 'a real browser').length}</span></div>
            <div className="rail-row"><span className="t">the shell</span><span>{ALL.filter((c) => c.rail === 'the shell').length}</span></div>
          </section>
          <section>
            <h3>The exit codes</h3>
            {EXITS.map((e) => (
              <div className="rail-row" key={e.code}>
                <span className="t">{e.name}</span>
                <span><span className="st" data-ink={e.ink}><b>{e.code}</b></span></span>
              </div>
            ))}
          </section>
        </aside>

        <main className="track">
          {GATES.map((g) => (
            <section className="band" id={g.id} key={g.id}>
              <div className="band-head">
                <span className="eyebrow">{g.unit}s</span>
                <h2>{g.cmd}</h2>
                <span className="n">{g.clauses.length} {g.unit}{g.clauses.length === 1 ? '' : 's'} &middot; exits {g.exits.join(', ')}</span>
              </div>
              <p>{g.what}</p>
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
            </section>
          ))}
        </main>
      </div>
      <Footer readAt={READ_ON} />
    </>
  );
}
