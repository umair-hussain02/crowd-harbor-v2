import { NextResponse, type NextRequest } from "next/server"

// Set COMING_SOON=true to show the pre-launch page instead of the site.
// Remove it (or set it to anything else) and redeploy to go live.
const allowedPrefixes = [
  "/coming-soon",
  "/api/send-email",
  "/privacy-policy",
  "/terms-condition",
  // keep the admin area reachable for the team
  "/admin",
  "/api/auth",
  "/api/admin",
]

export function middleware(request: NextRequest) {
  if (process.env.COMING_SOON !== "true") return NextResponse.next()

  const { pathname } = request.nextUrl
  if (allowedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return NextResponse.next()
  }

  // Rewrite (URL stays the same). 503 + Retry-After tells search engines this is temporary.
  const response = NextResponse.rewrite(new URL("/coming-soon", request.url), { status: 503 })
  response.headers.set("Retry-After", "86400")
  return response
}

export const config = {
  // Skip Next.js internals and files in /public (anything with an extension)
  matcher: ["/((?!_next/|.*\\..*).*)"],
}
