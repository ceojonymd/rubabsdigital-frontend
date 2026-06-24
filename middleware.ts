import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "rd_admin_session";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/enquiries") || pathname.startsWith("/api/enquiries")) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token) {
      const url = new URL("/admin-login", request.url);
      url.searchParams.set("next", pathname);
      const res = NextResponse.redirect(url);
      res.headers.set("x-middleware-cache", "no-cache");
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/enquiries/:path*", "/api/enquiries/:path*"],
};
