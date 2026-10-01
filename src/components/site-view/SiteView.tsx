'use client';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { PRODUCT } from '@/lib/product';
import './site-view.css';
type View = 'console' | 'simple';
const Context = createContext<{gateId: string; setGateId: (id:string) => void; view: View; choose: (v: View) => void; open: () => void} | null>(null);
export const useSiteView = () => useContext(Context)!;
export function ViewControls() { const mode = useSiteView(); return <div className="sv-controls" aria-label="Site view"><span>View</span>{(['console','simple'] as const).map(v => <button key={v} aria-pressed={mode.view === v} onClick={() => mode.choose(v)}>{v === 'console' ? 'Console' : 'Simple'}</button>)}<button onClick={mode.open}>Start here</button></div>; }
export function Disclosure({title, children}: {title: string; children: ReactNode}) {
 const [open,setOpen] = useState(false); const id = useRef(''); const [readyId,setId] = useState('');
 useEffect(() => { id.current = `detail-${crypto.randomUUID()}`; setId(id.current); }, []);
 return <div className="sv-detail"><button aria-expanded={open} aria-controls={readyId || undefined} onClick={() => setOpen(!open)}>{title}<span>{open ? '-' : '+'}</span></button><div className="sv-reveal" data-open={open} inert={!open} id={readyId || undefined}><div><div className="sv-answer">{children}</div></div></div></div>;
}
export default function SiteView({children}: {children: ReactNode}) {
 const [gateId,setGateId] = useState('check');
 const [view,setView] = useState<View>('console'); const path = usePathname(); const dialog = useRef<HTMLDialogElement>(null); const previous = useRef<HTMLElement | null>(null); const timer = useRef<ReturnType<typeof setTimeout> | null>(null); const [visible,setVisible] = useState(false); const [off,setOff] = useState(false);
 function choose(v: View) { setView(v); try {localStorage.setItem('deferless:view',v);} catch {} const url = new URL(location.href); if(url.searchParams.has('view')) {url.searchParams.set('view',v); history.replaceState(history.state,'',url.href);} }
 function open() { if(timer.current) clearTimeout(timer.current); if(!dialog.current?.open) {previous.current = document.activeElement as HTMLElement; dialog.current?.showModal();} requestAnimationFrame(() => setVisible(true)); }
 function close() {setVisible(false); if(timer.current) clearTimeout(timer.current); timer.current = setTimeout(() => {dialog.current?.close(); if(previous.current?.isConnected && previous.current !== document.body) previous.current.focus(); else document.querySelector<HTMLElement>('.mast-id')?.focus();}, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220); }
 useEffect(() => {const explicit = new URLSearchParams(location.search).get('view'); if(explicit === 'simple' || explicit === 'console') choose(explicit); else {try {setView(localStorage.getItem('deferless:view') === 'simple' ? 'simple' : 'console');} catch {}} let disabled = false; try {disabled = localStorage.getItem('deferless:welcome-off') === '1';} catch {} setOff(disabled); if(path === '/' && !disabled && new URLSearchParams(location.search).get('welcome') !== '0') open(); return () => {if(timer.current) clearTimeout(timer.current);};},[path]);
 return <Context.Provider value={{view,choose,open,gateId,setGateId}}><div className="sv-surface" data-view={view}>{children}</div><dialog ref={dialog} className="sv-welcome" data-visible={visible} aria-labelledby="sv-title" onCancel={e => {e.preventDefault();close();}} onClick={e => {if(e.target === dialog.current) close();}} onKeyDown={e => {if(e.key !== 'Tab') return; const controls = [...e.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled),input:not(:disabled),a[href]')];const first=controls[0],last=controls[controls.length-1];if(e.shiftKey && document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first?.focus();}}}>
 <header><span>{PRODUCT.name} / START HERE</span><button autoFocus aria-label="Close welcome" onClick={close}>×</button></header>
 <section><h2 id="sv-title">Did your AI agent build what you agreed?</h2><p>Deferless checks finished work against rules you write. A broken rule stops the work from shipping instead of becoming a note to fix later.</p></section>
 <section className="sv-example"><small>ILLUSTRATION · PLAN CHECK</small><p>Approved plan: ship three endpoint pages.</p><strong>Only two pages found → blocked.</strong><p>The failure points back to the sentence in your plan.</p></section>
 <section><h3>How would you like to explore?</h3><p>You can switch anytime.</p><div className="sv-choices">{(['console','simple'] as const).map(v => <button key={v} onClick={() => {choose(v);close();}}><b>{v === 'console' ? 'Console' : 'Simple'}</b><strong>{v === 'console' ? 'See more at once.' : 'Start with the essentials.'}</strong><span>{v === 'console' ? 'Compact data and controls.' : 'Roomier explanations, with details to open.'}</span></button>)}</div></section>
 <label className="sv-off"><input type="checkbox" checked={off} onChange={e => {setOff(e.target.checked);try {localStorage.setItem('deferless:welcome-off',e.target.checked ? '1' : '0');} catch {}}}/>Don’t open this when I come back</label>
 </dialog></Context.Provider>;
}
