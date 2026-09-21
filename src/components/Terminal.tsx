import { DEMO_OUTPUT, DEMO_VERSION, DEMO_CAPTURED_AT } from '@/lib/demo';

/* THE CAPTURED BLOCK. Every byte here came out of `deferless demo` through
 * scripts/capture.mjs, with the terminal's colour removed and nothing else touched.
 *
 * ⛔ THIS COMPONENT MAY NOT AUTHOR A CHARACTER. It splits the captured string on newlines and
 * decides an ink per line from the line's own leading mark. It never rewrites, wraps,
 * truncates or pretty prints, because the moment a page composes output it is no longer
 * showing what the program prints, and nothing errors when it drifts.
 *
 * The inks are the register's four status inks and they mean here what they mean everywhere
 * else on the page: pass is a check that passed, fail is a violation, dim is the plan sentence
 * the violation quotes, ink is a line a person typed.
 */
function inkFor(line: string): string | undefined {
  if (line.startsWith('✔')) return 't-pass';
  if (line.startsWith('✖') || line.startsWith('  ✖')) return 't-fail';
  if (line.trimStart().startsWith('plan says:')) return 't-quote';
  if (line.startsWith('$ ')) return 't-cmd';
  return undefined;
}

export function Terminal() {
  const lines = DEMO_OUTPUT.split('\n');
  return (
    <>
      <pre className="term" tabIndex={0} aria-label="Captured output of deferless demo">
        {lines.map((line, i) => {
          const cls = inkFor(line);
          return (
            <span key={i} className={cls}>
              {line}
              {i < lines.length - 1 ? '\n' : ''}
            </span>
          );
        })}
      </pre>
      <p className="term-cap">
        <span>Captured from deferless {DEMO_VERSION}</span>
        <span>Read {DEMO_CAPTURED_AT}</span>
        <span>npm run capture</span>
      </p>
    </>
  );
}
