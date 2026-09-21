import { GLYPH } from '@/lib/phosphor';

/** A Phosphor Regular glyph, vendored at build time by scripts/icons.mjs and drawn in
 *  currentColor so it takes the ink of whatever sits beside it. No icon font, no runtime CDN. */
export function Icon({ name, className = 'ico' }: { name: string; className?: string }) {
  const body = GLYPH[name];
  if (!body) return null;
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
