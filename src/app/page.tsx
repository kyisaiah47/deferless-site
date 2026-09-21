import { Icon } from '@/components/Icon';
import { Terminal } from '@/components/Terminal';
import {
  PRODUCT,
  BADGES,
  GATES,
  EXITS,
  REFUSALS,
  LIMITS,
  SOURCES,
  SPEC_SAMPLE,
  CENSUS,
} from '@/lib/product';

/* THE PAGE. Every sentence is either the README's own or a fact with a row in SOURCES.
 *
 * THE ORDER IS THE README'S ORDER, and that is deliberate. A reader who arrives from npm has
 * already read the first paragraph, so re-sequencing it into a marketing shape makes them read
 * the same thing twice in a different voice. What the package prints comes before what it is
 * called, because the output is the argument.
 */
export default function Home() {
  return (
    <>
      <section className="strip head">
        <div className="in">
          <h1>{PRODUCT.headline}</h1>
          <p className="lede">
            A plan an AI agent cannot quietly deviate from, and findings it cannot defer to you.
            There is no force flag, no allowlist and no known issues file. Each of those is a
            supported way to record a failure and ship past it, which is the behaviour these
            gates exist to make impossible.
          </p>
          <p className="badges">
            {BADGES.map((b) => (
              <a key={b.id} href={b.href} rel="noopener" title={b.say}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.alt} height={20} />
              </a>
            ))}
          </p>
          <p className="run">
            <a className="run-cmd" href={PRODUCT.npm} rel="noopener">
              {PRODUCT.install}
            </a>
            <a className="run-alt" href={PRODUCT.repo} rel="noopener">
              Source on GitHub
            </a>
            <a className="run-alt" href={`${PRODUCT.repo}/blob/main/docs/SPEC.md`} rel="noopener">
              Every check kind
            </a>
          </p>
        </div>
      </section>

      <section className="strip sec" id="why">
        <div className="in">
          <div>
            <h2>The thing this is about</h2>
            <p>
              A coding agent will follow a plan for about ninety minutes. Then it hits something
              the plan did not anticipate, invents a local fix, and the local fix is fine. It
              builds, it renders, nothing errors, the output looks correct. The one sentence in
              the plan it just contradicted is in a document, and the problem is in the shell.
            </p>
            <p>
              Nothing in a normal pipeline can tell. Tests pass, because the agent wrote code that
              works. Lint passes, because the code is clean. CI is green. You are the only
              detector, and you find out by looking at the output days later.
            </p>
            <p>
              The second half is worse, because it arrives looking like diligence. The agent finds
              a real defect while working and hands it back written up. It saved itself two
              minutes and spent twenty of yours: you now read the finding, decide, and re-issue an
              instruction that was already obvious.
            </p>
            <p>
              Both are the same bug. A rule stated in prose is checked by the same judgement that
              just decided to break it. So none of these gates ask. They remove the state that
              made the deviation possible, and they exit non zero.
            </p>
          </div>
          <aside className="note">
            <h4>WHY IT IS CALLED THIS</h4>
            <p>
              The two failures it was built against are deviation, the agent quietly not doing
              what was agreed, and deferral, the agent handing back a finding it could have fixed.
            </p>
            <p>
              The second one is the one nobody talks about, because it arrives looking like
              diligence.
            </p>
          </aside>
        </div>
      </section>

      <section className="strip sec wide" id="output">
        <div className="in">
          <h2>
            <Icon name="terminal-window" /> What it prints
          </h2>
          <p>
            This is the output of <code>{PRODUCT.install}</code>, captured from the package rather
            than typed here. Two directories of API documentation. Both build. Both render. One of
            them was produced by an agent working from an approved plan.
          </p>
          <Terminal />
          <p style={{ marginTop: 22 }}>
            Every violation is reported in the plan's own words, not the gate's own. That is the whole
            design of the spec format: each check carries the sentence it enforces, so a failure
            is a quote from something a human approved rather than an error from a linter nobody
            remembers configuring.
          </p>
        </div>
      </section>

      <section className="strip sec" id="spec">
        <div className="in">
          <div>
            <h2>What a check looks like</h2>
            <p>
              You write a <code>spec.json</code> beside the plan, with one check per binding
              sentence, and the <code>quote</code> field holds that sentence verbatim.
            </p>
            <pre className="code" tabIndex={0}>
              {SPEC_SAMPLE}
            </pre>
          </div>
          <aside className="note">
            <h4>FOURTEEN KINDS</h4>
            <p>
              Six are answerable from the filesystem: files, requires, forbids, pairedFile,
              sidecar, media.
            </p>
            <p>
              Eight decode real pixels out of video with ffmpeg: frame fill, luminance band,
              accent colour share, motion floor, text ink height, mark presence by cross
              correlation, cut cadence against declared seams, shot distinctness.
            </p>
            <p>
              That second group exists because the first version was metadata only, and a browser
              rendering a single h1 passed every check in a full video spec. A text slide and a
              product demo have identical ffprobe output.
            </p>
          </aside>
        </div>
      </section>

      <section className="strip sec wide" id="refuse">
        <div className="in">
          <h2>
            <Icon name="prohibit" /> Four things that do not exist
          </h2>
          <p>
            One rule governs every patch: nothing may be added that lets a known failure ship. If
            a check is wrong, fix the check in the open.
          </p>
          <ul className="refuse">
            {REFUSALS.map((r) => (
              <li key={r.id}>
                <b>{r.name}</b>
                <span>{r.say}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="strip sec wide" id="gates">
        <div className="in">
          <h2>The four gates</h2>
          {GATES.map((g) => (
            <div className="gate" key={g.id} id={g.id}>
              <p className="gate-head">
                <Icon name={g.glyph} />
                <code className="gate-cmd">{g.cmd}</code>
                <span className="gate-title">{g.title}</span>
              </p>
              <div className="gate-body">
                <div>
                  <p>{g.what}</p>
                  <p>{g.detail}</p>
                  <pre className="code" tabIndex={0}>
                    {g.code}
                  </pre>
                </div>
                <aside className="gate-why">
                  <p>{g.why}</p>
                  <p>{g.measured}</p>
                </aside>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="strip sec" id="exits">
        <div className="in">
          <div>
            <h2>
              <Icon name="list-numbers" /> Exit codes
            </h2>
            <table className="exits">
              <thead>
                <tr>
                  <th>CODE</th>
                  <th>MEANS</th>
                </tr>
              </thead>
              <tbody>
                {EXITS.map((e) => (
                  <tr key={e.code}>
                    <td className="x" data-ink={e.ink}>
                      {e.code}
                    </td>
                    <td>{e.say}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="note">
            <h4>2 IS THE ONE THAT MATTERS</h4>
            <p>
              The sentences I could not check and I checked and it was fine are different answers, and a
              pipeline that renders them both as green has taught itself to ignore the gate.
            </p>
            <p>
              The same rule runs through the promote gate: a missing gate file is a failure and
              not a skip, and zero gates run is not a pass.
            </p>
          </aside>
        </div>
      </section>

      <section className="strip sec" id="install">
        <div className="in">
          <div>
            <h2>Install</h2>
            <pre className="code" tabIndex={0}>
              {`npx deferless demo            # no install, runs the example above\nnpm i -D deferless            # in a project`}
            </pre>
            <p>
              {PRODUCT.node}. {PRODUCT.deps}. Playwright is an optional peer, needed only by the
              browser gate. Everything else runs on a bare node with nothing installed.
            </p>
            <h2 style={{ marginTop: 30 }}>Running the tests</h2>
            <pre className="code" tabIndex={0}>
              {`git clone ${PRODUCT.repo} && cd deferless\nbash test/run.sh`}
            </pre>
            <p>
              Nothing to install. The suite asserts the claims the README makes: that a spec with
              no checks cannot pass, that an unknown check kind fails rather than skips, that a
              missing gate file fails, that an unreadable spec exits 2 and not 1, that the demo
              passing tree passes and its failing tree fails.
            </p>
          </div>
          <aside className="note">
            <h4>WHY THOSE TESTS</h4>
            <p>
              A test suite that only proves the happy path leaves every one of those claims
              unchecked, which is the same failure this project is about.
            </p>
          </aside>
        </div>
      </section>

      <section className="strip sec wide" id="limits">
        <div className="in">
          <h2>
            <Icon name="warning-circle" /> Honest limitations
          </h2>
          <ul className="limits">
            {LIMITS.map((l) => (
              <li key={l.id}>
                <h3>{l.head}</h3>
                <p>{l.say}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="strip sec" id="prior">
        <div className="in">
          <div>
            <h2>Prior art, and what is different</h2>
            <p>
              There is a growing shelf of agent guardrails: pre action authorization plugins,
              policy gateways, runtime interception, approval steps in front of every tool call.
              Those sit before the agent acts, and they answer whether an action is allowed.
            </p>
            <p>
              These gates sit after, and answer a different question. Does the artifact that came
              out match the thing we agreed to build, and did anything get quietly left behind on
              the way. No amount of pre action policy answers that, because every individual
              action was allowed.
            </p>
          </div>
          <aside className="note">
            <h4>COUNTED</h4>
            <p>{CENSUS.say}</p>
            <p>
              {CENSUS.links.map((l, i) => (
                <span key={l.href}>
                  {i > 0 ? ' · ' : ''}
                  <a href={l.href} rel="noopener">
                    {l.label}
                  </a>
                </span>
              ))}
            </p>
          </aside>
        </div>
      </section>

      <section className="strip sec wide" id="sources">
        <div className="in">
          <h2>Where every claim on this page came from</h2>
          <p>
            A fact with no row here does not go on this page, and{' '}
            <code>scripts/check-register.mjs</code> refuses one that tries.
          </p>
          <ul className="src">
            {SOURCES.map((s) => (
              <li key={s.id}>
                {s.claim}
                <q>{s.quote}</q>
                <span className="cite">
                  {s.cite} · read {s.read_at} ·{' '}
                  <a href={s.url} rel="noopener nofollow">
                    {s.url}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
