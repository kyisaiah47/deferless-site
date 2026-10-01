import { DEMO_OUTPUT } from '@/lib/demo';

/* THE CAPTURED DEMO, READ RATHER THAN RETYPED. The Simple example states the demo's result as a
 * sentence, so it needs the counts and the violations as values. Every value here is pulled out
 * of the captured string by its own leading mark. Nothing is composed: if the program changes a
 * word, `npm run capture` changes this result with it. */
export type Violation = { found: string; says: string };

const lines = DEMO_OUTPUT.split('\n');

const passedLine = lines.find((l) => l.startsWith('✔')) || '';
const failedLine = lines.find((l) => l.startsWith('✖')) || '';

export const PASSED = Number(/(\d+) check/.exec(passedLine)?.[1] || 0);
export const BROKEN = Number(/(\d+) violation/.exec(failedLine)?.[1] || 0);

export const VIOLATIONS: Violation[] = lines.flatMap((line, i) => {
  if (!line.startsWith('  ✖')) return [];
  const next = lines[i + 1] || '';
  const says = /plan says: "(.*)"$/.exec(next.trim())?.[1] || '';
  return [{ found: line.replace(/^\s*✖\s*/, ''), says }];
});

/* The demo's own last line names the exit code of each folder. */
const exitLine = lines.find((l) => l.startsWith('Exit codes:')) || '';
export const FAILING_EXIT = /failing=(\d)/.exec(exitLine)?.[1] || '';
export const PASSING_EXIT = /passing=(\d)/.exec(exitLine)?.[1] || '';
