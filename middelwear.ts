import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/app/auth"; // ✅ use named import

const protectedRoutes = ["/userinfo"];

export default async function middleware(request: NextRequest) {
  // Get the session for the incoming request
  const session = await auth({ request }); // ✅ pass the request to auth()

  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // If user is not signed in and route is protected, redirect to signin
  if (isProtected && !session?.user) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  return NextResponse.next();
}
