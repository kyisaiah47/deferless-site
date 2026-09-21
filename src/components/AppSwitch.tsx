'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

/* THE APP SWITCH, beside the mark. It opens the app strip (AppStrip.tsx), the row inside this
 * header that lists the other apps in this app's Compound Labs family. It sets `data-apps` on
 * the header and the CSS opens the row, so the strip is one grid-template-rows transition
 * rather than a popover this app would have to position against a scrolling page. Escape or a
 * press outside the header closes it.
 *
 * The glyph is Phosphor Regular caret-up-down, vendored into vendor/phosphor by
 * scripts/icons.mjs like every other glyph this app draws. */
export default function AppSwitch() {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const header = btn.current?.closest('header');
    if (!header) return;
    header.setAttribute('data-apps', open ? 'open' : 'shut');
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
    };
    const onDown = (e: MouseEvent) => {
      if (!header.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [open]);

  return (
    <button
      ref={btn}
      type="button"
      className="app-switch"
      aria-expanded={open}
      aria-controls="app-strip"
      aria-label="Compound Labs apps"
      onClick={() => setOpen((v) => !v)}
    >
      <Icon name="caret-up-down" className="" />
    </button>
  );
}
