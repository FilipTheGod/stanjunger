import { NextResponse, type NextRequest } from "next/server"

// The send pages and APIs can email anyone from hello@stanjunger.wedding,
// so they must never be open to the public.
// - Local dev (`npm run dev`): open, no password needed.
// - Production: requires a password via ADMIN_PASSWORD (set in Vercel env vars).
//   If ADMIN_PASSWORD isn't set, they're hidden entirely (404).
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === "development") return NextResponse.next()

  const password = process.env.ADMIN_PASSWORD
  if (!password) return new NextResponse("Not found", { status: 404 })

  const auth = request.headers.get("authorization")
  if (auth?.startsWith("Basic ")) {
    const decoded = atob(auth.slice(6))
    const pass = decoded.slice(decoded.indexOf(":") + 1)
    if (pass === password) return NextResponse.next()
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="admin"' },
  })
}

export const config = {
  matcher: ["/send-test", "/send-bulk", "/api/send-invitation", "/api/send-bulk-invitations"],
}
