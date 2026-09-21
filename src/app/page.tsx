export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>deferless</h1>
        <p className="lede">
          Fail-closed gates for work an AI agent did on your behalf. A plan it cannot quietly
          deviate from, and findings it cannot defer to you.
        </p>
        <div className="badges">
          <img src="https://github.com/kyisaiah47/deferless/actions/workflows/ci.yml/badge.svg" alt="gates" />
          <img src="https://img.shields.io/npm/v/deferless.svg" alt="npm" />
          <img src="https://img.shields.io/badge/licence-MIT-blue.svg" alt="licence: MIT" />
          <img src="https://img.shields.io/badge/dependencies-0-brightgreen.svg" alt="dependencies: 0" />
        </div>
        <div className="cta">
          <a className="primary" href="https://github.com/kyisaiah47/deferless">View on GitHub</a>
          <a className="secondary" href="https://www.npmjs.com/package/deferless">npx deferless demo</a>
        </div>
      </section>

      <section>
        <h2>The thing this is actually about</h2>
        <p>
          A coding agent will follow a plan for about ninety minutes. Then it hits something the
          plan did not anticipate, invents a local fix, and the local fix is fine: it builds, it
          renders, nothing errors, the output looks completely correct. The one sentence in the
          plan it just contradicted is in a document, and the problem is right here in the shell.
        </p>
        <p>
          Nothing in your pipeline can tell. Tests pass, because the agent wrote code that works.
          Lint passes, because the code is clean. CI is green. You are the only detector, and you
          find out by looking at the output days later.
        </p>
      </section>

      <section>
        <h2>What it looks like</h2>
        <p>Real output of <code>npx deferless demo</code>. Two directories of API documentation, both build, both render. One was produced from an approved plan.</p>
        <pre>{`✖ 5 violation(s), the output does NOT match the approved plan:

  ✖ docs/*.md: found 2, spec requires at least 3
     plan says: "Ship exactly three endpoint pages: orders, refunds and webhooks."

  ✖ docs/refunds.md is missing required pattern /curl -/i
     plan says: "Every endpoint page carries a runnable curl example against the public host."

  ✖ build.json: field "sourceCommit" not declared
     plan says: "The build declares the commit it was generated from in build.json."

Nothing here ships. Fix the output, or change the plan in the open and say so.`}</pre>
      </section>

      <section>
        <h2>The one rule that cannot be relaxed</h2>
        <ul className="principles">
          <li>No <code>--force</code>, ever.</li>
          <li>No allowlist.</li>
          <li>No known-issues file.</li>
          <li>Exit code 2 (could not run) never collapses into 0 or 1.</li>
        </ul>
      </section>

      <section>
        <h2>Install</h2>
        <pre>{`npx deferless demo            # no install, runs the example above
npm i -D deferless             # in a project`}</pre>
      </section>
    </>
  );
}
