import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "rubabsdigital.com";
const WWW_HOST = "www.rubabsdigital.com";

function redirectWwwToApex(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  if (host !== WWW_HOST) return null;

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = APEX_HOST;
  url.port = "";
  return NextResponse.redirect(url, 301);
}

export function middleware(request: NextRequest) {
  const hostRedirect = redirectWwwToApex(request);
  if (hostRedirect) return hostRedirect;

  const { pathname } = request.nextUrl;

  // Handle blog slugs containing dots (e.g. "no-code-automation-with-make.com-for-small-business")
  // Next.js treats dots as file extensions, so we rewrite these to the correct route
  if (pathname.startsWith("/blog/") && !pathname.startsWith("/blog/category/")) {
    const slug = pathname.replace("/blog/", "");
    // If the slug contains a dot but is not a real static file request
    if (slug.includes(".") && !slug.match(/\.(xml|json|txt|ico|png|jpg|jpeg|gif|webp|css|js|map)$/i)) {
      const url = request.nextUrl.clone();
      url.pathname = `/blog/${slug}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
