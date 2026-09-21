'use client';

import { Count } from './Count';

export type FolioCell = {
  /* The words. A phrase rather than a caption: "check kinds it runs", never "CHECK KINDS". */
  k: string;
  /* A count. Given as a number it moves to its new value when the control changes it. */
  n?: number;
  /* A fact that is not a count: a version, a word, a date. Written as text, because animating
   * something that cannot change is decoration. */
  v?: string;
  ink?: 'pass' | 'fail' | 'caution';
};

/* THE FOLIO. What this page is holding, counted, on one line directly under the masthead.
 *
 * EVERY CELL IS A FIGURE INSIDE ITS OWN SENTENCE, AT ONE SIZE. The figure and its words are set
 * at the same size in the same face, divided from the next cell by a hairline. It is never a
 * figure stacked over a small tracked all caps label: that shape is banned estate wide, and the
 * size jump is the whole of what makes it wrong, so the two halves here are deliberately the
 * same size and scripts/check-register.mjs asserts it. */
export function Folio({ cells }: { cells: FolioCell[] }) {
  return (
    <div className="strip folio" role="region" tabIndex={0} aria-label="What this page holds">
      <div className="in">
        {cells.map((c) => (
          <span className="folio-cell" key={c.k} data-ink={c.ink}>
            <b>{typeof c.n === 'number' ? <Count value={c.n} /> : c.v}</b> {c.k}
          </span>
        ))}
      </div>
    </div>
  );
}
