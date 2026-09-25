import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'deferless.thecompound.tech';
const LEGACY_HOST = 'deferless.kynth.studio';

/** Keep every bookmarked legacy path reachable while the estate moves hosts. */
export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname === LEGACY_HOST) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: '/:path*' };
