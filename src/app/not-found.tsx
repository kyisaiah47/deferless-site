import Link from 'next/link';
import { Rule, Masthead, Footer } from '@/components/Shell';
import PageViews from '@/components/site-view/PageViews';
import { SimpleNotFound } from '@/components/site-view/SimplePages';
import { READ_ON } from '@/lib/product';

/* THE 404, in both views. Console keeps its own chrome and points at the three destinations;
 * Simple gets the same links in its own chrome. */
export default function NotFound() {
  return (
    <PageViews
      simpleView={<SimpleNotFound />}
      consoleView={
        <>
          <Rule />
          <Masthead here="" />
          <div className="strip head">
            <div className="in">
              <div>
                <h1>This page does not exist.</h1>
                <p className="lede">
                  Go to <Link href="/">the gates</Link>, <Link href="/kinds">every clause</Link> or{' '}
                  <Link href="/method">the method</Link>.
                </p>
              </div>
            </div>
          </div>
          <Footer readAt={READ_ON} />
        </>
      }
    />
  );
}
