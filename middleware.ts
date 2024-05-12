import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {}

export const config = {
	// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
	matcher: ["/((?!api|_next/static|_next/image|.*\\.gif$).*)"],
};
