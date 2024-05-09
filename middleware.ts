import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	if (!request.nextUrl.pathname) {
		return Response.redirect(new URL("/cat-facts", request.url));
	}
}

export const config = {
	// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
	matcher: ["/((?!api|_next/static|_next/image|.*\\.gif$).*)"],
};
