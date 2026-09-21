"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    /* Lenis cancels every wheel it handles, so without this no nested overflow:auto box
     * (a code fence, a table) can scroll. It re-measures the node under the pointer and
     * yields only when that node can actually scroll on its own. */
    const lenis = new Lenis({ allowNestedScroll: true, autoRaf: true, lerp: 0.35, anchors: false });
    return () => lenis.destroy();
  }, []);
  return <>{children}</>;
}
