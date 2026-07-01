import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
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
  matcher: ["/blog/:path*"],
};
