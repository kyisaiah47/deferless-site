/* A FIGURE THAT MOVES TO ITS NEW VALUE RATHER THAN SNAPPING TO IT.
 *
 * Used only where the figure genuinely changes under a control the reader pressed. Pressing a
 * gate replaces every count on this page at once, and a count that jumps gives the reader no
 * way to see which ones moved. A figure that never changes is written as plain text, because
 * animating a constant is decoration.
 *
 * The timings are this app's own: --in 140ms for the opacity and --out 240ms for the digits,
 * the same two the register declares for a control answering a press. NumberFlow reads
 * prefers-reduced-motion itself and jumps when it is set. */
export function Count({ value }: { value: number }) {
  return <span>{value.toLocaleString('en-US')}</span>;
}
