
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Public routes - sab ko dikhein
  const publicRoutes = ["/", "/about", "/menu", "/gallery", "/contact", "/booking", "/reviews"];
  
  // Agar public route hai toh allow karein
  if (publicRoutes.includes(path) || path.startsWith("/api")) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
