'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Welcome from './Welcome';
import './simple.css';

/* THE VIEW AUTHORITY. Console is the default for a clean visitor. A valid ?view= wins over the
 * saved choice, and a valid explicit choice is saved. Every storage access is wrapped, because a
 * private window can throw on read.
 *
 * NEVER CROSS OVER. A page is either fully Console or a true Simple page. The saved choice is
 * only `preferred`; the `view` every consumer reads is the EFFECTIVE view, which is 'simple' only
 * while a mounted PageViews has registered a simple composition. A route with no simple
 * composition renders Console, with Console chrome and data-view="console", and the saved choice
 * stays 'simple' for the next route that has one. Registration is counted and undone by effect
 * cleanup, never reset on pathname here: child effects run before parent effects, so a reset in
 * this provider would wipe the registration the page just made. */
export type SiteView = 'console' | 'simple';
type Mode = {
  view: SiteView;
  preferred: SiteView;
  hasSimple: boolean;
  choose: (view: SiteView) => void;
  welcome: () => void;
  registerSimple: () => () => void;
};

const Context = createContext<Mode | null>(null);
export function useSiteView() {
  return useContext(Context);
}

const VIEW_KEY = 'deferless:view';

export default function SiteViewProvider({ children }: { children: ReactNode }) {
  const [preferred, setPreferred] = useState<SiteView>('console');
  const [simpleCount, setSimpleCount] = useState(0);
  const path = usePathname();

  const registerSimple = useCallback(() => {
    setSimpleCount((c) => c + 1);
    return () => setSimpleCount((c) => c - 1);
  }, []);

  const choose = useCallback((next: SiteView) => {
    setPreferred(next);
    try { localStorage.setItem(VIEW_KEY, next); } catch {}
    const url = new URL(window.location.href);
    if (url.searchParams.has('view')) {
      url.searchParams.set('view', next);
      window.history.replaceState(window.history.state, '', url.href);
    }
  }, []);

  useEffect(() => {
    const explicit = new URLSearchParams(window.location.search).get('view');
    if (explicit === 'simple' || explicit === 'console') {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- the ?view= choice is only readable after hydration
      choose(explicit);
      return;
    }
    let saved: string | null = null;
    try { saved = localStorage.getItem(VIEW_KEY); } catch {}
    setPreferred(saved === 'simple' ? 'simple' : 'console');
  }, [path, choose]);

  const welcome = useCallback(() => window.dispatchEvent(new Event('deferless:welcome')), []);

  const hasSimple = simpleCount > 0;
  const view: SiteView = preferred === 'simple' && hasSimple ? 'simple' : 'console';

  return (
    <Context.Provider value={{ view, preferred, hasSimple, choose, welcome, registerSimple }}>
      <div className="sv-surface" data-view={view}>{children}</div>
      <Welcome />
    </Context.Provider>
  );
}
