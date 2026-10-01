'use client';

import { useId, useMemo, useState } from 'react';
import { GATES, EXITS } from '@/lib/product';
import { Icon } from '@/components/Icon';
import Disclosure from './Disclosure';

/* THE CONSOLE'S WORKING SURFACE, ON THE SIMPLE HOME. The same controls and the same data as
 * Console.tsx: pick a gate, read every check it runs, narrow them by where the answer comes from
 * or by a word, see which exit codes that gate can return, copy the command. Set in the Simple
 * register: larger type, padded rows, labels as words. Nothing here is a description of a
 * control; every control works. */
const RAILS = ['filesystem', 'ffmpeg pixels', 'a real browser', 'the shell'] as const;

function CopyButton({ text }: { text: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'refused'>('idle');
  return (
    <button
      type="button"
      className="sv-copy-small"
      onClick={async () => {
        try { await navigator.clipboard.writeText(text); setState('copied'); } catch { setState('refused'); }
      }}
    >
      {state === 'copied' ? 'Copied' : state === 'refused' ? 'Clipboard blocked' : 'Copy'}
    </button>
  );
}

export default function SimpleWorkbench() {
  const [gateId, setGateId] = useState(GATES[0].id);
  const [rail, setRail] = useState<string>('all');
  const [query, setQuery] = useState('');
  const searchId = useId();
  const gate = GATES.find((g) => g.id === gateId) || GATES[0];

  const rails = RAILS.filter((r) => gate.clauses.some((c) => c.rail === r));
  const q = query.trim().toLowerCase();
  const shown = useMemo(
    () => gate.clauses.filter((c) =>
      (rail === 'all' || c.rail === rail)
      && (!q || `${c.name} ${c.reads} ${c.refuses}`.toLowerCase().includes(q))),
    [gate, rail, q],
  );

  function pick(id: string) {
    setGateId(id);
    setRail('all');
    setQuery('');
  }

  const unit = (n: number) => `${gate.unit}${n === 1 ? '' : 's'}`;

  return (
    <div className="sv-bench">
      <div className="sv-bench-gates" role="group" aria-label="Choose a gate">
        {GATES.map((g) => (
          <button key={g.id} type="button" aria-pressed={g.id === gate.id} onClick={() => pick(g.id)}>
            <span className="sv-bench-gate-top">
              <Icon name={g.glyph} className="sv-bench-glyph" />
              <code>{g.cmd}</code>
            </span>
            <strong>{g.title}</strong>
            <span>{g.clauses.length} {g.unit}{g.clauses.length === 1 ? '' : 's'}</span>
          </button>
        ))}
      </div>

      <div className="sv-bench-body">
        <div className="sv-bench-side">
          <div className="sv-bench-block">
            <h3>{gate.title}</h3>
            <p>{gate.what}</p>
          </div>
          <div className="sv-bench-block">
            <div className="sv-bench-label-row">
              <span className="sv-bench-label">Run it</span>
              <CopyButton text={gate.usage} />
            </div>
            <pre className="cmd" tabIndex={0}>{gate.usage}</pre>
          </div>
          <div className="sv-bench-block">
            <span className="sv-bench-label">What it can exit with</span>
            <ul className="sv-bench-exits">
              {EXITS.map((e) => {
                const returns = (gate.exits as readonly string[]).includes(e.code);
                return (
                  <li key={e.code} data-off={!returns}>
                    <span className="st" data-ink={e.ink}><b>{e.code}</b></span>
                    <p>
                      <strong>{e.name[0].toUpperCase() + e.name.slice(1)}.</strong>{' '}
                      {returns ? e.say : `${gate.cmd} never returns this code.`}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <Disclosure title="The failure it was built against">
            <p>{gate.incident}</p>
            <p>{gate.measured}</p>
          </Disclosure>
        </div>

        <div className="sv-bench-main">
          <div className="sv-bench-tools">
            {/* A filter with one choice filters nothing, so it shows only when a gate reads from more than one place. */}
            {rails.length > 1 ? (
            <div className="sv-bench-filter" role="group" aria-label="Where the answer comes from">
              <button type="button" aria-pressed={rail === 'all'} onClick={() => setRail('all')}>
                All <i>{gate.clauses.length}</i>
              </button>
              {rails.map((r) => (
                <button key={r} type="button" aria-pressed={rail === r} onClick={() => setRail(r)}>
                  {r} <i>{gate.clauses.filter((c) => c.rail === r).length}</i>
                </button>
              ))}
            </div>
            ) : null}
            <div className="sv-bench-search">
              <label htmlFor={searchId}>Find a {gate.unit}</label>
              <input
                id={searchId}
                type="search"
                value={query}
                placeholder="a word, such as glob or opacity"
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>

          <p className="sv-bench-count" role="status" aria-live="polite">
            {shown.length === gate.clauses.length
              ? `${gate.cmd} runs ${gate.clauses.length} ${unit(gate.clauses.length)}.`
              : `Showing ${shown.length} of ${gate.clauses.length} ${unit(gate.clauses.length)}.`}
          </p>

          {shown.length ? (
            <ol className="sv-bench-rows">
              {shown.map((c) => (
                <li key={c.name}>
                  <div className="sv-bench-row-head">
                    <code>{c.name}</code>
                    <span>answered off {c.rail}</span>
                  </div>
                  <dl>
                    <div><dt>Reads</dt><dd>{c.reads}</dd></div>
                    <div><dt>Refuses when</dt><dd>{c.refuses}</dd></div>
                  </dl>
                </li>
              ))}
            </ol>
          ) : (
            <div className="sv-bench-empty">
              <p>No {gate.unit} in {gate.cmd} matches that.</p>
              <button type="button" onClick={() => { setRail('all'); setQuery(''); }}>Show every {gate.unit}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
