'use client';

import { useEffect, type ReactNode } from 'react';
import { useSiteView } from './SiteViewProvider';

/* One page, two compositions. Only the active one is mounted, so there is one header, one main
 * and one footer in the document at a time. A page that passes a simpleView registers it with
 * the provider while mounted; a page without one stays Console whatever the saved choice is. */
export default function PageViews({ consoleView, simpleView }: { consoleView: ReactNode; simpleView?: ReactNode }) {
  const ctx = useSiteView();
  const register = ctx?.registerSimple;
  const hasSimpleProp = simpleView !== undefined;
  useEffect(() => (hasSimpleProp && register ? register() : undefined), [register, hasSimpleProp]);
  return <>{ctx?.view === 'simple' && hasSimpleProp ? simpleView : consoleView}</>;
}
