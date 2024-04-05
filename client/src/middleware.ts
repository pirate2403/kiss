import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "@/businessLogic/constants/routes";
import { TOKEN_TYPE } from "@/businessLogic/constants/token";

function isAuthRoute(url: string): boolean {
  return url.includes(ROUTES.login) || url.includes(ROUTES.register);
}

export function middleware(request: NextRequest): NextResponse {
  const { url, cookies } = request;

  const hasToken = !!cookies.get(TOKEN_TYPE.refresh);
  const isAuthPage = isAuthRoute(url);

  if (!isAuthPage && !hasToken) {
    return NextResponse.redirect(new URL(ROUTES.login, url));
  }

  if (isAuthPage && hasToken) {
    return NextResponse.redirect(new URL(ROUTES.dashboard, url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|kiss.svg).*)"],
};
