'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/* SMOOTH SCROLL, at the lerp the rest of the estate runs.
 *
 * ⛔ `allowNestedScroll: true` IS NOT OPTIONAL. Lenis cancels every wheel event it handles, so
 * without it no nested `overflow: auto` box on the page can scroll at all. This page is mostly
 * nested scrollers: the captured terminal block and every code fence scroll inside themselves,
 * because a gate's output is column aligned and wrapping it destroys the alignment that makes
 * it readable. With the flag, Lenis re-measures the node under the pointer and yields when that
 * node can really scroll in the direction asked.
 *
 * ⛔ AND IT RETURNS BEFORE MOUNTING UNDER prefers-reduced-motion. Smooth scroll is motion the
 * reader did not ask for, and a lerp of 0.35 is exactly the kind a vestibular reader reports.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ allowNestedScroll: true, lerp: 0.35 });
    let frame = 0;
    const raf = (t: number) => {
      lenis.raf(t);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
  return null;
}
